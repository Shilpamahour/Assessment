document.addEventListener("DOMContentLoaded", function () {
    const chat = document.getElementById("chat");
    const userInput = document.getElementById("userInput");

    // Welcome message
    setTimeout(() => {
        showTyping("Hi! I'm your friendly AI bot 🤖. Ask me anything about Shilpavati Mahour! 👩‍💻");
    }, 500);

    function sendMessage() {
        const input = userInput.value.trim();
        if (input === "") return;

        chat.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
        userInput.value = "";

        const response = getBotResponse(input.toLowerCase());
        showTyping(response);
    }

    function getBotResponse(input) {
        const responses = {
            "hello": "Hey there! 👋 How can I help you today?",
            "hi": "Hi! 😊 Feel free to ask me about skills, projects, or experience.",
            "who are you": "I'm an AI assistant built to showcase Shilpavati Mahour's portfolio. 🤓",
            "skills": "She’s skilled in C++, Python, SQL, ML (Scikit-Learn, TensorFlow), and DevOps (Git, AWS, Azure, Netlify). 💻",
            "projects": "Her projects include CPU Scheduling, Disease Classification, Titanic Survival Prediction, and Stock Risk Analysis. 📊",
            "experience": "She’s worked in PR & Management Coordination and volunteered with CRY and NCC. 📌"
        };

        if (responses[input]) {
            return responses[input];
        }

        // Project-specific responses
        if (input.includes("cpu scheduling")) {
            return "🧠 CPU Scheduling (May 2024 - June 2024): Built an interactive frontend for scheduling algorithms using HTML, CSS, JavaScript.";
        } else if (input.includes("disease classification")) {
            return "🧬 Disease Classification (Feb 2023 - Mar 2023): Used ML to classify 42 diseases and applied PCA for optimization.";
        } else if (input.includes("titanic survival")) {
            return "🚢 Titanic Survival (Mar 2023 - Apr 2023): Built predictive models (Random Forest, MLP) to forecast survival chances.";
        } else if (input.includes("stock risk analysis")) {
            return "📈 Stock Risk Analysis (Jan 2024 - Apr 2024): Analyzed correlations and financial risk for TSLA, JNJ, KO.";
        }else if(input.includes("PR & Management Coordination")){
            return"ur startup organizes educational trips for 50+ school students to enhance their technical skills and professional well-being.";
        }
        else if(input.includes("cry")){
            return"Cry(2022):Volunteered for 3 months,raising funds for underprivileged childrens' educations.";
        }
         else {
            return "Hmm 🤔 I didn't catch that. Try asking about 'skills', 'experience', or specific projects like 'CPU Scheduling'.";
        }
    }

    // Show typing effect
    function showTyping(message) {
        const botMsg = document.createElement("p");
        botMsg.innerHTML = "<strong>Bot:</strong> ";
        chat.appendChild(botMsg);

        let i = 0;
        const interval = setInterval(() => {
            botMsg.innerHTML += message.charAt(i);
            i++;
            if (i >= message.length) {
                clearInterval(interval);
            }
        }, 30);
    }

    // Enter key or Send button
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    const sendBtn = document.querySelector("button");
    if (sendBtn) sendBtn.addEventListener("click", sendMessage);
});
