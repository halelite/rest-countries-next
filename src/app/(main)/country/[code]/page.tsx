import CountryDetails from "@/app/templates/components/countryDetails";
import CountryDetailsSkeleton from "@/app/templates/ui/countryDetailsSkeleton";
import { Country } from "@/app/types";
import { Suspense } from "react";

async function getCountry(code: string) {
	const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
	// const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

	if (!res.ok) throw new Error("Failed to fetch country");

	const [country] = await res.json();

	const borderCodes: string[] = country?.borders || [];

	if (borderCodes?.length > 0) {
		const res = await fetch(
			`https://restcountries.com/v3.1/alpha?codes=${borderCodes.join(",")}`,
			{
				next: { revalidate: 60 * 60 * 24 }, // 24 hours
			}
		);

		const borderData: Country[] = await res.json();

		const borderNames = borderData?.map((c) => c.name.common).sort();

		return { ...country, borders: borderNames };
	}

	return { ...country, borders: [] };
}

export async function generateStaticParams() {
	const countries = await fetch(
		`https://restcountries.com/v3.1/all?fields=cca3`,
		{
			next: { revalidate: 60 * 60 * 24 }, // 24 hours
		}
	).then((res) => res.json());

	return countries.map((country: Country) => ({
		code: country.cca3,
	}));
}

const CountryDetailsPage = async ({
	params,
}: {
	params: Promise<{ code: string }>;
}) => {
	const { code } = await params;
	const country = await getCountry(code);

	console.log("country", country);

	return <CountryDetails country={country} />;
};

export default CountryDetailsPage;
