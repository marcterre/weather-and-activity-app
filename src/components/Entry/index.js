import styled from "styled-components";

export default function Entry({ name, onDelete, isChecked, onCompleted }) {
  return (
    <>
      <DivHeading>
        <ButtonNoBackground type="button">
          {isChecked ? "🌞" : "🌧️"}
        </ButtonNoBackground>
        <h2> {name}</h2>
      </DivHeading>
      <Div>
        <Button type="button" onClick={onCompleted}>
          {" "}
          ⎷{" "}
        </Button>
        <ButtonNoBackground type="button" onClick={onDelete}>
          {" "}
          x{" "}
        </ButtonNoBackground>
      </Div>
    </>
  );
}

const ButtonNoBackground = styled.button`
  background: none;
  border: none;
  font-size: 1.5em;
`;

const Button = styled.button`
  background-color: #51b3e0;
  width: 30px;
  height: 30px;
  font-size: 1em;
  border-radius: 50%;
  border: none;
  font-size: 1.5em;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const DivHeading = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
