import React from "react";

import roadmap from "../../src/assets/img/roadmap.png";
import bg1 from "../../src/assets/img/bg-1.png";
import bg2 from "../../src/assets/img/bg-2.png";
import bg3 from "../../src/assets/img/bg-3.png";
import bg4 from "../../src/assets/img/bg-4.png";
import bg5 from "../../src/assets/img/bg-1.png";

import barre from "../../src/assets/img/barredumilmieux.png";
import "../../src/constants/style.css";

const RoadMap = () => {

  return (
    <div>
      <section id='roadmap'>
        <div className='content'>
          <div className='roadmap-title'>
            <img src={roadmap} height='130' alt='' />
          </div>
          <div className='roadmap-timeline'>
            <table className='w-100'>
              <tr>
                <td>
                  <div
                    className='roadmap-item'
                   
                  >
                    <span className='q4'>Q4</span>
                    <div className='roadmap-text roadmap-item-1'  style={{ backgroundImage: `url(${bg1})`, backgroundRepeat:"no-repeat", }}>
                      <div className='roadmap-text-content'>
                        <h3>Pre-sale</h3>
                        <p>
                          The funds will be used to finish <br /> the pillot of
                          the series <br /> and the Save Max marketplace
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td rowSpan={5}>
                  <img src={barre} alt='' />
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <div className='roadmap-item' >
                    <div className='roadmap-text roadmap-item-2' style={{ backgroundImage: `url(${bg2})`, backgroundRepeat:"no-repeat", }}>
                      <div className='roadmap-text-content'>
                        <h3>Marketing</h3>
                        <p>
                          Launch of differnet marketing <br /> campange to make
                          max known <br /> to the world
                        </p>
                      </div>
                    </div>
                    <span className='q4'>Q4</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='roadmap-item'>
                    <span className='q4'>Q4</span>
                    <div className='roadmap-text roadmap-item-3' style={{ backgroundImage: `url(${bg3})`, backgroundRepeat:"no-repeat", }}>
                      <div className='roadmap-text-content'>
                        <h3>Main sale + marketplace</h3>
                        <p>
                          All max will be ready to be <br /> mint, the
                          marketplace will be <br /> available at the same time
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <div className='roadmap-item'>
                    <div className='roadmap-text roadmap-item-4' style={{ backgroundImage: `url(${bg4})`, backgroundRepeat:"no-repeat", }}>
                      <div className='roadmap-text-content'>
                        <h3>Pilot episode</h3>
                        <p>
                          The release of the very first <br /> episode of Max's
                          Adventures
                        </p>
                      </div>
                    </div>
                    <span className='q4'>Q4</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='roadmap-item'>
                    <span className='q4'>Q1</span>
                    <div className='roadmap-text roadmap-item-5' style={{ backgroundImage: `url(${bg5})`, backgroundRepeat:"no-repeat", }}>
                      <div className='roadmap-text-content'>
                        <h3>Everywhere</h3>
                        <p>
                          Start of the serious stuff <br /> Netflix, Amazon
                          Prime, Hulu...
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadMap;
