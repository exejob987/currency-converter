import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import Loader from "./Loader";
import styled from "styled-components";

const ResultContainer = styled.div`
  position: relative;
`;

const MainConversion = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
`;

const InverseConversion = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 36px;
  color: #757575;
`;

export default function Result() {
  const { amount, fromCurrency, toCurrency, convertedAmount, currencyNames, loading } =
    useContext(CurrencyContext);

  const safeAmount = Number(amount) || 0;
  const safeConverted = Number(convertedAmount) || 0;

  const inverseAmount =
    safeConverted !== 0 ? (1 / safeConverted).toFixed(6) : 0;

  return (
    <ResultContainer>
      <MainConversion>
        {safeAmount.toFixed(2)} {currencyNames[fromCurrency] || fromCurrency} ={" "}
        {safeConverted.toFixed(7)} {currencyNames[toCurrency] || toCurrency}
      </MainConversion>

      <InverseConversion>
        1 {currencyNames[toCurrency] || toCurrency} = {inverseAmount}{" "}
        {currencyNames[fromCurrency] || fromCurrency}
      </InverseConversion>
       {loading && <Loader />}
    </ResultContainer>
  );
}
