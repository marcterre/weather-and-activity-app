import styled from "styled-components";

export default function Entry({ name, onDelete, isChecked, onCompleted }) {
  return (
    <>
      <H2>{name}</H2>
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
    </>
  );
}

const H2 = styled.h2`
  margin: 0px;
`;
