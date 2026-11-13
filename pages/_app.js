import '../styles/globals.css'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

const pagesWithoutLayout = new Set(['/seatspot-privacy'])

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    if (pagesWithoutLayout.has(router.pathname)) {
        return <Component {...pageProps} />
    }

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp