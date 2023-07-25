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
          // Set custom height for mobile screens
          customPaging: (i) => <div className="custom-dots" />,
          adaptiveHeight: true,
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
              className="w-full object-cover lg:h-screen"
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
