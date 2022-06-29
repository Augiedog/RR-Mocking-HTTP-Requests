import React, { useEffect, useState} from 'react'
import './App.css'


function App() {
  const [gitHubName, setGitHubName] = useState('')
  const [gitHubUrl, setGitHubUrl] = useState('')
  const [gitHubImg, setGitHubImg] = useState('')


  useEffect(() => {
    fetch('https://api.github.com/users/Augiedog')
    .then(res => res.json())
    .then(data => {
      setGitHubName(data.name)
      setGitHubUrl(data.html_url)
      setGitHubImg(data.avatar_url)
      // url
      // image
    })
  }, [])

  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>{gitHubName}</h2>
      {/* <input type='button' onClick={`window.location.herf='${gitHubUrl}'`} value='To Profile' /> */}
      <a href={gitHubUrl} target='blank'><button>link to {gitHubName}</button></a>
      <img src={gitHubImg} alt='pic' />
    </div>
  );
}

export default App;
