export default class Bird {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.velocity = 0;

    let verticalPos = this.dimensions.height/2;
    let horizontalPos = this.dimensions.width/3;
    this.position = [horizontalPos, verticalPos];
  }

  drawBird(ctx) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(...this.position, 40, 30);
  }


}
