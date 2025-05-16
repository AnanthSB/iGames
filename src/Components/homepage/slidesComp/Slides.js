import React, { useEffect } from "react";
import { useState } from "react";
import "./slides.css";
import slide1 from "../../../assets/sliderAssetts/slide1.jpg";
import slide2 from "../../../assets/sliderAssetts/slide2.jpg";
import slide3 from "../../../assets/sliderAssetts/slide3.jpg";
import slide4 from "../../../assets/sliderAssetts/slide4.jpg";
import slide5 from "../../../assets/sliderAssetts/slide5.png";
// import slide5 from "../../../assets/sliderAssetts/slide5.jpg";
const slides = [slide1, slide2, slide3];

export default function Slides() {
  const [slidesList, setSlidesLis] = useState([...slides]);
  const [slideImg, setSlideImg] = useState(slidesList[0]);
  const [slider, setSlider] = useState("slideImg");

  const onClickfunc = () => {};
  useEffect(() => {
    const elem = document.getElementsByClassName("slideImg")[0];
    setInterval(() => {
      elem.scroll(elem.scrollLeft + 1187, 0);
    }, 1000);
  }, []);

  const onClickFunc = (e) => {
    setSlideImg(slidesList[parseInt(e.target.id) - 1]);
  };
  return (
    <>
      <div className="relative flex flex-col items-center justify-center py-8 text-white bg-black sliderContainer">
        <div
          className={`${slider} relative flex items-center justify-start overflow-x-auto text-black bg-white scroll-smooth`}
          style={{
            width: "1187px",
            height: "320px",
            boxShadow: "white 0px 0px 5px 0px",
          }}
        >
          <img
            src={slide1}
            alt="slide1"
            style={{ minWidth: "1187px", height: "320px" }}
          />
          <img
            src={slide2}
            alt="slide2"
            style={{ minWidth: "1187px", height: "320px" }}
          />
          <img
            src={slide3}
            alt="slide3"
            style={{ minWidth: "1187px", height: "320px" }}
          />
          <img
            src={slide4}
            alt="slide4"
            style={{ minWidth: "1187px", height: "320px" }}
          />
          {/* <img src={slide5} alt="slide5" style={{minWidth:"1187px",height:"320px"}}/> */}
        </div>
        <div
          className="flex flex-row items-center justify-center sliderButtons"
          style={{ position: "absolute", bottom: "32px", width: "1187px" }}
        >
          <span
            id="1"
            className="w-10 h-1 mx-1 my-1 border rounded-full cursor-pointer"
            onClick={onClickFunc}
            style={{ borderColor: "grey", backgroundColor: "grey" }}
          ></span>
          <span
            id="2"
            className="w-10 h-1 mx-1 my-1 border rounded-full cursor-pointer"
            onClick={onClickFunc}
            style={{ borderColor: "grey", backgroundColor: "grey" }}
          ></span>
          <span
            id="3"
            className="w-10 h-1 mx-1 my-1 border rounded-full cursor-pointer"
            onClick={onClickFunc}
            style={{ borderColor: "grey", backgroundColor: "grey" }}
          ></span>
          <span
            id="4"
            className="w-10 h-1 mx-1 my-1 border rounded-full cursor-pointer"
            onClick={onClickFunc}
            style={{ borderColor: "grey", backgroundColor: "grey" }}
          ></span>
        </div>
      </div>
    </>
  );
}
