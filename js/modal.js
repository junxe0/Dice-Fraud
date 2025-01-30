const fraud = document.querySelector("#fraud_title");
const victim = document.querySelector("#victim_modal");
const amount = document.querySelector("#amount_modal");
const link = document.querySelector("#link_modal");

function click_box(boxId) {
  const scamInfo = scamInfos[boxId];

  if (scamInfo) {
    fraud.innerText = scamInfo.fraud_id + "번 " + scamInfo.fraud_name;
    victim.innerText = "피해자 : " + scamInfo.victim_id + "번 " + scamInfo.victim_name;
    amount.innerText = "금액 : " + formatKoreanCurrency(scamInfo.amount);
    
    if (scamInfo.link === "") {
      link.innerHTML = "증거 영상 : 없음";
    } 
    else {
      link.innerHTML = "증거 영상 : <a href='" + scamInfo.link + "' target='_blank'>🎬</a>";
    }
  } 
  else {
    showAlert('Error! 해당 사용자 정보가 없습니다.');
  }
}


const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

$(document).ready(function() {
  $('.box').on('click', function() {
    var boxId = $(this).attr('id');
    
    modalBox.classList.add("active");
    click_box(boxId);
  });
});

close.addEventListener("click", () => {
  modalBox.classList.remove("active");
});