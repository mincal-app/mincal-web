import * as React from 'react';
import Layout from '../Layout';
import Resources from '../Resources';
import styled from 'styled-components';

// Styles

const SectionWelcome = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2rem 5rem 0rem 5rem;
    font-size: 0.8rem;
    justify-content: center;
    padding: 0;
    width: fit-content;
    min-height: 100vh;

    div {
        width: fit-content;
        display: flex;
        &.text {
            flex-direction: column;
        }
        &.previews {
            display: flex;
            flex-direction: row;
            align-items: center;
            img {
                &.watch {
                    width: 8rem;
                    height: 13rem;
                    z-index: 4;
                    transform: rotate(15deg)
                }
                
                &.phone {
                    width: 16rem;
                    height: 32rem;
                    z-index: 2;
                    transform: rotate(-15deg)
                }
            }
        }
    }
    h2 {
        display: block;
        margin: .1rem;
        font-size: 2.5rem;
        font-weight: 900;
        width: fit-content;
        white-space: nowrap;
    }
    p {
        width: 35vw;
        font-weight: 400;
        margin-top: 1rem;
        &.description {
            font-size: 1.1rem;
        }
    }

    .purple-text {
        color: #8702F5;
    }

    .get-on-span {
        color: rgba(0, 0, 0, 0.8);
        font-size: 0.8rem;
        font-weight: 500;
    }

    .download-div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 0.5rem;
    }
    
    .action-button {
        font-size: 1rem;
        width: 10vw;
        background: #fff;
        font-weight: 700;
        padding: 1rem 2rem;
        margin-right: 1rem;
        transition-duration: 0.5s;
        border: 0.08rem black solid;
        border-radius: 4rem;

        &:hover {
            color: #000;
            -webkit-box-shadow: 4px 4px 0px 0px rgba(135,2,245,1);
            -moz-box-shadow: 4px 4px 0px 0px rgba(135,2,245,1);
            box-shadow: 4px 4px 0px 0px rgba(135,2,245,1);
        }
      }
  
    .link {
       color: #048A81;
       margin-right: 2rem;
       cursor: pointer;
    }
    .icon {
       width: 1rem;
       height: 1rem;
       margin: 0rem 0.5rem 0rem 2rem;
    }
    // Set Scrollbar for Firefox
    html {
        overflow-y: scroll;
        scrollbar-color: #0A4C95 #C2D2E4;
    }
    
    // Set scrollbar default for Chrome
     /* width */
    html::-webkit-scrollbar {
        width: 6px;
    }
    
    /* Track */
    html::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    
    /* Handle */
    html::-webkit-scrollbar-thumb {
        background: #888;
    }
    
    /* Handle on hover */
    html::-webkit-scrollbar-thumb:hover {
        background: #555;
    } 
`;

const Hero = () => {
    return (
        <Layout className="text-preview-div">
            <SectionWelcome id='landing-main'> 
                <div className="text">
                    <h2>The calculator app made<br/>for <span className='purple-text'>everyone</span>.</h2>
                    <p className="description">MinCal empowers you use the power of mathmatics and science in creative ways while boosting your productivity and making learning much enjoyable.</p>
                    <div className="download-div">
                        <a class="action-button"><span className='get-on-span'>Get on the</span><br/>Play Store</a>
                        <a class="action-button"><span className='get-on-span'>Get on the</span><br/>App Gallery</a>
                    </div>
                </div>
            </SectionWelcome>
        </Layout>
    )
}

export default Hero