export default function Entry({ name, onDelete, isChecked, onCompleted }) {
  return (
    <section>
      <h2>{name}</h2>
      <div>
        <button type="button">{isChecked ? "🌞" : "🌧️"}</button>
        <button type="button" onClick={onDelete}>
          {" "}
          x{" "}
        </button>
        <button type="button" onClick={onCompleted}>
          {" "}
          ⎷{" "}
        </button>
      </div>
    </section>
  );
}
