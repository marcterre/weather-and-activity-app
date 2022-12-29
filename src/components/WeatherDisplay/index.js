export default function WeatherDisplay({ weather }) {
  return (
    <h2>
      {weather.temperature}°C{weather.condition}
    </h2>
  );
}
