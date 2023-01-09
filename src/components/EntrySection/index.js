import Entry from "../Entry";
import styled from "styled-components";

export default function EntrySection({
  entries,
  handleDelete,
  isGoodWeather,
  onCompleted,
}) {
  // const weatherActivitys = entries.filter(
  //   (entry) => entry.isChecked === isGoodWeather
  // );

  return (
    <>
      <StyledH2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and: "
          : "Bad weather outside! Here is what you can do: "}
      </StyledH2>
      <List>
        {entries.map((entry) => (
          <ListItem key={entry.id}>
            <Entry
              name={entry.name}
              isChecked={entry.isChecked}
              onDelete={() => handleDelete(entry.id)}
              onCompleted={onCompleted}
            ></Entry>
          </ListItem>
        ))}
      </List>
    </>
  );
}

const StyledH2 = styled.h2`
  font-size: 1em;
  color: ${(props) => (props.isGoodWeather ? "#E05151" : "#30753b")};
  margin: 10px;
`;

const List = styled.ul`
  display: grid;
  gap: 10px;
  padding: 10px 0px 50px;
`;

const ListItem = styled.li`
  margin: 0px 2vw;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 96vw;
  background-color: lightgray;
  border-radius: 5px;
`;
