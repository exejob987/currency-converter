import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  // State
  const [amount, setAmount] = useState(1.0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRates, setExchangeRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch exchange rates
  useEffect(() => {
    const fetchRates = async () => {
      const apiUrl = import.meta.env.VITE_EXCHANGE_API;
      setLoading(true);
      try {
        const response = await axios.get(`${apiUrl}${fromCurrency}`);
        setExchangeRates(response.data.rates);
        setError(null);
      } catch (err) {
        setError("Error fetching exchange rates");
        console.error(err);
      } finally {
        setLoading(false); 
      }
    };
    fetchRates();
  }, [fromCurrency]);

  // Calculate converted amount
  useEffect(() => {
    if (exchangeRates[toCurrency]) {
      const rate = exchangeRates[toCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    }
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  // Handle amount change
  const handleAmountChange = (value) => {
    if (value < 0) {
      setError("Amount cannot be negative");
      return;
    }
    setAmount(value || 0);
    setError(null);
  };

  // Swap currencies
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Available currencies
  const currencies = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD"];

  // Names currencies
  const currencyNames = {
    USD: "US Dollar",
    EUR: "Euro",
    GBP: "British Pounds",
    JPY: "Japanese Yen",
    CAD: "Canadian Dollar",
    AUD: "Australian Dollar",
  };

  return (
    <CurrencyContext.Provider
      value={{
        amount,
        fromCurrency,
        toCurrency,
        convertedAmount,
        error,
        currencies,
        currencyNames,
        loading,
        setLoading,
        setFromCurrency,
        setToCurrency,
        handleAmountChange,
        handleSwap,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
