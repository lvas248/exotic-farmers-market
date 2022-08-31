import { Link } from "react-router-dom"

function Nav(){

    return (
        <nav>
            <Link style={{textDecoration:"none"}} to="/"><h3>Shop</h3></Link>
            <Link style={{textDecoration:"none"}} to="/suggest"><h3>Suggest a Fruit</h3></Link>
            <Link style={{textDecoration:"none"}} to="/cart"><h3>Cart(0)</h3></Link>
        </nav>
    )
}
export default Nav