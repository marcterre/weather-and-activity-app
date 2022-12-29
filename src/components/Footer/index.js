import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <p>Impressum</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: #30753b;
  position: fixed;
  bottom: 0px;
  width: 100vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
`;
