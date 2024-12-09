// run tests with "deno test --doc helpers.ts"
//// the --doc flag will run the tests in the JSDoc comments

/**
 * Add two numbers
 *
 * # Example
 * ```typescript
 * const sum = add(1, 2);
 * console.assert(sum === 3, "Sum should be 3");
 * ```
 *
 * @returns The sum of a and b
 */
export function add(a: number, b: number): number {
	return a + b;
}

/**
 * Returns a random number between 0 and max
 *
 * # Example
 * ```typescript
 * const random1 = getRandomNumber(10);
 * console.assert(random1 >= 0 && random1 <= 10, "Random number should be between 0 and 10");
 *
 * const random2 = getRandomNumber(50);
 * console.assert(random2 >= 0 && random2 <= 50, "Random number should be between 0 and 50");
 * ```
 *
 * @returns The random number
 */
export function getRandomNumber(max: number): number {
	return Math.floor(Math.random() * max);
}
