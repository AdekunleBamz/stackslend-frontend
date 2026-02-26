# StacksLend Frontend

A Next.js frontend for the StacksLend lending protocol.

## Overview

StacksLend is a decentralized lending protocol on Stacks that allows users to supply and borrow assets.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- @stacks/connect (Leather/Xverse wallet)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Project Structure

```
├── app/              # Next.js app router pages
├── lib/              # Utility functions and types
│   ├── types.ts     # TypeScript type definitions
│   ├── formatters.ts # Formatting utilities
│   └── stacks-config.ts # Stacks configuration
├── utils/            # Helper functions
└── public/           # Static assets
