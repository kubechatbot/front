const data = [
  {
    // id: "1",
    chatbotType: "ai",
    ruleSet: "test rule",
    ruleName: "한양 챗봇",
    domainSet: "3",
    domainName: "test domain",
    resGroup: "google",
    resAllocat: "4",
  },
  {
    // id: "2",
    chatbotType: "rule",
    ruleSet: "test2 rule",
    ruleName: "kt ds 챗봇",
    domainSet: "5",
    domainName: "test2 domain",
    resGroup: "aws",
    resAllocat: "2",
  },
  {
    // id="3",
    chatbotType: "rule",
    ruleSet: "test2 rule",
    ruleName: "솦트 챗봇",
    domainSet: "2",
    domainName: "test3 domain",
    resGroup: "etc",
    resAllocat: "2",
  },
];

// console.log(data[0].id);
// console.log(data.length);

const mycreateBtn = document.getElementById("createSession");
const myinfoBtn = document.getElementById("infoBtn");
const myeditBtn = document.getElementById("editBtn");
const myremoveBtn = document.getElementById("removeBtn");

// Session Info Modal (fix)
const modal = document.getElementById("infoModalContent");
const content1 = document.createElement("p");
const content2 = document.createElement("p");
const content3 = document.createElement("p");
const content4 = document.createElement("p");
const content5 = document.createElement("p");
const content6 = document.createElement("p");
const content7 = document.createElement("p");

modal.appendChild(content1); // <div><p></p></div>
modal.appendChild(content2); // <div><p></p></div>
modal.appendChild(content3);
modal.appendChild(content4);
modal.appendChild(content5);
modal.appendChild(content6);
modal.appendChild(content7);

// Session Info Modal (active)
function handleSessionInfo(id) {
  //tr를 getElementbyId로 가져와서 tr.id를 가져오기
  modal.setAttribute("key", id);

  content1.textContent = "챗봇 종류 : " + data[0].chatbotType;
  content2.textContent = "Rule 설정 : " + data[0].ruleSet;
  content3.textContent = "챗봇의 rule 이름 : " + data[0].ruleName;
  content4.innerHTML = "도메인 설정 : ";
  content5.innerHTML = "도메인 이름 : ";
  content6.innerHTML = "자원그룹 : ";
  content7.innerHTML = "자원할당 : ";
  console.log("정보 안의 id는 " + id + "입니다");
}

const table = document.getElementById("myTable");

// 각 입력값의 참조를 저장할 전역변수 선언 - 7개 (챗봇종류, 룰설정, 룰이름, 도메인설정,,,)
var botType = document.getElementsByName("group"); // 챗봇종류
const ruleSet = document.getElementById("ruleSet"); // Rule 설정
const ruleName = document.getElementById("ruleName"); // 챗봇 룰 이름
const domainSet = document.getElementById("domainSet"); // 도메인 설정
const domainName = document.getElementById("domainName"); // 도메인 이름
var resGroup = document.getElementsByName("resources"); // 자원그룹
const resAlloc = document.getElementById("resAlloc"); // 자원할당

// 세션의 총 갯수를 나타냄. 개별적인 Id랑은 다른개념!
var ccount = 0;

// 세션 생성
function handleMakeSession(id) {
  // get value
  let mybotType;
  const myruleSet = ruleSet.value;
  const myRule = ruleName.value;
  const mydomainSet = domainSet.value;
  const mydomainName = domainName.value;
  let myresGroup;
  const myresAlloc = resAlloc.value;

  botType.forEach(node => {
    if (node.checked) {
      mybotType = node.value;
    }
  });

  resGroup.forEach(node => {
    if (node.checked) {
      myresGroup = node.value;
    }
  });

  //print value
  // console.log(mybotType);
  // console.log(myRule);
  // console.log(myruleSet);
  // console.log(mydomainSet);
  // console.log(mydomainName);
  // console.log(myresGroup);
  // console.log(myresAlloc);

  // insert Row & Cell
  const table = document.getElementById("myTable"); // <tbody> 요소 참조
  const tableR = document.createElement("tr"); // <tr> 요소생성
  const tNum = document.createElement("th"); //<th> 요소생성
  const tData1 = document.createElement("td"); // <td> 요소생성
  const tData2 = document.createElement("td"); // <td> 요소생성
  const tData3 = document.createElement("td"); // <td> 요소생성
  const tData4 = document.createElement("td"); // <td> 요소생성

  // make table row
  tableR.setAttribute("key", id); // <tr key=id>
  tData1.setAttribute("class", "long-wd");
  tNum.textContent = id;
  tData1.innerHTML = id + "번 챗봇이름입니다."; //data[cnt].ruleName
  tData2.innerHTML =
    "<button class='btn btn-success btn-rounded info" +
    id +
    "' data-toggle='modal' data-target='#infoModal' id='infoBtn'>정보</button>";
  tData3.innerHTML =
    "<button class='btn btn-warning btn-rounded' data-toggle='modal' data-target='#editModal' id='editBtn'>편집</button>";
  tData4.innerHTML =
    "<button class='btn btn-danger btn-rounded' id='removeBtn' key=' " +
    id +
    "'>삭제</button>";
  // myinfoBtn.setAttribute("modalKey", id);

  tableR.appendChild(tNum); //<tr><th></th></tr>
  tableR.appendChild(tData1);
  tableR.appendChild(tData2);
  tableR.appendChild(tData3);
  tableR.appendChild(tData4);

  // 테스트용
  const testBtn = document.createElement("button");
  testBtn.textContent = "Test Button";
  tableR.appendChild(testBtn);
  //////////

  table.appendChild(tableR);
  ccount++; // 전체갯수 늘리기

  testBtn.addEventListener("click", () => {
    if (window.confirm(`세션을 삭제하시겠습니까?`)) {
      table.removeChild(tableR);
    }
  });
}

// 이벤트 리스너
mycreateBtn.addEventListener("click", myCreatemsg);
// myinfoBtn.addEventListener("click", test);
// myeditBtn.addEventListener("click", );

function editSession() {}

function removeSession() {
  ccount--;
  // removeChild();
  table.deleteRow(-1);
}

// init session list
for (let i = 0; i < data.length; i++) {
  handleMakeSession(ccount);
}

//  modal 닫으면 초기화 : JQuery 사용
$(".modal").on("hidden.bs.modal", function (e) {
  $(this).find("form")[0].reset();
  $(this).find("form")[1].reset();
});

// Three alert message
function myCreatemsg() {
  if (window.confirm(`세션을 생성하시겠습니까?`)) {
    handleMakeSession(ccount);
  }
}

function myEditmsg() {
  if (window.confirm(`세션을 수정하시겠습니까?`)) {
    // onCreate(id);
  }
}

function myRemovemsg() {
  if (window.confirm(`세션을 삭제하시겠습니까?`)) {
    removeSession();
  }
}
