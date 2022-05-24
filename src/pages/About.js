import React from 'react';
import img1 from '../assets/img/img1.png';

export const About = () => {
  return (
    <main className="main__about-container">
      <div className="div__about-container">
        <div>
          <img className="img__about-image" src={img1} alt="img" />
        </div>
        <div className="div__about-text">
          <h1 className="h1__name-author">Juan Alejandro Albites Tapia</h1>
          <p className="p__data-descriptions">
            Soy Juan, ingeniero de telecomunicaciones, pero ahora he empezado a
            incursionar en el mundo de la programación
          </p>
          <ul>
            <strong className="strong__subtitles-datos">
              En el curso aprendí:
            </strong>

            <li>
              - Trabajar en equipo en un proyecto mediante la plataforma de Jira
              usando SCRUM.
            </li>
            <li>- El proceso de creación de una página web.</li>
            <li>
              - Diferentes herramientas para la creación de una página como
              REACT, bases de datos como MONGO, NodeJs, express, etc.
            </li>
          </ul>

          <p className="p__data-descriptions">
            <strong className="strong__subtitles-datos">Correo: </strong>{' '}
            albites.tapia@gmail.com
          </p>
          <p className="p__data-descriptions">
            <strong className="strong__subtitles-datos">Github: </strong>{' '}
            https://github.com/AlejandroAlbites/
          </p>
        </div>
      </div>
    </main>
  );
};
