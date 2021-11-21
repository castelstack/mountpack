import React from "react";
import twitter from "../../src/assets/img/twitter-1.png";
import discord from "../../src/assets/img/discord-1.png";
import twitter3 from "../../src/assets/img/twitter-3.png";
import discord2 from "../../src/assets/img/discord-2.png";
import discord3 from "../../src/assets/img/discord-3.png";
import discord4 from "../../src/assets/img/discord-4.png";
import insta from "../../src/assets/img/insta-2.png";
import insta2 from "../../src/assets/img/insta-4.png";
import TEAM from "../../src/assets/img/TEAM.png";


import marketing from "../../src/assets/img/marketing.png";
import DEV from "../../src/assets/img/DEV.png";
import manager from "../../src/assets/img/manager.png";
import art from "../../src/assets/img/art.png";
import "../../src/constants/style.css";

const Team = () => {
  return (
    <div>
      <section id='team'>
        <div className='content'>
          <div className='team-title'>
            <img src={TEAM} alt='' />
          </div>
          <div className='team-list'>
            <div className='team-item'>
              <div className='team-img team-1' style={{ backgroundImage: `url(${DEV})`, backgroundRepeat:"no-repeat", }}></div>
              <div className='team-item-title'>Development</div>
              <div className='team-links'>
                <button
                  className='islink'
                  data-href='https://twitter.com/TheYearsNinety'
                >
                  <img src={twitter} height='24' alt='' />
                </button>
                <button
                  className='islink'
                  data-href='https://discordapp.com/users/904444307510026251/'
                >
                  <img src={discord} height='24' alt='' />
                </button>
              </div>
            </div>
            <div className='team-item'>
              <div className='team-img team-2' style={{ backgroundImage: `url(${art})`, backgroundRepeat:"no-repeat", }}></div>
              <div className='team-item-title'>Art & Design</div>
              <div className='team-links'>
                <button
                  className='islink'
                  data-href='https://www.instagram.com/maxdrebin/'
                >
                  <img src={insta} height='24' alt='' />
                </button>
                <button
                  className='islink'
                  data-href='https://discordapp.com/users/689462955489755188/'
                >
                  <img src={discord2} height='24' alt='' />
                </button>
              </div>
            </div>
            <div className='team-item'>
              <div className='team-img team-3' style={{ backgroundImage: `url(${manager})`, backgroundRepeat:"no-repeat", }}></div>
              <div className='team-item-title'>Project Management</div>
              <div className='team-links'>
                <button
                  className='islink'
                  data-href='https://twitter.com/SevenTeen_R4e'
                >
                  <img src={twitter3} height='24' alt='' />
                </button>
                <button
                  className='islink'
                  data-href='https://discordapp.com/users/599431826070568972/'
                >
                  <img src={discord3} height='24' alt='' />
                </button>
              </div>
            </div>
            <div className='team-item'>
              <div className='team-img team-4' style={{ backgroundImage: `url(${marketing})`, backgroundRepeat:"no-repeat", }}></div>
              <div className='team-item-title'>Marketing Head</div>
              <div className='team-links'>
                <button
                  className='islink'
                  data-href='https://www.instagram.com/lili_le_i/'
                >
                  <img src={insta2} height='24' alt='' />
                </button>
                <button
                  className='islink'
                  data-href='https://discordapp.com/users/758426439514325022/'
                >
                  <img src={discord4} height='24' alt='' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
