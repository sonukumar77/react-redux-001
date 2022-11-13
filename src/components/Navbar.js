import {Link} from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
import {setIsLight} from "../slice";
const Navbar = () => {

    const isLight = useSelector((state) => state.isLight) 

    const dispatch = useDispatch();
    return(
        <nav>
         <Link to="/">Home</Link> <br/>
         <Link to="/about">About</Link> <br/>
         <Link to="/contact">Contact</Link> <br/>
         <Link to="/service">Service</Link> <br/>
         <button onClick={() => dispatch(setIsLight())}>Toggle Theme to {isLight?"light":"dark"}</button>
        </nav>
    )
}

export default Navbar;