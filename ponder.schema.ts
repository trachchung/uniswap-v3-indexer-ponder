import { onchainTable, primaryKey, relations } from "ponder";

// export const account = onchainTable("account", (t) => ({
//   address: t.hex().primaryKey(),
// }));

// export const accountRelations = relations(account, ({ many }) => ({
//   swapSenderEvents: many(swapEvent, { relationName: "swap_sender" }),
//   swapRecipientEvents: many(swapEvent, { relationName: "swap_recipient" }),
// }));

export const pool = onchainTable(
  "pool",
  (t) => ({
    chainId: t.integer().notNull(),
    protocol: t.text().notNull(),
    poolAddress: t.hex().notNull(),
    poolName: t.text().notNull(),
    token0: t.hex().notNull(),
    token0Name: t.text().notNull(),
    token0Symbol: t.text().notNull(),
    token0Decimals: t.integer().notNull(),
    token1: t.hex().notNull(),
    token1Name: t.text().notNull(),
    token1Symbol: t.text().notNull(),
    token1Decimals: t.integer().notNull(),
    extraData: t.jsonb().notNull(),
  }),
  (t) => ({
    primaryKey: primaryKey({ columns: [t.chainId, t.poolAddress] }),
  })
);

// export const swapEvent = onchainTable(
//   "swap_event",
//   (t) => ({
//     chainId: t.integer().notNull(),
//     swapId: t.text().notNull(),
//     pool: t.hex().notNull(),
//     sender: t.hex().notNull(),
//     recipient: t.hex().notNull(),
//     amount0: t.bigint().notNull(),
//     amount1: t.bigint().notNull(),
//     timestamp: t.integer().notNull(),
//   }),
//   (t) => ({
//     primaryKey: primaryKey({ columns: [t.chainId, t.swapId] }),
//   })
// );

// export const swapEventRelations = relations(swapEvent, ({ one }) => ({
//   sender: one(account, {
//     relationName: "swap_sender",
//     fields: [swapEvent.sender],
//     references: [account.address],
//   }),
//   recipient: one(account, {
//     relationName: "swap_recipient",
//     fields: [swapEvent.recipient],
//     references: [account.address],
//   }),
//   pool: one(pool, {
//     relationName: "pool",
//     fields: [swapEvent.pool],
//     references: [pool.address],
//   }),
// }));
