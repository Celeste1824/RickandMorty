import React from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar';
import styles from './Nav.module.css'; 

const NavBar = ({ onSearch }) => {
    return (
        <div className={styles.navBar}>
            <SearchBar onSearch={onSearch} />

            <Link to='/about' className={styles.navLink}>
                <button className={styles.navButton}>About</button>
            </Link>

            <Link to='/home' className={styles.navLink}>
                <button className={styles.navButton}>Home</button>
            </Link>

            <Link to='/favorites' className={styles.navLink}>
                <button className={styles.navButton}>Favorites</button>
            </Link>
        </div>
    )
};

export default NavBar;
