function Display() {
  this.speed = 0;
  var self = this;
  setInterval(function () {
    self.speed++;
    console.log(self.speed);
  }, 300);
}

var d1 = new Display();

//========================

function Display() {
  this.speed = 0;
  setInterval(() => {
    this.speed++;
    console.log(this.speed);
  }, 1000);
}

var d1 = new Display();
