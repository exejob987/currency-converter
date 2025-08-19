import { useContext } from "react";
import styled from "styled-components";
import btn_currency from "../assets/btn_currency.svg";
import { CurrencyContext } from "../context/CurrencyContext";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  position: relative;
  width: 76px;
  height: 76px;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: left;
    height: auto;
  }
`;

const Icon = styled.img`
  width: 42px;
  height: 42px;
`;

export default function SwapButton() {
  const { handleSwap } = useContext(CurrencyContext);

  return (
    <ButtonWrapper onClick={handleSwap}>
      <Icon src={btn_currency} alt="Swap" />
    </ButtonWrapper>
  );
}
