import { useDispatch } from "react-redux";  // Redux의 dispatch 함수 사용
// import { ChevronDown, ChevronUp } from "../constants/icons"; 
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6"; // 수량 증가/감소 버튼에 사용할 아이콘
import { increase, decrease, removeItem } from "../features/cart/cartSlice"; // 수량 증가, 감소, 항목 삭제를 위한 액션 가져오기
import styled from "styled-components";  

const CartItem = ({ id, title, singer, price, img, amount }) => {
  const dispatch = useDispatch();  // Redux dispatch 함수 호출

  return (
    <CartItemWrapper>  {/* 장바구니 항목의 기본 컨테이너 */}
      <CartItemImage src={img} alt={`${title} 이미지`} />  {/* 상품 이미지 표시 */}
      <CartItemInfo>  {/* 상품 정보(제목, 가수, 가격)을 담은 컨테이너 */}
        <CartItemTitle>
          {title} | <Singer>{singer}</Singer>  {/* 제목과 가수명 표시 */}
        </CartItemTitle>
        <ItemPrice>₩ {price}</ItemPrice>  {/* 가격 표시 */}
      </CartItemInfo>
      <AmountControl>  {/* 수량 조절 버튼을 담은 컨테이너 */}
        <AmountButton
          onClick={() => {  // 수량 감소 버튼 클릭 시 동작
            if (amount === 1) {  // 수량이 1일 경우
              dispatch(removeItem(id));  // 장바구니에서 해당 항목 삭제
              return;
            }
            dispatch(decrease(id));  // 아니면 수량 감소
          }}
        >
          <FaAnglesLeft />  {/* 수량 감소 아이콘 */}
        </AmountButton>
        <AmountDisplay>{amount}</AmountDisplay>  {/* 현재 수량 표시 */}
        <AmountButton onClick={() => dispatch(increase(id))}>  {/* 수량 증가 버튼 클릭 시 동작 */}
          <FaAnglesRight />  {/* 수량 증가 아이콘 */}
        </AmountButton>
      </AmountControl>
    </CartItemWrapper>
  );
};

export default CartItem;

// 스타일 컴포넌트

// 장바구니 항목의 기본 스타일을 정의
const CartItemWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid #f1f1f1;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`;

// 상품 이미지를 스타일링
const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

// 상품 정보를 담는 스타일 컴포넌트
const CartItemInfo = styled.div`
  flex: 1;
  margin-left: 20px;
`;

// 상품 제목 스타일
const CartItemTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

// 가수명 스타일
const Singer = styled.span`
  font-weight: normal;
  color: #555;
`;

// 가격 스타일
const ItemPrice = styled.h4`
  font-size: 14px;
  color: #888;
`;

// 수량 조절 버튼들을 담는 스타일 컴포넌트
const AmountControl = styled.div`
  display: flex;
  align-items: center;
`;

// 수량 증가/감소 버튼의 스타일 컴포넌트
const AmountButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
  font-size: 24px;  /* 아이콘 크기 */
  padding: 10px;  /* 버튼의 여백 */
  transition: all 0.2s ease;  /* 버튼에 hover 효과 */
  
  &:hover {  /* hover 상태에서 색상 변경 */
    color: #333;
  }

  &:disabled {  /* disabled 상태에서 스타일 적용 */
    cursor: not-allowed;
    color: #ddd;
  }
`;

// 현재 수량을 보여주는 스타일
const AmountDisplay = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0 10px;
  color: #333;
  width: 30px;
  text-align: center;
`;