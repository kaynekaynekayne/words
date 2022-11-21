import React from 'react'
import styles from './pagination.module.css';


const Pagination = ({totalPages, handlePage}) => {
    
    const pages=[...Array(totalPages).keys()].map(page=>page+1);

    return (
        <div className={styles.page}>
            {pages.map(page=>(
                <button 
                    key={page}
                    onClick={()=>handlePage(page)}
                >{page}</button>
            ))}
        </div>
    )
}

export default Pagination