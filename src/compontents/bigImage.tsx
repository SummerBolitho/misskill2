import React from "react";
import logo from "./assets/mklogoblack.png";
import image1 from "./assets/1.MISSKILlL.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";

import instagram from "./assets/instagram.svg";
import facebook from "./assets/facebook.svg";
import youtube from "./assets/youtube.svg";
import spotify from "./assets/spotify.svg";
import appleMusic from "./assets/applemusic.svg";

const links = [
  {
    img: instagram,
    link: "",
  },
  {
    img: facebook,
    link: "",
  },
  {
    img: youtube,
    link: "",
  },
  {
    img: spotify,
    link: "",
  },
  {
    img: appleMusic,
    link: "",
  },
];

const imgs = links.map((x) => (
  <a href="#!" role="button">
    <img
      className="object-cover max-w-max h-12 py-2 mx-2 float-right hover:cursor-pointer"
      src={x.img}
      title="socal link"
      alt="socal link"
    ></img>
  </a>
));

function App() {
  return (
    <>
      <div className="w-full bg-MKblack py-12 md:px-20">
        <nav className="bg-tertiary fixed top-0 left-0 w-full h-12 z-50">
          <div className="flex px-2 justify-between items-center">
            <div className="items-center w-full">
              <img
                className="object-cover max-w-max h-12 float-left"
                src={logo}
                title="socal link"
                alt="socal link"
              ></img>
              {imgs}
            </div>
          </div>
        </nav>

        <main className="box-content space-y-10">
          <div>
            <img
              className=""
              title="socal link"
              alt="socal link"
              src={image1}
            ></img>
          </div>
          <div className="flex space-x-10">
            <div className="flex-1">
              <img
                className=""
                title="socal link"
                alt="socal link"
                src={image4}
              ></img>
            </div>
            <div className="flex-1">
              <img
                className=""
                title="socal link"
                alt="socal link"
                src={image3}
              ></img>
            </div>
            <div className="flex-1">
              <img
                className=""
                title="socal link"
                alt="socal link"
                src={image2}
              ></img>
            </div>
          </div>
          <div
            className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden z-0"
            style={{paddingTop: "56.25%"}}
          >
            <iframe
              className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
              allowFullScreen
              data-gtm-yt-inspected-2340190_699="true"
              id="240632615"
            ></iframe>
          </div>
          <div className="table w-full">
            <div className="row flex flex-row w-full text-highlight m-2 hover:brightness-125 hover:bg-MKblack">
              <div className="md:flex md:flex-1 md:flex-row w-full">
                <div className="w-full">Date</div>
                <div className="w-full">Venue</div>
                <div className="w-full">City</div>
              </div>
              <div className="md:flex md:flex-1 space-x-2 justify-center w-full">
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block px-6 py-2.5 bg-highlight text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:brightness-50 hover:shadow-lg focus:brightness-50 focus:shadow-lg focus:outline-none focus:ring-0 active:brightness-60 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Tickets
                </button>
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block px-6 py-2.5 bg-highlight text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:brightness-50 hover:shadow-lg focus:brightness-50 focus:shadow-lg focus:outline-none focus:ring-0 active:brightness-60 active:shadow-lg transition duration-150 ease-in-out"
                >
                  RSVP
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="text-primary w-full bg-footerBlack fixed bottom-0 h-12">
        <div className="grid grid-cols-3">
          <div className="col"></div>
          <div className="col">
            <small className="block">Contact:</small>
            <small className="block">
              Management & Bookings: summer@crosstownmanagement.com
            </small>
          </div>
          <div className="col"></div>
        </div>
      </footer>
    </>
  );
}

export default App;
