
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  //validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Нужно ввести число от ${min} до ${max}`, "red");
  }

  //check if won
  if (guess === winningNum) {
    gameOver(true, `Поздравляю! Вы угадали число ${winningNum}`);
  } else {
    guessesLeft -= 1;
  }

  if (guessesLeft === 0) {
    gameOver(false, `Вы проиграли! Правильный ответ ${winningNum}`);
  } else {
    guessInput.style.border = "1px solid red";
    guessInput.value = "";
    setMessage(`Неверно! У Вас осталось ${guessesLeft} попыток`, "red");
  }
});

game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  guessInput.disabled = true;
  guessInput.style.border = " 1px solid ${color}";
  message.style.color = color;
  setMessage(msg);

  guessBtn.textContent = "Начать заново";
  guessBtn.className += "play-again";
}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// let min = 1,
//   max = 10,
//   winningNum = getRandomNum(min, max), // выигрышное число
//   guessesLeft = 3; // попытки

// const game = document.querySelector("#game");
// const minNum = document.querySelector(".min-num");
// const maxNum = document.querySelector(".max-num");
// const guessInput = document.querySelector("#guess-input");
// const guessBtn = document.querySelector("#guess-btn");
// const message = document.querySelector(".message");

// minNum.textContent = min
// maxNum.textContent = max;

// guessBtn.addEventListener("click", function () {
//   let guess = parseInt(guessInput.value);

//   //проверка

//   if (isNaN(guess) || guess < min || guess > max) {
//     setMessage(`Нужна ввести число от ${min} до ${max}`, "red");
//   }

//   if (guess === winningNum) {
//     // guessInput.disabled = true;
//     // guessInput.style.color = "1px solid green";
//     gameOver(true,`Поздравляю! Вы угадали число ${winningNum}`, "green");
//   } else {
//     // guessInput.style.color = "2px solid red";
//     guessesLeft -=1;
//     // setMessage(`К сожелению вы  не угадали! Попробуйте еще раз`, "red");
//   }

//   if (guessesLeft === 0) {
//     gameOver(false, `Вы проиграли! Правильный ответ ${winningNum}`);
//   } else {
//     guessInput.style.border = "1px solid red";
//     guessInput.value = "";
//     setMessage(`Не верно! У вас остались ${guessesLeft} попыток`, "red");
//   }
// });

// game.addEventListener("mousedown", function (e) {
//   if (e.target.className === "play-again") {
//     window.location.reload();
//   }
// });

// function gameOver(won, msg) {
//   let color;
//   won === true ? (color = "green") : (color = "red");

//   guessInput.disabled = true;
//   guessInput.style.border = `1px solid ${color}`;
//   message.style.color = color;
//   setMessage(msg);

//   guessBtn.textContent = "Начать  занова";
//   guessBtn.className += "play-agin";
// }

// function setMessage(msg, color) {
//   message.textContent = msg;
//   message.style.color = color;
// }

// function getRandomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }