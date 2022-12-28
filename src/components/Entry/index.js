export default function Entry({ name, onDelete, isChecked, onToogleWeather }) {
  return (
    <section>
      <h2>{name}</h2>
      <div>
        <button
          type="button"
          // onClick={onToogleWeather}
        >
          {isChecked ? "🌞" : "🌧️"}
        </button>
        <button type="button" onClick={onDelete}>
          {" "}
          x{" "}
        </button>
      </div>
    </section>
  );
}
