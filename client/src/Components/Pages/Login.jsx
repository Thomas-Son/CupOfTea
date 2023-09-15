import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await fetch("/api/v1/user/login", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        console.log(res);
        if (res.status === 201) {
            navigate("/");
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>

                <input 
                placeholder="Votre email" 
                type="text" 
                name="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />

                <input 
                placeholder="Votre mot de passe" 
                type="text" name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Se connecter</button>

                <p>Pas de compte ? Créez en un <a href="inscription">ici</a></p>

            </form>
        </>
    )

}

export default Login;