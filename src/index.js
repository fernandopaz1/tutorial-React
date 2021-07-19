import React from "react";
import { render } from "react-dom";

const Saludo = () => {
    let aQuien = "mundo";
    return <p>Hola {aQuien}</p>;
};

// funcion de javascript que retorna un componente de jsx vdom
// los componenetes se invocan como si fueran tags de html
// se puede usar self closing tags <Saludo /> si no es necesaro pasarle parametros

// los componenetes que crea el usuario empiezan con mayusculas
// mientras que losnativos empiezan con minuscula
// guarda al llamar un componenete no es como un string
// puede parecer como un salto de linea pero porque no estan en el mismo dom
const App = () => {
    return (
        <h1>
            <Saludo />!
        </h1>
    );
};

// aca renderizamos el vdom que devuelve app en el elemento de
// de html con id root definido en public/index.html
// la etiqueta en la que se agrega es App
render(<App />, document.getElementById("root"));

