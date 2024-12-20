import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
    // 모달의 열림/닫힘 상태 (초기값: 닫힘)
    isOpen: false,
}

// modalSlice 생성
const modalSlice = createSlice({
    name: 'modal', // 슬라이스 이름 (modal 상태 관리)
    initialState,  // 초기 상태
    reducers: {
        /**
         * 모달 여는 액션
         * 현재 상태의 isOpen 값을 true로 설정하여 모달을 엽니다.
         */
        openModal: (state) => {
            state.isOpen = true; // 모달 열기
        },

        /**
         * 모달 닫는 액션
         * 현재 상태의 isOpen 값을 false로 설정하여 모달을 닫습니다.
         */
        closeModal: (state) => {
            state.isOpen = false; // 모달 닫기
        }
    }
})

// 액션 생성자 내보내기
export const { openModal, closeModal } = modalSlice.actions;

// 리듀서 내보내기
export default modalSlice.reducer;