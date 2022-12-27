import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Weather & Activitys</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: darkgrey;
  width: 100vw;
  position: fixed;
  top: 0px;
`;
