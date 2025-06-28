document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".close");
  const form = document.getElementById("campaignForm");
  const phoneInput = document.querySelector('input[name="phone"]');

  // 닫기 버튼 클릭 시 팝업창 닫기
  closeBtn.addEventListener("click", function () {
    // 부모 창에서 팝업 닫기 함수 호출
    if (window.parent && window.parent.closePopup) {
      window.parent.closePopup();
    } else {
      // fallback: 직접 닫기 시도
      window.close();
    }
  });

  // 전화번호 자동 포맷팅
  phoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/[^0-9]/g, ''); // 숫자만 남기기
    
    if (value.length <= 3) {
      e.target.value = value;
    } else if (value.length <= 7) {
      e.target.value = value.slice(0, 3) + '-' + value.slice(3);
    } else {
      e.target.value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
    }
  });

  // 폼 제출 시 처리
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    // 전화번호 형식 검증
    const phoneValue = phoneInput.value;
    const phonePattern = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;
    
    if (!phonePattern.test(phoneValue)) {
      alert("전화번호를 010-1111-1111 형식으로 입력해주세요.");
      phoneInput.focus();
      return;
    }
    
    // 폼 데이터 수집
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // 신청 완료 알림
    alert("신청이 완료되었습니다!");
    
    // 폼 초기화
    form.reset();
    
    // 팝업창 닫기
    if (window.parent && window.parent.closePopup) {
      window.parent.closePopup();
    } else {
      window.close();
    }
  });
}); 