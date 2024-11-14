import { Link } from 'react-router-dom';


const Navbar = (probs)=>{
    return (
        <>

        <div className="flex justify-around items-center border-b border-red-500 py-5">
            <Link to='/'>
        <img src="/logo192.png" alt="Logo" className="w-1/2"/>
            </Link>

            <div className="flex space-x-5">
                <Link to="/" className="pr-5">
                    <h4>{probs.keys[0]}</h4>
                </Link>
                <Link to="/Todos" className="pr-5">
                    <h4>{probs.keys[1]}</h4>
                </Link>
                <Link to="/Aboutus" className="pr-5">
                    <h4>{probs.keys[2]}</h4>
                </Link>
                <Link to="/Auth-Form" className="pr-5">
                    <h4>{probs.keys[3]}</h4>
                </Link>
            </div>

        </div>
        </>
    )
}


export default Navbar;