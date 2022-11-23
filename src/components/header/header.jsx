import React from 'react'
import {Link} from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
    return (
        //고쳐야됨
        <header className={styles.header}>
            <Link to="/">
                MEMORIZE
            </Link>
            <Link to="/quiz">
                <button>quiz</button>
            </Link>
        </header>
    )
}

export default Header;