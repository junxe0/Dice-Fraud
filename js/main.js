const scamInfos = {
  47172: { fraud_id: 47172, fraud_name: "코코몽", amount: 10000000000, 
    discord_name: "taegsi0832", discord_id: "1330717572089380925", 
    victim_id: 4062, victim_name: "은하수", link: "https://streamable.com/myujsz"
  },
  45203: { fraud_id: 45203, fraud_name: "김방구", amount: 1000000000, 
    discord_name: "cdh2310", discord_id: "1004362906172915812", 
    victim_id: 45745, victim_name: "언우주", link: ""
  },
};

function createUserBoxes() {
  const boxArea = $(".box_area");
  for (const userId in scamInfos) {
    const userInfo = scamInfos[userId];
    const box = $(`
      <div class="box" id="${userInfo.fraud_id}">
        <div class="info">
          <span id="fraud_name"><span id="fraud_id">${userInfo.fraud_id}</span>${userInfo.fraud_name}</span>
          <span id="discord_user">${userInfo.discord_name}</span>
          <span id="discord_id">${userInfo.discord_id}</span>
        </div>
      </div>
    `);
    boxArea.append(box);
  }
}

let timeout = null;

function search() {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    var key = $("#search_box").val().toLowerCase();
    if (key === "") {
      $(".box_area > .box").show();
    } 
    else {
      $(".box_area > .box").hide().filter(function () {
        return $(this).text().toLowerCase().indexOf(key) !== -1;
      }).show();
    }
  }, 100);
}

function formatKoreanCurrency(amount) {
  const trillion = Math.floor(amount / 1000000000000);
  const billion = Math.floor((amount % 1000000000000) / 100000000);
  const million = Math.floor((amount % 100000000) / 10000);
  const thousand = amount % 10000;

  let result = '';
  if (trillion > 0) {
      result += trillion + '조 ';
  }
  if (billion > 0) {
      result += billion + '억 ';
  }
  if (million > 0) {
      result += million + '만 ';
  }
  if (thousand > 0 || result === '') {
      result += thousand + '원';
  }

  return result.trim();
}

$(document).ready(function() {
  createUserBoxes();
});