import styled from "styled-components";

const WarningContainer = styled.div`
  max-width: 518px;
  width: 100%;
  height: auto;
  background: #e8f3ff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;

  margin-left: auto;
  margin-top: 24px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 36px;
    color: #000000;
    margin: 0;
  }

  /* Ocultar en pantallas <= 768px */
  @media (max-width: 768px) {
    display: none;
  }
`;

const CardWarning = () => {
  return (
    <WarningContainer>
      <p>
        We use the mid-market rate for our Converter. This is for informational
        purposes only. You won't receive this rate when sending money.
      </p>
    </WarningContainer>
  );
};

export default CardWarning;
