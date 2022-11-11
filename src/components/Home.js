import React from 'react';
import { Link } from 'react-router-dom'
// import background from "https://i.pinimg.com/originals/7e/b0/1e/7eb01e6c467d53cc1bc24a26df240751.jpg";



const Home = () => {
    return (
    //    <div style={{ backgroundImage: 'url("https://i.pinimg.com/originals/7e/b0/1e/7eb01e6c467d53cc1bc24a26df240751.jpg")'}}>
    <div id="home-container">
       <h1>Welcome to Fun Facts about the US Army</h1>
        <h2 className='center'>Please select a button to discover fun facts about US Army history</h2>
    <div className="button-container">
        <Link to='postOne'><button>The Draft</button></Link>
        <Link to='postTwo'><button>African Americans in the Army</button></Link>
        <Link to='postThree'><button>Bradley Fighting Vehicle</button></Link>
    </div>
    </div>
    )
  }
  
  export default (Home)