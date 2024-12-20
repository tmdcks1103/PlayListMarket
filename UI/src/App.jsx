import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { calculateTotals } from './features/cart/cartSlice';

import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Footer from './components/Footer';

import ModalPortal from './components/ModalPortal';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch(); // Redux 액션을 디스패치할 수 있는 함수 생성

  // Redux 상태에서 cart와 modal 상태 가져오기
  const { cartItems } = useSelector((state) => state.cart); // cart 상태에서 cartItems 가져옴
  const { isOpen } = useSelector((state) => state.modal); // modal 상태에서 isOpen 가져옴

  // cartItems가 변경될 때마다 총합 계산 액션 디스패치
  useEffect(() => {
    dispatch(calculateTotals()); // calculateTotals 액션 호출
  }, [cartItems, dispatch]); // cartItems가 변경될 때만 실행

  return (
    <>
      <header>
        <Navbar /> 
      </header>

      <main>
        <CartContainer /> {/* 장바구니 항목을 표시하는 컴포넌트 */}
        
        {/* 모달이 열려 있을 때만 렌더링 */}
        {isOpen && (
          <ModalPortal> {/* 모달을 React Portal로 렌더링 */}
            <Modal>
              <h4>정말 모든 음반을 삭제하시겠습니까?</h4> {/* 모달 내용 */}
            </Modal>
          </ModalPortal>
        )}
      </main>
      
      <footer>
        <Footer /> 
      </footer>
    </>
  );
}

export default App;