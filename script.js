document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        "How would you rate the quality of teaching materials provided?",
        "How satisfied are you with the cleanliness and maintenance of the campus?",
        "How would you evaluate the availability of academic resources like the library?",
        "How effective is the communication between faculty and students?",
        "How would you rate the overall atmosphere and culture of the college?",
        "How satisfied are you with the extracurricular activities offered?",
        "How would you assess the quality of career services and counseling?",
        "How would you rate the accessibility of campus facilities?",
        "How well does the college support student mental health and well-being?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ex dolor culpa iure ut alias vel obcaecati molestiae nam, modi quidem debitis, laboriosam laborum sunt quaerat doloribus ullam provident totam.?"
    ];
    

    const form = document.getElementById("feedback-form");

    questions.forEach((question, index) => {
        const questionGroup = document.createElement("div");
        questionGroup.classList.add("question-group");

        const questionLabel = document.createElement("label");
        questionLabel.textContent = `${index + 1}. ${question}`;
        questionGroup.appendChild(questionLabel);

        const radioGroup = document.createElement("div");
        radioGroup.classList.add("radio-group");

        ["Poor", "Average", "Good", "Very Good", "Excellent"].forEach(value => {
            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.id = `q${index + 1}_${value.toLowerCase()}`;
            radioInput.name = `question${index + 1}`;
            radioInput.value = value.toLowerCase();

            const radioLabel = document.createElement("label");
            radioLabel.htmlFor = radioInput.id;
            radioLabel.textContent = value;

            radioGroup.appendChild(radioInput);
            radioGroup.appendChild(radioLabel);
        });

        questionGroup.appendChild(radioGroup);
        form.appendChild(questionGroup);
    });
});
