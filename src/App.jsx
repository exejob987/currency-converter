import { CurrencyProvider } from "./context/CurrencyContext";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import CurrencyCard from "./layout/CardCurrency";
import ConverterLayout, { GlobalStyle } from "./layout/ConverterLayout";

function App() {
  return (
    <CurrencyProvider>
      <GlobalStyle />
      <ConverterLayout>
        <Header />
        <Hero />
        <CurrencyCard />
      </ConverterLayout>
    </CurrencyProvider>
  );
}

export default App;
