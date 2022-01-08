//-------------------------------------------------------------------------global-------------------------------------//
//-------------------------------------------------------------------------global-------------------------------------//

//-------------------------------------------------------------------------Header-------------------------------------//
//-------Navbar//-------//
function handelclose() {
  var x = document.getElementById("slidbar");
  if (x.classList[x.classList.length - 1] === "show") {
    x.classList.remove("show");
    x.classList.add("hide");
  }
}
function myFunction() {
  var x = document.getElementById("slidbar");
  if (x.classList[x.classList.length - 1] === "show") {
    x.classList.remove("show");
    x.classList.add("hide");
  } else {
    x.classList.remove("hide");
    x.classList.add("show");
  }
}
//-------Navbar//-------//
//-------Home-section//-------//

//-------Home-section//-------//

//-------------------------------------------------------------------------Header-------------------------------------//
//-------------------------------------------------------------------------Header-------------------------------------//

//--------------------------------------skill section
let Allskill_section = document.querySelectorAll(".skill-section");

// 1. function to show one skill at a time
Allskill_section.forEach((skill_section) => {
  skill_section.addEventListener("click", (e) => {
    // let firstclasselement = value.classList[0];
    if (e.path.length < 8) {
      console.log("click me aya 1");
      let AllSkills_item = document.querySelectorAll(".skill-items");
      AllSkills_item.forEach((skill_section2) => {
        skill_section2.classList.remove("show");
        skill_section2.classList.add("hide");
      });
      // console.log(e.path[1].lastElementChild.classList[0]);
      // e.path[1].classList[0] It will help to extract particular class
      let element = document.querySelector(
        `.${e.path[1].lastElementChild.classList[0]}`
      );

      if (element.classList[element.classList.length - 1] == "show") {
        element.classList.remove("show");
        element.classList.add("hide");
      } else {
        element.classList.add("show");
        element.classList.remove("hide");
      }
    }
    // element.classList.add("show");
  });
});
//agian removing show class for toggle
let skill_item = document.querySelectorAll(".skill-items");
skill_item.forEach((oneitem) => {
  oneitem.addEventListener("click", () => {
    oneitem.classList.remove("show");
    oneitem.classList.add("hide");
  });
});
//--------------------------------------skill section
//--------------------------------------qualification section

function handelschoolqualification() {
  let qualificationSchool = document.getElementById("qualification-school-div");
  let qualificationSchoolButton = document.getElementById(
    "qualification-school-button"
  );
  let qualificationMyselfButton = document.getElementById(
    "qualification-myself-button"
  );
  qualificationSchoolButton.classList.add("qualification-work-active");
  qualificationMyselfButton.classList.remove("qualification-work-active");
  let qualificationMyself = document.getElementById("qualification-mySedlf");
  qualificationSchool.classList.add("qualification-active");
  qualificationSchool.classList.remove("qualification-inactive");
  qualificationMyself.classList.add("qualification-inactive");
}
function handelMyselfqualification() {
  let qualificationSchool = document.getElementById("qualification-school-div");
  let qualificationMyself = document.getElementById("qualification-mySedlf");
  let qualificationMyselfButton = document.getElementById(
    "qualification-myself-button"
  );
  let qualificationSchoolButton = document.getElementById(
    "qualification-school-button"
  );
  //for active and deactive buttons only
  qualificationMyselfButton.classList.add("qualification-work-active");
  // qualificationMyselfButton.classList.remove("qualification-work-deactive");
  qualificationSchoolButton.classList.remove("qualification-work-active");
  // qualificationSchoolButton.classList.add("qualification-work-deactive");

  //active and deactive qualification data
  // 1. school inactive
  // 2. self active
  qualificationSchool.classList.add("qualification-inactive");
  qualificationSchool.classList.remove("qualification-active");
  qualificationMyself.classList.add("qualification-active");
  qualificationMyself.classList.remove("qualification-inactive");
}
