import { Address } from "viem";

export enum EProtocol {
  HyperswapV2 = "hyperswapv2",
  HyperswapV3 = "hyperswapv3",
  HybraFinance = "hybrafinance",
  ProjectX = "projectx",
  RamsesV2 = "ramsesv2",
  RamsesV3 = "ramsesv3",
  Gliquid = "gliquid",
  HyperBrick = "hyperbrick",
  LaminarV2 = "laminarv2",
  LaminarV3 = "laminarv3",
  HyperCat = "hypercat",
}

export const ProtocolMap = {
  // UniswapV2 Fork
  [EProtocol.HyperswapV2]: {
    // https://docs.hyperswap.exchange/hyperswap/contracts/or-hyper-evm/v2
    factory_address: "0x724412C00059bf7d6ee7d4a1d0D5cd4de3ea1C48" as Address,
    factory_deploy_block: 10935,
    pool_created_event: "PairCreated",
  },
  // UniswapV3 Fork
  [EProtocol.HyperswapV3]: {
    factory_address: "0xB1c0fa0B789320044A6F623cFe5eBda9562602E3" as Address,
    factory_deploy_block: 11648,
    pool_created_event: "PoolCreated",
  },
  // UniswapV3 Fork
  [EProtocol.HybraFinance]: {
    // CLFactory address https://hybra-foundation.gitbook.io/hybra-foundation/security/contracts
    factory_address: "0x2dc0ec0f0db8baf250ecccf268d7dfbf59346e5e" as Address,
    factory_deploy_block: 6523521,
    pool_created_event: "PoolCreated",
  },
  // UniswapV3 Fork
  [EProtocol.ProjectX]: {
    factory_address: "0xFf7B3e8C00e57ea31477c32A5B52a58Eea47b072" as Address,
    factory_deploy_block: 7876741,
    pool_created_event: "PoolCreated",
  },
  // UniswapV2 Fork
  [EProtocol.RamsesV2]: {
    factory_address: "0x83341F891f898cb5E0cacC8a70501BBa83d9CecF" as Address,
    factory_deploy_block: 6947040,
    pool_created_event: "PairCreated",
  },
  // UniswapV3 Fork
  [EProtocol.RamsesV3]: {
    factory_address: "0xA87c8308722237F6442Ef4762B7287afB84fB191" as Address,
    factory_deploy_block: 6947040,
    pool_created_event: "PoolCreated",
  },
  // https://gliquids-organization.gitbook.io/gliquid/technical-details/smart-contracts
  // UniswapV2 Fork (Assumption)
  [EProtocol.Gliquid]: {
    factory_address: "0x10253594A832f967994b44f33411940533302ACb" as Address,
    factory_deploy_block: 4347220,
    pool_created_event: "Pool",
  },
  // https://docs.hyperbrick.xyz/resources/contracts
  // https://www.hyperscan.com/address/0x4A1EFb00B4Ad1751FC870C6125d917C3f1586600?tab=logs
  // TraderJoe Fork
  [EProtocol.HyperBrick]: {
    factory_address: "0x4A1EFb00B4Ad1751FC870C6125d917C3f1586600" as Address,
    factory_deploy_block: 0,
    pool_created_event: "LBPairCreated",
  },
  // UniswapV2 Fork
  // https://docs.laminar.xyz/laminar-v2-amm/contract-deployments
  [EProtocol.LaminarV2]: {
    factory_address: "0x8f45c2143a875de1e31b1c3f523b4c6529e11615" as Address,
    factory_deploy_block: 0,
    pool_created_event: "PairCreated",
  },
  // UniswapV3 Fork
  // https://docs.laminar.xyz/laminar-v3-amm/contract-deployments
  [EProtocol.LaminarV3]: {
    factory_address: "0x40059a6f242c3de0e639693973004921b04d96ad" as Address,
    factory_deploy_block: 0,
    pool_created_event: "PoolCreated",
  },
  // Like Gliquid, UniswapV2 Fork (Assumption)
  // https://docs.hypercat.exchange/contracts
  [EProtocol.HyperCat]: {
    factory_address: "0x1d9DcF8238daf2E078FF639a5Ded6b518BF3E585" as Address,
    factory_deploy_block: 0,
    pool_created_event: "Pool",
  },
};
