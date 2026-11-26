const avisForm=document.querySelector(".avis-form");avisForm&&avisForm.addEventListener("submit",t=>{t.preventDefault();const e=document.getElementById("name").value.trim(),n=document.getElementById("mail").value.trim(),o=document.getElementById("user-discipline").value,m=document.getElementById("grade").value,i=document.getElementById("msg").value.trim(),c=encodeURIComponent(`Nouvel avis Impact Fight Club - ${e}`),l=encodeURIComponent(`Nom : ${e}
Email : ${n}
Discipline : ${o}
Note : ${m}/5

Avis :
${i}`);window.location.href=`mailto:joey.lemaire@etu.univ-amu.fr?subject=${c}&body=${l}`});
