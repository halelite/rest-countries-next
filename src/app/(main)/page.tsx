"use client";

import SearchFilter from "@/app/templates/components/search-filter";
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { paginate } from "../utils/paginate";
import CountryList from "../templates/components/countryList";
import { Country, ErrorSchema } from "@/app/types";
import CountryListSkeleton from "../templates/ui/countryListSkeleton";

// async function getCountries() {
// 	const res = await fetch(
// 		`https://restcountries.com/v3.1/all?fields=name,region,flags,population,capital,cca2,cca3`
// 	);
// 	if (!res.ok) throw new Error("Failed to fetch countries");
// 	return res.json();
// }

export default function Home() {
	const [countries, setCountries] = useState<Country[][]>([]);
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<ErrorSchema>({});
	const searchParams = useSearchParams();
	const observerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const params = new URLSearchParams(searchParams);

		setLoading(true);
		fetch(`/api/countries?${params.toString()}`)
			.then((res) => res.json())
			.then((data: Country[]) => {
				const paginatedData = paginate(data);
				setCountries(paginatedData);
			})
			.catch((err) => {
				console.log("error", err);
				setError({
					message: err.error || "Something went wrong",
				});
			})
			.finally(() => {
				setLoading(false);
			});
	}, [searchParams]);

	useEffect(() => {
		if (loading || !observerRef.current) return;

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && page < countries?.length) {
				setPage((prevPage) => prevPage + 1);
			}
		});

		observer.observe(observerRef.current);

		// Cleanup observer on unmount
		return () => {
			if (observerRef.current) {
				observer.unobserve(observerRef.current);
			}
		};
	}, [countries.length, page]);

	return (
		<>
			<SearchFilter />

			{error?.message && (
				<div className="flex items-center justify-center text-red-600">
					<div>{error.message}</div>
				</div>
			)}

			{loading ? (
				<CountryListSkeleton />
			) : countries?.length === 0 ? (
				<div className="flex items-center justify-center">
					No countries found!
				</div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 px-[6vw] sm:px-0 md:grid-cols-3 lg:grid-cols-4 gap-12">
					{countries
						?.slice(0, page + 1)
						?.map((countryPage: any[], index: number) => (
							<CountryList key={index} countries={countryPage} />
						))}
				</div>
			)}

			<div ref={observerRef} />
		</>
	);
}
