function gotopage(link) {
  setTimeout(() => {
    window.open(link);
  }, 2000);
}

const copyDiscord = document.querySelector('#copyDiscord');
const linkDiscord = document.querySelector('#linkDiscord');

copyDiscord.addEventListener("click", () => {
  window.navigator.clipboard.writeText("eunhaxu").then(() => {
    showAlert("성공적으로 디스코드 ID가 복사되었습니다.");
  });
});

linkDiscord.addEventListener("click", () => {
  showAlert("2초 후 창이 열립니다.");
  gotopage("https://www.discord.com/users/942221021283504230");
})

