import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>
					sth-ui - an UI library, built with a design system in mind.
				</title>
				<meta
					name='description'
					content='sth-ui is an open-source UI library, built with a design system in mind, provides a collection of UI components and design tokens to help you build beautiful and consistent user interfaces for your web applications. Powered by Radix UI and Stitches'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<main>sth-ui</main>
		</>
	);
}
