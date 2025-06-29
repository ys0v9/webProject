document.addEventListener("DOMContentLoaded", function () {
const applyBtn = document.getElementById("applyBtn");

// 팝업창 닫기 함수 (전역 함수로 등록)
window.closePopup = function() {
  // 팝업창 닫기 로직은 popup.js에서 처리됨
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

// Command+R 또는 Ctrl+R 키 이벤트 리스너
document.addEventListener('keydown', function(event) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'r') {
        event.preventDefault();
        window.location.reload();
    }
});

// 캠페인 신청 버튼 클릭 이벤트
document.addEventListener('DOMContentLoaded', function() {
    // 모든 메뉴 항목에서 active 클래스 제거
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // 캠페인 참여 메뉴 활성화
    const campaignLink = document.querySelector('.nav-link[href="campain.html"]');
    if (campaignLink) {
        campaignLink.classList.add('active');
    }

    // 캠페인 신청 버튼 이벤트
    const applyBtn = document.getElementById('applyBtn');
    if (applyBtn) {
        applyBtn.addEventListener('click', function() {
            // 팝업창 열기
            window.open('popup.html', 'popup', 'width=400,height=500,scrollbars=yes,resizable=yes');
        });
    }
});
});