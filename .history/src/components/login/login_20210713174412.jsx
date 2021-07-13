import React from "react";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const onLogin = (event) => {};
  return (
    <div className={styles.wrap}>
      <div className={styles.loginPopup}>
        <header className={styles.header}>
          <img src="/images/logo.png" alt="logo" />
          <h1>Business Card Maker</h1>
        </header>
        <section className={styles.loginBox}>
          <h2>Login</h2>
          <ul>
            <li>
              <button onClick={onLogin}>Google</button>
            </li>
            <li>
              <button onClick={onLogin}>Github</button>
            </li>
          </ul>
        </section>
        <footer className={styles.footer}>
          <p className={styles.copyright}>Code your dream</p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
