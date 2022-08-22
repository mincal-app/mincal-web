import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { Link } from "gatsby"

// Markup

const StyledNavbar = styled.nav`
    z-index: 10;
    padding: 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    // Profiles Div
    .landing-logo {
      padding-left: 5rem;
      font-weight: 700;
      color: #048A81;
    }
    .profiles-div {
      z-index: 10;
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      a {
          padding: 1.8rem 0.8rem 1.8rem 0.8rem;
          text-decoration: none;
          font-weight: 500;
          transition-duration: 0.5s;
          border-bottom: 0.3rem solid rgba(0, 0, 0, 0);
          color: #04151F;
          &:hover {
            color: #048A81;
            transition-duration: 0.5s;
            border-bottom: 0.3rem solid #E2FADB;
          }
      }
    }
    .action-button {
      margin-right: 5rem;
      background: #048A81;
      color: #E2FADB;
      border-radius: 0.5rem;
      padding: 0.8rem 1.5rem;
      cursor: pointer;
      transition-duration: 0.5s;
      &:hover {
          transform: scale(1.1);
      }
    }
    .link {
      color: #048A81;
      margin-right: 2rem;
      cursor: pointer;
    }
    &#navbar {
      background-color: rgba(255, 255, 255, .8);  
      backdrop-filter: blur(1rem);
      -webkit-backdrop-filter: blur(1rem);
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      position: fixed;
      top: 0;
      z-index: 100;
      width: 100%;
      transition: top 0.3s;
    }
    &#navbar.hide-shadow {
      transition: top 0.3s;
    }
    // Hamburger Menu
    
    .menu-icon {
      position: relative;
      width: 100px;
      height: 80px;
      cursor: pointer;
      display: none;
    .menu-icon__cheeckbox {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
      z-index: 2;
      -webkit-touch-callout: none;
      position: absolute;
      opacity: 0;
    }
    div {
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 26px;
      height: 12px;
    }
    span {
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      background-color: #118AB2;
      border-radius: 3px;
      transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
      &:first-of-type {
        top: 0;
      }
      &:last-of-type {
        bottom: 0;
      }
    }
    &.active,
    .menu-icon__cheeckbox:checked + div {
      span {
        &:first-of-type {
          transform: rotate(45deg);
          top: 5px;
          background-color: #EF476F;
        }
        &:last-of-type {
          transform: rotate(-45deg);
          bottom: 5px;
          background-color: #EF476F;
        }
      }
    }
    &.active:hover span:first-of-type,
    &.active:hover span:last-of-type,
    &:hover .menu-icon__cheeckbox:checked + div span:first-of-type,
    &:hover .menu-icon__cheeckbox:checked + div span:last-of-type {
      width: 22px;
    }
    &:hover {
      
      // No need hover effect on mobile.
      @media (min-width: 1024px) {
        span:first-of-type {
          width: 26px;
        }
        span:last-of-type {
          width: 12px;
        }
      }
    }
  }
`;

const Navbar = () => {

  // Scroll Down
  // const isBrowser = typeof window !== "undefined"

  let mobileMenuActive = true;

  const isBrowser = typeof window !== "undefined";

  if (isBrowser) {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos <= 5) {
        document.getElementById("navbar").classList.add('hide-shadow');
      } else if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").classList.remove('hide-shadow');
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").classList.remove('hide-shadow');
        document.getElementById("navbar").style.top = "-80px";
      }
      prevScrollpos = currentScrollPos;
    }

  }
  // Open Menu

  const openMenu = () => {
    mobileMenuActive = mobileMenuActive !== true;
    document.getElementById("mobile-menu").classList.toggle('show-menu');
    document.getElementById("navbar").classList.toggle('hide-shadow');

    if (isBrowser) {
      window.onscroll = mobileMenuActive ? function () {
        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos <= 5) {
          document.getElementById("navbar").classList.add('hide-shadow');
        } else if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").classList.remove('hide-shadow');
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").classList.remove('hide-shadow');
          document.getElementById("navbar").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
      } : false;
    }
  }

  // Change logo color if hover

  const aboutHover = () => {
    document.getElementById("logo-letter").classList.toggle('red-fill');
  }

  const projectsHover = () => {
    document.getElementById("logo-letter").classList.toggle('yellow-fill');
  }

  const illustrationsHover = () => {
    document.getElementById("logo-letter").classList.toggle('blue-fill');
  }

  const talkHover = () => {
    document.getElementById("logo-letter").classList.toggle('green-fill');
  }

  // Return View

  return (
    <StyledNavbar id='navbar' className='hide-shadow'>

      <p class="landing-logo">GoHealthy</p>
      
      <div class="profiles-div">
        <a className='link-nav' href='#'>Pacientes</a>
        <a className='link-nav' href='#'>Doctores</a>
        <a className='link-nav' href='#'>Administrativo</a>
        <a className='link-nav' href='#'>Precios</a>
      </div>

      <div class="actions-div">
        <a class="link">Ingresar</a>
        <a class="action-button nav-hide">Descargar la app</a>
      </div>

      <div class="menu-icon" onClick={openMenu}>
        <input id="menu-icon-checkbox" class="menu-icon__cheeckbox" type="checkbox" />
        <label for="menu-icon-checkbox"></label>
        <div>
          <span></span>
          <span></span>
        </div>
      </div>

    </StyledNavbar>
  )
}

export default Navbar