import { Country } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

const CountryCard = ({ country }: { country: Country }) => {
	return (
		<Link
			href={`/country/${country?.cca3}`}
			className="rounded-lg bg-primary-light shadow-light-box dark:shadow-lg dark:bg-primary-dark"
		>
			<Image
				src={country?.flags?.png}
				alt={country?.flags?.alt || `${country?.name?.common} flag`}
				width={320}
				height={213}
				className="rounded-t-lg w-full h-[213px]"
			/>

			<div className="px-5 py-6 pb-10">
				<div className="text-lg font-bold mb-3">{country?.name?.common}</div>

				<div className="font-semibold">
					Population:{" "}
					<span className="font-light text-foreground/80">
						{country?.population?.toLocaleString()}
					</span>
				</div>

				<div className="font-semibold">
					Region:{" "}
					<span className="font-light text-foreground/80">
						{country?.population?.toLocaleString()}
					</span>
				</div>

				<div className="font-semibold">
					Capital:{" "}
					<span className="font-light text-foreground/80">
						{country?.capital?.[0]}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default CountryCard;
