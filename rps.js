let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compscorep = document.querySelector("#compsc");
const userscorep = document.querySelector("#usersc");
const resetbt = document.querySelector(".resetbt");


const compch = () => {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const draw = () => {
    msg.innerText = "That's a draw 🥶";
};

const userwinner = (userwin) => {
    if (userwin) {
        userscore++;
        userscorep.innerText = userscore;
        msg.innerText = "You win 🥶";
    } else {
        compscore++;
        compscorep.innerText = compscore;
        msg.innerText = "You lost 😭";
    }
};

const playgame = (userchoice) => {
    const compchoice = compch();

    if (userchoice === compchoice) {
        draw();
    } else {
        let userwin;

        if (userchoice === "rock") {
            userwin = compchoice !== "paper";
        } else if (userchoice === "paper") {
            userwin = compchoice !== "scissor";
        } else {
            userwin = compchoice !== "rock";
        }

        userwinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playgame(choiceId);
    });
});



resetbt.addEventListener("click", () => {
    userscore = 0;
    compscore = 0;

    userscorep.innerText = userscore;
    compscorep.innerText = compscore;

    msg.innerText = "Game reset! Make your move 🎮";
});
