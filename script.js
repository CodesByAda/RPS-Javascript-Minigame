document.addEventListener("DOMContentLoaded", () => {
    const score = {
        wins: 0,
        loses: 0,
        tie: 0
    };

    const choosedWeapon = document.querySelectorAll(".chooseable__weapon");
    const statusArea = document.getElementById("statusSection");

    const popup = document.querySelector(".popup");
    const resultHeading = document.getElementById("resulthead");
    const playAgain = document.getElementById("playagain");
    const resetBtn = document.getElementById("resetbtn");
    const resultDisplay = document.querySelector(".result");

    const botWeaponDiv = document.getElementById("comp__weapon");
    const userWeaponDiv = document.getElementById("user__weapon");

    let botWeaponClass = "";
    let userWeaponClass = "";

    choosedWeapon.forEach(weapon => {
        weapon.addEventListener("click", () => {
            const chooseAbles = ["rock", "paper", "scissors"];
            const randomNumber = Math.floor(Math.random() * chooseAbles.length);

            let result = "";


            if (randomNumber == 0) {
                botWeaponClass = "fa-hand-back-fist";
            } else if (randomNumber == 1) {
                botWeaponClass = "fa-hand";
            } else {
                botWeaponClass = "fa-hand-scissors";
            }

            if (weapon.id == "rock") {
                userWeaponClass = "fa-hand-back-fist";
            } else if (weapon.id == "paper") {
                userWeaponClass = "fa-hand";
            } else {
                userWeaponClass = "fa-hand-scissors";
            }


            popup.classList.remove("hide");

            if ((weapon.id == "rock" && randomNumber == 2) || (weapon.id == "paper" && randomNumber == 0) || (weapon.id == "scissors" && randomNumber == 1)) {
                score.wins += 1;
                result = "You Won!";
                console.log(weapon.id);
                console.log(chooseAbles[randomNumber]);
            } else if ((weapon.id == "rock" && randomNumber == 0) || (weapon.id == "paper" && randomNumber == 1) || (weapon.id == "scissors" && randomNumber == 2)) {
                score.tie += 1;
                result = "That's a tie!";
                console.log(weapon.id);
                console.log(chooseAbles[randomNumber]);
            } else {
                score.loses += 1;
                result = "I Won!";
                console.log(weapon.id);
                console.log(chooseAbles[randomNumber]);
            }



            setTimeout(() => {
                resultDisplay.classList.toggle("hide");
                userWeaponDiv.classList.add(userWeaponClass);
                botWeaponDiv.classList.add(botWeaponClass);

                setTimeout(() => {
                    resultHeading.innerHTML = result;
                    resultHeading.style.animation = "slideIn 1s ease-out";
                    setTimeout(() => {
                        playAgain.classList.remove("hide");
                    }, 2000)

                }, 3000);

            }, 2000);
        });
    });

    playAgain.addEventListener("click", () => {
        statusArea.innerHTML = `Wins: ${score.wins} &nbsp; Loses: ${score.loses} &nbsp; Tie: ${score.tie}`;
        popup.classList.add("hide");
        resultHeading.innerHTML = ""
        playAgain.classList.add("hide");
        resultHeading.style.animation = "none";
        resultDisplay.classList.add("hide");
        userWeaponDiv.classList.remove(userWeaponClass);
        botWeaponDiv.classList.remove(botWeaponClass);
    });

    resetBtn.addEventListener("click", () => {
        score.loses = 0;
        score.wins = 0;
        score.tie = 0;

        statusArea.innerHTML = `Wins: ${score.wins} &nbsp; Loses: ${score.loses} &nbsp; Tie: ${score.tie}`;
    });
});