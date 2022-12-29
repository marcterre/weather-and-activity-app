import styled from "styled-components";

export default function WeatherDisplay({ weather }) {
  return (
    <Section>
      <Div>{weather.condition}</Div>
      <h2>{weather.temperature}°C</h2>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2.5em;
`;

const Div = styled.div`
  font-size: 2em;
`;
