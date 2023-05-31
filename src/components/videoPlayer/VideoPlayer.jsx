

function VideoPlayer() {
 const videoUrl = "https://www.youtube.com/embed/u37S3looY4M";

  return (
   
     <iframe width="60%" height="100%" src={videoUrl} title="Biographie de Francis" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  
  );
}

export default VideoPlayer