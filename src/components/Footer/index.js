import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <p>Impressum</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: #30753b;
  width: 100vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
`;
