import styled from "styled-components";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

const Legend = styled.legend`
  width: auto;
  margin-left: auto;
  padding: 15px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #000000;

  @media (max-width: 768px) {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: left;
  }
`;

const Underlined = styled.span`
  text-decoration: underline;
`;

const UpdateLegend = () => {
  const { fromCurrency, toCurrency, currencyNames } =
    useContext(CurrencyContext);

  const updatedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: `${import.meta.env.VITE_TIMEZONE}`,
  });

  return (
    <Legend>
      <Underlined>{currencyNames[fromCurrency]}</Underlined> to{" "}
      <Underlined>{currencyNames[toCurrency]}</Underlined> conversion — Last
      updated {updatedAt} UTC
    </Legend>
  );
};

export default UpdateLegend;
