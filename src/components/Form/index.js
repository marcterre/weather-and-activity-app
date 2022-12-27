import styled from "styled-components";

export default function Form({ onAddActivity, isChecked }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddActivity(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFieldset>
        <StyledLegend>Add new Activity:</StyledLegend>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Type your name here..."
        ></input>
        <label htmlFor="checkbox">Good-weather activity: </label>
        <input type="checkbox" name="checkbox" onClick={isChecked}></input>
        <button type="submit">Save</button>
      </StyledFieldset>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  border: 1px solid black;
`;

const StyledFieldset = styled.fieldset`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  justify-content: flex-start;
`;

const StyledLegend = styled.legend`
  font-size: 1.5em;
`;
