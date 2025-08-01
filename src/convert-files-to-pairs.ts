import { readFileSync, writeFileSync } from "fs";
import { PairInfos } from "./interface";
import { fetchExtraData, getToken01, getTokenInfo } from "./utils";
import { Address } from "viem";
import { EProtocol } from "./const";

async function main() {
  const CURRENT_DIR = process.cwd();

  const protocols = [
    EProtocol.HyperswapV2,
    EProtocol.HyperswapV3,
    EProtocol.HybraFinance,
  ];

  // Process pairs for each protocol
  for (const protocol of protocols) {
    const outputLines: string[] = [];

    // Read pairs from file
    const pairs = JSON.parse(
      readFileSync(`${CURRENT_DIR}/src/files/pairs-${protocol}.json`, "utf8")
    ) as PairInfos;

    console.log(`Processing ${protocol} pairs`);

    // Process each pair
    for (const pair of pairs) {
      const pairAddress = pair._id.pair as Address;
      const { token0: token0Address, token1: token1Address } = await getToken01(
        pairAddress
      );

      // Get token information
      const [token0Info, token1Info] = await Promise.all([
        getTokenInfo(token0Address),
        getTokenInfo(token1Address),
      ]);

      // Create the formatted line
      const token0Formatted = {
        address: token0Address,
        name: token0Info.name || "",
        symbol: token0Info.symbol || "",
        decimals: token0Info.decimals || 18,
      };

      const token1Formatted = {
        address: token1Address,
        name: token1Info.name || "",
        symbol: token1Info.symbol || "",
        decimals: token1Info.decimals || 18,
      };

      const tokensArray = JSON.stringify([token0Formatted, token1Formatted]);

      // Extra data
      const extraData = await fetchExtraData(protocol, pairAddress);

      // hybrafinance|0xB7e650F67425e6F0DC14AEE1D11e5A365ddD94B0|hybrafinance-lhype-whype|[{"address":"0x5555555555555555555555555555555555555555", "name":"", "symbol":"", "decimals":18},{"address":"0x5748ae796AE46A4F1348a1693de4b50560485562", "name":"", "symbol":"", "decimals":18}]|{"hybrafinance":{"fee":200}}
      const formattedLine = `${protocol.toLowerCase()}|${pairAddress}|${
        token0Info.symbol || ""
      }-${token1Info.symbol || ""}|${tokensArray}|${JSON.stringify(extraData)}`;

      outputLines.push(formattedLine);
      console.log(formattedLine);
    }
    // Write to file
    const outputPath = `${CURRENT_DIR}/src/outputs/${protocol}-pools.txt`;
    writeFileSync(outputPath, outputLines.join("\n"), "utf8");
    console.log(`\nOutput written to: ${outputPath}`);
  }
}

main()
  .then(() => {
    console.log("Done");
  })
  .catch(console.error);
