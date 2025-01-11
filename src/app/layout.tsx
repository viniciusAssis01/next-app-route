import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
}); */

export const metadata: Metadata = {
	title: "Devstore",
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});
// isso faz com que ao estilizarmos um elemento via classname, possamos usar nomeDaConstante.variable > assim ele crie uma variável global no css cujo valor vai ser a fonte inter > agora lá no tailwind config, podemos adicionar essa variável como valor de uma classe utilitária.
// assim podemos ter varias fontes, teremos uma variavelcss para cada fonte.
// dentro do body a gente declara as fontes que vai existir em nosso projeto

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} antialiased`}>{children}</body>
		</html>
	);
}
