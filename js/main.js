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
        // iframe이 표시되어 있으면 iframe만 새로고침
        const iframe = document.getElementById('contentFrame');
        if (iframe && iframe.style.display !== 'none') {
            iframe.contentWindow.location.reload();
        } else {
            // 메인 페이지면 전체 새로고침
            window.location.reload();
        }
    }
});

// function loadPage(page) {
//     document.querySelector('#contentFrame').src = page;
// }

function loadPage(page) {
    // 1) 기존 메인 콘텐츠 숨기기
    const home = document.getElementById('home-page');
    if (home) home.style.display = 'none';

    // 2) iframe 보여주기
    const iframe = document.getElementById('contentFrame');
    iframe.style.display = 'block';

    // 3) iframe src 변경
    iframe.src = page;
    
    // 4) 메뉴 활성화 상태 업데이트
    updateActiveMenu(page);
}

function updateActiveMenu(page) {
    // 모든 메뉴 항목에서 active 클래스 제거
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // 해당 페이지에 맞는 메뉴 항목에 active 클래스 추가
    switch(page) {
        case 'climate.html':
            document.querySelector('.nav-link[onclick="loadPage(\'climate.html\')"]').classList.add('active');
            break;
        case 'carbon.html':
            document.querySelector('.nav-link[onclick="loadPage(\'carbon.html\')"]').classList.add('active');
            break;
        case 'personal.html':
            document.querySelector('.nav-link[onclick="loadPage(\'personal.html\')"]').classList.add('active');
            break;
        case 'campain.html':
            document.querySelector('.nav-link[onclick="loadPage(\'campain.html\')"]').classList.add('active');
            break;
        default:
            // 홈 페이지인 경우
            document.getElementById('home').classList.add('active');
            break;
    }
}

function navigateToPage(page) {
    if (page === 'campaign') {
        loadPage('campain.html');
    } else if (page === 'personal-action') {
        loadPage('personal.html');
    }
}

// 페이지 로드 시 초기 메뉴 상태 설정
document.addEventListener('DOMContentLoaded', function() {
    // 홈 페이지가 기본으로 활성화
    updateActiveMenu('home');
});
