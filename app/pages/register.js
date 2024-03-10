'use client'
import React, { useState } from "react";
import styles from "../page.module.css";
import { auth } from "../api/firebase.js"
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";

function Register() {

    // auth.useDeviceLanguage() // traduzir as coisas (não funcional ainda)
    const [email, setEmail] = useState("");
    const [password, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [user,setUser] = useState(null);
    

    const criarConta = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const newUser = userCredential.user;
    
            // Tentativa de atualizar o nome do usuario
            await updateProfile(newUser, { displayName: nome });
            
        } catch (error) {
            console.error('Erro ao criar conta: ', error);
            alert(error);
        }
    };

    const logar = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                // Logado
                const userLogado = userCredential.user;
                setUser(userLogado);
        })
        } catch (error) {
            alert(error);
        }
      };

      const deslogar = async () => {
        try {
            await signOut(auth);
            setUser(null)
        } catch (error) {
            alert(error);
        }
    };
  
    
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
        {user && user.uid ? (
            <div className={styles.buttons}>
                <button onClick={deslogar}>Deslogar</button>
            </div>
        ) : (
            <div className={styles.buttons}>
                <button onClick={logar}>Cadastrar-se</button>
            </div>
        )}
        {user ? (
            <p>{user.uid}</p>
        ) : (
            <p>Não está logado.</p>
        )}
        <p>{nome}</p>
        <p>{email}</p>
        <p>{password}</p>

    </div>
    )
}

export default Register;
