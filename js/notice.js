const messages = [
  "⚠️ 인게임 닉네임과 디스코드 사용자명은 현재와 일치하지 않을 수 있으므로 고유번호 혹은 디스코드 ID 검색을 추천드립니다!",
  "➕ 사기 인원 추가 문의는 디스코드로 연락주세요!",
  "⭐ 클릭하여 추가 정보를 볼 수 있습니다!"
];

let currentMessageIndex = 0;
const noticeElement = document.querySelector('.notice');

function updateNotice() {
  noticeElement.textContent = messages[currentMessageIndex];
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;

  noticeElement.style.visibility = 'hidden';
  noticeElement.style.display = 'block';
  const noticeWidth = noticeElement.offsetWidth;
  noticeElement.style.visibility = 'visible';

  const startPosition = window.innerWidth;

  noticeElement.style.transition = 'none';
  noticeElement.style.transform = `translateX(${startPosition}px)`;

  void noticeElement.offsetWidth;

  noticeElement.style.transition = 'transform 10s linear';
  noticeElement.style.transform = `translateX(-${noticeWidth}px)`;

  setTimeout(updateNotice, 11000);
}

updateNotice();