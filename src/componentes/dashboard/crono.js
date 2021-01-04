import React from 'react';

//crono-notificaciones
import { Chrono } from "react-chrono";

const items = [
    {
    title: "ENERO 2021",
    cardTitle: "Hojas de vida",
    cardSubtitle:"Reunion compuestos",
    }, 
    {
    title: "FEBRERO 2021",
    cardTitle: "FMMKSMDMSD",
    cardSubtitle:"DFDFDFDFDFDFDFDFDFDFD",
    },
    {
    title: "MARZO 2021",
    cardTitle: "DFDFDFDFDFD",
    cardSubtitle:"DDFDFDFDFDFDFDFDFDFDFD",
    }, 
    {
    title: "ABRIL 2021",
    cardTitle: "SSDSDSDSD",
    cardSubtitle:"DSDFFSFSSFSFSFGRGTNTHRSFER",
    },
    {
    title: "MAYO 2021",
    cardTitle: "FDFNFJBENFNEF",
    cardSubtitle:"DFNENFKEKNENDKS",
    },     
          
  ];

  function Crono(){
      return(
        <>
          <h6>Documentos Pendientes</h6>
          <br/>
              <div style={{ width: "1140px", height: "220px" }}>
                  <Chrono items={items} slideShow slideItemDuration={4500} theme={{primary: "red", secondary: "white", cardBgColor: "blue", cardForeColor: "yellow" }}/>               
              </div>
        </>
      )
  }

export default Crono; 