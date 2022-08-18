import React, { useEffect } from "react";
import image1 from "./assets/1.MISSKILlL.jpg";

import SmallImage from "./compontents/smallImage";
import NavBar from "./compontents/navBar";
import Video from "./compontents/Video";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://widgetv3.bandsintown.com/main.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div className="w-full bg-MKblack pt-12 pb-8">
        <NavBar />
        <main className="box-content md:space-y-10 space-y-5">
          <div>
            <img
              className=""
              title="socal link"
              alt="socal link"
              src={image1}
            />
          </div>
          <div className="flex md:space-x-10 space-x-5">
            <SmallImage />
          </div>
          <div className="flex justify-center">
            <a
              href="https://open.spotify.com/artist/64poZmeKnYeZ2KpU0lsfKm"
              target={"blank"}
            >
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="flex-1 inline-block px-6 py-2.5 bg-tertiary text-white font-medium leading-tight uppercase rounded shadow-md hover:brightness-50 hover:shadow-lg"
              >
                <span>
                  <svg
                    className="object-cover max-w-max h-12 py-2 inline"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="spotify"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                    ></path>
                  </svg>
                  <p></p>Follow
                </span>
              </button>
            </a>
          </div>
          <Video />
          {/* <div className="table w-full">
            
            <div className="row flex flex-row w-full text-highlight hover:brightness-125 hover:bg-MKblack">
              <div className="md:flex md:flex-1 md:flex-row w-full">
                <div className="w-full">18/12/1995</div>
                <div className="w-full">The Stable</div>
                <div className="w-full">Bristol</div>
              </div>
              <div className="flex md:flex-row flex-col md:space-x-2 justify-center w-60 space-y-2 md:space-y-0">
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="flex-1 inline-block px-6 py-2.5 bg-highlight text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:brightness-50 hover:shadow-lg focus:brightness-50 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Tickets
                </button>
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="flex-1 inline-block px-6 py-2.5 bg-highlight text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:brightness-50 hover:shadow-lg focus:brightness-50 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                >
                  RSVP
                </button>
              </div>
            </div>
          </div> */}
          {/* eslint-disable */}
          <a
            className="bit-widget-initializer"
            data-artist-name="id_15250933"
            data-background-color="rgba(41,41,41,1)"
            data-separator-color="rgba(229,229,229,1)"
            data-text-color="rgba(230,230,230,1)"
            data-font="Helvetica"
            data-auto-style="true"
            data-display-local-dates="false"
            data-local-dates-position="tab"
            data-display-past-dates="true"
            data-display-details="false"
            data-display-lineup="false"
            data-display-start-time="false"
            data-social-share-icon="false"
            data-display-limit="all"
            data-date-format=""
            data-date-orientation="horizontal"
            data-date-border-color="#08C3BA"
            data-date-border-width="1px"
            data-date-border-radius="10px"
            data-event-ticket-cta-size="medium"
            data-event-ticket-text="TICKETS"
            data-event-ticket-icon="false"
            data-event-ticket-cta-text-color="#FFFFFF"
            data-event-ticket-cta-bg-color="#08C3BA"
            data-event-ticket-cta-border-color="#08C3BA"
            data-event-ticket-cta-border-width="0px"
            data-event-ticket-cta-border-radius="4px"
            data-sold-out-button-text-color="#FFFFFF"
            data-sold-out-button-background-color="#9B9B9B"
            data-sold-out-button-border-color="#08C3BA"
            data-sold-out-button-clickable="true"
            data-event-rsvp-position="left"
            data-event-rsvp-cta-size="medium"
            data-event-rsvp-text="SET REMINDER"
            data-event-rsvp-icon="false"
            data-event-rsvp-cta-text-color="#08C3BA"
            data-event-rsvp-cta-bg-color="#FFFFFF"
            data-event-rsvp-cta-border-color="#08C3BA"
            data-event-rsvp-cta-border-width="1px"
            data-event-rsvp-cta-border-radius="4px"
            data-follow-section-position="top"
            data-follow-section-alignment="center"
            data-follow-section-header-text="Get updates on new shows, new music, and more."
            data-follow-section-cta-size="medium"
            data-follow-section-cta-text="FOLLOW"
            data-follow-section-cta-icon="true"
            data-follow-section-cta-text-color="#FFFFFF"
            data-follow-section-cta-bg-color="#08C3BA"
            data-follow-section-cta-border-color="#08C3BA"
            data-follow-section-cta-border-width="0px"
            data-follow-section-cta-border-radius="4px"
            data-play-my-city-position="hidden"
            data-play-my-city-alignment="Center"
            data-play-my-city-header-text="Don’t see a show near you?"
            data-play-my-city-cta-size="medium"
            data-play-my-city-cta-text="REQUEST A SHOW"
            data-play-my-city-cta-icon="true"
            data-play-my-city-cta-text-color="#FFFFFF"
            data-play-my-city-cta-bg-color="#08C3BA"
            data-play-my-city-cta-border-color="#08C3BA"
            data-play-my-city-cta-border-width="0px"
            data-play-my-city-cta-border-radius="4px"
            data-language="en"
            data-widget-width=""
            data-div-id=""
            data-app-id=""
            data-affil-code="undefined"
            data-bit-logo-position=""
            data-bit-logo-color="#CCCCCC"
          ></a>
          {/* eslint-enable */}
          <div className="grid grid-cols-3 text-white">
            <div className="col"></div>
            <div className="col">
              <small className="block">Contact:</small>
              <small className="block">
                Management & Bookings: summer@crosstownmanagement.com
              </small>
            </div>
            <div className="col"></div>
          </div>
        </main>
      </div>
      {/* <footer className="text-primary w-full bg-footerBlack fixed bottom-0 h-12">
        
      </footer> */}
    </>
  );
}

export default App;
