import './App.sass';
import Header from './Components/Header';
import React, { useState } from 'react';

type Blog = {
  id: number
  title: string
  completed: boolean
  content: string
}

function App() {

  const [blogs, setBlogs] = useState<Blog[]>([])
  const [title, setBlogTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlogTitle(event.target.value)
  }

  const handleContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
  }

  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (title.trim().length === 0) {
      alert ("Voer alsjeblieft een titel in voor de blog")
      return
    }

    const blog: Blog = {
      id: 1,
      title: title,
      completed: false,
      content: content
    }

    setBlogs([blog,...blogs])
    setBlogTitle("")
    setContent("")
    blog.id++
  }

  return (
    <div className="App">
      <Header title={'Yntes blog app'} />
      <div className="blogs">{blogs.map(blog => (
        <h2 key={blog.id}>{blog.title}
          <p key={blog.id}>{blog.content}</p>
        </h2>
              
      ))}</div>
      <form onSubmit={handleSubmit}>
        <input id="titleInput" value={title} type="text" name="title" onChange={handleInput} placeholder="Wat is de titel van de blog?"/>
        <input id="contentInput" value={content} type="text" name="content" onChange={handleContent} placeholder="plaats hier je content..."/>
        <button type="submit">Add Blog</button>
      </form>

    </div>
  );
}

export default App
