import React, { useState } from "react";

import image1 from "../../src/assets/img/1.png";
import image2 from "../../src/assets/img/2.png";
import image3 from "../../src/assets/img/3.png";
import image4 from "../../src/assets/img/4.png";
import image5 from "../../src/assets/img/5.png";
import image6 from "../../src/assets/img/6.png";
import manual from "../../src/assets/img/manual.png";
import fleche from "../../src/assets/img/fleche.png";
import "../../src/constants/style.css";

const Maunal = () => {
  const [open, isOpen] = useState(false);

  const handleOpen = () => isOpen(!open);
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
                <li className='start-menu-item'>
                  <table>
                    <tr onClick={handleOpen}>
                      <td>
                        <img src={image1} width='30' alt='' />
                      </td>
                      <td>WHAT IS SAVE MAX ?</td>
                      <td>
                        <img src={fleche} width='12' height='12' alt='' />
                      </td>
                    </tr>
                  </table>
                  <hr />
                  {open ? (
                    <ul>
                      <li>
                        Save Max is a hand drawn unique randomly generated
                        collection that will be launching on Solana. The money
                        raised with the Save Max will be used to create a
                        cartoon in the Save Max Universe!
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className='start-menu-item'>
                  <table>
                    <tr>
                      <td>
                        <img src={image2} width='30' alt='' />
                      </td>
                      <td>WHEN IS THE LAUNCH ?</td>
                      <td>
                        <img src={fleche} width='12' height='12' alt='' />
                      </td>
                    </tr>
                  </table>
                  <hr />
                  <ul>
                    <li>
                      We are planning on launching our Save Max Mint Pass
                      presale in the beginning of November <br /> Followed
                      closely by the public sale <br /> There will be 10 000
                      Save Max in total available to mint.
                    </li>
                  </ul>
                </li>
                <li className='start-menu-item'>
                  <table>
                    <tr>
                      <td>
                        <img src={image3} width='30' alt='' />
                      </td>
                      <td>WHAT WILL IT COST ?</td>
                      <td>
                        <img src={fleche} width='12' height='12' alt='' />
                      </td>
                    </tr>
                  </table>
                  <hr />
                  <ul>
                    <li>
                      Presale price: 0.5 SOL for the limited 500 Mint Passes.{" "}
                      <br /> Public sale price: 1 SOL for the 9500 Save Max
                      left.
                    </li>
                  </ul>
                </li>
                <li className='start-menu-item'>
                  <table>
                    <tr>
                      <td>
                        <img src={image4} width='30' alt='' />
                      </td>
                      <td>
                        WHERE CAN I SEE THE <br /> RARITY OF MY NFT ?
                      </td>
                      <td>
                        <img src={fleche} width='12' height='12' alt='' />
                      </td>
                    </tr>
                  </table>
                  <hr />
                  <ul>
                    <li>
                      As soon as we sold out of our public sale you will be able
                      to <br /> check the rarity on our platform !
                    </li>
                  </ul>
                </li>
                <li className='start-menu-item'>
                  <table>
                    <tr>
                      <td>
                        <img src={image5} width='30' alt='' />
                      </td>
                      <td>
                        WHERE CAN I TRADE <br /> MY SAVE MAX ?
                      </td>
                      <td>
                        <img src={fleche} width='12' height='12' alt='' />
                      </td>
                    </tr>
                  </table>
                  <hr />
                  <ul>
                    <li>
                      You will be able to buy and sell your NFT after the public
                      sale <br /> directly on our platform ! <br />
                      <span className='text-red'>
                        You will be able to trade your mint pass on Solanart
                      </span>
                    </li>
                  </ul>
                </li>
                <li className='start-menu-item'>
                  <table>
                    <tr>
                      <td>
                        <img src={image6} width='30' alt='' />
                      </td>
                      <td>
                        HOW MANY SAVE MAX <br /> CAN I MINT ?
                      </td>
                      <td>
                        <img src={fleche} width='12' height='12' alt='' />
                      </td>
                    </tr>
                  </table>
                  <ul>
                    <li>
                      Presale: You can mint 1 Save Max Mint Pass per transaction
                      and you can have 4 in your wallet. <br /> Public sale: You
                      can mint 1 Save Max per transaction and there’s no limit
                      on how many you can have in your wallet.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maunal;
