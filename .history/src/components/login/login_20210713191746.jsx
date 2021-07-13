import React from "react";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent) //
      .then(console.log);
  };
  return (
    <section className={styles.login}>
      <section className={styles.loginBox}>
        <h2>Login</h2>
        <ul className={styles.loginList}>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Login;
