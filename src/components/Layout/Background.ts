export class Background {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;

  constructor() {
    console.log("Background");

    if (document.getElementById("background")) {
      this.canvas = document.getElementById("background") as HTMLCanvasElement;
    } else {
      this.canvas = document.createElement("canvas");
      this.canvas.id = "background";
      this.canvas.width = document.documentElement.clientWidth;
      this.canvas.height = document.documentElement.clientHeight;

      window.addEventListener("resize", () => {
        this.canvas.width = document.documentElement.clientWidth;
        this.canvas.height = document.documentElement.clientHeight;
        this.draw();

        console.log(this.canvas.width, this.canvas.height);
      });
    }

    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
  }

  drawHexagon(x: number, y: number) {
    if (!this.ctx) return;
    // draw hexagons
    let size = 100;
    let side = 0;

    this.ctx.beginPath();
    this.ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

    for (side; side < 7; side++) {
      this.ctx.lineTo(
        x + size * Math.cos((side * 2 * Math.PI) / 6),
        y + size * Math.sin((side * 2 * Math.PI) / 6)
      );
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = "#333333";
      this.ctx.stroke();
    }

    //this.ctx.fillStyle = "#333333";
    //this.ctx.fill();
  }

  draw() {
    if (!this.ctx) return;
    this.ctx.fillStyle = "#eeeeee";

    console.log(this.canvas.width, this.canvas.height);

    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawHexagon(50, 400);
    this.drawHexagon(199, 312);
    this.drawHexagon(199, 485);
  }
}
