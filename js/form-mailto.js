const avisForm = document.querySelector(".avis-form");

if (avisForm) {
  avisForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const discipline = document.getElementById("discipline").value;
    const grade = document.getElementById("grade").value;
    const msg = document.getElementById("msg").value.trim();

    const subject = encodeURIComponent(`Nouvel avis Impact Fight Club - ${name}`);
    const body = encodeURIComponent(
      `Nom : ${name}\n` +
      `Email : ${mail}\n` +
      `Discipline : ${discipline}\n` +
      `Note : ${grade}/5\n\n` +
      `Avis :\n${msg}`
    );

    window.location.href = `mailto:joey.lemaire@etu.univ-amu.fr?subject=${subject}&body=${body}`;
  });
}
