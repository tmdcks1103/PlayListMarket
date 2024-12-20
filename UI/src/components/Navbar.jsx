import { useSelector } from "react-redux";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  //cartItems 상태를 가져옴.
  const cartItems = useSelector((state) => state.cart.cartItems); // cartItems 가져오기

  // 각 아이템의 amount 총합 계산
  const totalAmount = cartItems.reduce((total, item) => total + item.amount, 0);

  return (
    <Nav>
      <Logo>UMC PlayList</Logo>
      <CartWrapper>
        <FaShoppingCart size={24}/>
        <CartCount>{totalAmount}</CartCount> {/* 총합 표시 */}
      </CartWrapper>
    </Nav>
  );
};

export default Navbar;

/** Styled Components */
const Nav = styled.nav`
  background-color: #6c3ec3; /* 보라색 배경 */
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: #ffffff;
`;

const Logo = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const CartCount = styled.span`
  background-color: #8c6ef0; /* 밝은 보라색 */
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -8px;
  right: -8px;
`;