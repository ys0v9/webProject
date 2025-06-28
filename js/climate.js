// Command+R 또는 Ctrl+R 키 이벤트 리스너
document.addEventListener('keydown', function(event) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'r') {
        event.preventDefault();
        // iframe 내부에서 실행 중이면 현재 페이지만 새로고침
        if (window.parent && window.parent !== window) {
            window.location.reload();
        } else {
            // 독립 실행 중이면 전체 새로고침
            window.location.reload();
        }
    }
});

// 캠페인 참여하기 버튼 클릭 이벤트
document.addEventListener('DOMContentLoaded', function() {
    const campaignBtn = document.querySelector('.action-btn.secondary');
    if (campaignBtn) {
        campaignBtn.addEventListener('click', function() {
            // 부모 창에서 campain.html을 iframe으로 로드
            if (window.parent && window.parent.loadPage) {
                window.parent.loadPage('campain.html');
            }
        });
    }

    // 해결책 알아보기 버튼 클릭 이벤트
    const solutionBtn = document.querySelector('.btn-primary');
    if (solutionBtn) {
        solutionBtn.addEventListener('click', function() {
            // 해결방안 섹션으로 부드럽게 스크롤
            const solutionsSection = document.querySelector('.solutions-section');
            if (solutionsSection) {
                solutionsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    }
});
