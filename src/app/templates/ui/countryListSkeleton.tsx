import { Skeleton } from "../../../components/ui/skeleton";

const CountryListSkeleton = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 px-[6vw] sm:px-0 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-8">
			{Array.from({ length: 24 }).map((_, index) => (
				<Skeleton
					key={index}
					className="h-[274px] rounded-lg bg-dark/20 dark:bg-white/20"
				/>
			))}
		</div>
	);
};

export default CountryListSkeleton;
