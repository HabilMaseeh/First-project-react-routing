import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate = useNavigate();

  function handleClick () {
    navigate('/dashboard');
  }

  return (
    <div>
        <h1>
            This is About Page <br />

            <button onClick={handleClick}>
                Move to Dashboard Page
            </button>
        </h1>
    </div>
  )
}

export default About