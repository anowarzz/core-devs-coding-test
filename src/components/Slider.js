import { useEffect, useMemo, useState } from "react";

// All the images for the slider
import bg01 from "../assets/images/bg01.jpg";
import bg02 from "../assets/images/bg02.jpg";
import bg03 from "../assets/images/bg03.jpg";

export default function Slider() {
// state to store the current image to display in the slider
  const [slide, setSlide] = useState(bg03);

//Memorizing the slider array to avoid re-renders of this array 
  const slides = useMemo(() => [bg01, bg02, bg03], []);

// useEffect Hook to start the slider on the first render of the webpage
  useEffect(() => {
    let index = 0;

// using setInterval function to change the slider image in every 7 seconds
    const interval = setInterval(() => {
      if (index >= slides.length) index = 0;
      setSlide(slides[index]);
      index++;
    }, 7000);
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
