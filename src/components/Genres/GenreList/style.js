import styled from "styled-components";

const StyleGenreList = styled.div`
  border-radius: 15px;
  border: 1px solid var(--color-border);

  header {
    padding: 2.5rem 4rem;
    border-bottom: 1px solid var(--color-border);
    color: var(--color-accent);
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  form {
    padding: 3rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  label,
  input {
    cursor: pointer;
  }

  input[type="radio"] {
    padding: 0.4rem;
    -webkit-appearance: none;
    outline: 0.1rem solid black;
    outline-offset: 0.1rem;
  }

  input[type="radio"]:checked {
    display: inline-block;
    background-color: #000;
  }

  .form-group {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

export default StyleGenreList;
