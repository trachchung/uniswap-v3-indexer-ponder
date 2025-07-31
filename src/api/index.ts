import { db } from "ponder:api";
import schema from "ponder:schema";
import { Hono } from "hono";
import { graphql } from "ponder";

const app = new Hono();

app.use("/", graphql({ db, schema }));
app.use("/graphql", graphql({ db, schema }));

app.get("/pools", async (c) => {
  const pools = await db.select().from(schema.pool);

  return c.json(pools);
});

export default app;
