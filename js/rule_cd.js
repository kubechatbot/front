function myCreateFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "";
    cell4.innerHTML = "<button style='border:none;background-color: inherit;'><i>정보</i></button><button  style='border:none;background-color: inherit;' onclick='myDeleteFunction()'><i>삭제</i></button><button style='border:none;background-color: inherit;'><i>편집</i></button>";
    cell5.innerHTML = "";
}

function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(-1);
}