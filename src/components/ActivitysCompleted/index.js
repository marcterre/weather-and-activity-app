// import Entry from "../Entry";

export default function ActivityCompleted({ entries }) {
  const buttonCompleted = entries.filter((entry) => entry.isCompleted);

  return (
    <ul>
      {buttonCompleted.map((entry) => (
        <li key={entry.id}>
          <h2>{entry.name}</h2>
        </li>
      ))}
    </ul>
  );
}
