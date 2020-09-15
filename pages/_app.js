import NextNProgress from '../components/global/NextNProgress'
import '../styles/app.scss'

function MyApp({ Component, pageProps }) {

    return (
        <>
            <NextNProgress
                color="#01a7e5"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;