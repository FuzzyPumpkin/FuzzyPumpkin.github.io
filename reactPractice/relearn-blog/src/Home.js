import {useState} from 'react';

const Home = () => {
    const [name, setName] = useState("Kari");
    const [age, setAge] = useState(42);

    const handleClick = () => {
        setName("Luigi");
        setAge(30);
    }

    return (
        <nav className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me</button>
        </nav>
    )
}
export default Home;