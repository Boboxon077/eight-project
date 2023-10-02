import { useState, useRef } from "react"
import { v4 as uuidv4 } from 'uuid';
// const formEl = useRef()

function Form({ addArticle }) {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [date, setDate] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        addArticle({ id: uuidv4(), title, author, date });
        e.target.reset()
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
            </div>

            <div className="form-control">
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" value={author} onChange={(e) => { setAuthor(e.target.value) }} />
            </div>

            <div className="form-control">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
            </div>
            <button type="submit">submit</button>
        </form>

    )
}

export default Form