import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.loginPopup}>
        <header className={styles.header}>
          <img src="/images/logo.png" alt="logo" />
          <h1>Business Card Maker</h1>
        </header>
        <section>
          <h2>Login</h2>
        </section>
        <footer className={styles.footer}>
          <p>Code your dream</p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
