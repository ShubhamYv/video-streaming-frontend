import { Alert, Button, Card, Label, Progress, Textarea, TextInput } from "flowbite-react";
import videoLogo from "../assets/video-logo.png";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const VideoUpload = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState(null)
  const [videoMetadata, setVideoMetadata] = useState({
    title: '',
    description: '',
  })

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const formFieldChange = (event) => {
    setVideoMetadata({
      ...videoMetadata,
      [event.target.name]: event.target.value,
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    saveVideoToServer(selectedFile, videoMetadata);
  }

  const resetFormData = () => {
    setVideoMetadata({
      title: '',
      description: ''
    });
    setSelectedFile(null)
    setUploading(false)
    setProgress(0)
  }

  const saveVideoToServer = async (video, videoMetadata) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("title", videoMetadata.title)
      formData.append("description", videoMetadata.description)
      formData.append('file', video)

      await axios.post(
        `http://localhost:8081/api/v1/videos`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: (ProgressEvent) => {
            const progress = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
            setProgress(progress);
          }
        });
      toast.success("File uploaded successfully !!")
      setMessage("File uploaded successfully")
      resetFormData();
    } catch (error) {
      console.log(error);
      setUploading(false);
      toast.error("File not uploaded")
      setMessage("File uploading failed !!")
    }
  }

  return (
    <div className="text-white">
      <Card className="flex flex-col">
        <h1>Upload videos</h1>
        <div>
          <form noValidate onSubmit={handleFormSubmit} className="flex flex-col space-y-5">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Video Title" />
              </div>

              <TextInput
                value={videoMetadata.title}
                onChange={formFieldChange}
                name="title"
                placeholder="Enter title"
              />
            </div>

            <div className="max-w-md">

              <div className="mb-2 block">
                <Label htmlFor="description" value="Video Description" />
              </div>

              <Textarea
                value={videoMetadata.description}
                onChange={formFieldChange}
                name="description"
                placeholder="Write video description..."
                required rows={4}
              />
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <div className="shrink-0">
                <img
                  className="h-16 w-16 object-cover rounded-full"
                  src={videoLogo}
                  alt="Current profile photo"
                />
              </div>

              <label className="block">
                <span className="sr-only">Choose Video File</span>
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-slate-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-violet-50 file:text-violet-700
                          hover:file:bg-violet-100"
                />
              </label>
            </div>

            <div>
              {uploading &&
                <Progress
                  progress={progress}
                  textLabel="uploading..."
                  size="lg"
                  labelProgress
                  labelText
                />
              }
            </div>

            <div>
              {message &&
                <Alert color="success" rounded withBorderAccent onDismiss={() => setMessage(null)}>
                  <span className="font-medium">Success alert! </span>
                  {message}
                </Alert>
              }
            </div>

            <div className="flex justify-center">
              <Button hidden={uploading} type="submit">Submit</Button>
            </div>

          </form>
        </div>
      </Card>
    </div>
  );
};

export default VideoUpload;
