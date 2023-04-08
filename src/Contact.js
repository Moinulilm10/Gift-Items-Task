// import styled from "styled-components";

// const Contact = () => {
//   const Wrapper = styled.section`
//     padding: 9rem 0 5rem 0;
//     text-align: center;

//     .container {
//       margin-top: 6rem;

//       .contact-form {
//         max-width: 50rem;
//         margin: auto;

//         .contact-inputs {
//           display: flex;
//           flex-direction: column;
//           gap: 3rem;

//           input[type="submit"] {
//             cursor: pointer;
//             transition: all 0.2s;

//             &:hover {
//               background-color: ${({ theme }) => theme.colors.white};
//               border: 1px solid ${({ theme }) => theme.colors.btn};
//               color: ${({ theme }) => theme.colors.btn};
//               transform: scale(0.9);
//             }
//           }
//         }
//       }
//     }
//   `;

//   return (
//     <Wrapper>
//       <h2 className="common-heading">Contact page</h2>

//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
//         width="100%"
//         height="400"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"></iframe>

//       <div className="container">
//         <div className="contact-form">
//           <form
//             action="https://formspree.io/f/xeqdgwnq"
//             method="POST"
//             className="contact-inputs">
//             <input
//               type="text"
//               placeholder="username"
//               name="username"
//               required
//               autoComplete="off"
//             />

//             <input
//               type="email"
//               name="Email"
//               placeholder="Email"
//               autoComplete="off"
//               required
//             />

//             <textarea
//               name="Message"
//               cols="30"
//               rows="10"
//               required
//               autoComplete="off"
//               placeholder="Enter you message"></textarea>

//             <input type="submit" value="send" />
//           </form>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Contact;


import React from "react";
// import backgroundImage from "../public/images/contact-background-img-2.jpg";

const Contact = () => {
  return (
    <>
      <section
        className="bg-gray-100 py-12 h-screen"
        style={{
          // backgroundImage: `url(${backgroundImage})`,
          backgroundOpacity: "0.4",
          backgroundSize: "cover",
          paddingTop: "80px",
        }}
      >
        <div className="container mx-auto px-4 py-4 bg-white bg-opacity-60">
          <h2 className="text-4xl font-bold m-2 text-center">Contact Us</h2>
          <form
            className="w-full max-w-lg mx-auto mt-6"
            method="POST"
            action="https://formspree.io/f/mqkoyrvn"
          >
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="firstName"
                  className="block text-gray-900 font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-3 py-2 leading-tight border rounded-md appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  htmlFor="lastName"
                  className="block text-gray-900 font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-3 py-2 leading-tight border rounded-md appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-900 font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 leading-tight border rounded-md appearance-none focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-900 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full px-3 py-2 leading-tight border rounded-md appearance-none focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline mb-4"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

