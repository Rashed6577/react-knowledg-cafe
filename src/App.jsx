
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handelBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handelMarkAsRead = (time, id) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
    const remaining = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remaining);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex container mx-auto py-5 px-10'>
        <Blogs
          handelBookmarks={handelBookmarks}
          handelMarkAsRead={handelMarkAsRead}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
