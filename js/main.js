document.getElementById("logo").addEventListener("click", function () {
    window.location.href = "../html/main.html"; 
});

document.getElementById("home").addEventListener("click", function (){
    window.location.href = "../html/main.html"
});

// Command+R 또는 Ctrl+R 키 이벤트 리스너
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
