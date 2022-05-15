var ccount=0;
function myCreateFunction() {
    ccount++;
    var table = document.getElementById("myTable");
    var new_rule = document.getElementById('newRule');
    var row = table.insertRow(-1);
    row.onmouseover=function(){
        myTable.clickedRowIndex =this.rowIndex
    };

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    
    cell1.innerHTML = "<td>"+ccount;
    cell2.innerHTML = new_rule.value;
    cell3.innerHTML = "";
    cell4.innerHTML = "<button style='border:none;background-color: inherit;'><i>정보</i></button><button style='border:none;background-color: inherit;' onclick='myDeleteFunction()'><i>삭제</i></button><button style='border:none;background-color: inherit;'><i>편집</i></button>";
    cell5.innerHTML = "";
}

function myDeleteFunction() {
    var table = document.getElementById("myTable")
    var row=table.deleteRow(-1);

    row.onmouseover=function(){
        myTable.clickedRowIndex =this.rowIndex
    };
}

function plusRule(){
    var r_table = document.getElementById("ruleTable");
    var r_row = r_table.insertRow(-1);

    var r_cell1 = r_row.insertCell(0);
    var r_cell2 = r_row.insertCell(1);
    var r_cell3 = r_row.insertCell(2);
    
    r_cell1.innerHTML = "<form class='rule-modal-input'><div class='form-group'><div class='input-group input-group-rounded'><input type='text' name='search' class='form-control'/></div></div></form>";
    r_cell2.innerHTML = "<form class='rule-modal-input'><div class='form-group'><div class='input-group input-group-rounded'><input type='text' name='print' class='form-control'/></div></div></form>";
    r_cell3.innerHTML = "<button type='button' class='btn btn-primary make-btn' href='#' id='plusRule' onclick='plusRule()'>+</button>";
}
