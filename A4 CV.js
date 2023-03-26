//  hantera bilduppladdning
document.getElementById("upload_picture").addEventListener("change", function (event) {
    
    const fileReader = new FileReader();

    // Funktion som körs när FileReader har läst in filen
    fileReader.onload = function () {
        // Hämta profilbildselementet
        const profilePicture = document.getElementById("profile_picture");
        // Sätt src-attributet för profilbildselementet till den inlästa filens data
        profilePicture.setAttribute("src", fileReader.result);
    };
    // Läs in filen som valts av användarenm
    fileReader.readAsDataURL(event.target.files[0]);
});



// Funktion för att skapa profilsektionen
function createProfileSection() {
    // Implementera funktionen här
}

// Funktion för att skapa personliga informationsektionen
function createPersonalInfoSection() {
    
    const personalInfoSection = document.querySelector('.personal_info');
    // Sätt innerHTML för elementet med personlig information
    personalInfoSection.innerHTML = `
        <h2>Personlig information</h2>
        <p>Namn: ${personalInfo.name}</p>
        <p>Ålder: ${personalInfo.age} år</p>
        <p>E-post: ${personalInfo.email}</p>
    `;
}

// Funktion för att skapa arbetslivserfarenhetssektionen
function createWorkExperienceSection() {
    // Implementera funktionen här
}

// Funktion för att skapa utbildningssektionen
function createEducationSection() {
    
}

// Lyssnare för att skapa sektioner när dokumentet har laddats
document.addEventListener("DOMContentLoaded", function () {
    createProfileSection();
    createPersonalInfoSection();
    createWorkExperienceSection();
    createEducationSection();
});
