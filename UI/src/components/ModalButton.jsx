import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal, openModal } from "../features/modal/modalSlice";
import styled from "styled-components";

// ModalButton 컴포넌트 정의
const ModalButton = () => {
  const dispatch = useDispatch(); // dispatch 훅을 사용하여 액션을 보낼 수 있도록 함

  return (
    <ButtonWrapper> {/* 버튼들을 감싸는 wrapper */}
      {/* 네 버튼 */}
      <StyledButton
        type="button" // 버튼의 타입을 "button"으로 설정
        primary // primary prop을 사용하여 스타일링 (배경색 등)
        onClick={() => {
          dispatch(openModal()); // 모달을 다시 열기 (필요한 경우)
          dispatch(clearCart()); // 장바구니 아이템을 비우는 액션
          dispatch(closeModal()); // 모달 닫기
        }}
      >
        네
      </StyledButton>

      {/* 아니오 버튼 */}
      <StyledButton
        type="button" // 버튼의 타입을 "button"으로 설정
        onClick={() => {
          dispatch(closeModal()); // 모달을 닫는 액션
        }}
      >
        아니오
      </StyledButton>
    </ButtonWrapper>
  );
};

export default ModalButton;

/** Styled Components */
const ButtonWrapper = styled.div`
  display: flex; /* 버튼들을 가로로 배치 */
  justify-content: center; /* 버튼들을 가로로 중앙 정렬 */
  gap: 10px; /* 버튼들 사이의 간격을 10px로 설정 */
  margin-top: 20px; /* 위쪽에 20px의 여백을 추가 */
`;

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? "#6c3ec3" : "#f1f1f1")}; /* primary prop에 따라 배경색 설정 */
  color: ${(props) => (props.primary ? "#fff" : "#333")}; /* primary prop에 따라 글자색 설정 */
  border: ${(props) => (props.primary ? "none" : "1px solid #ccc")}; /* primary prop에 따라 테두리 설정 */
  border-radius: 8px; /* 모서리를 둥글게 설정 */
  font-size: 1rem; /* 글자 크기를 1rem으로 설정 */
  font-weight: bold; /* 글자 두께를 bold로 설정 */
  padding: 10px 20px; /* 버튼 안쪽 여백을 10px 위아래, 20px 좌우로 설정 */
  cursor: pointer; /* 마우스 커서를 버튼처럼 보이게 설정 */
  transition: all 0.3s ease; /* 모든 스타일 변화에 부드러운 전환 효과를 설정 */

  &:hover {
    background-color: ${(props) => (props.primary ? "#8c6ef0" : "#e2e2e2")}; /* hover 상태에서 배경색 변화 */
    color: ${(props) => (props.primary ? "#fff" : "#333")}; /* hover 상태에서 글자색 변화 */
  }

  &:focus {
    outline: none; /* focus 상태에서 테두리 표시 제거 */
    box-shadow: 0 0 5px ${(props) => (props.primary ? "#6c3ec3" : "#ccc")}; /* focus 상태에서 그림자 추가 */
  }

  &:active {
    transform: scale(0.95); /* 버튼을 클릭할 때 약간 축소되는 효과 */
  }
`;