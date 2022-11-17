import Main from "./components/Main";
//import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BasicExample from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from "./components/NavbarHeader";

export default function App() {
    return (
        <div className="container">
            <NavbarHeader />

            <Footer />
        </div>
    )
}