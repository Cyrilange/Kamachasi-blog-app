import React from "react";

const About = () => {
  return (
    <div className="container padding">
      <div className="col-md-12">
        <div className="row mx-0">
          <h1>Kamachasi</h1>
          <p>
            "¡Bienvenidos a mi blog! Mi nombre es Karen y me apasiona la
            naturaleza tanto como el mundo de la moda. A través de estas
            páginas, quiero compartir mi fascinación por la belleza natural y
            cómo se entrelaza con las tendencias y estilos de la moda. Únete a
            mí mientras exploramos la conexión entre la exuberancia de la
            naturaleza y la expresión creativa que la moda nos brinda. ¡Te
            invito a sumergirte en este viaje lleno de inspiración y
            autenticidad!"
          </p>
          <img className="flower" src="./image4.jpeg" center alt="karen" />
          <p>
            Explora la fusión entre la moda y la naturaleza en mi espacio. Sigue
            mi canal para descubrir secretos de estilo y aromas encantadores.
            Encuentra una exclusiva selección de perfumes y ropa de mujer. Únete
            a esta comunidad de moda y naturaleza, te espero!
          </p>
          <img
            className="flower"
            src="./image5.jpeg"
            alt="petite maison seule"
            cover
          />
        </div>
      </div>
    </div>
  );
};

export default About;
