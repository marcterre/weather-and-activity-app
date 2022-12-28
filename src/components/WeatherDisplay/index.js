export default function WeatherDisplay({ weather }) {
  return (
    <section>
      <p>{weather.temperature}°C</p>
      <div>{weather.condition}</div>
    </section>
  );
}
