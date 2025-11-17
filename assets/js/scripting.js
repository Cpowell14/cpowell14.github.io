function moveIntoView(id) {
  const divId = document.getElementById(id);
  if (divId) {
    divId.scrollIntoView({
      behavior: "smooth"
    });
  } else {
    console.warn('Div "${id}" not found. ');
  }
}

function downloadResume() {
  const resume = document.createElement('a');
  resume.href = "./assets/images/Carter_Powell_Resume.pdf"
  resume.download = 'Carter_Powell_Resume.pdf';
  document.body.appendChild(resume);
  resume.click();
  document.body.removeChild(resume);
}