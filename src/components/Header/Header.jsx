import c from './Header.module.css';

const Header = () => {
	return (
		<header className={c.header}>
			<img className={c.header__logo} src='https://clipart-library.com/image_gallery/125460.png' alt='Логотип'/>
		</header>
	)
}

export default Header;