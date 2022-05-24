import React from 'react';
import img1 from '../assets/img/img1.png';

export const About = () => {
  return (
    <div className="about-container">
      <div className="div__about-container">
        <div>
          <img className="img__about-image" src={img1} alt="img" />
        </div>
        <div className="div__item-text">
          <h1>Juan Alejandro Albites Tapia</h1>
          <p>
            Soy Juan, ingeniero de telecomunicaciones, pero ahora he empezado a
            incursionar en el mundo de la programación
          </p>
          <ul>
            <strong> En el curso aprendí: </strong>

            <li>
              Trabajar en equipo en un proyecto mediante la plataforma de Jira
              usando SCRUM
            </li>
            <li>El proceso de creación de una página web</li>
            <li>
              Diferentes herramientas para la creación de una página como REACT,
              bases de datos como MONGO, NodeJs, express, etc.
            </li>
          </ul>

          <p>
            <strong>Correo: </strong> albites.tapia@gmail.com
          </p>
          <p>
            <strong>Github: </strong> https://github.com/AlejandroAlbites/
          </p>
        </div>
      </div>
    </div>
  );
};
