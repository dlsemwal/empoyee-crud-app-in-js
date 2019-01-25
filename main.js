var employees = [
    {
        name: "Naresh Joshi",
        contact: 8826313696,
        salary: 2000
    },
    {
        name: 'Amritanjali',
        contact: 858709676,
        salary: 999
    },
    {
        name: 'Mahesh Joshi',
        contact: 7536423851,
        salary: 12999
    },
    {
        name: 'John Wilson',
        contact: 9759280106,
        salary: 333
    },
    {
        name: 'Sean Paul',
        contact: 7909280596,
        salary: 799
    },
    {
        name: 'Jay Andrew',
        contact: 9411587832,
        salary: 555
    },
    {
        name: 'Divyanshu Semwal',
        contact: 8077149430,
        salary: 30000,
    }

];

function fetchEmployees() {
    var container = document.getElementById("container");
    var containerHtml = container.innerHTML;
    for (var index = 0; index < employees.length; index++) {
        var employee = employees[index];
        var html = '<section id ="' + index + '">\
                        <div class="item">\
                            <h4>'+ employee.name + '</h4>\
                            <h5>'+ employee.contact + '</h5>\
                            <p>$'+ employee.salary + '</p>\
                        </div>\
                        <button class="dltBtn" onclick="deleteIt('+ index + ')">Delete</button>\
                        <button class="editBtn"  data-toggle="modal" data-target="#myModal" \
                        onclick="editIt('+ index + ')">Edit</button>\
                        <button class="viewBtn" data-toggle="modal" data-target="#myModal2" onclick="viewIt('+ index + ')">View</button>\
                    </section>';
        containerHtml += html;
    }

    container.innerHTML = containerHtml;
}

fetchEmployees();

function deleteIt(id) {
    var x = document.getElementById(id);
    x.parentNode.removeChild(x);
    delete employees[id]
}

function editIt(id) {
    if (id == undefined || id == "") {
        document.getElementById('employee').value = '';
        document.getElementById('contact').value = '';
        document.getElementById('salary').value = '';
        document.getElementById('employee-id').value = '';
    } else {
        document.getElementById('employee').value = employees[id].name;
        document.getElementById('contact').value = employees[id].contact;
        document.getElementById('salary').value = employees[id].salary;
        document.getElementById('employee-id').value = id;
    }
}

function viewIt(id) {
    var section = document.getElementById(id).childNodes[1];
    document.getElementById('modal2').innerHTML = 
        section.childNodes[1].firstChild.nodeValue + '<br>' +
        section.childNodes[3].firstChild.nodeValue + '<br>' +
        section.childNodes[5].firstChild.nodeValue;
    

}

function saveIt() {
    var id = document.getElementById('employee-id').value;

    var employeeObj = {
        name: document.getElementById('employee').value,
        contact: document.getElementById('contact').value,
        salary: document.getElementById('salary').value
    }

    if (id === null || id === undefined || id === '') {
        employees[employees.length] = employeeObj;
    } else {
        employees[id] = employeeObj;
    }

    document.getElementById("container").innerHTML = ''
    fetchEmployees()
    editIt(undefined)
}