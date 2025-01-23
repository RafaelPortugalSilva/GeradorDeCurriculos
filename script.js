function generateResume() {
    document.getElementById('outputName').innerText = document.getElementById('name').value;
    document.getElementById('outputEmail').innerText = document.getElementById('email').value;
    document.getElementById('outputPhone').innerText = document.getElementById('phone').value;

    const portfolioLink = document.getElementById('portfolio').value;
    const portfolioOutput = document.getElementById('outputPortfolio');
    if (portfolioLink) {
        portfolioOutput.innerText = portfolioLink;
        portfolioOutput.href = portfolioLink;
    } else {
        portfolioOutput.innerText = "N/A";
        portfolioOutput.removeAttribute('href');
    }

    document.getElementById('outputSummary').innerText = document.getElementById('summary').value;
    document.getElementById('outputExperience').innerText = document.getElementById('experience').value;
    document.getElementById('outputEducation').innerText = document.getElementById('education').value;
    document.getElementById('outputSkills').innerText = document.getElementById('skills').value;

    document.getElementById('resumeOutput').style.display = 'block';

    // Gera o PDF
    const element = document.getElementById('resumeOutput');
    const options = {
        margin: 10,
        filename: 'curriculo.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, backgroundColor: '#fff' },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(options).from(element).save();
}
