var skills=["java","ruby","python","C++"];
var currentSkills = [];
function addSelectContent(){
    skills.sort()
    var optString="";
    optString +=`<select name="skills" id="skil" onclick="skill.value=skil.value">`
    for (const job of skills) {
        optString+=`<option value=${job} >${job}</option>`
    }
    optString+=`</select>`;
    document.getElementById('selectbox').innerHTML=optString;
}
addSelectContent();

function addSkills(){
    const skillName = document.getElementById('skill').value;
    if(currentSkills.includes(skillName))
    {
        alert("skill already present");
    }
    else if(skillName=='' || !isNaN(skillName)){
        alert("Provide a value for input or Entered value is wrong")
    }
    else{
        currentSkills.push(skillName);
        if(!skills.includes(skillName))
        {
            skills.push(skillName);
            addSelectContent();
        }
    }
   showSkills();
}

function addNewSkill(){
    const skillName = document.getElementById('skill').value;
    if(skills.includes(skillName))
    {
        alert("skill already present");
    }
    else{
        skills.push(skillName);
        addSelectContent();
    }
}

function showSkills(){
    var output = ""
    currentSkills.forEach(element => {
        output+=element+'\t';
    });
    document.getElementById("show").innerHTML=output;
}
var skillIndexOfCurrent;
var skillIndexOfSkills
function findIndex(){
     skillIndexOfCurrent = currentSkills.indexOf(document.getElementById('skill').value);
     skillIndexOfSkills = skills.indexOf(document.getElementById('skill').value);
}

function editSkill(editValue){
    
    currentSkills.splice(skillIndexOfCurrent,1,editValue);

    skills.splice(skillIndexOfSkills,1,editValue);

    addSelectContent();
    showSkills();
}