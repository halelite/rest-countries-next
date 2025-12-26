import { Country } from "@/app/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const region = searchParams.get("region");
	const name = searchParams.get("name");

	const url = region
		? `https://restcountries.com/v3.1/region/${region}`
		: `https://restcountries.com/v3.1/all?fields=name,region,flags,population,capital,cca2,cca3`;

	try {
		const res = await fetch(url);
		let countries = await res.json();

		if (name) {
			countries = countries?.filter((c: Country) =>
				c.name.common.toLowerCase().includes(name.toLowerCase())
			);
		}

		countries = countries.sort((a: Country, b: Country) => {
			if (a.name.common.toLowerCase() < b.name.common.toLowerCase()) {
				return -1;
			}
			if (a.name.common.toLowerCase() > b.name.common.toLowerCase()) {
				return 1;
			}
			return 0;
		});

		return NextResponse.json(countries);
	} catch (error) {
		console.log("error", error);
		return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
	}
}
