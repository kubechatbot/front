// 각 입력값의 참조를 저장할 전역변수 선언 - 7개 (챗봇종류, 룰설정, 룰이름, 도메인설정,,,)
var botType = document.getElementById("chatbotType"); // 챗봇종류
const ruleSet = document.getElementById("ruleSet"); // Rule 설정
const ruleName = document.getElementById("ruleName"); // 챗봇 룰 이름
const domainSet = document.getElementById("domainSet"); // 도메인 설정
const domainName = document.getElementById("domainName"); // 도메인 이름
const resGroup = document.getElementById("resGroup"); // 자원그룹
const resAlloc = document.getElementById("resAlloc"); // 자원할당

var ccount = 0;

// Session Three function
function createSession() {
  const mybotType = botType.value;
  const myruleSet = ruleSet.value;
  const myRule = ruleName.value;
  const mydomainSet = domainSet.value;
  const mydomainName = domainName.value;
  const myresGroup = resGroup.value;
  const myresAlloc = resAlloc.value;

  //print
  console.log(mybotType);
  console.log(myRule);
  console.log(myruleSet);
  console.log(mydomainSet);
  console.log(mydomainName);
  console.log(myresGroup);
  console.log(myresAlloc);

  // 테이블 요소 추가하는 기능 (ing)
  // const table = document.getElementById("myTable"); // <tbody> 요소
  // const testDiv = document.createElement("div"); // <div> 요소
  // const tableR = document.getElementById("tableRow"); // <tr> 요소
  // const Num = document.getElementById("tableNum"); //<th> 요소

  // testDiv.appendChild(tableR);
  // table.appendChild(testDiv);
}

// (2) inner HTML 사용
// function creatSession2() {
//   ccount++;
//   var table = document.getElementById("myTable");
//   // var new_rule = document.getElementById('newRule');
//   var row = table.insertRow(-1); // 주어진 <table>안에 새로운 row인 <tr>를 삽입하는 메소드
//   row.onmouseover = function () {
//     // index 순서 갱신.
//     table.clickedRowIndex = this.rowIndex;
//   };

//   var cell1 = row.insertCell(0); // 새로운 row에 새로운 cell 삽입
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//   var cell4 = row.insertCell(3);
//   var cell5 = row.insertCell(4);

//   cell1.innerHTML = "<tr>" + ccount;
//   cell2.innerHTML = "";
//   cell3.innerHTML =
//     "<button
//     type="button"
//     class="btn btn-success m-b-10 m-l-5"
//     data-toggle="modal"
//     data-target="#InfoModalCenter"
//   ><i>정보</i></button>";
//   cell4.innerHTML =
//     "<button style='border:none;background-color: inherit;'><i>편집</i></button>";
//   cell5.innerHTML =
//     "<button style='border:none;background-color: inherit;' onclick='removeSession(); myRemovemsg();'><i>삭제</i></button>";
// }

// EventListens -> event 생성

function editSession() {}

function removeSession() {
  var table = document.getElementById("myTable");
  var row = table.deleteRow(-1);

  row.onmouseover = function () {
    table.clickedRowIndex = this.rowIndex;
  };
}

//  modal 닫으면 초기화 : JQuery 사용
$(".modal").on("hidden.bs.modal", function (e) {
  $(this).find("form")[0].reset();
  $(this).find("form")[1].reset();
});

// Three alert message
function myCreatemsg() {
  if (window.confirm(`세션을 생성하시겠습니까?`)) {
    // onCreate(id);
  }
}

function myEditmsg() {
  if (window.confirm(`세션을 수정하시겠습니까?`)) {
    // onCreate(id);
  }
}

function myRemovemsg() {
  if (window.confirm(`세션을 삭제하시겠습니까?`)) {
    // onCreate(id);
  }
}
