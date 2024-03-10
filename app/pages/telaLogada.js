import React from "react";
import styles from "../page.module.css";
import { auth } from "../api/firebase.js"
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";

function Login() {

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
            E-mail: <input name="user-email" required />
        </label>
        <label>
            Senha: <input name="user-email" required />
        </label>
        <div className={styles.buttons}>
            <button type="submit">Logar</button>
            <button>Cadastrar-se</button>
        </div>
        
        {/* {user && user.uid ? (
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
        )} */}
    </div>
  );
}

export default Login;
