import { Hero, Personal, Works, Contact } from "./components";

import { Container } from "./styles";

function App() {
  return (
    <Container>
      <Hero />
      <Personal />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
