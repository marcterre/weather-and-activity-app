export default function WeatherDisplay({ weather }) {
  return (
    <section>
      <h2>{weather.location}</h2>
      <p>{weather.temperature}</p>
      <div>{weather.condition}</div>
    </section>
  );
}
