import Navbar from "../../Component/NavBar";
import Footer from "../../Component/Footer";


const Home = () => {
    const keys = ['Home', ' Todos',' About us', 'Auth Form'];

    return (  
        <>
            <Navbar keys={keys}/>
            <h1>Home Page</h1>
            <Footer/>
        </>

    );
}


 
export default Home;