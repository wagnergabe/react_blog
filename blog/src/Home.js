import { useState } from "react";

const Home = () => {
    //let name = 'Gabe';
const [name, setName] = useState('Gabe');
const [age, setAge] = useState(33)

const handleClick = () => {
    setName('Wagner')
    setAge(34)
}

    return ( 
        <div className="home">
        <h2>Homepage</h2>
        <p>{ name } is { age } years old</p>
        <button onClick={handleClick}>click here</button>
        </div>
     );
}
 
export default Home;