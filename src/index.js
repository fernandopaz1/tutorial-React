import React, { Component } from "react";
import { render } from "react-dom";

const SaludarEnIdiomas = ({ idioma }) => {
    if (idioma === "es") return <p>Hola</p>;
    if (idioma === "en") return <p>Hello</p>;
    if (idioma === "fr") return <p>Bonjour</p>;
    return <p>Hello</p>;
};

const Saludo = ({ idioma, aQuien }) => {
    console.log(aQuien);
    return (
        <p>
            <SaludarEnIdiomas idioma={idioma} /> {aQuien}
        </p>
    );
};

let lenguajes = ["JavaScript", "Python", "Ruby", "C"];

// aca vemos que se puede pasar una lista de elements jsx y lo va a poner como una secuencia de vdom
// cuando metemos una lista de componentes a un componente de jsx cada elemento debe tener
// una prop llamada key que debe ser diferente para cada elemento e identificarlos
// el valor de key es para que en caso de que se modifique el arreglo react sabe que elemento tiene que actulizar
const Tecnologias = () => {
    return (
        <ul>
            {" "}
            {lenguajes.map((lenguaje, index) => (
                <li key={index}>{lenguaje}</li>
            ))}{" "}
        </ul>
    );
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
            <Saludo idioma="es" aQuien="Fernando" />!
            <Tecnologias />
        </h1>
    );
};

// aca renderizamos el vdom que devuelve app en el elemento de
// de html con id root definido en public/index.html
// la etiqueta en la que se agrega es App
render(<App id="app" />, document.getElementById("root"));

// otra forma de crear componenetes es con una clase
// que hereda de Component e implementa un metodo render
class AppClase extends Component {
    render() {
        return <h1> Componente creado con clase componente</h1>;
    }
}
// si hago que este vdom apunte a root  sobreescribe todo lo demas
render(<AppClase />, document.getElementById("root"));

// cada componente de react pasa por un proceso de renderizado en
// cada actualizacion (en un componente de clase se ejecuta devuelte render() y en un componenete de funcion
// se ejecuta la funcion)
// cada componente devuelve una representacioin virtual la cual react transforma elemento de la interfaz grafica
// que se  esta usando
// React compara la representacion virtual con la real y si hya alguna diferencia hace el trabajo minimo para que coincidan

 