import { ponder, type Context, type Event } from "ponder:registry";
import schema from "ponder:schema";
import { EProtocol } from "./const";
import { getTokenInfo } from "./utils";

ponder.on("HyperswapV2Factory:PairCreated", async ({ event, context }) => {
  console.log("HyperswapV2Factory:PairCreated");

  const [token0, token1, pair, _] = event.args;

  const {
    name: token0Name,
    symbol: token0Symbol,
    decimals: token0Decimals,
  } = await getTokenInfo(token0);
  const {
    name: token1Name,
    symbol: token1Symbol,
    decimals: token1Decimals,
  } = await getTokenInfo(token1);

  await context.db.insert(schema.pool).values({
    chainId: context.chain.id,
    protocol: EProtocol.HyperswapV2,
    poolAddress: pair,
    poolName: `${token0Name}-${token1Name}`,
    token0: token0,
    token1: token1,
    token0Name: token0Name,
    token0Symbol: token0Symbol,
    token0Decimals: token0Decimals,
    token1Name: token1Name,
    token1Symbol: token1Symbol,
    token1Decimals: token1Decimals,
    extraData: {},
  });
  console.log("Row Inserted");
});

ponder.on("HyperswapV3Factory:PoolCreated", async ({ event, context }) => {
  console.log("HyperswapV3Factory:PoolCreated");

  const { token0, token1, fee, tickSpacing, pool } = event.args;

  const {
    name: token0Name,
    symbol: token0Symbol,
    decimals: token0Decimals,
  } = await getTokenInfo(token0);
  const {
    name: token1Name,
    symbol: token1Symbol,
    decimals: token1Decimals,
  } = await getTokenInfo(token1);

  await context.db.insert(schema.pool).values({
    chainId: context.chain.id,
    protocol: EProtocol.HyperswapV3,
    poolAddress: pool,
    poolName: `${token0Name}-${token1Name}`,
    token0: token0,
    token1: token1,
    token0Name: token0Name,
    token0Symbol: token0Symbol,
    token0Decimals: token0Decimals,
    token1Name: token1Name,
    token1Symbol: token1Symbol,
    token1Decimals: token1Decimals,
    extraData: {
      fee,
    },
  });
  console.log("Row Inserted");
});

ponder.on("HybraFinanceFactory:PoolCreated", async ({ event, context }) => {
  console.log("HybraFinanceFactory:PoolCreated");

  const { token0, token1, fee, tickSpacing, pool } = event.args;

  const {
    name: token0Name,
    symbol: token0Symbol,
    decimals: token0Decimals,
  } = await getTokenInfo(token0);

  const {
    name: token1Name,
    symbol: token1Symbol,
    decimals: token1Decimals,
  } = await getTokenInfo(token1);

  await context.db.insert(schema.pool).values({
    chainId: context.chain.id,
    protocol: EProtocol.HybraFinance,
    poolAddress: pool,
    poolName: `${token0Name}-${token1Name}`,
    token0: token0,
    token1: token1,
    token0Name: token0Name,
    token0Symbol: token0Symbol,
    token0Decimals: token0Decimals,
    token1Name: token1Name,
    token1Symbol: token1Symbol,
    token1Decimals: token1Decimals,
    extraData: {
      fee,
    },
  });

  console.log("Row Inserted");
});
