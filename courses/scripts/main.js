"use strict";


function loadTableBody(){
    const tbody = document.querySelector("#courseTable tbody")
    fetch("http://localhost:8081/api/courses")
    .then((response) => response.json())
    .then((courses) => {
       courses.forEach((course) => {
            let row = tbody.insertRow(-1)
            let cell1 = row.insertCell(0)
            let cell2 = row.insertCell(1)
            let cell3 = row.insertCell(2)
            cell1.innerText = course.dept;
            cell2.innerText = course.courseNum;

            
                let a = document.createElement('a');
                a.innerText = course.courseName;
                a.href = `./details.html?courseNum=${course.courseNum}`;
                a.target = ("self");
                cell3.appendChild(a);

       });
    });
 }

 window.onload = () => loadTableBody();

