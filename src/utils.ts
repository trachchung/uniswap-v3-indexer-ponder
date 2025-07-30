import { Address, createPublicClient, http } from "viem";
import { ERC20Abi } from "../abis/ERC20Abi";

const client = createPublicClient({
  transport: http("http://localhost:3001/evm"),
});

export async function getTokenInfo(tokenAddress: Address) {
  const [name, symbol, decimals] = await Promise.all([
    client.readContract({
      abi: ERC20Abi,
      address: tokenAddress,
      functionName: "name",
    }),
    client.readContract({
      abi: ERC20Abi,
      address: tokenAddress,
      functionName: "symbol",
    }),
    client.readContract({
      abi: ERC20Abi,
      address: tokenAddress,
      functionName: "decimals",
    }),
  ]);

  return { name, symbol, decimals };
}
