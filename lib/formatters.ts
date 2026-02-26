/**
 * Utility functions for the StacksLend frontend
 */

/**
 * Format a number as currency
 * @param amount - Amount to format
 * @param decimals - Number of decimal places
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(amount);
}

/**
 * Format a number as percentage
 * @param value - Value to format (e.g., 0.05 for 5%)
 * @param decimals - Number of decimal places
 * @returns Formatted percentage string
 */
export function formatPercentage(value: number, decimals: number = 2): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Format a STX amount for display
 * @param microStx - Amount in micro-STX
 * @returns Formatted STX string
 */
export function formatStxAmount(microStx: number): string {
  const stx = microStx / 1000000;
  return formatCurrency(stx, 6);
}

/**
 * Truncate a Stacks address for display
 * @param address - Full Stacks address
 * @param prefixLength - Characters to show at start
 * @param suffixLength - Characters to show at end
 * @returns Truncated address
 */
export function truncateAddress(
  address: string,
  prefixLength: number = 6,
  suffixLength: number = 4
): string {
  if (!address || address.length <= prefixLength + suffixLength) {
    return address;
  }
  return `${address.slice(0, prefixLength)}...${address.slice(-suffixLength)}`;
}

/**
 * Validate a Stacks address
 * @param address - Address to validate
 * @returns Whether the address is valid
 */
export function isValidStacksAddress(address: string): boolean {
  const mainnetRegex = /^SP[0-9A-HJ-NP-Za-km-z]{38}$/;
  const testnetRegex = /^ST[0-9A-HJ-NP-Za-km-z]{38}$/;
  return mainnetRegex.test(address) || testnetRegex.test(address);
}

/**
 * Calculate APY from APR
 * @param apr - Annual Percentage Rate
 * @param compoundingPeriods - Number of compounding periods per year
 * @returns Effective APY
 */
export function calculateApy(apr: number, compoundingPeriods: number = 365): number {
  return Math.pow(1 + apr / compoundingPeriods, compoundingPeriods) - 1;
}

/**
 * Format timestamp to relative time
 * @param timestamp - Unix timestamp in milliseconds
 * @returns Relative time string
 */
export function formatRelativeTime(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return 'just now';
}
