import MainInfo from "./MainInfo";
import Skills from "./Skills";
import { useState, createContext } from "react";

// hacemos que los formularios tengan contexto
// para compartir info entro ellos
export const FormContext = createContext();

export default function Form(props) {
    // como son propiedades que pueden cambiar
    // las ponemos como parte del estado del FromContext
    // y las podemos cambiar en cualquier momento
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [skills, setSkills] = useState("");
    return (
        <form>
            <FormContext.Provider
                value={{
                    email,
                    password,
                    skills,
                    setEmail,
                    setPassword,
                    setSkills,
                }}
            >
                <MainInfo />
                <Skills />
            </FormContext.Provider>
            <div>
                <p>Email: {email}</p>
                <p>Contraseña: {password}</p>
                <p>Skills: {skills}</p>
            </div>
        </form>
    );
}
