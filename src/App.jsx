import { Toaster } from 'react-hot-toast'
import './App.css'
import VideoUpload from './components/VideoUpload'

function App() {

  return (
    <>
      <Toaster />
      <div className='flex flex-col items-center space-y-9 justify-center py-10'>
        <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-100">
          Video Streaming App
        </h1>

        <VideoUpload />
      </div>
    </>
  )
}

export default App
