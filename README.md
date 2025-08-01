# Ponder Template: Uniswap V3

This repository is a template for a Ponder project that indexes Uniswap V3 on Ethereum and Base.

## Setup

1. Install dependencies

```bash
pnpm install

docker compose up -d
```

2. Start the dev server

```bash
pnpm dev

# Debug mode
pnpm dev -v --log-format json
```

3. Convert files to pairs

```bash
pnpm convert-files-to-pairs
```

## Indexing logic

The `ponder.config.ts` file registers two contracts:

- `UniswapV3Pool` - Uses a factory address configuration to index Swap events emitted by any Uniswap V3 pool, starting from the latest block.
- `UniswapV3Factory` - Indexes `PoolCreated` events emitted by the factory contract and runs pool initialization logic, starting from the factory deployment block number.
