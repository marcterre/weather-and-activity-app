import styled from "styled-components";

export default function Form() {
  return (
    <StyledForm>
      <fieldset>
        <legend>Add new Activity:</legend>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Type your name here..."
        ></input>
        <label htmlFor="checkbox">Good-weather activity:</label>
        <input type="checkbox" name="checkbox"></input>
      </fieldset>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  border: 1px solid black;
`;
