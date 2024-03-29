import type { Metadata } from 'next'
import { ClerkProvider, UserButton } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html
				lang='en'
				className='w-full h-full'
			>
				<body className={`${inter.className} w-full h-full`}>
					<nav>
						<UserButton afterSignOutUrl='/sign-in' />
					</nav>
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}
