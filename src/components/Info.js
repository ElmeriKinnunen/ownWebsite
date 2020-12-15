import React from 'react';
import "./components.css"

const Info=()=> {
    return (
      <div className='component info'>
        <div className='infoHeader'>
                <h1>Elmeri <br/> Kinnunen</h1>
        </div>
        <div className='infoRow'>
          <div className='textBox' id='leftBox'>
              <h2>Ohjelmistokehitys</h2>
              <p>On todistettu, että lukijaa häiritsee sivun ulkoasu lukiessaan sivua. Lorem Ipsumin käytön tarkoitus on, että se omaa enemmän-tai-vähemmän normaalimpaa sanojen sijoitusta kuin 'Sisältöä tähän, sisältöä tähän'.</p>
          </div>
          <div className='textBox' id='centerBox'>
              <h2>Design</h2>
              <p>Vastoin yleistä uskomusta, Lorem Ipsum ei ole vain sattumanvarainen teksti. Sillä on pitkät juuret klassisesta latinalaisesta kirjallisuudesta vuonna 45 eKr alkaen, tehden siitä yli 2000 vuotta vanhan.</p>
          </div>
          <div className='textBox' id='rightBox'>
              <h2>Robotiikka</h2>
              <p>On olemassa monta eri versiota Lorem Ipsumin kappaleista, mutta suurin osa on kärsinyt muunnoksista joissain muodoissa, kuten huumorin tai sattumanvaraisesti asetetuin sanoin jotka eivät näytä edes vähän uskottavalta. </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Info;