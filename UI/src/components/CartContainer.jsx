import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice"; // openModal 액션 import
import CartItem from "./CartItem"; // 장바구니 아이템 컴포넌트 import
import styled from "styled-components";

// 수정된 부분: cartItems 변수명 충돌 방지
const CartContainer = () => {
  // Redux store에서 cartItems, total, amount 가져오기
  const { cartItems: cartList, total, amount } = useSelector((store) => store.cart); // cartList로 별칭 사용
  const dispatch = useDispatch(); // dispatch 훅 사용

  return (
    <CartWrapper>
      {/* 장바구니 헤더 */}
      <CartHeader>
        <h2>당신이 선택한 음반</h2>
      </CartHeader>

      {/* 장바구니 아이템 리스트 */}
      <CartItemsList>
        {cartList.map((item) => {
          return <CartItem key={item.id} {...item} />; // 각 아이템을 CartItem 컴포넌트로 렌더링
        })}
      </CartItemsList>

      {/* 장바구니 푸터 */}
      <CartFooter>
        <Divider />
        <CartTotal>
          <h4>
            총 가격 <span>{total}원</span> {/* 총 금액 표시 */}
          </h4>
        </CartTotal>
        {/* 장바구니 초기화 버튼 클릭 시 모달 열기 */}
        <ClearButton
          onClick={() => {
            dispatch(openModal()); // openModal 액션 실행
          }}
        >
          장바구니 초기화
        </ClearButton>
      </CartFooter>
    </CartWrapper>
  );
};

export default CartContainer;

// Styled Components 정의

// 전체 장바구니 영역 스타일
const CartWrapper = styled.section`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

// 장바구니 헤더 스타일
const CartHeader = styled.header`
  padding-bottom: 15px;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 20px;
  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
`;

// 장바구니 아이템 리스트 스타일
const CartItemsList = styled.div`
  margin-bottom: 20px;
`;

// 장바구니 푸터 스타일
const CartFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 15px;
  border-top: 2px solid #e0e0e0;
  margin-top: 20px;
`;

// 구분선 스타일
const Divider = styled.hr`
  width: 100%;
  border: 1px solid #e0e0e0;
  margin-bottom: 20px;
`;

// 장바구니 총 금액 스타일
const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  h4 {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  span {
    font-size: 18px;
    font-weight: bold;
    color: #007bff;
  }
`;

// 장바구니 초기화 버튼 스타일
const ClearButton = styled.button`
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 15px;

  &:hover {
    background-color: #e25746;
  }

  &:active {
    background-color: #d14636;
  }
`;