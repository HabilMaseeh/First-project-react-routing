import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    function handleClick () {
        navigate('/about');
    }

  return (
    <div>
        <h1>
            This is Home Page <br />
            <button onClick={handleClick}>
                Move to About Page
            </button>
        </h1>
    </div>
  )
}

export default Home