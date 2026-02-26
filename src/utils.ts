/**
 * Formats a Date into a human-readable string (e.g. "March 15, 2025").
 */
export function formatDate(date: Date): string {
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}
