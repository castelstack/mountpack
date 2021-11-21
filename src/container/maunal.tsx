import React, { useRef, useState } from "react";

import manual from "../../src/assets/img/manual.png";
import fleche from "../../src/assets/img/fleche.png";
import "../../src/constants/style.css";
import { maunalData } from "../constants/manualData";

const Maunal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
//   const [show, setShow] = useState(false);
  const content = useRef(null);

  return (
    <div>
      <section id='manual'>
        <div className='content'>
          <div className='menu'>
            <div className='start'>
              <img src={manual} width='32' alt='' /> INSTRUCTION MANUAL
            </div>
            <div className='start-menu'>
              <div className='left-text'>
                <span>SAVE MAX</span>
              </div>
              <ul>
                {maunalData.map((el, idx) => (
                  <li className='start-menu-item' key={el.id}>
                    <table>
                      <tr
                        onClick={() => (setActiveIndex(idx)
                         )}
                        className='menu-item'
                      >
                        <div className='manunal-tab'>
                          <td>
                            <img src={el.image} width='30' alt='' />
                          </td>
                          <td>{el.title}</td>
                        </div>
                        <div>
                          <td>
                            <img src={fleche} width='12' height='12' alt='' />
                          </td>
                        </div>
                      </tr>
                    </table>
                    <hr />
                    {activeIndex === idx  ? (
                      <ul ref={content}>
                        <li>{el.description}</li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maunal;
