import { Container } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
function App() {
  return (
    <Container className="App" sx={{ height: "100vh" }}>
      <Navbar />
    </Container>
  );
}

export default App;
