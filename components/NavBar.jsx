import React from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "../components/Navbar.module.css" 

const NavBar = () => {
	return (
		<nav className={styles['menu-container']}>
			<ActiveLink text="Pagina" href="/pagina">Pagina</ActiveLink>
			<ActiveLink text="Contact" href="/contact">Contact</ActiveLink>
			<ActiveLink text="Home" href="/">Home</ActiveLink>
		</nav>
	);
};

export default NavBar;
