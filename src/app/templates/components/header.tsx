import ThemeSwitch from "../ui/themeSwitch";

const Header = () => {
	return (
		<div className="sticky top-0 left-0 right-0 z-2000 flex items-center justify-between bg-primary-light py-8 px-4 shadow-md dark:bg-primary-dark md:py-3 md:px-12">
			<div className="font-bold">Where in the world?</div>

			<div className="flex items-center gap-2">
				<ThemeSwitch />
			</div>
		</div>
	);
};

export default Header;
