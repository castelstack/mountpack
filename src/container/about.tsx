import React from "react";

import image1 from "../../src/assets/img/image0.png";
import gifMax from "../../src/assets/img/GIFSAVEMAX.gif"
import "../../src/constants/style.css";

const About = () => {
  return (
    <div>
      <section id='about'>
        <div className='content'>
          <div className='pdp'>
            <div className='window' style={{ width: "460px" }}>
              <div className='title-bar'>
                <div className='title-bar-text'>PROFILE PICTURE OF : Max</div>
                <div className='title-bar-controls'>
                  <button className='btn-close'>x</button>
                </div>
              </div>
              <div className='window-body'>
                <div className='pdp-img'>
                  <img src={image1} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='about-me'>
            <div className='window no-draggable'>
              <div className='window-body'>
                <h1>Hi everyone I’m Max !</h1>
                <p>
                  First of all you have to understand that my life has been{" "}
                  <br /> a nightmare since this crypto thing, they were all
                  trying <br /> to rekt me back and forth leaving me with
                  pennies in my <br /> pockets ! I couldn't eat ! I have been
                  literally bullied <br /> by this market…
                </p>
                <br />
                <h1>
                  I’ve been working on this <br /> projects for months !
                </h1>
                <p>
                  I think I’m ready to show it to y’all !! I did everything I
                  could <br /> to get myself out of that vicious circle and I
                  finally feel that <br /> this is the right timing to make
                  things change ! <br /> Let me introduce you to my world,
                </p>
                <br />
                <h1>I need your help people !</h1>
                <p>
                  We have to spread the word and let know every Max <br /> on
                  this planet that we’re all going to make it ! <br /> We’re
                  seeing the end of this long road and we are going to <br />{" "}
                  get saved by the NFT overlords ! <br /> join in before it’s
                  too late…
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='presell'>
        <div className='content'>
          <div className='presell'>
            <div className='window' style={{ width: "100%" }}>
              <div className='title-bar'>
                <div className='title-bar-text'>GIF-PreSell.exe</div>
                <div className='title-bar-controls'>
                  <button className='btn-close'>x</button>
                </div>
              </div>
              <div className='window-body'>
                <div className='presell-items'>
                  <div className='presell-title'>
                    <p>
                      10,000 unique MAX's <br /> who need to be save.
                    </p>
                    <p className='text'>
                      Save Max is a collection of 10,000 unique <br /> hand
                      drown randomly generated MAX's
                    </p>
                    <a href='_blank'>MINT YOURS !</a>
                  </div>
                  <div className='presell-product'>
                    <div className='img-border'>
                      <div className='img-content'>
                        <img src={gifMax} alt='' />
                      </div>
                    </div>
                    <div className='product-text'>
                      500 PRE SALES <br /> &lt;-- TICKET 0.5 Sol
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
    </div>
  );
};

export default About;
