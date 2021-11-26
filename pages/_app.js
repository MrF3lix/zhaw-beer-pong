import Head from 'next/head'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
    <div id="root">
        <Head>
            <title>ZHAW | Beer Pong</title>
            <meta name="description" content="Beer Pong Turnier - 3.12 ab 18.00 in der Türmlibar." />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff2524" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
            <meta property="og:image" content="https://zhaw-beer-pong.vercel.app/og-image.jpg" />
            <meta property="og:image:width" content="602" />
            <meta property="og:image:height" content="903" />
            <meta property="og:description" content="Beer Pong Turnier - 3.12 ab 18.00 in der T&uuml;rmlibar. Jetzt anmelden!" />
            <meta property="og:title" content="ZHAW | Beer Pong" />
            <meta property="og:url" content="https://zhaw-beer-pong.ch" />
        </Head>
        <Component {...pageProps} />
    </div>
)

export default MyApp
