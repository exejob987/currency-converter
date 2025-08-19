import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scaleY(0.4);
  }
  40% {
    transform: scaleY(1);
  }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoaderBars = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60px;
  height: 40px;
`;

const Bar = styled.div`
  background-color: #1a8dff;
  height: 100%;
  width: 10px;
  border-radius: 5px;
  animation: ${bounce} 1.2s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: -0.24s;
  }
  &:nth-child(2) {
    animation-delay: -0.12s;
  }
  &:nth-child(3) {
    animation-delay: 0;
  }
`;

export default function Loader() {
  return (
    <LoaderWrapper>
      <LoaderBars>
        <Bar />
        <Bar />
        <Bar />
      </LoaderBars>
    </LoaderWrapper>
  );
}
