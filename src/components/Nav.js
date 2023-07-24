// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { CgMenu, CgClose } from "react-icons/cg";

// const Nav = () => {
//   const [menuIcon, setMenuIcon] = useState();

//   const Nav = styled.nav`
//     .navbar-lists {
//       display: flex;
//       gap: 4.8rem;
//       align-items: center;

//       .navbar-link {
//         &:link,
//         &:visited {
//           display: inline-block;
//           text-decoration: none;
//           font-size: 1.8rem;
//           font-weight: 500;
//           text-transform: uppercase;
//           color: ${({ theme }) => theme.colors.black};
//           transition: color 0.3s linear;
//         }

//         &:hover,
//         &:active {
//           color: ${({ theme }) => theme.colors.helper};
//         }
//       }
//     }

//     .mobile-navbar-btn {
//       display: none;
//       background-color: transparent;
//       cursor: pointer;
//       border: none;
//     }

//     .mobile-nav-icon[name="close-outline"] {
//       display: none;
//     }

//     .close-outline {
//       display: none;
//     }

//     .cart-trolley--link {
//       position: relative;

//       .cart-trolley {
//         position: relative;
//         font-size: 3.2rem;
//       }

//       .cart-total--item {
//         width: 2.4rem;
//         height: 2.4rem;
//         position: absolute;
//         background-color: #000;
//         color: #000;
//         border-radius: 50%;
//         display: grid;
//         place-items: center;
//         top: -20%;
//         left: 70%;
//         background-color: ${({ theme }) => theme.colors.helper};
//       }
//     }

//     .user-login--name {
//       text-transform: capitalize;
//     }

//     .user-logout,
//     .user-login {
//       font-size: 1.4rem;
//       padding: 0.8rem 1.4rem;
//     }

//     @media (max-width: ${({ theme }) => theme.media.mobile}) {
//       .mobile-navbar-btn {
//         display: inline-block;
//         z-index: 9999;
//         border: ${({ theme }) => theme.colors.black};

//         .mobile-nav-icon {
//           font-size: 4.2rem;
//           color: ${({ theme }) => theme.colors.black};
//         }
//       }

//       .active .mobile-nav-icon {
//         display: none;
//         font-size: 4.2rem;
//         position: absolute;
//         top: 30%;
//         right: 10%;
//         color: ${({ theme }) => theme.colors.black};
//         z-index: 9999;
//       }

//       .active .close-outline {
//         display: inline-block;
//       }

//       .navbar-lists {
//         width: 100vw;
//         height: 100vh;
//         position: absolute;
//         top: 0;
//         left: 0;
//         background-color: #fff;

//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;

//         visibility: hidden;
//         opacity: 0;
//         transform: translateX(100%);
//         /* transform-origin: top; */
//         transition: all 3s linear;
//       }

//       .active .navbar-lists {
//         visibility: visible;
//         opacity: 1;
//         transform: translateX(0);
//         z-index: 999;
//         transform-origin: right;
//         transition: all 3s linear;

//         .navbar-link {
//           font-size: 4.2rem;
//         }
//       }
//       .cart-trolley--link {
//         position: relative;

//         .cart-trolley {
//           position: relative;
//           font-size: 5.2rem;
//         }

//         .cart-total--item {
//           width: 4.2rem;
//           height: 4.2rem;
//           font-size: 2rem;
//         }
//       }

//       .user-logout,
//       .user-login {
//         font-size: 2.2rem;
//         padding: 0.8rem 1.4rem;
//       }
//     }
//   `;

//   return (
//     <Nav>
//       <div className={menuIcon ? "navbar active" : "navbar"}>
//         <ul className="navbar-lists">
//           <li>
//             <NavLink
//               to="/"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}
//             >
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/products"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}
//             >
//               Products
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}
//             >
//               Contact
//             </NavLink>
//           </li>
//         </ul>

//         {/* two button for open and close of menu */}
//         <div className="mobile-navbar-btn">
//           <CgMenu
//             name="menu-outline"
//             className="mobile-nav-icon"
//             onClick={() => setMenuIcon(true)}
//           />
//           <CgClose
//             name="close-outline"
//             className="mobile-nav-icon close-outline"
//             onClick={() => setMenuIcon(false)}
//           />
//         </div>
//       </div>
//     </Nav>
//   );
// };

