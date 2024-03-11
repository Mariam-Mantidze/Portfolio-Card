import styled from "styled-components";

export default function HeaderComponent() {
  return (
    <Header>
      <img src="/images/avatar-jessica.jpeg" alt="portrait of woman" />

      <HeroInfo>
        <h1>Jessica Randall</h1>
        <span>London, United Kingdom</span>
      </HeroInfo>
      <p>"Front-end developer and avid reader."</p>
    </Header>
  );
}

const Header = styled.div`
  text-align: center;

  & img {
    width: 30%;
    border-radius: 50%;
  }

  & p {
    color: hsl(0, 0%, 100%);
    font-size: 10px;
    font-weight: 400;
  }
`;

const HeroInfo = styled.div`
  margin: 15px 0;

  & h1 {
    font-size: 18px;
    color: white;
    margin-bottom: 5px;
  }

  & span {
    font-size: 10px;
    font-weight: 700;
    color: hsl(75, 94%, 57%);
  }
`;
