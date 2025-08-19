import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  min-width: 1280px;
  width: 100vw;
  height: 60px;
  top: 0;
  left: 0;
  background: #0e1342;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 20px;
  color: #ffffff;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>Currency exchange</Title>
    </HeaderWrapper>
  );
}
