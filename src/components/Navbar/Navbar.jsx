import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={c.nav}>
			<div>
				<NavLink to='/profile' className={navData => navData.isActive ? c.active : c.item}>Profile</NavLink>
			</div>
			<div>
				<NavLink to='/dialogs' className={navData => navData.isActive ? c.active : c.item}>Messages</NavLink>
			</div>
			<div>
				<NavLink to='#' className={navData => navData.isActive ? c.active : c.item}>News</NavLink>
			</div>
			<div>
				<NavLink to='#' className={navData => navData.isActive ? c.active : c.item}>Music</NavLink>
			</div>
			<div>
				<NavLink to='#' className={navData => navData.isActive ? c.active : c.item}>Settings</NavLink>
			</div>
			<div>
				<NavLink to='/users' className={navData => navData.isActive ? c.active : c.item}>Users</NavLink>
			</div>
		</nav>
	)
}

export default Navbar;