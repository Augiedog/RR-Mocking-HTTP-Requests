import React, { useEffect, useState} from 'react'
import './App.css'


function App() {
  const [gitHubName, setGitHubName] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/Augiedog')
    .then(res => res.json())
    .then(data => {
      setGitHubName(data.name)
      // url
      // image
    })
  }, [])

  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>{gitHubName}</h2>
    </div>
  );
}

export default App;
