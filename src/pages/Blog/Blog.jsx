
import { Link } from "react-router-dom";
import { blogs } from "../../fake/data";
const Blog = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
          <div className="flex flex-wrap -mx-4">

            {blogs.map((item)=>{
              return (
                <div key={item.id} className="w-full md:w-1/2 xl:w-1/3 p-4">
                  <div className="bg-white rounded shadow-md p-4">
                    <img className="mb-5 w-full object-cover" src={item.photo} alt="" />
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                    <Link to={`/blog/${item.id}`} className="text-white hover:text-gray-900 px-5 py-1 bg-slate-500 rounded mt-3 table"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}



          </div>
        </div>
      </section>
    </>
  );
}

export default Blog