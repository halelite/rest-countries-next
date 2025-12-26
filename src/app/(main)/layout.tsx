import Header from "../templates/components/header";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col h-full">
			<Header />
			<div className="flex-1 py-6 px-4 md:py-8 md:px-[4.5vw]">{children}</div>
		</div>
	);
}
