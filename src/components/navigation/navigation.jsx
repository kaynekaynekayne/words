import React from 'react'
import {Link} from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li>
                    <Link to="/">MEMORIZE</Link>
                </li>
                <li>
                    <Link to="/quiz">QUIZ</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;