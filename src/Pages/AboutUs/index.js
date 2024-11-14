import Footer from "../../Component/Footer";
import Navbar from "../../Component/NavBar";

const AboutUs = () => {
    const keys = ['Home', ' Todos',' About us', 'Auth Form'];
    return ( 
        <>
            <Navbar keys={keys}/>
            <h1>About Us</h1>
            <Footer/>
        </>
     );
}
 
export default AboutUs;