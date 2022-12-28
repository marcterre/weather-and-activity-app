import Entry from "../Entry";
import styled from "styled-components";

export default function EntrySection({
  entries,
  handleDelete,
  // handleToggleWeather,
  isGoodWeather,
}) {
  const weatherActivitys = entries.filter(
    (entry) => entry.isChecked === isGoodWeather
  );

  return (
    <>
      <StyledH2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and: "
          : "Bad weather outside! Here is what you can do: "}
      </StyledH2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <Entry
              name={entry.name}
              // isChecked={entry.isChecked}
              onDelete={() => handleDelete(entry.id)}
              // onToogleWeather={() => handleToggleWeather(entry.id)}
            ></Entry>
          </li>
        ))}
      </ul>
    </>
  );
}

const StyledH2 = styled.h2`
  font-size: 1em;
`;
