import { FormContext } from "./Form";
import { useContext } from "react";

// React Component input checkbox with programing languages javascript ruby python php css html
export default function Skills(props) {
    const ctx = useContext(FormContext);

    const addToList = (value) => {
        ctx.setSkills([value].concat(ctx.skills));
    };

    const removeFromList = (value) => {
        ctx.setSkills(ctx.skills.filter((v) => v !== value));
    };
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    name="likes[]"
                    onChange={(ev) => {
                        ev.target.checked
                            ? addToList("Ruby")
                            : removeFromList("Ruby");
                    }}
                />
                Ruby
            </label>
            <label>
                <input
                    type="checkbox"
                    name="likes[]"
                    onChange={(ev) => {
                        ev.target.checked
                            ? addToList("JavaScript")
                            : removeFromList("JavaScript");
                    }}
                />
                JavaScript
            </label>
        </div>
    );
}
