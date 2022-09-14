import { Link } from "react-router-dom"

function Nav(){

    return (
        <nav>
            <Link style={{textDecoration:"none"}} to="/"><h3>SHOP</h3></Link>
            <Link style={{textDecoration:"none"}} to="/add-produce"><h3>Add Produce</h3></Link>
            <Link style={{textDecoration:"none"}} to="/cart"><h3>Cart</h3></Link>
        </nav>
    )
}
export default Nav