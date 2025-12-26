export function paginate<T>(items: T[]): T[][] {
	const itemsPerPage = 24;
	const pages = Math.ceil(items.length / itemsPerPage);

	return Array.from({ length: pages }, (_, index) => {
		const start = index * itemsPerPage;
		return items.slice(start, start + itemsPerPage);
	});
}
