import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
      pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  const feedbacks = [
    {
      id: 1,
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      feedback:
        "I recently bought a gift from this shop and was pleasantly surprised by the quality of the product and the excellent customer service. Highly recommend!",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      feedback:
        "I've been a regular customer of this gift shop for years and have always been impressed by their unique selection of products and personalized service.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      feedback:
        "I received a gift from this shop and was so impressed by the packaging and quality of the product. Definitely will be shopping here for gifts in the future!",
    },
    {
      id: 4,
      name: "Mike Johnson",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      feedback:
        "I received a gift from this shop and was so impressed by the packaging and quality of the product. Definitely will be shopping here for gifts in the future!",
    },
    {
      id: 5,
      name: "Mike Johnson",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      feedback:
        "I received a gift from this shop and was so impressed by the packaging and quality of the product. Definitely will be shopping here for gifts in the future!",
    },
    {
      id: 6,
      name: "Mike Johnson",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      feedback:
        "I received a gift from this shop and was so impressed by the packaging and quality of the product. Definitely will be shopping here for gifts in the future!",
    },
    {
      id: 7,
      name: "Mike Johnson",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      feedback:
        "I received a gift from this shop and was so impressed by the packaging and quality of the product. Definitely will be shopping here for gifts in the future!",
    },
    {
      id: 8,
      name: "Mike Johnson",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      feedback:
        "I received a gift from this shop and was so impressed by the packaging and quality of the product. Definitely will be shopping here for gifts in the future!",
    },
    {
      id: 9,
      name: "Mike Johnson",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      feedback:
        "I received a gift from this shop and was so impressed by the packaging and quality of the product. Definitely will be shopping here for gifts in the future!",
    },
    {
      id: 10,
      name: "Mike Johnson",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      feedback:
        "I received a gift from this shop and was so impressed by the packaging and quality of the product. Definitely will be shopping here for gifts in the future!",
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl">
          Customer Feedback
        </h2>
        <div className="mt-12">
          <Slider {...settings}>
            {feedbacks.map((feedback) => (
              <div key={feedback.id}>
                <div className="max-w-xl mx-auto">
                  <img
                    className="w-22 h-22 rounded-full mr-4 mb-3"
                    src={feedback.image}
                    alt={feedback.name}
                  />
                  <p className="text-2xl text-gray-500 mb-4">
                    {feedback.feedback}
                  </p>
                  <p className="text-base-1 font-medium text-gray-900">
                    {feedback.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
