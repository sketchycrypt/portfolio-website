import React from 'react';
import Head from 'next/head';

// Define the page component
const Page = () => {
    return (
        <div>
            <Head>
                <title>My Next.js Website</title>
                <meta name="description" content="Welcome to my website!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Welcome to my Next.js website!</h1>
                <p>Start building your awesome website here.</p>
            </main>

            <footer>
                <p>&copy; {new Date().getFullYear()} My Next.js Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Page;