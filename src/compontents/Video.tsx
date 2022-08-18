import React from "react";

function Video() {
  return (
    <div
      className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden z-0"
      style={{ paddingTop: "56.25%" }}
    >
      <iframe
        className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/avv9vSoMYlU"
        title="YouTube video player"
        allowFullScreen
        data-gtm-yt-inspected-2340190_699="true"
        id="240632615"
      ></iframe>
    </div>
  );
}

export default Video;
