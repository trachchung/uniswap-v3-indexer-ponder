export type PairInfos = PairInfo[];

interface PairInfo {
  _id: Id;
  pair: Pair;
  token: Token;
  price: number;
  price24h: number;
  volume24h: number;
  swaps24h: number;
}

interface Id {
  chain: string;
  exchange: string;
  pair: string;
  token: string;
  tokenRef: string;
}

interface Pair {
  creationBlock: number;
  creationTime: string;
  creationTransaction: string;
  dextScore: DextScore;
  fee: number;
  metrics: Metrics;
  name: string;
  nameRef: string;
  symbol: string;
  symbolRef: string;
  type: string;
  locks: any[];
  pool: Pool;
  firstSwapTimestamp: string;
  periodStats: PeriodStats;
  rugPull?: RugPull;
}

interface DextScore {
  information: number;
  holders: number;
  pool: number;
  transactions: number;
  creation: number;
  total: number;
}

interface Metrics {
  liquidity: number;
  txCount: number;
  initialLiquidity: number;
  initialLiquidityUpdatedAt: string;
  initialReserve: number;
  initialReserveRef: number;
  reserve: number;
  reserveRef: number;
}

interface Pool {
  openPrice: OpenPrice;
}

interface OpenPrice {
  usd: number;
  eth: number;
  blockNumber: number;
}

interface PeriodStats {
  "5m": N5m;
  "1h": N1h;
  "6h": N6h;
  "24h": N24h;
}

interface N5m {
  volume: Volume;
  swaps: Swaps;
  price: Price;
  liquidity: Liquidity;
  makers: number;
  updatedAt: string;
  volatility: number;
}

interface Volume {
  total: number;
  buys: number;
  sells: number;
}

interface Swaps {
  total: number;
  buys: number;
  sells: number;
}

interface Price {
  usd: Usd;
  chain: Chain;
}

interface Usd {
  first: number;
  last: number;
  min: number;
  max: number;
  diff: number;
}

interface Chain {
  first: number;
  last: number;
  min: number;
  max: number;
  diff: number;
}

interface Liquidity {
  usd: Usd2;
}

interface Usd2 {
  first: number;
  last: number;
  min: number;
  max: number;
  diff: number;
}

interface N1h {
  volume: Volume2;
  swaps: Swaps2;
  price: Price2;
  liquidity: Liquidity2;
  makers: number;
  updatedAt: string;
  volatility: number;
}

interface Volume2 {
  total: number;
  buys: number;
  sells: number;
}

interface Swaps2 {
  total: number;
  buys: number;
  sells: number;
}

interface Price2 {
  usd: Usd3;
  chain: Chain2;
}

interface Usd3 {
  first: number;
  last: number;
  min: number;
  max: number;
  diff: number;
}

interface Chain2 {
  first: number;
  last: number;
  min: number;
  max: number;
  diff: number;
}

interface Liquidity2 {
  usd: Usd4;
}

interface Usd4 {
  first: number;
  last: number;
  min: number;
  max: number;
  diff: number;
}

interface N6h {
  volume: Volume3;
  swaps: Swaps3;
  price: Price3;
  liquidity: Liquidity3;
  volatility: number;
  makers: number;
  updatedAt: string;
}

interface Volume3 {
  total: number;
  buys: number;
  sells: number;
}

interface Swaps3 {
  total: number;
  buys: number;
  sells: number;
}

interface Price3 {
  usd: Usd5;
  chain: Chain3;
}

interface Usd5 {
  first: number;
  last: number;
  min: number;
  max: number;
  diff: number;
}

interface Chain3 {
  first: number;
  last: number;
  min: number;
  max: number;
  diff: number;
}

interface Liquidity3 {
  usd: Usd6;
}

interface Usd6 {
  first: number;
  last: number;
  min: number;
  max: number;
  diff: number;
}

interface N24h {
  volume: Volume4;
  swaps: Swaps4;
  price: Price4;
  liquidity: Liquidity4;
  volatility: number;
  makers: number;
  updatedAt: string;
}

interface Volume4 {
  total: number;
  buys: number;
  sells: number;
}

interface Swaps4 {
  total: number;
  buys: number;
  sells: number;
}

interface Price4 {
  usd: Usd7;
  chain: Chain4;
}

interface Usd7 {
  first: number;
  last: number;
  min: number;
  max: number;
  diff: number;
}

interface Chain4 {
  first: number;
  last: number;
  min: number;
  max: number;
  diff: number;
}

interface Liquidity4 {
  usd: Usd8;
}

interface Usd8 {
  first: number;
  last: number;
  min: number;
  max: number;
  diff: number;
}

interface RugPull {
  liquidityRemoved: boolean;
  priceDrop: boolean;
}

interface Token {
  audit: Audit;
  decimals: number;
  locks: any[];
  name: string;
  symbol: string;
  totalSupply: string;
  metrics: Metrics2;
  banner: string;
  categories: any[];
  info: Info;
  links: Links;
  logo: string;
  reprPair: ReprPair;
  rugPulledAt: string[];
  logoOnchain?: string;
}

interface Audit {
  is_contract_renounced: boolean;
  url: string;
}

interface Metrics2 {
  circulatingSupply?: number;
  maxSupply: number;
  totalSupply: number;
  holders: number;
  mcap?: number;
  fdv: number;
}

interface Info {
  blueCheckmark: any;
  cmc: string;
  coingecko: string;
  description: string;
  dextools: boolean;
  dextoolsUpdatedAt: any;
  email: string;
  extraInfo: string;
  nftCollection: string;
  twitterStats: TwitterStats;
  ventures: boolean;
}

interface TwitterStats {
  followers: string;
  history: string;
}

interface Links {
  bitbucket: string;
  discord: string;
  facebook: string;
  github: string;
  instagram: string;
  linkedin: string;
  medium: string;
  reddit: string;
  slack: string;
  telegram: string;
  tiktok: string;
  twitter: string;
  website: string;
  youtube: string;
  twitterPost?: string;
}

interface ReprPair {
  id: Id2;
  updatedAt: string;
}

interface Id2 {
  chain: string;
  exchange: string;
  pair: string;
  token: string;
  tokenRef: string;
}
