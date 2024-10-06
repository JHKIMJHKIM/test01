// '더 알아보기' 버튼 클릭 시 추가 정보 표시
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.more-info-btn');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const moreInfo = this.nextElementSibling;
            if (moreInfo.style.display === 'none') {
                moreInfo.style.display = 'block';
                this.textContent = '닫기';
            } else {
                moreInfo.style.display = 'none';
                this.textContent = '더 알아보기';
            }
        });
    });

    // 폼 전송 시 알림
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('메시지가 전송되었습니다!');
        form.reset();
    });
});
