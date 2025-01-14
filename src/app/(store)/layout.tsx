import { Header } from "@/components/header";
import { ReactNode } from "react";

export interface ILayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
	return (
		<div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
			<Header />
			{children}
		</div>
	);
}
