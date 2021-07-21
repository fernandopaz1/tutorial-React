import { useEffect } from "react";

export default function EjemploComponentew(props) {
    // importando dentro de useEffect apenas se renderiza un objeto es
    // una forma de requerir impors recien cuando se necesite
    useEffect(() => {
        import("./EjemploExportDinamico").then((modulo) => modulo.default());
    }, []);
    return (
        <div>
            <p>Sorpresa</p>
        </div>
    );
}
