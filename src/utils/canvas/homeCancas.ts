interface VDraw {
  x: number;
  y: number;
  xL: number;
  yL: number;
  vX: number;
  vY: number;
  arc: number;
  arcV: number;
  color: string;
}

class Draw {
  public placement: VDraw[];
  public x: any;
  public y: any;
  public W: number;
  public H: number;
  public arc: number;
  public arcV: number;
  public size: number;
  public text: string;
  public context: any;
  constructor(canvas: any, x: number, y: number, text: string) {
    this.x = x;
    this.y = y;
    this.W = x * 2;
    this.H = y * 2;
    this.arc = 0.2 + 2.8 * Math.random();
    this.arcV = 1;
    this.size = x / 5;
    this.text = text;
    this.placement = [];
    this.context = canvas.getContext('2d');
    this.context.textAlign = 'center';
    this.context.font = this.size + 'px arial';
    this.context.fillText(this.text, this.x, this.y);
  }

  public reset = () => {
    this.placement = [];
    this.context.clearRect(0, 0, this.W, this.H);
  };

  public getValue = () => {
    const gridY = 4;
    const gridX = 4;
    this.context.textAlign = 'center';
    this.context.font = this.size + 'px arial';
    this.context.fillText(this.text, this.x, this.y);
    const idata = this.context.getImageData(0, 0, this.W, this.H);
    const buffer32 = new Uint32Array(idata.data.buffer);
    for (let j = 0; j < this.H; j += gridY) {
      for (let i = 0; i < this.W; i += gridX) {
        if (buffer32[j * this.W + i]) {
          const arc = Number((1.6 * Math.random()).toFixed(2)) + 0.4;
          const arcV = 1;
          const color = colors[Math.floor(Math.random() * colors.length)];
          const vX = Math.random() > 0.5 ? 1 : -1; // x轴速度方向
          const vY = Math.random() > 0.5 ? 1 : -1; // y轴速度方向
          const xL = vX * 0.33 * Math.random() * Math.floor(Math.random() * 1000 + 1); // x轴移动位置
          const yL = vY * 0.33 * Math.random() * Math.floor(Math.random() * 1000 + 1); // y轴移动位置
          this.placement.push({ x: i, y: j, xL, yL, vX, vY, arc, arcV, color });
        }
      }
    }
    this.context.clearRect(0, 0, this.W, this.H);
  };

  public drawCircle = () => {
    this.context.save();
    this.placement.forEach((v: VDraw) => {
      v.arc += 0.03 * v.arcV;
      v.xL += 0.33 * Math.random() * v.vX;
      // v.xL += 0.33 * v.vX;
      v.yL += 0.33 * Math.random() * v.vY;
      // v.yL += 0.33 * v.vY;
      if (v.arc > 3 || v.arc < 2) {
        v.arcV *= -1;
      }
      if ((v.xL > 3 && v.vX > 0) || (v.xL < 0 && v.vX < 0)) {
        v.vX *= -1;
      }
      if ((v.yL > 3 && v.vY > 0) || (v.yL < 0 && v.vY < 0)) {
        v.vY *= -1;
      }
      // 距离过远 调整速度
      if (Math.abs(v.xL) / 3 > 1) {
        v.vX = v.vX > 0 ? 10 : -10;
      } else {
        v.vX = v.vX > 0 ? 1 : -1;
      }
      if (Math.abs(v.yL) / 3 > 1) {
        v.vY = v.vY > 0 ? 10 : -10;
      } else {
        v.vY = v.vY > 0 ? 1 : -1;
      }
      this.context.fillStyle = v.color;
      this.context.beginPath();
      this.context.arc(v.x + v.xL, v.y + v.yL, v.arc, Math.PI * 2, false);
      this.context.closePath();
      this.context.fill();
    });
    this.context.restore();
  };
}

const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722',
];

export default Draw;
