document.addEventListener("DOMContentLoaded", () => {
    const score = {
        wins: 0,
        loses: 0,
        tie: 0
    };

    const choosedWeapon = document.querySelectorAll(".chooseable__weapon");

    choosedWeapon.forEach(weapon => {
        weapon.addEventListener("click", () => {
            const chooseAbles = ["Rock", "Paper", "Scissors"];
            const randomNumber = Math.floor(Math.random() * chooseAbles.length);
            
            const statusArea = document.getElementById("statusSection");
            const popup = document.querySelector(".popup");
            const resultHeading = document.getElementById("resulthead");
            const resultBrief = document.getElementById("resultbrief");
            const playAgain = document.getElementById("playagain");
            const resetBtn = document.getElementById("resetbtn");

            popup.classList.remove("hide");
            playAgain.addEventListener("click",() => {
                popup.classList.add("hide");
            })
            resetBtn.addEventListener("click",() => {
                score.loses = 0;
                score.wins = 0;
                score.loses = 0;

                statusArea.innerHTML = `Wins: ${score.wins} &nbsp; Loses: ${score.loses} &nbsp; Tie: ${score.tie}`;          
            })



            if ((weapon.id == "rock" && randomNumber == 2) || (weapon.id == "paper" && randomNumber == 0) || (weapon.id == "scissors" && randomNumber == 1)) {
                score.wins+=1;
                statusArea.innerText = `Wins: ${score.wins} &nbsp; Loses: ${score.loses} &nbsp; Tie: ${score.tie}`;
                resultHeading.innerHTML = "You Won!"
                resultBrief.innerHTML = `You choose ${weapon.id} I choose ${chooseAbles[randomNumber]} and You Won!`;
            }
            else if ((weapon.id == "rock" && randomNumber == 0) || (weapon.id == "paper" && randomNumber == 1) || (weapon.id == "scissors" && randomNumber == 2)) {
                score.tie+=1;
                statusArea.innerHTML = `Wins: ${score.wins} &nbsp; Loses: ${score.loses} &nbsp; Tie: ${score.tie}`;
                resultHeading.innerHTML = "That's a tie!"
                resultBrief.innerHTML = `You choose ${weapon.id} I choose ${chooseAbles[randomNumber]} and thats a tie!`;

            }
            else {
                score.loses+=1;
                statusArea.innerHTML = `Wins: ${score.wins} &nbsp; Loses: ${score.loses} &nbsp; Tie: ${score.tie}`;
                resultHeading.innerHTML = "Oops, You Lost :("
                resultBrief.innerHTML = `You choose ${weapon.id} I choose ${chooseAbles[randomNumber]} and I Won!!`;

            }
        })

    });

    /* console.log(userChoice)
    if (randomNumber < 1) {
        console.log("Rock");
    }
    else if (randomNumber > 1) {
        console.log("Scissors");
    }
    else {
        console.log(    "Paper");
    } */
});