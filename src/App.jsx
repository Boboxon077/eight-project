import { useEffect, useState } from "react"
import Form from "./Form"
import Articles from "./Articles"


function GetLocalS() {
  return JSON.parse(localStorage.getItem('articles')) || []
}


function App() {
  const [articles, setArticles] = useState(GetLocalS())

  const addArticle = (article) => {
    setArticles((prev) => {
      return [...prev, article]
    })
    localStorage.setItem('articles', JSON.stringify(articles))
  }

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles))
  }, [articles])

  const deleteArticle = (id) => {
    setArticles((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      })
    })
  };


  return (
    <>
      <Form addArticle={addArticle} />
      <Articles articles={articles} deleteArticle={deleteArticle}/>
    </>
  )

}



export default App