import { useContext, useState, useRef, useEffect } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import arrow_select from "../assets/arrow_select.svg";
import styled from "styled-components";

const SelectorField = styled.div`
  position: relative;
  width: 279px;
  display: flex;
  height: 76px;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SelectorLabel = styled.label`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  margin-bottom: 8px;
`;

const SelectorContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SelectorInput = styled.div`
  width: 100%;
  height: 40px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #06081a;
  padding: 0 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 500px) {
    font-size: 14px;
    height: 36px;
  }
`;

const SelectorArrow = styled.img`
  width: 16px;
  height: 9px;
`;

const OptionsList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const OptionItem = styled.div`
  padding: 8px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

export default function CurrencySelector({ type }) {
  const {
    fromCurrency,
    toCurrency,
    setFromCurrency,
    setToCurrency,
    currencies,
  } = useContext(CurrencyContext);

  const value = type === "from" ? fromCurrency : toCurrency;
  const setCurrency = type === "from" ? setFromCurrency : setToCurrency;

  const [open, setOpen] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <SelectorField>
      <SelectorLabel>{type === "from" ? "From" : "To"}</SelectorLabel>
      <SelectorContainer ref={containerRef}>
        <SelectorInput onClick={() => setOpen(!open)}>
          {value}
          <SelectorArrow src={arrow_select} alt="arrow" />
        </SelectorInput>

        {open && (
          <OptionsList>
            {currencies
              .filter((currency) => {
                if (type === "from") return currency !== toCurrency;
                else return currency !== fromCurrency;
              })
              .map((currency) => (
                <OptionItem
                  key={currency}
                  onClick={() => {
                    setCurrency(currency);
                    setOpen(false);
                  }}
                >
                  {currency}
                </OptionItem>
              ))}
          </OptionsList>
        )}
      </SelectorContainer>
    </SelectorField>
  );
}
