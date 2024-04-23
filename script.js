'use strict';
let semester;
let previousSgpa;
let numberOfSubjects;

let subjectCpInput;
let subjectMarksInput;

let subjectCpLabel = document.querySelector(".subject-credit-points-label");
let subjectMarksLabel = document.querySelector(".subject-marks-label");

let semesterDiv = document.querySelector(".semester");
let previousSgpaDiv = document.querySelector(".previous-sgpa");
let numberOfSubjectsDiv = document.querySelector(".number-of-subjects");
let inputMarksDiv = document.querySelector(".input-marks-div");
let calculateDiv = document.querySelector(".calulate-div");
let nextDiv = document.querySelector(".next-div");
let messageDiv = document.querySelector(".message-div");
let resultsDiv = document.querySelector(".results-div");

let subjectCp = document.querySelector(".subjects-cp-inputs"); 
let subjectMarks = document.querySelector(".subjects-m-inputs"); 

let next = document.querySelector(".next");
let inputMarks = document.querySelector(".input-marks");
let calculate = document.querySelector(".calculate");

let marks = [];
let cp = []
let i = 0;
let j = 2;

let totalMarks = 0;
let percentage = 0;
let sgpa = 0;
let cgpa = 0;
let gp = [];
let totalPoints = 0;
let totalObtainedPoints = 0;




next.addEventListener("click", function(){
  
  semester = Number(document.querySelector(".semester-input").value);
  previousSgpa = Number(document.querySelector(".previous-sgpa-input").value);
  numberOfSubjects = Number(document.querySelector(".number-of-subjects-input").value);          
  
  semesterDiv.classList.add("hidden");
  previousSgpaDiv.classList.add("hidden");
  numberOfSubjectsDiv.classList.add("hidden");
  nextDiv.classList.add("hidden");

  inputMarksDiv.classList.remove("hidden");
  subjectCp.classList.remove("hidden");
  subjectMarks.classList.remove("hidden");

 
});

inputMarks.addEventListener("click", function(){
  if(i < numberOfSubjects){
     subjectCpLabel.textContent = `Enter Subject ${j} Credit Points`;
     subjectMarksLabel.textContent = `Enter Subject ${j} Marks`;
     
     subjectCpInput = Number(document.querySelector(".subject-credit-points-input").value);
     subjectMarksInput = Number(document.querySelector(".subject-marks-input").value);

    marks.push(subjectMarksInput);
    cp.push(subjectCpInput);
    i++;
    j++;
  }
    
    document.querySelector(".subject-credit-points-input").value ='';
    document.querySelector(".subject-marks-input").value = '';

  if(i == numberOfSubjects){
    inputMarksDiv.classList.add("hidden");
    subjectCp.classList.add("hidden");
    subjectMarks.classList.add("hidden");
    calculateDiv.classList.remove("hidden");
    messageDiv.classList.remove("hidden");
    
    for(let i = 0; i<marks.length; i++){
      messageDiv.innerHTML = `Credit Points ${cp} <br><br> Marks: ${marks}`;
    }

  }
});

calculate.addEventListener("click", function(){
  messageDiv.classList.add("hidden");
  calculateDiv.classList.add("hidden");
  resultsDiv.classList.remove("hidden");



  for(let i = 0; i<marks.length; i++){
    totalMarks = totalMarks + marks[i];
  }
  percentage = (totalMarks/(100 * numberOfSubjects)) * 100
  

  for(let i = 0; i < marks.length; i++){
    gp.push(Math.floor(marks[i]/10) + 1);
    if(gp[i] == 11){
      gp[i] = 10;
    }
  }

  
  for(let i = 0; i < gp.length; i++){
    totalObtainedPoints += cp[i] * gp[i];
    totalPoints += cp[i] * 10;
  }


  sgpa = (totalObtainedPoints / totalPoints) * 10;

  if(semester < 3){
    cgpa = (sgpa + previousSgpa) / semester;
  }
  else if(semester >= 3){
    cgpa = (sgpa + previousSgpa) / 2;
  }

  sgpa = sgpa.toFixed(3);
  cgpa = cgpa.toFixed(3);


  resultsDiv.innerHTML = ` Results <br><br><br> Marks: ${marks} <br><br> Credit Points: ${cp} <br><br> Grade Points: ${gp} <br><br> 
  Total GPA Points: ${totalPoints} <br><br> Total Obtained GPA Points: ${totalObtainedPoints} <br><br><br><br> 
  Total Marks: ${100 * numberOfSubjects} <br><br> Total Marks Obtained: ${totalMarks} <br><br> Percentage: ${percentage}% <br><br> SGPA for ${semester} Semester: ${sgpa} <br><br>
  CGPA: ${cgpa}`;
  
});

///////////// Year //////////
const yearEl =document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;