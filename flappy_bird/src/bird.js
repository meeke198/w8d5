export default class Bird {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.velocity = 0;

    this.verticalPos = this.dimensions.height/2;
    this.horizontalPos = this.dimensions.width/3;
  }

  drawBird(ctx) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.horizontalPos, this.verticalPos, 40, 30);
  }


}
