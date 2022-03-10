let btn = document.getElementsByClassName("huit");

let btnUp = document.getElementsByClassName("btn-up");
let btnDown = document.getElementsByClassName("btn-down");
let btnpress = $(".btn-press");
let inp = $("#inp");
let final = $(".final");

let elevater = {
  currentFloor: 1,
  minFloor: 1,
  maxFloor: 16,
  printFloor() {
    console.log(this.currentFloor);
  },
  printError() {
    console.log("Error");
  },
  upOneFloor() {
    if (
      this.currentFloor >= this.minFloor &&
      this.currentFloor < this.maxFloor
    ) {
      this.currentFloor++;
      this.printFloor();
    } else {
      alert("There is no floor");
      this.printError();
    }
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.backgroundColor = "aqua";
    }
    btn[this.currentFloor - 1].style.backgroundColor = "green";
  },
  downOneFloor() {
    if (
      this.currentFloor > this.minFloor &&
      this.currentFloor <= this.maxFloor
    ) {
      this.currentFloor--;
      this.printFloor();
    } else {
      alert("There is no floor");
      this.printError();
    }
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.backgroundColor = "aqua";
    }
    btn[this.currentFloor - 1].style.backgroundColor = "green";
  },
  toFloor(floor) {
    if (floor >= this.minFloor && floor <= this.maxFloor) {
      while (this.currentFloor < floor) {
        this.upOneFloor();
      }
      while (this.currentFloor > floor) {
        this.downOneFloor();
      }
    } else {
      alert("There is no floor");
      this.printError();
    }
    btn[this.currentFloor - 1].style.backgroundColor = "green";
  },
};

btnUp[0].onclick = () => {
  elevater.upOneFloor();
};

btnDown[0].onclick = () => {
  elevater.downOneFloor();
};

// elevater.toFloor(+prompt("Choose"));

btnpress.on("click", function () {
  elevater.toFloor(inp.val());
});

// btnUp.on("click", function () {
//   final.css("margin-bottom", "+=100px");
// });
// btnDown.on("click", function () {
//   final.css("margin-bottom", "-=100px");
// });
