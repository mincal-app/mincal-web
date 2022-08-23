import React from 'react';
import Resources from '../Resources';
import styled from 'styled-components';

const FooterStyle = styled.div`
    z-index: 20;
    background: #000;
    color: #fffffe;
    padding: 4rem 0rem;
    margin: 0;
    font-size: 0.8rem;
    div {
        display: flex;
        flex-direction: column;
        margin: 0rem 5rem;
        &.identity-footer {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0rem;
            .sitemap {
                display: flex;
                    flex-direction: row;
                ul {
                    display: flex;
                    list-style: none;
                    width: fit-content;
                    
                    li {
                        padding: 0.5rem 1.5rem;

                        &.border {
                            padding-right: 0rem;
                        }
                    }
                }
            }
        }

        &.copyright-footer {
            display: flex;
            flex-direction: row;
            margin-top: 2rem;
            justify-content: space-between;

            .social-icons {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin: 0;

                a {
                    margin: 0rem 1.5rem;

                    &.border {
                        margin-left: 0rem;
                    }

                    img {
                        height: 1.2rem;
                    }
                }
            }
        }
    }

    a {
        text-decoration: none;
        color: #fffffe;
        img {
            width: 1.2rem;
        }
    }

    h2 {
        font-size: 1.1rem;
    }

    p {
        font-weight: 500;
        width: fit-content;
        line-height: 1rem;
        text-align: left;
        margin: 1rem 0rem;
    }
`

const Footer = () => {
    return (
        <FooterStyle>
            <div id="footer-identity-row" className="identity-footer">
                <div className="newsletter">
                    <h2>MinCal</h2>
                </div>
                <div className="sitemap">
                    <ul>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Terms</a></li>
                        <li><a href='#'>Contact Us</a></li>
                        <li className='border'><a href='#'>Careers</a></li>
                    </ul>
                </div>
            </div>
            <div id="footer-copy-row" className="copyright-footer">
                <div className="social-icons">
                    <a href='#' className='border'><img src={Resources.facebook}/></a>
                    <a href='#'><img src={Resources.twitter}/></a>
                    <a href='#'><img src={Resources.linkedin}/></a>
                    <a href='#'><img src={Resources.youtube}/></a>
                    <a href='#'><img src={Resources.tiktok}/></a>
                </div>
                <p>All rights reserved © MinCal 2022</p>
            </div>
        </FooterStyle>
    )
}

export default Footer