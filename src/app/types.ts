export interface Country {
	capital: string[];
	cca2: string;
	cca3: string;
	flags: {
		alt: string;
		png: string;
		svg?: string;
	};
	name: {
		common: string;
		official: string;
		nativeName?: Record<
			string,
			{
				common: string;
				official: string;
			}
		>;
	};
	population: number;
	region: string;
	subregion?: string;
	tld?: string[];
	languages?: Record<string, string>;
	currencies?: Record<
		string,
		{
			name: string;
			symbol: string;
		}
	>;
	borders?: string[];
}

export type ErrorSchema = {
	message?: string;
};
