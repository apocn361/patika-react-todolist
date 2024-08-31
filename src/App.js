import Header from "./components/Header";
import Content from "./components/contents/Content";
import "./App.css";
import Footer from "./components/Footer";
import { TodoProvider } from "./context/ToDoContext";
function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header></Header>
        <Content></Content>
      </section>
      <Footer></Footer>
    </TodoProvider>
  );
}

export default App;
