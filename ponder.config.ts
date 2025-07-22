import { createConfig, factory } from "ponder";
import { getAbiItem } from "viem";
import { UniswapV3FactoryAbi } from "./abis/UniswapV3FactoryAbi";
import { UniswapV3PoolAbi } from "./abis/UniswapV3PoolAbi";

const factoryEventAbiItem = getAbiItem({
  abi: UniswapV3FactoryAbi,
  name: "PoolCreated",
});

export default createConfig({
  chains: {
    hyperevm: {
      id: 999,
      rpc: "https://rpc.purroofgroup.com",
    },
  },
  database: {
    kind: "postgres",
    connectionString: "postgresql://postgres:postgres@localhost:5432/postgres",
  },
  contracts: {
    UniswapV3Pool: {
      abi: UniswapV3PoolAbi,
      chain: {
        hyperevm: {
          address: factory({
            address: "0xB1c0fa0B789320044A6F623cFe5eBda9562602E3",
            event: factoryEventAbiItem,
            parameter: "pool",
            startBlock: 11648,
          }),
          startBlock: "latest",
        },
      },
    },
    UniswapV3Factory: {
      abi: UniswapV3FactoryAbi,
      chain: {
        hyperevm: {
          address: "0xB1c0fa0B789320044A6F623cFe5eBda9562602E3",
          startBlock: 11648,
        },
      },
    },
  },
});
