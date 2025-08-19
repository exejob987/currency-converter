import styled from "styled-components";
import AmountInput from "../components/AmountInput";
import CurrencySelector from "../components/CurrencySelector";
import SwapButton from "../components/SwapButton";
import CardWarning from "../components/CardWarning";
import UpdateLegend from "../components/UpdateLegend";
import Result from "../components/Result";

const CardContainer = styled.div`
  width: 75%;
  max-width: 1126px;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 30px 30px 10px 30px;
  margin: -120px auto 60px auto;
  position: relative;

  @media (max-width: 500px) {
    width: 65%;
    margin: -130px auto 0 auto;
  }
`;

const InputsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 30px;
    justify-content: left;
    align-items: start;
    gap: 10px;
  }
`;

export default function CurrencyCard() {
  return (
    <CardContainer>
      <InputsRow>
        <AmountInput />
        <CurrencySelector type="from" />
        <SwapButton />
        <CurrencySelector type="to" />
      </InputsRow>
      <Result />
      <CardWarning />
      <UpdateLegend />
    </CardContainer>
  );
}
