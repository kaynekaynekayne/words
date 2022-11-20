import React from 'react'

const Pagination = ({totalPages, handlePage}) => {
    
    const pages=[...Array(totalPages).keys()].map(page=>page+1);

    return (
        <div>
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