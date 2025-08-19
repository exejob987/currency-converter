import styled from "styled-components";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

const HeroWrapper = styled.section`
  width: 100%;
  height: 295px;
  background: #1a8dff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  text-align: center;
  margin-top: 60px;
`;

const HeroSubtitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  color: #ffffff;
  margin: 60px;

  @media (max-width: 500px) {
    margin: 40px;
  }
`;

export default function Hero() {
  const { amount, fromCurrency, toCurrency, currencyNames } =
    useContext(CurrencyContext);

  return (
    <HeroWrapper>
      <HeroSubtitle>
        {amount} {fromCurrency} to {toCurrency} - Convert{" "}
        {currencyNames[fromCurrency]} to {currencyNames[toCurrency]}
      </HeroSubtitle>
    </HeroWrapper>
  );
}
