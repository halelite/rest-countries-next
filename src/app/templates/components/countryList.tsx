import { Country } from "@/app/types";
import CountryCard from "./country-card";

type CountryListProps = {
	countries: Country[];
};

const CountryList = ({ countries }: CountryListProps) => {
	return countries?.map((country: any) => (
		<CountryCard key={country?.cca3} country={country} />
	));
};

export default CountryList;
