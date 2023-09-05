import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import logop from "./imagenes/logop.png";
import "./css/index.css"
import App from './app';
 


function Logo(props){
    return(
        <div className='contenedor-datos' >
            <img 
            className='center'
            src={logop} 
            alt='logo el patojismo'
            style={{justifyContent: "center"}}/>
        </div>
    );
}


  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
      <div>
          <h1 style={{textAlign: "center"}}>Cafetería El Patojismo</h1>
          <Logo></Logo>
          <Form></Form>
          <StrictMode>
          <App></App>
          </StrictMode>
          
      </div>
  )