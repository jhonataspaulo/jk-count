import { Count } from "./components/Count";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <div className={styles.texts}>
        <h1>Jhonatas e Keslley</h1>
        <h2>Together Since</h2>
      </div>
      <Count />
    </div>
  );
}

export default App;
