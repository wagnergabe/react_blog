const Home = () => {

    const handleClick = () => {
        console.log('hello')
    }

    const handleClickAgain = (name) => {
        console.log(`hello ${name}`)
    }

    return ( 
        <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>click here</button>
        <button onClick={() => handleClickAgain('Gabe')}>Click me again</button>
        </div>
     );
}
 
export default Home;