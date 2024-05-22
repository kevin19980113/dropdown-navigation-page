import clientAudioImg from "../assets/client-audiophile.svg";
import clientDatabizImg from "../assets/client-databiz.svg";
import clientMakerImg from "../assets/client-maker.svg";
import clientMeetImg from "../assets/client-meet.svg";
import mainHeroImg from "../assets/image-hero-desktop.png";
import mainHeroMobileImg from "../assets/image-hero-mobile.png";
import { useMediaQuery } from "react-responsive";

export default function Main() {
  const isMobile = useMediaQuery({ maxWidth: "768px" });
  return (
    <div className="main">
      <div className="content">
        <h1>
          Make
          {!isMobile && <br />} remote work
        </h1>
        <p>
          Get your team in sync, no matter your location.
          {!isMobile && <br />}
          Streamline processes,create team rituals, and
          {!isMobile && <br />}
          watch productivity soar.
        </p>
        <button>Learn more</button>
        <div className="client-image-container">
          <figure>
            <img src={clientDatabizImg} alt="client Databiz image" />
          </figure>
          <figure>
            <img src={clientAudioImg} alt="client Audio image" />
          </figure>
          <figure>
            <img src={clientMeetImg} alt="client Meet Image" />
          </figure>

          <figure>
            <img src={clientMakerImg} alt="client Maker image" />
          </figure>
        </div>
      </div>

      <div className="hero">
        <picture className="hero-image-container">
          <img
            src={isMobile ? mainHeroMobileImg : mainHeroImg}
            alt="main hero image"
            className="hero-image"
          />
        </picture>
      </div>
    </div>
  );
}
