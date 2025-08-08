import { Address, createPublicClient, http } from "viem";
import { ERC20Abi } from "../abis/ERC20Abi";
import { UniswapV3PoolAbi } from "../abis/UniswapV3PoolAbi";
import { EProtocol } from "./const";

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

export async function getToken01(pairAddress: Address): Promise<{
  token0: Address;
  token1: Address;
}> {
  const token0 = await client.readContract({
    abi: UniswapV3PoolAbi,
    address: pairAddress,
    functionName: "token0",
  });

  const token1 = await client.readContract({
    abi: UniswapV3PoolAbi,
    address: pairAddress,
    functionName: "token1",
  });

  return { token0, token1 };
}

export async function fetchExtraData(
  protocol: EProtocol,
  pairAddress: Address
) {
  switch (protocol) {
    case EProtocol.HyperswapV2:
      return {};
    case EProtocol.HyperswapV3:
      // {"hyperswapv3":{"fee":100}}
      return {
        [protocol]: {
          fee: await client.readContract({
            abi: UniswapV3PoolAbi,
            address: pairAddress,
            functionName: "fee",
          }),
        },
      };
    case EProtocol.HybraFinance:
      // {"hybrafinance":{"fee":200}}
      return {
        [protocol]: {
          fee: await client.readContract({
            abi: UniswapV3PoolAbi,
            address: pairAddress,
            functionName: "fee",
          }),
        },
      };
    case EProtocol.ProjectX:
      return {
        [protocol]: {
          fee: await client.readContract({
            abi: UniswapV3PoolAbi,
            address: pairAddress,
            functionName: "fee",
          }),
        },
      };
    case EProtocol.RamsesV2:
      return {};
    case EProtocol.RamsesV3:
      return {
        [protocol]: {
          fee: await client.readContract({
            abi: UniswapV3PoolAbi,
            address: pairAddress,
            functionName: "fee",
          }),
          tick_spacing: await client.readContract({
            abi: UniswapV3PoolAbi,
            address: pairAddress,
            functionName: "tickSpacing",
          }),
        },
      };
    case EProtocol.Gliquid:
      throw new Error(`[fetchExtraData]: Unsupported protocol: ${protocol}`);
    case EProtocol.HyperBrick:
      throw new Error(`[fetchExtraData]: Unsupported protocol: ${protocol}`);
    case EProtocol.LaminarV2:
      return {};
    case EProtocol.LaminarV3:
      return {
        [protocol]: {
          fee: await client.readContract({
            abi: UniswapV3PoolAbi,
            address: pairAddress,
            functionName: "fee",
          }),
        },
      };
    case EProtocol.HyperCat:
      throw new Error(`[fetchExtraData]: Unsupported protocol: ${protocol}`);
    default:
      throw new Error(`[fetchExtraData]: Unsupported protocol: ${protocol}`);
  }
}
