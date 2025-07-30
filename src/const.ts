import { Address } from "viem";

export enum EProtocol {
  HyperswapV2 = "hyperswapv2",
  HyperswapV3 = "hyperswapv3",
  HybraFinance = "hybrafinance",
}

export const ProtocolMap = {
  [EProtocol.HyperswapV2]: {
    // https://docs.hyperswap.exchange/hyperswap/contracts/or-hyper-evm/v2
    factory_address: "0x724412C00059bf7d6ee7d4a1d0D5cd4de3ea1C48" as Address,
    factory_deploy_block: 10935,
    pool_created_event: "PairCreated",
  },
  [EProtocol.HyperswapV3]: {
    factory_address: "0xB1c0fa0B789320044A6F623cFe5eBda9562602E3" as Address,
    factory_deploy_block: 11648,
    pool_created_event: "PoolCreated",
  },
  [EProtocol.HybraFinance]: {
    // CLFactory address https://hybra-foundation.gitbook.io/hybra-foundation/security/contracts
    factory_address: "0x2dc0ec0f0db8baf250ecccf268d7dfbf59346e5e" as Address,
    factory_deploy_block: 6523521,
    pool_created_event: "PoolCreated",
  },
};
