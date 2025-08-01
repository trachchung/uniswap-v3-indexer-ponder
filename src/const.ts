import { Address } from "viem";

export enum EProtocol {
  HyperswapV2 = "hyperswapv2",
  HyperswapV3 = "hyperswapv3",
  HybraFinance = "hybrafinance",
  ProjectX = "projectx",
  RamsesV2 = "ramsesv2",
  RamsesV3 = "ramsesv3",
  Gliquid = "gliquid",
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
  [EProtocol.ProjectX]: {
    factory_address: "0xFf7B3e8C00e57ea31477c32A5B52a58Eea47b072" as Address,
    factory_deploy_block: 7876741,
    pool_created_event: "PoolCreated",
  },
  [EProtocol.RamsesV2]: {
    factory_address: "0x83341F891f898cb5E0cacC8a70501BBa83d9CecF" as Address,
    factory_deploy_block: 6947040,
    pool_created_event: "PairCreated",
  },
  [EProtocol.RamsesV3]: {
    factory_address: "0xA87c8308722237F6442Ef4762B7287afB84fB191" as Address,
    factory_deploy_block: 6947040,
    pool_created_event: "PoolCreated",
  },
  // https://gliquids-organization.gitbook.io/gliquid/technical-details/smart-contracts
  [EProtocol.Gliquid]: {
    factory_address: "0x10253594A832f967994b44f33411940533302ACb" as Address,
    factory_deploy_block: 4347220,
    pool_created_event: "Pool",
  },
};
