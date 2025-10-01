import './global.css'

import Header from "./pages/header"
import Footer from "./pages/footer"
import Index from './pages'
 

export default function Page() {
    return (
        <html>
            <body>
                <div className="bg-bglight">
                    <Header></Header>

                    {/* TODO: sistema de navegação */}
                    <Index></Index>

                    <Footer></Footer>
                </div>
            </body>
        </html>
    )
}