export function addResume(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".cta-btn--resume");
  resumeButton.setAttribute("href", "https://www.juicybliss.com/download_resume.pdf");
}
