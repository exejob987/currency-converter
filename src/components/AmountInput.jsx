import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import styled from "styled-components";

const AmountField = styled.div`
  position: relative;
  width: 279px;
  height: 76px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AmountLabel = styled.label`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

const AmountInputContainer = styled.div`
  position: relative;
`;

const CurrencySign = styled.span`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  pointer-events: none;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const AmountInputField = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 20px; /* espacio para el signo de moneda */
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  box-sizing: border-box;

  &::placeholder {
    color: #000000;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    height: 36px;
  }
`;

const AmountError = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: red;
  position: absolute;
  bottom: -35px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export default function AmountInput() {
  const { amount, handleAmountChange, error } = useContext(CurrencyContext);

  const handleChange = (e) => {
    const value = e.target.value;
    handleAmountChange(value);
  };

  return (
    <AmountField>
      <AmountLabel>Amount</AmountLabel>
      <AmountInputContainer>
        <CurrencySign>$</CurrencySign>
        <AmountInputField
          type="text"
          value={amount || ""}
          onChange={handleChange}
          placeholder="0.00"
        />
      </AmountInputContainer>
      {error && <AmountError>{error}</AmountError>}
    </AmountField>
  );
}
