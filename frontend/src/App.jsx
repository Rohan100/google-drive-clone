import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState("")

  const uploadFile = async () => {
    const formData = new FormData()
    formData.append('file', file)
    const res = await axios.post('http://localhost:5000/api/files/upload', formData)
    setMessage(res.data.message)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Google Drive Clone</h1>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={uploadFile} className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
      <p>{message}</p>
    </div>
  )
}

export default App