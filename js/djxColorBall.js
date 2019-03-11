function ColorBall(option) {
    this._init(option);
}
ColorBall.prototype = {
    constructor: ColorBall,
    _init: function (option) {
        option = option || {};
        //圆心坐标
        this.x = option.x || 0;
        this.y = option.y || 0;
        //半径
        this.r = option.r || 0;
        //颜色
        this.color = option.color || 'black';
        //变化的量
        this.dx = Math.random() * 10 - 5;
        this.dy = Math.random() * 10 - 5;
        this.dr = Math.random() * 1 + 1;
    },
    render: function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    },
    update: function () {
        this.x += this.dx;
        this.y += this.dy;
        this.r -= this.dr;
    }
}