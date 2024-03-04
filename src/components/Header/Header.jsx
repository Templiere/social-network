import c from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={c.header}>
			<img className={c.header__logo} src='https://clipart-library.com/image_gallery/125460.png' alt='Логотип'/>
			<div className={c.loginBlock}>
				{props.isAuth
					? props.login
					: <NavLink to={'/login'}>Login</NavLink>
				}
			</div>
		</header>
	)
}

export default Header;