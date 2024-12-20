import ReactDOM from "react-dom"; // React의 ReactDOM 라이브러리를 사용하여, DOM에 직접 접근하는 기능 제공

// ModalPortal 컴포넌트 정의
const ModalPortal = ({ children }) => {
  // 서버 사이드 렌더링(SSR)을 고려한 안전한 처리
  if (typeof window === "undefined") {
    return null; // window 객체가 없으면 서버 사이드 렌더링 환경이므로, 모달을 렌더링하지 않음
  }

  const node = document.getElementById("portal"); // HTML에서 id가 "portal"인 요소를 찾음

  // id가 "portal"인 요소가 존재하지 않으면 오류 메시지를 출력하고 모달을 렌더링하지 않음
  if (!node) {
    console.error("Target container #portal not found.");
    return null;
  }

  // createPortal은 자식 요소(children)를 특정 DOM 노드(node)로 렌더링하기 위해 사용
  return ReactDOM.createPortal(children, node);
}

export default ModalPortal;

// 화면의 특정 부분에만 표시되게 하기 위해 createPortal 기능 사용