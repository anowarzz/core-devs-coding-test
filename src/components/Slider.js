import { useEffect, useState } from "react";

// All the images for the slider
import bg01 from "../assets/images/bg01.jpg";
import bg02 from "../assets/images/bg02.jpg";
import bg03 from "../assets/images/bg03.jpg";

export default function Slider() {

  // state to store the current image to display in the slider
  let [slide, setSlide] = useState(bg03);


// useEffect Hook to start the slider on the first render of the webpage
  useEffect(() => {
    let delay = 7000;
    let index = 0;
    let slides = [bg01, bg02, bg03];
    const interval = setInterval(() => {
      if (index >= slides.length) index = 0;
      setSlide(slides[index]);
      index += 1;
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="simpleslide100" key={slide}>
      <div
        className="simpleslide100-item bg-img1"
        style={{
          backgroundImage: `url(${slide})`,
          animation: "fadeIn 7s infinite",
        }}
      ></div>
    </div>
  );
}
