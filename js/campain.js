document.addEventListener("DOMContentLoaded", function () {
const applyBtn = document.getElementById("applyBtn");
const popup = document.getElementById("popupForm");
const closeBtn = document.querySelector(".popup .close");
const form = document.getElementById("campaignForm");

// 팝업창 닫기 함수 (전역 함수로 등록)
window.closePopup = function() {
  if (popup) {
    popup.classList.add("hidden");
  }
};

// 신청 버튼 클릭 시 팝업창 열기
applyBtn.addEventListener("click", function () {
  // 화면 크기 계산
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  
  // 팝업창 크기 설정
  const popupWidth = 500;
  const popupHeight = 600;
  
  // 화면 중앙에 위치하도록 계산
  const left = (screenWidth - popupWidth) / 2;
  const top = (screenHeight - popupHeight) / 2;
  
  const popupWindow = window.open(
    "popup.html",
    "campaignPopup",
    `width=${popupWidth},height=${popupHeight},scrollbars=yes,resizable=yes,top=${top},left=${left},centerscreen=yes`
  );
  
  // 팝업창이 차단되었을 경우 알림
  if (!popupWindow || popupWindow.closed || typeof popupWindow.closed == 'undefined') {
    alert("팝업이 차단되었습니다. 팝업 차단을 해제하고 다시 시도해주세요.");
  }
});

// 닫기 버튼 클릭 시 팝업 닫기
closeBtn.addEventListener("click", function () {
  popup.classList.add("hidden");
});

// 팝업 바깥 클릭 시 닫기
popup.addEventListener("click", function (e) {
  if (e.target === popup) {
    popup.classList.add("hidden");
  }
});

// 폼 제출 시 페이지 새로고침 방지 + 알림 후 팝업 닫기 + 폼 초기화
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("신청이 완료되었습니다!");
  form.reset();
  popup.classList.add("hidden");
});
});