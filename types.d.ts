/**
 * Determines if the input value is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
export default function empty<T = unknown>(value: T | undefined | null): boolean;
