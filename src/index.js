import React, { Component, useState, useEffect, useRef } from "react";
import { render } from "react-dom";
import { EjemploComponente } from "./componentes/EjemploComponente";

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
render(<AppClase />, document.getElementById("root1"));

// cada componente de react pasa por un proceso de renderizado en
// cada actualizacion (en un componente de clase se ejecuta devuelte render() y en un componenete de funcion
// se ejecuta la funcion)
// cada componente devuelve una representacioin virtual la cual react transforma elemento de la interfaz grafica
// que se  esta usando
// React compara la representacion virtual con la real y si hya alguna diferencia hace el trabajo minimo para que coincidan

/// Ejemplo de props

// {texto} lo que hace es un destructuring, basicamente estamos indicando que propiedades recibimos como parametro
// y con que nombre. Estos mismo atributos estan presentes en el objeto props pero de esta forma usamos directamente los atributos
// podemos asignar valores por defecto por ecmascript6
const Mirar = ({ cosa1, cosa2 = "horno", cosa3 }) => (
    <p>
        Mirar {cosa1}, {cosa2} y {cosa3}
    </p>
);
render(<Mirar cosa1="Techo" cosa3="Perro" />, document.getElementById("root2"));

const Button = () => {
    // esto es un hook
    // el primer parametro es la propiedad del estado y el segundo la funcion
    // para sobreescrir esa propiedad
    const [conteo, setConteo] = useState(0);
    useEffect(() => {
        console.log("Se ejecuto el useEffect");

        return () => {
            console.log("Se elimina  el componenete");
        };
    }, []); // si ponemos un array vacio como segundo parametro
    // la funcion solo se ejecuta la primera vez y no en las actualizaciones
    // si retronames una funcion estase ejecuta al eliminar el componente
    // pero solo si limitamos la ejecucion al principio
    return (
        <div>
            <p>Presionado: {conteo}</p>
            <button onClick={() => setConteo(conteo + 1)}> Click Me</button>
        </div>
    );
};

const Botones = () => {
    const [showButton, setShowButton] = useState(true);
    return (
        <div>
            <button onClick={() => setShowButton(!showButton)}>
                {" "}
                Reset boton{" "}
            </button>
            <div>{showButton && <Button />}</div>
        </div>
    );
};

render(<Botones />, document.getElementById("root3"));

const SaludoEvento = () => {
    const [name, setName] = useState("");
    // En jsx onChange se escribe con camelcase
    // el primer parametro es lo que llamamos un syntecit event
    //  tiene la misma informacion que el event cuando trabajamos con doms
    // y eventlintesnert
    return (
        <div>
            <input type="text" onChange={(ev) => setName(ev.target.value)} />
            <p> Hola {name}</p>
        </div>
    );
};

const EventosApp = () => {
    return (
        <div>
            <SaludoEvento />
        </div>
    );
};

render(<EventosApp />, document.getElementById("root4"));

// trabajar con formularios podemos usar hooks para obtener los valores de
// los inputs
// para enviar un form no tenemos que creart un boton y ponerle un onclick
// eso romple como funciona html ya que ahora no envia si aprieto enter
// tambien si en vez de usar un form usaba un div tampoco serviria
// tenemos que sio si usar un form con un input o button ipo submit
const Form = ({ showed }) => {
    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");

    // actualizar el dom es uun efecto secundario por lo que tenemos que hacerloa aca
    // en el array pongo que variable esperamos a que se modifique

    // esta es la libreria que usamos cuando queremos
    // acceder directamente al dom
    // aunque siempre que se pueda es mejor que react se
    // encargue de hacerlo

    // en el input al que quiero apuntar debe haber una
    // atributo ref con valor firstInput
    const firstInput = useRef();
    useEffect(() => {
        if (showed) {
            firstInput.current.focus();
        }
    }, [showed]);

    const sendForm = () => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setTitle("");
                setBody("");
                console.log(json);
            });
    };
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                sendForm();
            }}
        >
            <div>
                <label htmlFor="title">Titulo </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    ref={firstInput}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="body">Publicacion</label>
                <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <input type="submit" value="Enviar" />
        </form>
    );
};

const Acordeon = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div onClick={() => setShow(!show)}> Mostrar Formulario </div>
            {show && <Form value={show} showed={show} />}
        </div>
    );
};

render(<Acordeon />, document.getElementById("root5"));

const MostrarCodeSpliting = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={() => setShow(!show)}>Mostrar Sorpresa</button>
            {show && <EjemploComponente />}
        </div>
    );
};

render(<MostrarCodeSpliting />, document.getElementById("root6"));
