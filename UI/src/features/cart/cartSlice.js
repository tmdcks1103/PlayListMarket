import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../constants/cartItems";

// 초기 상태 정의
const initialState = {
  cartItems: cartItems, // 장바구니 아이템 초기 데이터
  amount: 0, // 장바구니에 담긴 총 수량
  total: 0, // 장바구니의 총 금액
};

// cartSlice 생성
const cartSlice = createSlice({
  name: "cart", // 슬라이스 이름
  initialState, // 초기 상태
  reducers: {
    /**
     * 증가
     * state - 현재 상태
     * payload - 증가할 아이템의 ID
     */
    increase: (state, { payload: itemId }) => {
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      if (item) {
        item.amount += 1; // 아이템 수량 증가
      }
    },

    //감소
    decrease: (state, { payload: itemId }) => {
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      if (item && item.amount > 0) {
        item.amount -= 1; // 아이템 수량 감소
      }
    },

   
     //특정 아이템 제거
     // payload - 제거할 아이템의 ID
    removeItem: (state, { payload: itemId }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    /**
     * 장바구니 초기화 (모든 아이템 제거)
     */
    clearCart: (state) => {
      state.cartItems = []; // 모든 아이템 제거
    },

    /**
     * 총 수량과 금액 계산
     */
    calculateTotals: (state) => {
      // 총 수량 및 금액 초기화
      let amount = 0;
      let total = 0;

      // 장바구니 아이템 순회하며 총합 계산
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      // 계산된 값을 상태에 반영
      state.amount = amount;
      state.total = total;
    },
  },
});

// 액션 내보내기
export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;

// reducer 내보내기
export default cartSlice.reducer;