import Link from "next/link";

const BlogsPage = () => {
    const blogs = [
        {
            id: 1,
            title: "Learn JavaScript",
            author: "Rahim",
            category: "Programming",
            description: "JavaScript is a popular language for web development.",
            date: "2026-10-01"
        },
        {
            id: 2,
            title: "Why Learn React?",
            author: "Karim",
            category: "React",
            description: "React helps developers build modern and interactive websites.",
            date: "2026-10-02"
        },
        {
            id: 3,
            title: "Getting Started with CSS",
            author: "Sakib",
            category: "CSS",
            description: "CSS is used to style and design web pages.",
            date: "2026-10-03"
        },
        {
            id: 4,
            title: "What is a Database?",
            author: "Nabil",
            category: "Backend",
            description: "A database stores and manages application data.",
            date: "2026-10-04"
        }
    ];
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Blogs</h1>
            {
                blogs.map(blog => <div key={blog.id} blog={blog}>
                    <h1 className="text-4xl font-bold m-t">{blog.title}</h1>
                    <Link className="btn" href={`/blogs/${blog.id}`}>Show Details</Link>
                </div>)
            }
        </div>
    );
};

export default BlogsPage;