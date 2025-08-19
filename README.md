# Currency Converter

A React-based web application for converting currencies in real-time using the Vatcomply API (https://api.vatcomply.com/rates). The app leverages the React Context API for centralized state management, ensuring modularity and scalability. The UI is styled to precisely match the provided Figma design (https://www.figma.com/design/c0W8ZoOtf8enDe7dDshaPJ/Exchange-challenge), featuring a responsive layout, intuitive interactions, and a clean aesthetic with a gradient background, Pacifico font, and forestgreen accents.

## Features
- Real-Time Conversion: Converts currencies using live exchange rates from the Vatcomply API.
- Default State: Initializes with 1.00 USD to EUR conversion on page load.
- Automatic Updates: Recalculates the converted amount instantly when the input amount or currencies change.
- Input Validation: Prevents negative amounts with clear error messaging.
- Currency Swap: Allows users to swap "from" and "to" currencies with a single click.
- Responsive Design: Adapts seamlessly to different screen sizes for mobile and desktop usability.
- Context API: Manages state globally for a scalable and maintainable codebase.
- Figma Compliance: Matches the Figma design, including colors (#228B22 for labels/result, #E2FCBB for swap button), fonts (Pacifico for heading), and layout.

## Prerequisites
- Node.js 20
- npm or yarn

## Getting Started
1. Clone the repository: `git clone https://github.com/exejob987/currency-converter.git`
2. Navigate to the project directory: `cd currency-converter`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://localhost:5173` to use the application.

## Environment Variables
To configure the API endpoint, the application uses environment variables:
1. Copy the `env.example` file to `.env`: cp env.example .env
2. Open the `.env` file and ensure the `VITE_EXCHANGE_API` is set to: VITE_EXCHANGE_API=https://api.vatcomply.com/rates?base=

## Dependencies
- `react`: Core library for building the user interface.
- `axios`: For making API requests to fetch exchange rates from Vatcomply.
- `vite`: Fast development server and build tool for React.

## API Usage
The application uses the Vatcomply API (`https://api.vatcomply.com/rates?base=USD`) to fetch real-time exchange rates. No API key is required.

## Notes
- Currency List: Supports a subset of currencies (`USD`, `EUR`, `GBP`, `JPY`, `CAD`, `AUD`) for simplicity. Extend the `currencies` array in `CurrencyContext.jsx` using `Object.keys(exchangeRates)` for more currencies.
- Error Handling: Includes validation for negative amounts and API failures with user-friendly error messages.
- Styling: Adheres to the Figma design with a linear gradient background (#FDFBFB to #EBEDEE), Pacifico font for the heading, and specific colors (#228B22 for labels/result, #E2FCBB for swap button, #FF0000 for errors).
- Scalability: The Context API ensures the app is maintainable and ready for additional features like conversion history or currency flags.

## License
Unlicensed, released into the public domain.