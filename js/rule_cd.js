var ccount = 0;
var r_cnt_m = document.getElementById("count-rule-minus");
var r_cnt = document.getElementById("count-rule");
var cnt_r_m = 50;
var cnt_r = 1;
var making_rule = {};
var making_rule_two = {};

function plusRule() {
  var r_table = document.getElementById("ruleTable");
  var r_row = r_table.insertRow(-1);

  var r_cell1 = r_row.insertCell(0);
  var r_cell2 = r_row.insertCell(1);
  var r_cell3 = r_row.insertCell(2);

  r_cell1.innerHTML =
    "<tr class='rule-modal-input'><td><form><div class='form-group'><div class='input-group input-group-rounded'><input type='text' name='search' class='form-control' id= 'rule-modal-input-first'/></div></div></form></td>";
  r_cell2.innerHTML =
    "<td><form><div class='form-group'><div class='input-group input-group-rounded'><input type='text' name='print' class='form-control' id= 'rule-modal-input-second'/></div></div></form></td></tr>";
  r_cell3.innerHTML =
    "<button type='button' class='btn btn-primary make-btn' href='#' id='plusRule' onclick='plusRule()'>+</button>";
}

function myCreateFunction() {
  if (cnt_r_m == 0) {
    alert("사용가능 Rule이 존재하지 않음");
    return false;
  }
  ccount++;
  var table = document.getElementById("myTable");
  var new_rule = document.getElementById("newRule").value;
  var row = table.insertRow(-1);

  if (Object.keys(making_rule).includes(new_rule) == true) {
    alert("이미 존재하는 rule name입니다.");
    return false;
  }
  alert("rule이 생성되었습니다");

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = "";
  cell2.innerHTML = new_rule;
  cell3.innerHTML = "";
  cell4.innerHTML =
    "<button style='border:none; background-color: inherit;' class='checkBtn' onclick='showInfo(this)'><i>정보</i></button><button style='border:none;background-color: inherit;' id='delete' onclick='myDeleteFunction(this);'><i>삭제</i></button><button  class='button' href='#popup_flight_travlDil3' style='border:none;background-color: inherit;' onclick='modInfo(this)'><i>편집</i></button>";
  cell5.innerHTML = "";

  const trGroup = Array.from(document.querySelectorAll("#rule-input tr"));
  const rule_input_first = trGroup.map(tr => {
    return Array.from(tr.querySelectorAll("#rule-modal-input-first")).map(
      input => input.value
    );
  });
  const rule_input_second = trGroup.map(tr => {
    return Array.from(tr.querySelectorAll("#rule-modal-input-second")).map(
      input => input.value
    );
  });
  for (var i = 0; i < rule_input_first.length; i++) {
      if(i==0){
          making_rule_two['user_id']=new_rule;
      }
    making_rule_two[rule_input_first[i]] = String(rule_input_second[i]);
    if (rule_input_first[i] == "" || rule_input_second[i] == "") {
      //input value가 ''이면 데이터에 넣지않음
      delete making_rule_two[rule_input_first[i]];
    }
  }
  making_rule[new_rule] = making_rule_two;

  making_rule_two = {};
  cnt_r_m -= 1;
  cnt_r += 1;
  r_cnt_m.innerHTML = cnt_r_m;
  r_cnt.innerHTML = cnt_r - 1;

  console.log(making_rule);
}

function myDeleteFunction(r) {
  var result = confirm("정말로 삭제하시겠습니까?");
  if (result) {
    alert("삭제되었습니다.");
  } else {
    return false;
  }
  ccount--;
  cnt_r_m += 1;
  cnt_r -= 1;
  r_cnt_m.innerHTML = cnt_r_m;
  r_cnt.innerHTML = cnt_r - 1;

  var rIdx = r.parentNode.parentNode.rowIndex - 3;
  var trow = document.getElementById("myTable").getElementsByTagName("tr")[rIdx]
    .childNodes[1].innerText;
  if (Object.keys(making_rule).includes(trow) == true) {
    delete making_rule[trow];
  }

  var table = document.getElementById("myTable");
  table.deleteRow(rIdx);
  console.log(making_rule);
}

function showInfo(r) {
  var rIdx = r.parentNode.parentNode.rowIndex - 3;
  var trow = document.getElementById("myTable").getElementsByTagName("tr")[rIdx]
    .childNodes[1].innerText;

  console.log(trow);
  console.log(making_rule[trow]);
}

// function modInfo(r){
//     var rIdx = r.parentNode.parentNode.rowIndex-3;
//     var trow=document.getElementById("myTable").getElementsByTagName("tr")[rIdx].childNodes[1].innerText;

//     var testest=document.getElementById("test").value;
//     var testest2=document.getElementById("test2").value;

//     var onlymod=making_rule[trow];

//     if(Object.keys(onlymod).includes(testest)==true){
//         var modresult=confirm('이미 존재하는 값입니다. 변경하시겠습니까? (저장된 내용)= 검색어:'+testest+'   출력:'+onlymod[testest]+')');
//         if(modresult){
//             delete onlymod[testest];
//            onlymod[testest]=testest2;
//         }
//         else{
//             return false;
//         }
//     }
//     onlymod[testest]=testest2;
// }

// const createBtn = document.querySelector("#myBtn");

// // take code
// const handleCreate = e => {
//   e.preventDefault();

//   const email = document.querySelector("#email"),
//     password = document.querySelector("#password");
    
//   const data = Qs.stringify(making_rule_two);

//   // console.log(email.value);

//   setTimeout(() => {
//     const config = {
//       method: "post",
//       url: "http://34.64.167.59:8080/create",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: data,
//     };

//     axios(config)
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//         window.location.href = "/";
//       })
//       .catch(function (error) {
//         console.log(error);
//         alert("룰 추가 중 에러 발생!");
//       });
//   });
// };

// createBtn.addEventListener("click", handleCreate);
