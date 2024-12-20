import styled, { keyframes } from "styled-components";
import ModalButton from "./ModalButton";
import { useDispatch } from "react-redux";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  return (
    <ModalOverlay onClick={handleCloseModal}>
      <ModalContent>
        <ModalHeader>알림</ModalHeader> {/* 모달에 헤더 추가 */}
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <ModalButton />
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

// 모달이 등장하는 애니메이션
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 모달이 다른 요소 위에 표시되도록 */
`;

const ModalContent = styled.div`
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  width: 450px;
  max-width: 90%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: ${fadeIn} 0.3s ease-out; /* 등장 애니메이션 */
`;

const ModalHeader = styled.h2`
  margin: 0 0 15px 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 10px;
`;

const ModalBody = styled.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px; /* 버튼 간격 */
`;