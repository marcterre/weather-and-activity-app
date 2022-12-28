import Entry from "../Entry";

export default function EntrySection({
  entries,
  handleDelete,
  handleToggleWeather,
}) {
  return (
    <ul>
      {entries.map((entry) => {
        return (
          <li key={entry.id}>
            <Entry
              name={entry.name}
              isChecked={entry.isChecked}
              onDelete={() => handleDelete(entry.id)}
              onToogleWeather={() => handleToggleWeather(entry.id)}
            ></Entry>
          </li>
        );
      })}
    </ul>
  );
}
