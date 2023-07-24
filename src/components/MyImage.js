// import React, { useState } from "react";
// import styled from "styled-components";

// const MyImage = ({ imgs = [{ url: "" }] }) => {
//   const [mainImage, setMainImage] = useState(imgs[0]);

//   return (
//     <Wrapper>
//       <div className="grid grid-four-column">
//         {imgs.map((curElm, index) => {
//           return (
//             <figure>
//               <img
//                 src={curElm.url}
//                 alt={curElm.filename}
//                 className="box-image--style"
//                 key={index}
//                 onClick={() => setMainImage(curElm)}
//               />
//             </figure>
//           );
//         })}
//       </div>
//       {/* 2nd column  */}

//       <div className="main-screen">
//         <img src={mainImage.url} alt={mainImage.filename} />
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   display: grid;
//   grid-template-columns: 0.4fr 1fr;
//   gap: 1rem;

//   .grid {
//     flex-direction: row;
//     justify-items: center;
//     align-items: center;
//     width: 100%;
//     gap: 1rem;
//     /* order: 2; */

//     img {
//       max-width: 100%;
//       max-height: 100%;
//       background-size: cover;
//       object-fit: contain;
//       cursor: pointer;
//       box-shadow: ${({ theme }) => theme.colors.shadow};
//     }
//   }

//   .main-screen {
//     display: grid;
//     place-items: center;
//     order: 1;
//     img {
//       max-width: 100%;
//       height: auto;
//       box-shadow: ${({ theme }) => theme.colors.shadow};
//     }
//   }
//   .grid-four-column {
//     grid-template-columns: 1fr;
//     grid-template-rows: repeat(4, 1fr);
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     display: flex;
//     flex-direction: column;
//     order: 1;

//     .grid-four-column {
//       grid-template-rows: 1fr;
//       grid-template-columns: repeat(4, 1fr);
//     }
//   }
// `;

// export default MyImage;

// import the latest version of "react-image-magnify" (if available)
import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactImageMagnify from "react-image-magnify";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
      pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {imgs.map((curElm, index) => (
            <div key={index} onClick={() => setMainImage(curElm)}>
              <img src={curElm.url} alt={curElm.filename} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="main-screen">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: mainImage.filename,
              isFluidWidth: true,
              src: mainImage.url,
            },
            largeImage: {
              src: mainImage.url,
              width: 1200,
              height: 1800,
            },
            enlargedImageContainerStyle: {
              zIndex: 9999,
            },
          }}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .slider-container {
    .slick-slider {
      height: 100%;
      display: flex;
      align-items: center;

      .slick-slide {
        padding: 0 0.5rem;
        cursor: pointer;

        img {
          max-width: 100%;
          max-height: 100%;
          background-size: cover;
          object-fit: contain;
          box-shadow: ${({ theme }) => theme.colors.shadow};
        }
      }
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;

    .slider-container {
      .slick-slider {
        flex-direction: row;

        .slick-slide {
          padding: 0;
        }
      }
    }
  }
`;

const Arrow = styled.div`
  // Arrow styling code...
`;

export default MyImage;




