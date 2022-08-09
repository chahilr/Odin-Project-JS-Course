const gameEngine = (() => {
  let running = true;
  const player1 = Player("X");
  const player2 = Player("O");

  let turn = player1;
  let turnHeader = document.querySelector("#turnHeader");

  const gameBoard = (() => {
    let emptySpaces = 9;
    let cells = document.querySelectorAll(".cell");
    for (let cell of cells) {
      console.log(cell);
      cell.addEventListener("click", () => {
        if (!running) return;

        if (cell.innerHTML == "") {
          cell.innerHTML = turn.marker;
          emptySpaces--;
          if (checkWinner(turn.marker)) {
            running = false;
            turnHeader.innerText = `${turn.marker}'s Wins!`;
          } else if (emptySpaces == 0) {
            turnHeader.innerText = `It's a Draw!`;
          } else {
            turn = turn == player1 ? player2 : player1;
            turnHeader.innerText = `${turn.marker}'s Turn`;
          }
        }
      });
    }

    function checkWinner(marker) {
      const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ];

      for (let condition of winningConditions) {
        if (condition.filter((e) => cells[e].innerText == marker).length == 3) {
          return true;
        }
      }
      return false;
    }

    function reset() {
      for (let cell of cells) {
        cell.innerText = "";
      }
      turn = player1;
      turnHeader.innerText = `${turn.marker}'s Turn`;
      emptySpaces = 9;
      running = true;
    }

    return { checkWinner, reset };
  })();

  function Player(marker) {
    return { marker };
  }

  const resetBtn = document.querySelector("#resetBtn");
  resetBtn.addEventListener("click", gameBoard.reset);

  return {};
})();
