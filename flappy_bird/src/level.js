export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [[400, 160+Math.random()*(this.dimensions.height/2)],
                  [620, 160+Math.random()*(this.dimensions.height/2)],
                  [840, 160+Math.random()*(this.dimensions.height/2)]];
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  movePipes() {
    for (let i=0; i < this.pipes.length; i++) {
      this.pipes[i][0] -= 2;
    }
    if (this.pipes[0][0] <= -100) {
      this.pipes = this.pipes.slice(1);
      this.pipes.push([this.pipes[1][0] + 220+Math.random(0,1)*50, 160+Math.random()*(this.dimensions.height/2)])
    }
  }

  drawPipes(ctx) {
    for (let i=0; i < this.pipes.length; i++) {
      let x = this.pipes[i][0]
      let y = this.pipes[i][1]
      ctx.fillStyle = "green";
      ctx.fillRect(x, y+75, 100, this.dimensions.height);
      ctx.fillRect(x, 0, 100, y-75);
    }
  }

  collidesWith(bounds) {
    // for (let i=0; i < this.pipes.length; i++) {
    //   let x = this.pipes[i][0]
    //   let y = this.pipes[i][1]

    //   if ()
    // }
  }

  animate(ctx) {
    this.drawBackground(ctx);
    this.movePipes();
    this.drawPipes(ctx);
  }

}
