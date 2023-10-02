import React from 'react'



function Articles({ articles, deleteArticle }) {
    return (
        <ul>
            {articles.map((artic) => {
                return <li key={artic.id}>
                    <h3>{artic.title}</h3>
                    <p>{artic.author}</p>
                    <p>{artic.date}</p>
                    <button className='delete-btn' onClick={() => { (deleteArticle(artic.id)) }}>Delete</button>
                </li>

            })}
        </ul>

    )
}

export default Articles