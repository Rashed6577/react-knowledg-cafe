import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handelBookmarks, handelMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-2/3">
            <h2 className="text-2xl font-bold">Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handelBookmarks={handelBookmarks}
                    handelMarkAsRead={handelMarkAsRead}
                    ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handelBookmarks: PropTypes.func,
    handelMarkAsRead: PropTypes.func
}

export default Blogs;