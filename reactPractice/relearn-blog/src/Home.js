import {useState, useEffect} from 'react';
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        fetch('http://localhost:8000/')
            .then(res => {
                return res.json();
            })
                .then((data) => {
                    console.log(data);
                })
    }, []);

    // Putting empty dependency array in stops from running more than on the initial load
    // useEffect(() => {
    //     console.log("use effect run");
    // }, []);

    // Re-run useEffect if there is a certain change to state.
    // useEffect(() => {
    //     console.log("dependency Click");
    // }, [name]);


    return (
        <div className="home">
            {/* <BlogList blogs={blogs} handleDelete={handleDelete}/> */}
        </div>
    )
}
export default Home;