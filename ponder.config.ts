import { createConfig, factory, loadBalance, rateLimit } from "ponder";
import { UniswapV3FactoryAbi } from "./abis/UniswapV3FactoryAbi";
import { EProtocol, ProtocolMap } from "./src/const";
import { UniswapV2FactoryAbi } from "./abis/UniswapV2FactoryAbi";
import { http } from "viem";

export default createConfig({
  chains: {
    hyperevm: {
      id: 999,
      rpc: loadBalance([
        rateLimit(http("https://rpc.purroofgroup.com"), {
          requestsPerSecond: 0.1,
        }),
        rateLimit(http("https://rpc.hyperliquid.xyz/evm"), {
          requestsPerSecond: 0.1,
        }),
        rateLimit(http("https://rpc.hyperlend.finance"), {
          requestsPerSecond: 0.1,
        }),
        rateLimit(http("https://rpc.hypurrscan.io"), {
          requestsPerSecond: 0.1,
        }),
        rateLimit(http("https://hyperliquid.drpc.org"), {
          requestsPerSecond: 0.1,
        }),
        rateLimit(http("https://hyperliquid-json-rpc.stakely.io"), {
          requestsPerSecond: 0.1,
        }),
      ]),
    },
  },
  database: {
    kind: "postgres",
    connectionString: "postgresql://postgres:postgres@localhost:5432/postgres",
  },
  contracts: {
    HyperswapV2Factory: {
      abi: UniswapV2FactoryAbi,
      chain: {
        hyperevm: {
          address: ProtocolMap[EProtocol.HyperswapV2].factory_address,
          startBlock: ProtocolMap[EProtocol.HyperswapV2].factory_deploy_block,
        },
      },
    },
    HyperswapV3Factory: {
      abi: UniswapV3FactoryAbi,
      chain: {
        hyperevm: {
          address: ProtocolMap[EProtocol.HyperswapV3].factory_address,
          startBlock: ProtocolMap[EProtocol.HyperswapV3].factory_deploy_block,
        },
      },
    },
    HybraFinanceFactory: {
      abi: UniswapV3FactoryAbi,
      chain: {
        hyperevm: {
          address: ProtocolMap[EProtocol.HyperswapV3].factory_address,
          startBlock: ProtocolMap[EProtocol.HyperswapV3].factory_deploy_block,
        },
      },
    },
  },
});