// export default Nav;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  CgMenu,
  CgClose,
  CgSearch,
  CgHeart,
  CgShoppingCart,
  CgLogOut,
  CgLogIn,
} from "react-icons/cg";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const Navigation = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #fff;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .search-bar {
      display: flex;
      align-items: center;

      input {
        padding: 0.9rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-right: 1rem;
      }

      button {
        background-color: lightcoral;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    }

    .search-icon {
      font-size: 2rem;
      margin-right: 0.1rem;
    }

    .wishlist-icon,
    .cart-icon {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.black};
      margin-left: 1rem;
      cursor: pointer;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
      background-color: transparent;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .navbar-lists {
        flex-direction: column;
        gap: 2rem;
        padding: 2rem 1rem;
        position: absolute;
        top: 4rem;
        left: 0;
        width: 100%;
        background-color: #fff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        z-index: 999;

        &.hidden {
          display: none;
        }

        .navbar-link {
          font-size: 2.2rem;
        }
      }

      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};
        position: relative;

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      //?
      .category-dropdown {
        position: absolute;
        top: 4rem;
        right: 1rem;
        background-color: #fff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        z-index: 999;
        width: 80%;
        display: ${showCategoryDropdown ? "flex" : "none"};
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
      }

      .close-btn {
        align-self: flex-end;
        font-size: 1.6rem;
        cursor: pointer;
      }
    }

    .category-dropdown {
      position: absolute;
      top: 9rem;
      left: 870px;
      background-color: #fff;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      z-index: 999;
      // width: 0%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }

    .close-btn {
      align-self: flex-end;
      font-size: 1.6rem;
      cursor: pointer;
    }
  `;

  const handleCategoryClick = () => {
    setShowCategoryDropdown(!showCategoryDropdown);
  };

  return (
    <>
      <Navigation>
        <div className={menuIcon ? "navbar active" : "navbar"}>
          <div>
            <ul className={`navbar-lists ${menuIcon ? "active" : "hidden"}`}>
              {" "}
              <li className="search-bar">
                {searchOpen ? (
                  <>
                    <input type="text" placeholder="Search..." />
                    <button onClick={() => setSearchOpen(false)}>Close</button>
                  </>
                ) : (
                  <CgSearch
                    className="navbar-link search-icon"
                    onClick={() => setSearchOpen(true)}
                  />
                )}
              </li>
              <li>
                <NavLink
                  to="/"
                  className="navbar-link"
                  onClick={() => setMenuIcon(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="navbar-link"
                  onClick={() => setMenuIcon(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="navbar-link"
                  onClick={() => setMenuIcon(false)}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="navbar-link"
                  onClick={() => handleCategoryClick()}
                >
                  Category
                </NavLink>
                {showCategoryDropdown && (
                  <ul className="category-dropdown">
                    <span
                      className="close-btn"
                      onClick={() => setShowCategoryDropdown(false)}
                    >
                      <CgClose />
                    </span>
                    <li>
                      <NavLink
                        to="/products"
                        className="navbar-link"
                        onClick={() => setMenuIcon(false)}
                      >
                        Mobile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products"
                        className="navbar-link"
                        onClick={() => setMenuIcon(false)}
                      >
                        Laptop
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products"
                        className="navbar-link"
                        onClick={() => setMenuIcon(false)}
                      >
                        Watch
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products"
                        className="navbar-link"
                        onClick={() => setMenuIcon(false)}
                      >
                        Accessories
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="navbar-link"
                  onClick={() => setMenuIcon(false)}
                >
                  Contact
                </NavLink>
              </li>
              <CgHeart className="wishlist-icon" />
              <CgShoppingCart className="cart-icon" />
              {isLoggedIn ? (
                <button
                  className="user-logout"
                  onClick={() => setIsLoggedIn(false)}
                >
                  <CgLogOut />
                  Logout
                </button>
              ) : (
                <button
                  className="user-login"
                  onClick={() => setIsLoggedIn(true)}
                >
                  <CgLogIn />
                  Login
                </button>
              )}
            </ul>
          </div>

          {/* two button for open and close of menu */}
          <div className="mobile-navbar-btn">
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(true)}
            />
            <CgClose
              name="close-outline"
              className="mobile-nav-icon close-outline"
              onClick={() => setMenuIcon(false)}
            />
          </div>
        </div>
      </Navigation>
    </>
  );
};

export default Nav;
