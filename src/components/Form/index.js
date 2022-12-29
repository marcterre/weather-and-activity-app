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
      <h2>Add new Activity:</h2>
      <label htmlFor="name">
        Name:{" "}
        <InputName
          id="name"
          type="text"
          name="name"
          placeholder="Type your name here..."
        ></InputName>
      </label>
      <label htmlFor="isChecked">
        Good-weather activity:{" "}
        <input type="checkbox" name="isChecked" id="isChecked"></input>
      </label>
      <Button type="submit">Save</Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  padding: 10px;
  border: none;
  display: grid;
  gap: 10px;
  justify-content: flex-start;
  width: 100vw;
  font-size: 1.2em;
`;

const Button = styled.button`
  padding: 2px;
  width: 100px;
  font-size: 1em;
  background-color: #f8b859;
  border: 1px solid black;
  border-radius: 15px;
  &:hover {
    background-color: grey;
  }
`;

const InputName = styled.input`
  width: 250px;
`;
