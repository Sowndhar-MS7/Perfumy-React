import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Product from "./components/Product"
import Abouts from "./components/About"
import Footer from "./components/Footerss"

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Product></Product>
            <Abouts></Abouts>
            <Footer></Footer>
        </div>
    )
}

export default App