import React, { useContext } from "react";
import { ThemeContext } from "../index.js";

export default function Button(props) {
    const context = useContext(ThemeContext);
    return (
        <button
            style={{
                backgroundColor: context.backgroundColor,
                color: context.color,
            }}
        >
            Click Me!
        </button>
    );
}
