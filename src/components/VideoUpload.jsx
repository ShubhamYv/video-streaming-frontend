import videoLogo from "../assets/video-logo.png";
const VideoUpload = () => {
  return (
    <div>
      <form className="flex items-center space-x-6">
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
            className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
          />
        </label>
      </form>
    </div>
  );
};

export default VideoUpload;
