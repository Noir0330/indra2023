import BlogCard from "@/components/blogs/BlogCard";
import Link from "next/link";

export default function BlogList({ blogs }) {
  return (
    <div className="container mb-5">
      <div className="row">
        {blogs?.map((blog) => (
          <div className="col-lg-4" key={blog._id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}
