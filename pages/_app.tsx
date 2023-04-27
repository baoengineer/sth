import '@/src/styles/base.css';
import '@/app/styles/base.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Component
			className='docs'
			{...pageProps}
		/>
	);
}
