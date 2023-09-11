import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog, handelBookmarks, handelMarkAsRead }) => {
    const { cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mt-14 mr-2 border-b-2'>
            <img className='rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center mt-8 px-1'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h4 className='text-xl font-bold'>{author}</h4>
                        <p className='text-sm text-slate-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='text-sm text-slate-500'>{reading_time} min read</p>
                    <button onClick={() => handelBookmarks(blog)} className='text-xl'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h3 className='text-3xl font-bold my-4'>{title}</h3>
            <p>
                {
                    hashtags.map((hash, idx) => <span className='mr-4 text-slate-500' key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handelMarkAsRead(reading_time)} className='underline text-blue-600 font-bold mt-7 mb-8'>Mark as read</button>

        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelBookmarks: PropTypes.func,
    handelMarkAsRead: PropTypes.func
}
export default Blog;