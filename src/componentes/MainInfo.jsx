import { FormContext } from "./Form";
import { useContext } from "react";

export default function MainInfo(props) {
    const ctx = useContext(FormContext);
    return (
        <div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={ctx.email}
                    onChange={(e) => {
                        ctx.setEmail(e.target.value);
                    }}
                />
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={ctx.password}
                    onChange={(e) => ctx.setPassword(e.target.value)}
                />
            </div>
        </div>
    );
}
