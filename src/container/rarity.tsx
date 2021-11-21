import React from "react";
import "../../src/constants/style.css";

const Rarity = () => {
  return (
    <div>
      <section id='rarity'>
        <div className='content'>
          <div className='presell'>
            <div className='window' style={{ width: "100%" }}>
              <div className='title-bar'>
                <div className='title-bar-text'>Rarity-App.exe</div>
                <div className='title-bar-controls'>
                  <button className='btn-close '>x</button>
                </div>
              </div>
              <div className='window-body'>
                <div className='rarity'>
                  <div className='rarity-title'>
                    IS MY MAX <span className='medium'>RARE ?</span>
                  </div>
                  <div className='rarity-form'  style={{ width: "100%" }}>
                    <div className='left'>
                      <div
                        className='field-row-stacked'
                        style={{ width: "100%",height:'100%' }}
                      >
                        <textarea
                          id='text20'
                          rows={36}
                          className='textbox'
                        ></textarea>
                      </div>
                    </div>
                    <div className='right'>
                      <div className='field-row-stacked'>
                        <label htmlFor='text18' className='labell'>
                          Your Max number
                        </label>
                        <input id='text18' type='text' />
                      </div>
                      <button >CHECK RARITY</button>
                      <div className='separator'></div>
                      <div className='field-row-stacked'>
                        <label htmlFor='text19'>Rarity 1 to 10000</label>
                        <input id='text19' type='text' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rarity;
