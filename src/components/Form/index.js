import styled from "styled-components";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddActivity(data);

    event.target.reset();
    event.target.name.focus();
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
        <label htmlFor="isChecked">Good-weather activity: </label>
        <input type="checkbox" name="isChecked" id="isChecked"></input>
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
