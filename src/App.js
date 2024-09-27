import Login from "./pages/login";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/header";
import { Container } from "./styles/GlobalStyles";
function App() {
  return (
    <>
      <Header />
      <Container>
        <Login />
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;
