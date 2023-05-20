const a = (2 * Math.PI) / 6;
const r = 50;

export class Background {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;

  constructor() {
    console.log("Background - constructor");

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

  drawGrid(width: number, height: number) {

    if (!this.ctx) return;

    this.ctx.strokeStyle = "#cccccc";
    this.ctx.lineWidth = 0.2;

    for (let i = 0; i < width; i += 10) {
      this.ctx.beginPath();
      this.ctx.moveTo(i, 0);
      this.ctx.lineTo(i, height);
      this.ctx.stroke();
    }

    for (let i = 0; i < height; i += 10) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, i);
      this.ctx.lineTo(width, i);
      this.ctx.stroke();
    }
  }

  drawHexagonGrid(width: number, height: number) {
    const hexagonHeight = this.calculateHexagonHeight();

    const columns = Math.floor(width / (1.5 * r)) + 2;
    const rows = Math.floor(height / hexagonHeight) + 2;

    for (let i = 0; i < columns; i++) {
      const calcX = (i * (1.5 * r)) - r;
      for (let j = 0; j < rows; j++) {
        const calcY = (j * hexagonHeight) + (i % 2 === 0 ? 0 : (0.5 * hexagonHeight)) - (hexagonHeight / 2);
        const color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
        this.drawHexagon(calcX, calcY, color);
      }
    }
  }

  calculateHexagonHeight(): number {
      if (r <= 0) {
        return 0;
      }
    
      const height =  Math.sqrt(3) * r;
      
      return height;    
  }

  drawHexagon(x: number, y: number, fillStyle?: string) {
    if (!this.ctx) return;
      
    // shift to place at correct position
    x = x + r;
    y = y + (0.5 * this.calculateHexagonHeight());

    this.ctx.fillStyle = fillStyle || "#cccccc";

    this.ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      this.ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
    }
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }

  draw() {
    console.log("Background - draw");

    if (!this.ctx) return;
    this.ctx.fillStyle = "#eeeeee";

    // console.log(this.canvas.width, this.canvas.height);

    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawHexagonGrid(this.canvas.width, this.canvas.height);
    /*
    const height = this.calculateHexagonHeight();
    console.log(height);
    this.drawHexagon(0, 0);
    this.drawHexagon(0, 0 + height);
    this.drawHexagon(0, 0 + (2 *height));

    this.drawHexagon(0 + (1.5 * r), 0 + (0.5 * height));
    this.drawHexagon(0 + (1.5 * r), 0 + (1.5 * height));
    this.drawHexagon(0 + (1.5 * r), 0 + (2.5 * height));
    */
    // this.drawGrid(this.canvas.width, this.canvas.height);
  }
}
