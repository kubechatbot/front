// 각 입력값의 참조를 저장할 전역변수 선언 - 7개 (챗봇종류, 룰설정, 룰이름, 도메인설정,,,)

var ccount = 0;

// Session Three function
function createSession() {
  const ruleName = document.getElementById("ruleName");
  const myRule = ruleName.value; // 변수에 input요소의 최신 값 저장
  ruleName.value = "";
  console.log(myRule);

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
