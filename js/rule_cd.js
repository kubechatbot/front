var ccount=0;
var r_cnt_m = document.getElementById("count-rule-minus");
var r_cnt = document.getElementById("count-rule");
var cnt_r_m=50;
var cnt_r=1;
var making_rule={};

function plusRule(){
    var r_table = document.getElementById("ruleTable");
    var r_row = r_table.insertRow(-1);

    var r_cell1 = r_row.insertCell(0);
    var r_cell2 = r_row.insertCell(1);
    var r_cell3 = r_row.insertCell(2);

    r_cell1.innerHTML = "<tr class='rule-modal-input'><td><form><div class='form-group'><div class='input-group input-group-rounded'><input type='text' name='search' class='form-control' id= 'rule-modal-input-first'/></div></div></form></td>";
    r_cell2.innerHTML = "<td><form><div class='form-group'><div class='input-group input-group-rounded'><input type='text' name='print' class='form-control' id= 'rule-modal-input-second'/></div></div></form></td></tr>";
    r_cell3.innerHTML = "<button type='button' class='btn btn-primary make-btn' href='#' id='plusRule' onclick='plusRule()'>+</button>";
}


function myCreateFunction() {
    if(cnt_r_m==0){
        alert('사용가능 Rule이 존재하지 않음');
        return false;
    }
    ccount++;
    var table = document.getElementById("myTable");
    var new_rule = document.getElementById('newRule').value;
    var row = table.insertRow(-1);
    var making_rule_two={};

    if(Object.keys(making_rule).includes(new_rule)==true){
        alert('이미 존재하는 rule name입니다.');
        return false;
    }

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "";
    cell2.innerHTML = new_rule;
    cell3.innerHTML = "";
    cell4.innerHTML = "<button style='border:none; background-color: inherit;' class='checkBtn' onclick='showInfo(this)'><i>정보</i></button><button style='border:none;background-color: inherit;' id='delete' onclick='myDeleteFunction(this);'><i>삭제</i></button><button  class='button' href='#popup_flight_travlDil3' style='border:none;background-color: inherit;' onclick='modInfo()'><i>편집</i></button>";
    cell5.innerHTML = "";

    const trGroup = Array.from(document.querySelectorAll('#rule-input tr'));
    const rule_input_first= trGroup.map(tr => {
        return Array.from(tr.querySelectorAll('#rule-modal-input-first')).map(input => input.value);
    });
    const rule_input_second= trGroup.map(tr => {
        return Array.from(tr.querySelectorAll('#rule-modal-input-second')).map(input => input.value);
    });
    for(var i=1; i<rule_input_first.length; i++){
        making_rule_two[rule_input_first[i]] = String(rule_input_second[i]);
        if(rule_input_first[i]==''||rule_input_second[i]==''){//input value가 ''이면 데이터에 넣지않음
            delete making_rule_two[rule_input_first[i]];
        }
    }
    making_rule[new_rule]=making_rule_two;
    
    cnt_r_m-=1;
    cnt_r+=1;
    r_cnt_m.innerHTML=cnt_r_m;
    r_cnt.innerHTML=cnt_r-1;
    
    console.log(making_rule);
}

function myDeleteFunction(r) {
    var result=confirm("정말로 삭제하시겠습니까?");
    if(result){
        alert('삭제되었습니다.');
    }
    else{
        return false;
    }
    ccount--;
    cnt_r_m+=1;
    cnt_r-=1;
    r_cnt_m.innerHTML=cnt_r_m;
    r_cnt.innerHTML=cnt_r-1;

    var rIdx = r.parentNode.parentNode.rowIndex-3;
    var trow=document.getElementById("myTable").getElementsByTagName("tr")[rIdx].childNodes[1].innerText;
    if(Object.keys(making_rule).includes(trow)==true){
        delete making_rule[trow];
    }

    var table = document.getElementById("myTable");
    table.deleteRow(rIdx);
    console.log(making_rule);
}


function showInfo(r){
    var rIdx = r.parentNode.parentNode.rowIndex-3;
    var trow=document.getElementById("myTable").getElementsByTagName("tr")[rIdx].childNodes[1].innerText;

    console.log(trow);
    console.log(making_rule[trow]);
}


// function modInfo(){
//     new input first와 new input second를 만들고
//     new input first value가 이미 making_rule에 key로 존재하다면,
//     new input second value를 value로 넣어줌
// }