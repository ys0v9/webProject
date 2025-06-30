// Command+R 또는 Ctrl+R 키 이벤트 리스너 (페이지 새로고침 방지)
document.addEventListener('keydown', function(event) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'r') {
        event.preventDefault();
        window.location.reload();
    }
});

// 캠페인 참여하기 버튼 클릭 이벤트 처리
document.addEventListener('DOMContentLoaded', function() {
    const campaignBtn = document.querySelector('.action-btn.secondary');
    if (campaignBtn) {
        campaignBtn.addEventListener('click', function() {
            // 캠페인 페이지로 이동
            window.location.href = 'campain.html';
        });
    }
});

// 페이지 로드 시 메뉴 활성화 상태 설정
document.addEventListener('DOMContentLoaded', function() {
    // 모든 메뉴 항목에서 active 클래스 제거
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // 기후위기 메뉴 활성화
    const climateLink = document.querySelector('.nav-link[href="climate.html"]');
    if (climateLink) {
        climateLink.classList.add('active');
    }
});
