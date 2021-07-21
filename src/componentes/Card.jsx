import React, { useContext } from "react";
import { ThemeContext } from "../index.js";

export default function Card(props) {
    const context = useContext(ThemeContext);
    return (
        <div
            style={{
                backgroundColor: context.backgroundColor,
                color: context.color,
            }}
        >
            <p>Hola mundo</p>
            <p>Esta es la descripcion</p>
        </div>
    );
}
