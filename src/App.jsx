import { Toaster } from 'react-hot-toast'
import './App.css'
import VideoUpload from './components/VideoUpload'
import { useState } from 'react'

function App() {

  const [videoId, setVideoId] = useState('9fb4c483-0856-486f-a2f1-178c4304b568')

  return (
    <>
      <Toaster />
      <div className='flex flex-col items-center space-y-9 justify-center py-10'>
        <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-100">
          Video Streaming App
        </h1>

        <div>
          <h1 className='text-white text-3xl font-bold'>Playing videos</h1>
          <video
            className='w-[900px] mt-5'
            src={`http://localhost:8081/api/v1/videos/stream/range/${videoId}`}
            autoPlay
            controls
          />
        </div>

        <VideoUpload />
      </div>
    </>
  )
}

export default App
