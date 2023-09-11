import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="w-1/3 px-8 mt-14 bg-slate-200 rounded-lg">
            <h2 className="text-2xl font-bold my-8">Spent time on read : {readingTime} min</h2>

            <h2 className="text-2xl font-bold my-8">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark
                    key={idx}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number
}
export default Bookmarks;