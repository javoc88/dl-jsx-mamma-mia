import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppRouter } from "./AppRouter";
import { Header } from "./components/Header";
import { PizzaProvider } from "./context/PizzaProvider";
import { Footer } from "./components";

function App() {
  return (
    <>
      <PizzaProvider>
        <Header />
        <AppRouter />
        <Footer />
      </PizzaProvider>
    </>
  );
}

export default App;
