import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Weather & Activitys</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #30753b;
  width: 100vw;
  height: 8vh;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
