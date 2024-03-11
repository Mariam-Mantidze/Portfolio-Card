import "./App.css";
import styled from "styled-components";
import HeaderComponent from "./components/header/HeaderComponent";
import ButtonContainer from "./components/buttonContainer/ButtonContainer";

function App() {
  const links = [
    "Github",
    "FrontendMentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];
  return (
    <>
      <Container>
        <HeaderComponent />
        <Main>
          {links.map((link, index) => {
            return <ButtonContainer key={index}>{link}</ButtonContainer>;
          })}
        </Main>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: hsl(0, 0%, 12%);
  padding: 25px;
  border-radius: 15px;
  width: 300px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export default App;
