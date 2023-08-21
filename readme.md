# React UI Components Boilerplate

This repository contains a Customizable starting point for building a React UI Components library using TypeScript. It utilizes tools such as Rollup for bundling, Storybook for component development and documentation, Jest for testing, and Lerna with pnpm for managing a monorepo structure.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- Node.js (version 18 or higher)
- pnpm

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/saugardev/ui-components-boilerplate
   ```

2. Navigate to the project's root directory:

   ```
   cd ui-components-boilerplate
   ```

3. (Optional) Install pnpm if you don't have it:

   ```
   npm i -g pnpm
   ```

   **Note:** Skip this step if you already have pnpm installed.

4. Install dependencies:

   ```
   pnpm install
   ```

## Development Workflow

The repository is structured as a monorepo managed by Lerna. Here are some useful commands for the development workflow:

- `pnpm run build`: Builds the project using Rollup.
- `pnpm run start`: Starts the development server with Storybook.
- `pnpm run test`: Runs the test suite using Jest.
- `pnpm run prepare`(Optional): Sets up the project with husky.
