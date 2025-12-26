"use client";

import { Country } from "@/app/types";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CountryDetails = ({ country }: { country: Country }) => {
	const router = useRouter();

	const nativeName = country.name.nativeName
		? Object.values(country.name.nativeName).sort()?.[0]?.common
		: country.name.common;

	const firstSection = [
		{
			title: "Native Name",
			value: nativeName,
		},
		{
			title: "Population",
			value: country?.population?.toLocaleString(),
		},
		{
			title: "Region",
			value: country?.region,
		},
		{
			title: "Sub Region",
			value: country?.subregion,
		},
		{
			title: "Capital",
			value: country?.capital?.[0],
		},
	];

	const secondSection = [
		{
			title: "Top Level Domain",
			value: country?.tld?.[0],
		},
		{
			title: "Currencies",
			value: country.currencies
				? Object.values(country.currencies)
						.map((c) => c.name)
						.sort()
						.join(", ")
				: "—",
		},
		{
			title: "Languages",
			value: country.languages
				? Object.values(country.languages).sort().join(", ")
				: "—",
		},
	];

	return (
		<>
			<Button
				onClick={() => router.back()}
				className="px-7! hover:bg-dark/10! dark:hover:bg-white/10! cursor-pointer"
			>
				<MoveLeft />
				Back
			</Button>

			<div className="flex flex-col md:flex-row gap-[8vw] mt-12">
				<Image
					src={country?.flags?.png}
					alt={country?.flags?.alt || `${country?.name?.common} flag`}
					width={320}
					height={213}
					className="w-full max-w-[520px] shadow-xl"
				/>

				<div className="tracking-wider md:flex-1 flex flex-col justify-center">
					<div className="text-2xl font-bold mb-6">{country?.name?.common}</div>

					<div className="flex flex-col md:flex-row md:gap-9 md:justify-between 2xl:gap-[12vw]">
						<div className="mb-10">
							{firstSection.map((item, index) => (
								<div key={index} className="text-sm font-semibold mb-4">
									<span className="me-1">{item.title}:</span>
									<span className="font-light text-foreground/80">
										{item.value}
									</span>
								</div>
							))}
						</div>

						<div className="mb-10 md:mb-32">
							{secondSection.map((item, index) => (
								<div key={index} className="text-sm font-semibold mb-4">
									<span className="me-1">{item.title}:</span>
									<span className="font-light text-foreground/80">
										{item.value}
									</span>
								</div>
							))}
						</div>
					</div>

					<div className="font-semibold mb-10 gap-3 md:mb-0 flex flex-col md:items-center md:flex-row">
						<div className="me-1">Border Countries:</div>
						<div className="flex items-center gap-2.5 flex-wrap font-light text-sm">
							{!!country?.borders?.length
								? country.borders.map((border: string) => (
										<div
											key={border}
											className="rounded-xs py-2 px-5 bg-primary-light dark:bg-primary-dark shadow-light-button dark:shadow-lg"
										>
											{border}
										</div>
								  ))
								: "N/A"}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CountryDetails;
