// import { useState } from "react";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
// import './Banner.css'

// const slideImages = [
//   "https://img.freepik.com/free-photo/3d-gift-box-scene-with-clouds_173207-1895.jpg?w=1060&t=st=1680812350~exp=1680812950~hmac=0faa919e1e4b10570362b3cdc8c17d6c0a9e206068e81253e8fb92eea85a9635",
//   "https://img.freepik.com/free-vector/flat-11-11-shopping-day-sale-banner-template_23-2149724051.jpg?w=1060&t=st=1680895153~exp=1680895753~hmac=b45ce2fa1b9411e109fb2f46b1f3de8137d666e772c1a291eaae892daaef04d1",
//   "https://img.freepik.com/premium-photo/merry-christmas-new-year-background_41050-4913.jpg?size=626&ext=jpg",
// ];

// function Banner() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const handleSlideChange = (currentIndex) => {
//     setCurrentIndex(currentIndex);
//   };

//   return (
//     <div className="slide-container">
//       <Slide
//         easing="ease"
//         duration={5000}
//         transitionDuration={1000}
//         arrows={false}
//         pauseOnHover={true}
//         onChange={handleSlideChange}
//         indicators={true}
//       >
//         {slideImages.map((image, index) => (
//           <div className="each-slide" key={index}>
//             <div
//               className="w-full h-screen bg-center bg-cover opacity-100"
//               style={{ backgroundImage: `url(${image})` }}
//             >
//               <div className="container mx-auto px-4 pt-20 pb-40">
//                 <h1 className="text-5xl lg:text-7xl font-bold uppercase leading-tight text-center text-white">
//                   Welcome to Gift-Items
//                 </h1>
//                 {/* <button className="bg-white text-gray-800 font-bold rounded-full px-6 py-3 mt-4 uppercase tracking-wider hover:bg-gray-100">
//                   Shop Now
//                 </button> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slide>
//     </div>
//   );
// }

// export default Banner;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    {
      id: 1,
      url: "https://img.freepik.com/free-vector/black-friday-background-with-realistic-3d-black-gift_1361-3555.jpg?size=626&ext=jpg&ga=GA1.1.675701629.1680780243&semt=ais",
      alt: "Banner Image 1",
    },
    {
      id: 2,
      url: "https://img.freepik.com/free-vector/flat-11-11-shopping-day-sale-banner-template_23-2149724051.jpg?w=1060&t=st=1680895153~exp=1680895753~hmac=b45ce2fa1b9411e109fb2f46b1f3de8137d666e772c1a291eaae892daaef04d1",
      alt: "Banner Image 2",
    },
    {
      id: 3,
      url: "https://img.freepik.com/premium-photo/merry-christmas-new-year-background_41050-4913.jpg?size=626&ext=jpg",
      alt: "Banner Image 3",
    },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img
              className="w-full object-cover h-screen"
              src={image.url}
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
