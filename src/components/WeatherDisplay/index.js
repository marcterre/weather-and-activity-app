import styled from "styled-components";

export default function WeatherDisplay({ weather }) {
  return (
    <StyledH2>
      {weather.temperature}°C{weather.condition}
    </StyledH2>
  );
}

const StyledH2 = styled.h2`
  font-size: 2em;
`;
