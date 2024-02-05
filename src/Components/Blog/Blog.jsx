import PropTypes from "prop-types";
import { BsBookmarkCheckFill } from "react-icons/bs";
export function Blog({ blog, handleAddToBookmark }) {
  const {
    title,
    name,
    cover_page,
    posted_date,
    author_image,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-20">
      <img
        className="w-30 mb-8"
        src={cover_page}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between">
        <div className="p-1">
          <img className="w-14 rounded-full" src={author_image} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{name}</h3>
            <p className="text-xl">{posted_date}</p>
          </div>
        </div>
        <div>
          <span className="text-xl">{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 p-2 text-red-600"
          >
            <BsBookmarkCheckFill />
          </button>
        </div>
      </div>
      <h2 className="text-2xl">{title}</h2>
      <p className="text-xl">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash} </a>
          </span>
        ))}
      </p>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};
