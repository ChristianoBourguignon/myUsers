'use client'
import React, { useState } from "react";
import styles from "../page.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register() {

    
    const [email, setEmail] = useState("");
    const [password, setSenha] = useState("");
    const [nome, setNome] = useState("");
    function enviarDados (){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    
return (
    <div className={styles.main}>
        <label>
            Nome: 
            <input 
                name="user-name" 
                required 
                onChange={(e) => setNome(e.target.value)}
            />
        </label>
        <label>
            E-mail: 
            <input 
                name="user-email" 
                type="email"
                required 
                onChange={(e) => setEmail(e.target.value)}
            />
        </label>
        <label>
            Senha: 
            <input 
                name="user-senha" 
                type="password"
                required 
                onChange={(e) => setSenha(e.target.value)}
            />
        </label>
        <div className={styles.buttons}>
            <button onClick={enviarDados}>Cadastrar-se</button>
        </div>
        <p>{nome}</p>
        <p>{email}</p>
        <p>{password}</p>

    </div>
    )
}

export default Register;
