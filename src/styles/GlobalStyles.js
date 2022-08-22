import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
    html {
        padding: 0;
        margin: 0;
    }

    * {
        -ms-overflow-style: none;
    }
    
    ::-webkit-scrollbar {
        display: none;
    }
     
    body {
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        color: #04151F;
    }
    
    html, body {
        scroll-behavior: smooth;
    }

    h1 {
        font-size: 2.4rem;
        font-weight: 600;
        margin: 0;
    }

    h2 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: .2rem;
    }

    p {
        font-size: .9rem;
        &.section-title {
            line-height: 1.3rem;
        }
    }

    // Animations

    @keyframes floating-watch {
        0% {
            transform: translateY(0rem) rotate(15deg);
        } 50% {
            transform: translateY(1rem) rotate(15deg);
        } 100% {
            transform: translateY(0rem) rotate(15deg);
        }
    }
    @keyframes floating-phone {
        0% {
            transform: translateY(0rem) rotate(-15deg);
        } 50% {
            transform: translateY(1rem) rotate(-15deg);
        } 100% {
            transform: translateY(0rem) rotate(-15deg);
        }
    }
`;

export default GlobalStyles;