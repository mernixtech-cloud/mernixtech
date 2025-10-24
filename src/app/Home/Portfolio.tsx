import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Btn from "@/components/Btn";

interface Slide {
  img: string;
  title: string;
  desc: string;
}


// Custom circular arrow components
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      aria-label="Next Slide"
      className="hidden md:flex absolute right-[-20px] top-1/2 -translate-y-1/2 z-10
                 w-10 h-10 rounded-full bg-[#007aff] text-white justify-center items-center
                 hover:bg-[#005fcc] shadow-lg transition-all duration-300"
    >
      ▶
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      aria-label="Previous Slide"
      className="hidden md:flex absolute left-[-20px] top-1/2 -translate-y-1/2 z-10
                 w-10 h-10 rounded-full bg-[#007aff] text-white justify-center items-center
                 hover:bg-[#005fcc] shadow-lg transition-all duration-300"
    >
      ◀
    </button>
  );
};

const Portfolio: React.FC = () => {

  const settings: Settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true, // show arrows on desktop
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };


  const slides: Slide[] = [
    {
      img: "/assets/review.png",
      title: "Lorem, ipsum dolor.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet voluptas ducimus doloremque culpa.",
    },
    {
      img: "/assets/review.png",
      title: "Creative Works",
      desc: "Distinctive designs and powerful concepts that redefine industry standards.",
    },
    {
      img: "/assets/review.png",
      title: "Premium Branding",
      desc: "Delivering captivating brand visuals that connect emotionally with your audience.",
    },
    {
      img: "/assets/review.png",
      title: "Design Excellence",
      desc: "We bring visions to life through precision and creativity.",
    },
  ];

  return (
    <section className="w-full pt-4 bg-[#e3e3e3] flex justify-center items-center flex-col ">
      <h2 className="text-2xl font-semibold mb-2">Portfolio</h2>
      <p className="text-gray-600 mb-4">Setting Industry Standards</p>

      {/* slides */}
      <div  className="w-[90%] pt-[20px] pb-[25px] max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-2">
              <div className="relative bg-white w-full h-[50vh] lg:h-[250px] xl:h-[300px] rounded-lg shadow-lg overflow-hidden flex justify-center items-center transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 p-3 bg-[rgba(0,0,0,0.6)] text-white w-full">
                  <h3 className="text-lg font-bold">{slide.title}</h3>
                  <p className="text-sm">{slide.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
        <Btn text="and 100+ more in portfolio" back="#007aff" height="44px" width="189px" fontSize="13px" borderRadius="50px" color="#ffff" className="shadow-lg md:w-[250px] lg:text-[18px] cursor-pointer outline-0 mt-2 mb-[20px]"/>
    </section>
  );
};

export default Portfolio;