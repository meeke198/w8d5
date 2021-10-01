const CONSTANTS = {
  GRAVITY:  0.5,
  FLAP_SPEED:  -10,
  TERMINAL_VEL:  12,
  BIRD_WIDTH:  40,
  BIRD_HEIGHT:  30
};

export default class Bird {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.velocity = 1;

    this.y = this.dimensions.height/2; // vertical
    this.x = this.dimensions.width/3; // horizontal
  }

  drawBird(ctx) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
  }

  move() {
    this.y += this.velocity;
    this.velocity += CONSTANTS.GRAVITY;
  }

  flap() {
    this.velocity = CONSTANTS.FLAP_SPEED;
  }

  getBounds() {
    return {
      topLeft: [this.x, this.y],
      bottomRight: [this.x+CONSTANTS.BIRD_WIDTH, this.y+CONSTANTS.BIRD_HEIGHT]
    }
  }


}
