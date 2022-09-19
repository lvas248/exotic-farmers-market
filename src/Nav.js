import { NavLink } from "react-router-dom"

function Nav(){

    return (
        <nav>
            <NavLink style={{textDecoration:"none"}} to="/"><h3>Shop</h3></NavLink>
            <NavLink style={{textDecoration:"none"}} to="/add-produce"><h3>Add Produce</h3></NavLink>
            <NavLink style={{textDecoration:"none"}} to="/cart"><h3>Cart</h3></NavLink>
        </nav>
    )
}
export default Nav