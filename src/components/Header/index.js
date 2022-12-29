import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Weather & Activitys</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  background-color: #30753b;
  width: 100vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
`;
