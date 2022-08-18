import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

function SmallImage() {
  return (
    <>
      <div className="flex-1 hover:brightness-75">
        <img
          className=""
          title="socal link"
          alt="socal link"
          src={image3}
        ></img>
      </div>
      <div className="flex-1 hover:brightness-75">
        <img
          className=""
          title="socal link"
          alt="socal link"
          src={image4}
        ></img>
      </div>

      <div className="flex-1 hover:brightness-75">
        <img
          className=""
          title="socal link"
          alt="socal link"
          src={image2}
        ></img>
      </div>
    </>
  );
}

export default SmallImage;
