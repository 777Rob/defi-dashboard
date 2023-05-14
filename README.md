# DeFi Dashboard

DeFi Dashboard is a web application built using Next.js that enables users to visualize the trading volume of PancakeSwap on both the Binance Smart Chain (BSC) and Ethereum (ETH) chains. It utilizes Mantine for UI components, Apollo Client for data fetching, and graphql-codegen to generate hooks for seamless integration with GraphQL APIs.

This project is developed for the BNB chain Zero2Hero Hackathon - NodeReal Challenge, which focuses on using NodeReal standard and enhanced APIs to implement required features.

## Overview

DeFi Dashboard provides an interactive interface for developers and users to monitor and analyze the trading volumes on PancakeSwap. The application offers the following features:

1. Display the data for PancakeSwap on both BSC and ETH chains.
2. Display the data for PancakeSwap on a particular chain (BSC or ETH).
3. Display a chart containing trading data for the last 90 days.
4. Showcase top tokens and top token pairs based on trading volume.
5. Dedicated pages to display volumes and data for all top tokens and token pairs.

## Getting Started

To get started with the DeFi Dashboard, follow these steps:

### Prerequisites

- Node.js v14.x or higher
- Yarn package manager

## Environment Variables

To configure the GraphQL endpoints for BSC and ETH chains, set the following environment variables in a `.env` file at the root of the project:

```plaintext
NEXT_PUBLIC_BSC_GRAPHQL_URL="your-bsc-graphql-url"
NEXT_PUBLIC_ETH_GRAPHQL_URL="your-eth-graphql-url"
```

These environment variables are used to set the respective GraphQL endpoints in the `codegen.yml` file.

Replace `your-bsc-graphql-url` and `your-eth-graphql-url` with the actual GraphQL API URLs for the BSC and ETH chains, respectively. These URLs can be obtained from the [NodeReal platform](https://nodereal.io/invite/f880ff55-51fa-4452-b7ac-85e8bb947324), which provides access to PancakeSwap data through their GraphQL APIs.

For example, your BSC GraphQL URL might look like this:

```plaintext
https://open-platform.nodereal.io/7e14908068a54145aa61c9e9f0ddb7d8/pancakeswap-free/graphql
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/77Rob/defi-dashboard.git
```

2. Change the working directory:

```bash
cd defi-dashboard
```

3. Install dependencies:

```bash
yarn install
```

4. Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the DeFi Dashboard in action.

## Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `export` – exports static website to `out` folder
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

## Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

## Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
- `generate-graphql-types` - fetches and generates GraphQL types

## Contributing

We welcome contributions to the DeFi Dashboard. If you would like to contribute, please fork the repository, make your changes, and submit a pull request.

# README Mantine Next Template

Get started with Mantine + Next with just a few button clicks.
Click `Use this template` button at the header of repository or [follow this link](https://github.com/mantinedev/mantine-next-template/generate) and
create new repository with `@mantine` packages. Note that you have to be logged in to GitHub to generate template.

## Features

This template comes with several essential features:

- Server side rendering setup for Mantine
- Color scheme is stored in cookie to avoid color scheme mismatch after hydration
- Storybook with color scheme toggle
- Jest with react testing library
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)
