import "./app.module.css";
import Login from "./components/login/login";

function App({ authService }) {
  return (
    <div className={}>
      <Login authService={authService} />
    </div>
  );
}

export default App;
