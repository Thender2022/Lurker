import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link to="../ArtPage/ArtPage">Art</Link>
            &nbsp; | &nbsp;
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            <button>Check-Out</button>
            &nbsp;&nbsp; <div className="welcome">Welcome, {user.name}</div>
            &nbsp;&nbsp;<Link to=""onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}