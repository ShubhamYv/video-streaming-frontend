import './App.css'
import VideoUpload from './components/VideoUpload'

function App() {

  return (
    <>
      <div className='flex flex-col items-center space-y-9 justify-center py-10'>
        <h1 className="text-5xl font-extrabold text-gray-700 dark:text-gray-100">
          Welcome to video Streaming Application
        </h1>

        <VideoUpload />
      </div>
    </>
  )
}

export default App
