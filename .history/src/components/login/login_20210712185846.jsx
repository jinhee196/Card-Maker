import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <div>
      <div className={styles.wrap}>
        <header>
          <img src="/images/logo.png" alt="logo" />
          <h1>BUSINESS CARD MAKER</h1>
        </header>
        <section>
          <h2>Login</h2>
        </section>
        <footer>
          <p>Code your dream</p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
