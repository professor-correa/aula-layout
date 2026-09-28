import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({ content }) {
    return (
        <>
            <Header/>
            {content}
            <Footer />
        </>
    )
}