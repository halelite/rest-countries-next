type TTimeoutId = ReturnType<typeof setTimeout>;

export const debounce = <Args extends string[]>(
	fn: (...args: Args) => void,
	delay: number
) => {
	let timeoutId: TTimeoutId;

	return (...args: Args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn(...args), delay);
	};
};
