import { Skeleton } from "@/components/ui/skeleton";

const CountryDetailsSkeleton = () => {
	return (
		<>
			<Skeleton className="w-[110px] h-9 bg-dark/20 dark:bg-white/20" />
			<div className="flex flex-col md:flex-row gap-[8vw] mt-12">
				<Skeleton className="min-w-[320px] min-h-[213px] flex-1 self-stretch bg-dark/20 dark:bg-white/20" />

				<div className="md:flex-1 flex flex-col justify-center">
					<Skeleton className="h-6 w-[250px] mb-8 bg-dark/20 dark:bg-white/20" />

					<div className="flex flex-col md:flex-row md:gap-9 md:justify-between 2xl:gap-[12vw]">
						<div className="mb-10">
							{Array.from({ length: 5 }).map((_, index) => (
								<Skeleton
									key={index}
									className="h-4 w-[200px] mb-5 bg-dark/20 dark:bg-white/20"
								/>
							))}
						</div>

						<div className="mb-10 md:mb-32">
							{Array.from({ length: 3 }).map((_, index) => (
								<Skeleton
									key={index}
									className="h-4 w-[200px] mb-5 bg-dark/20 dark:bg-white/20"
								/>
							))}
						</div>
					</div>

					<div className="mb-10 gap-3 md:mb-0 flex flex-col md:items-center md:flex-row">
						<Skeleton className="h-5 w-[180px] me-1 bg-dark/20 dark:bg-white/20" />
						<div className="flex items-center gap-2.5 flex-wrap">
							{Array.from({ length: 3 }).map((_, index) => (
								<Skeleton
									key={index}
									className="h-10 w-[100px] bg-dark/20 dark:bg-white/20"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CountryDetailsSkeleton;
