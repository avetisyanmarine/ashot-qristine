import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const SecondPagePart = styled.div`
  div {
    text-align: center;
  }
  h2 {
    font-size: 30px;
  }
`;

const GridDiv = styled(Flexible)`
  div {
    flex-direction: column;
    text-align: center;
    padding: 4px 15px;
    h2 {
      font-size: 42px;
    }
    p {
      font-size: 20px;
      line-height: 12px;
    }
  }
`;
export { SecondPagePart, GridDiv };
