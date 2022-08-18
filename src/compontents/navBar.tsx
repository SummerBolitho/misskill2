import React from "react";
import logo from "../assets/mklogoblack.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import spotify from "../assets/spotify.svg";
import appleMusic from "../assets/applemusic.svg";
import bandcamp from "../assets/bandcamp.svg";

const links = [
  {
    img: bandcamp,
    url: "",
  },{
    img: instagram,
    url: "https://www.instagram.com/misskill_band/",
  },
  {
    img: facebook,
    url: "https://www.facebook.com/misskillband",
  },
  {
    img: youtube,
    url: "https://www.youtube.com/channel/UCbXr6PjhkpkTy6EnHA38mKQ",
  },
  {
    img: spotify,
    url: "https://open.spotify.com/artist/64poZmeKnYeZ2KpU0lsfKm",
  },
  {
    img: appleMusic,
    url: "",
  }
];

const imgs = links.map((x) => (
  <a href={x.url} target="blank"  role="button">
    <img
      className="object-cover max-w-max h-12 py-2 mx-2 float-right hover:cursor-pointer"
      src={x.img}
      title="socal link"
      alt="socal link"
    ></img> 
  
  </a>
));

function navBar() {
  return (
    <nav className="bg-tertiary text-white fixed top-0 left-0 w-full h-12 z-50">
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
  );
}

export default navBar;
