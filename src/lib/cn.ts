/**
 * Joins conditional class names. Keeps JSX readable without pulling in a dep.
 *
 * Accepts anything so `cond && "class"` works regardless of what `cond` is;
 * only strings survive into the output.
 */
export function cn(...values: unknown[]): string {
	return values.filter((value): value is string => typeof value === "string" && value !== "").join(" ");
}
