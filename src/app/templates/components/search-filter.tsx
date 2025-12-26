import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
	InputGroupTextarea,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { debounce } from "../../utils/debounce";

const SearchFilter = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const region = searchParams.get("region");
	const name = searchParams.get("name");

	console.log("searchParams", region);

	const handleRegionChange = (region: string) => {
		const params = new URLSearchParams(searchParams);

		if (region && region !== "All") {
			params.set("region", region);
		} else {
			params.delete("region");
		}

		replace(`${pathname}?${params.toString()}`);
	};

	const handleSearch = async (term: string) => {
		// update searrchParams
		const params = new URLSearchParams(searchParams);

		if (term) {
			params.set("name", term);
		} else {
			params.delete("name");
		}

		replace(`${pathname}?${params.toString()}`);
	};

	const debounceSearch = useMemo(
		() => debounce((searchTerm) => handleSearch(searchTerm), 500),
		[]
	);

	return (
		<div className="flex flex-col justify-start gap-9 mb-8 md:flex-row md:items-center md:justify-between">
			<InputGroup className="w-full sm:w-1/2 md:w-2/5 shadow-light-input! dark:shadow-md!">
				<InputGroupInput
					className="text-[14px]!"
					placeholder="Search for a country"
					onChange={(e) => debounceSearch(e.target.value)}
					defaultValue={searchParams.get("name")?.toString()}
				/>
				<InputGroupAddon className="me-4 ms-2">
					<Search />
				</InputGroupAddon>
			</InputGroup>

			<Select onValueChange={handleRegionChange}>
				<SelectTrigger className="w-[180px] shadow-light-input! dark:shadow-md!">
					<SelectValue placeholder="Filter by Region" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="All">All</SelectItem>
					<SelectItem value="Africa">Africa</SelectItem>
					<SelectItem value="Americas">America</SelectItem>
					<SelectItem value="Asia">Asia</SelectItem>
					<SelectItem value="Europe">Europe</SelectItem>
					<SelectItem value="Oceania">Oceania</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

export default SearchFilter;
