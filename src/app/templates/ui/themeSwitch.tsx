"use client";

import { useTheme } from "next-themes";
import moonOutlined from "@/assets/icons/moon.svg";
import sunOutlined from "@/assets/icons/brightness-high.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, systemTheme } = useTheme();

	console.log("theme", theme);
	console.log("system theme", systemTheme);

	const currentTheme = theme === "system" ? systemTheme : theme;

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div
			className="flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-[background] duration-200 hover:bg-dark/10 dark:hover:bg-white/10"
			onClick={() =>
				currentTheme == "dark" ? setTheme("light") : setTheme("dark")
			}
		>
			{currentTheme === "dark" ? (
				<>
					<Image src={sunOutlined} alt="sun outlined" width={15} height={15} />
					<div className="text-sm font-semibold">Light Mode</div>
				</>
			) : (
				<>
					<Image
						src={moonOutlined}
						alt="moon outlined"
						width={14}
						height={14}
					/>
					<div className="text-sm font-semibold">Dark Mode</div>
				</>
			)}
		</div>
	);
};

export default ThemeSwitch;
