let selectedrow=null
function onformsubmit() {
    var data=readformdata()
    if(selectedrow==null){
         insertnewrecord(data)
    }else{
        updaterecord(data)
    }
    resetform()
}

function readformdata(){
    const data={}
    data["name"]=document.getElementById("name").value
    data["empid"]=document.getElementById("empid").value
    data["salary"]=document.getElementById("salary").value
    data["city"]=document.getElementById("city").value
    return data
}
function insertnewrecord(data){
    let table=document.getElementById("employee").getElementsByTagName("tbody")[0]
    var newrow=table.insertRow(table.length)
    cell1=newrow.insertCell(0)
    cell1.innerHTML=data.name
    cell2=newrow.insertCell(1)
    cell2.innerHTML=data.empid
    cell3=newrow.insertCell(2)
    cell3.innerHTML=data.salary
    cell4=newrow.insertCell(3)
    cell4.innerHTML=data.city
    cell5=newrow.insertCell(4)
    cell5.innerHTML=`
    <button class="btn btn-primary" onclick="onEdit(this)">Edit</button>
    <button class="btn btn-primary" onclick="onDelete(this)">Delete</button>`

}
function resetform(){
    document.getElementById("name").value=""
    document.getElementById("empid").value=""
    document.getElementById("salary").value=""
    document.getElementById("city").value=""
    selectedrow=null

}

function onEdit(td){
    selectedrow=td.parentElement.parentElement
    document.getElementById("name").value=selectedrow.cells[0].innerHTML
    document.getElementById("empid").value=selectedrow.cells[1].innerHTML
    document.getElementById("salary").value=selectedrow.cells[2].innerHTML
    document.getElementById("city").value=selectedrow.cells[3].innerHTML
}

function updaterecord(data){
selectedrow.cells[0].innerHTML=data.name;
selectedrow.cells[1].innerHTML=data.empid;
selectedrow.cells[2].innerHTML=data.salary;
selectedrow.cells[3].innerHTML=data.city
}
function onDelete(td){
    if(confirm("Are you sure you want to delete this?")){
        row=td.parentElement.parentElement
        document.getElementById("employee").deleteRow(row.rowIndex);
    }
}