
import { useParams } from "react-router-dom";
import { blogs } from "../../fake/data";

const BlogSingle = () => {
    const { postId } = useParams();
    const blog = blogs.find((data) => data.id == postId);


  return (
    <>
      <div className="container py-5">
        <h1 className="text-4xl font-bold text-center">{blog.title}</h1>
        <img className="mx-auto my-4 w-1/2"
          src={blog.photo}
          alt=""
        />
        <p className="w-3/4 text-center mx-auto">{blog.desc}
        </p>
      </div>
    </>
  );
}

export default BlogSingle