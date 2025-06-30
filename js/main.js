// 로고 클릭 시 메인 페이지로 이동
document.getElementById("logo").addEventListener("click", function () {
    window.location.href = "../html/main.html"; 
});

// 홈 메뉴 클릭 시 메인 페이지로 이동
document.getElementById("home").addEventListener("click", function (){
    window.location.href = "../html/main.html"
});

// Command+R 또는 Ctrl+R 키 이벤트 리스너 (페이지 새로고침 방지)
document.addEventListener('keydown', function(event) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'r') {
        event.preventDefault();
        window.location.reload();
    }
});

// 페이지 로드 시 초기 메뉴 상태 설정
document.addEventListener('DOMContentLoaded', function() {
    // 현재 페이지가 메인 페이지인지 확인
    const currentPath = window.location.pathname;
    if (currentPath.includes('main.html') || currentPath.endsWith('/') || currentPath.endsWith('/html/')) {
        // 홈 메뉴 활성화
        const homeLink = document.getElementById('home');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }
});
