import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const nunitoSans = Nunito_Sans({
	variable: "--font-nunito-sans",
	weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
	title: "Rest Countries",
	description: "Rest Countries",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${nunitoSans.variable} antialiased min-h-dvh`}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider attribute="class" enableSystem defaultTheme="system">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
