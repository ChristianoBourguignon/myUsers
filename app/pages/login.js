import React from "react";
import styles from "../page.module.css";

function Login() {
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
    </div>
  );
}

export default Login;
