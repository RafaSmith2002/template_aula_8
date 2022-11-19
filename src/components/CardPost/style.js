import styled from "styled-components";

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
  height: 300px;
  border: 1px solid black;
  line-height: 0;
`;
export const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    max-width: 50%;
    height: auto;
  }
`;

export const CardComentarios = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
export const CardPostContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  height: auto;
  gap: 20px;
  input {
    width: 70%;
    border-radius: 20px;
    height: 40px;
    padding-left: 20px;
  }
`;
