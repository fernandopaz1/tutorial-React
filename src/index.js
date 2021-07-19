import React from "react";
import { render } from "react-dom";

// funcion de javascript que retorna un componente de jsx vdom
const App = () => {
    return <h1>Hello, world!</h1>;
};

// aca renderizamos el vdom que devuelve app en el elemento de
// de html con id root definido en public/index.html
// la etiqueta en la que se agrega es App
render(<App />, document.getElementById("root"));
