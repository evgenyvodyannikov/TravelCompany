import Head from 'next/head'
import Image from 'next/image'
import Button from '@mui/material/Button';

export default function Home() {
    return (
        <>
            <div className="flex min-h-screen flex-col items-center justify-center py-2">
                <Head>
                    <title>Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                    <h1 className="text-6xl font-bold">
                       Here is{' '}
                        <a className="text-blue-600" href="#">
                            Description{' '} 
                        </a>
                        below
                    </h1>

                    <p className="mt-3 text-2xl">
                        Tailwind added, structure changed. Was made decision to start from zero.{' '}
                    </p>

                </main>

                <footer className="flex h-24 w-full items-center justify-center border-t">
                    <a
                        className="flex items-center justify-center gap-2"
                        href="#"
                        rel="noopener noreferrer"
                    >
                        Powered by Me
                    </a>
                </footer>
            </div>
        </>
    )

}