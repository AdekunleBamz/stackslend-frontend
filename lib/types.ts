/**
 * Type definitions for the StacksLend frontend application
 */

/**
 * Network configuration for Stacks
 */
export type NetworkName = 'mainnet' | 'testnet' | 'devnet';

/**
 * Wallet connection state
 */
export interface WalletState {
  /** Whether wallet is connected */
  isConnected: boolean;
  
  /** The connected wallet address */
  address: string | null;
  
  /** Wallet balance in STX */
  balance: number;
  
  /** Network name */
  network: NetworkName;
}

/**
 * Lending pool information
 */
export interface LendingPool {
  /** Unique identifier for the pool */
  id: string;
  
  /** Pool name */
  name: string;
  
  /** Asset symbol (e.g., 'STX', 'sBTC') */
  symbol: string;
  
  /** Current supply APY */
  supplyApy: number;
  
  /** Current borrow APY */
  borrowApy: number;
  
  /** Total supplied amount */
  totalSupplied: number;
  
  /** Total borrowed amount */
  totalBorrowed: number;
  
  /** Utilization rate (0-1) */
  utilizationRate: number;
  
  /** Asset decimals */
  decimals: number;
}

/**
 * User's position in a lending pool
 */
export interface UserPosition {
  /** Pool ID */
  poolId: string;
  
  /** Amount supplied */
  suppliedAmount: number;
  
  /** Amount borrowed */
  borrowedAmount: number;
  
  /** Collateral enabled */
  isCollateral: boolean;
  
  /** Last update timestamp */
  lastUpdate: number;
}

/**
 * Transaction details
 */
export interface Transaction {
  /** Transaction hash */
  hash: string;
  
  /** Block height */
  blockHeight: number;
  
  /** Timestamp */
  timestamp: number;
  
  /** Transaction type */
  type: 'supply' | 'borrow' | 'withdraw' | 'repay';
  
  /** Amount */
  amount: number;
  
  /** Asset symbol */
  asset: string;
  
  /** Status */
  status: 'pending' | 'confirmed' | 'failed';
}

/**
 * API response wrapper
 */
export interface ApiResponse<T> {
  /** Response data */
  data: T;
  
  /** Error message if any */
  error?: string;
  
  /** Whether the request was successful */
  success: boolean;
}

/**
 * Form validation error
 */
export interface ValidationError {
  /** Field name */
  field: string;
  
  /** Error message */
  message: string;
}

/**
 * App configuration
 */
export interface AppConfig {
  /** Stacks network */
  network: NetworkName;
  
  /** API endpoint */
  apiUrl: string;
  
  /** Contract address */
  contractAddress: string;
  
  /** Timeout for API calls (ms) */
  apiTimeout: number;
}
