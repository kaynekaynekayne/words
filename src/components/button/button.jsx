import React from 'react'
import styles from './button.module.css';

const Button = ({title, onClick}) => {
    return (
        <button onClick={onClick} className={styles.btn}>
            {title}
        </button>
    )
}

export default Button;