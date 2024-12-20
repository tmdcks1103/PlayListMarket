import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterText>University MakeUs Challenge</FooterText>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;

// 스타일 컴포넌트

const FooterWrapper = styled.footer`
  background-color: #333; /* 어두운 회색 배경 */
  padding: 20px 0;
  position: relative;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.h3`
  font-size: 18px;
  font-weight: normal;
  color: #fff;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;
  transition: color 0.3s ease;

  &:hover {
    color: #aaa; /* hover 시 밝은 회색으로 변경 */
  }
`;