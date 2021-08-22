const COLORS = [
	{ r: 44, g: 209, b: 252 },
	{ r: 54, g: 233, b: 84 }
]

const PI2 = Math.PI * 2;

class App {
	constructor() {
		this.canvas = document.createElement('canvas');
		document.body.appendChild(this.canvas);
		this.ctx = this.canvas.getContext('2d');
		console.log(window.devicePixelRatio);

		this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

		this.totalParticles = 15;
		this.particles = [];
		this.maxRadius = 1500;
		this.minRadius = 100;

		window.addEventListener('resize', this.resize.bind(this));
		this.resize();

		window.requestAnimationFrame(this.animate.bind(this));
	}

	resize() {
		this.stageWidth = document.body.clientWidth;
		this.stageHeight = document.body.clientHeight;
		console.log(this.stageWidth);
		console.log(this.stageHeight);

		this.canvas.width = this.stageWidth * this.pixelRatio;
		this.canvas.height = this.stageHeight * this.pixelRatio;
		console.log(this.canvas.width);
		console.log(this.canvas.height);

		this.createParticles();

	}

	createParticles() {
		let curColor = 0;
		this.particles = [];

		for (let i = 0; i < this.totalParticles; i++) {
			const item = new GlowParticles(
				Math.random() * this.stageWidth * this.pixelRatio,
				Math.random() * this.stageHeight * this.pixelRatio,
				Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
				COLORS[curColor]
			);

			if (++curColor >= COLORS.length) {
				curColor = 0;
			}

			this.particles[i] = item;
		}
	}

	animate() {
		window.requestAnimationFrame(this.animate.bind(this));

		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		for (let i = 0; i < this.totalParticles; i++) {
			const item = this.particles[i];
			item.animate(this.ctx, this.canvas.width, this.canvas.height);
		}
	}
}

window.onload = () => {
	new App();
}


class GlowParticles {
	constructor(x, y, radius, rgb) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.rgb = rgb;

		this.vx = Math.random() * 4;
		this.vy = Math.random() * 4;

		this.sinValue = Math.random();
	}

	animate(ctx, stageWidth, stageHeight) {
		this.sinValue += 0.01;

		this.radius += Math.sin(this.sinValue);

		this.x += this.vx;
		this.y += this.vy;

		if (this.x < 0) {
			this.vx *= -1;
			this.x += 10;
		} else if (this.x > stageWidth) {
			this.vx *= -1;
			this.x -= 10;
		}

		if (this.y < 0) {
			this.vy *= -1;
			this.y += 10;
		} else if (this.y > stageHeight) {
			this.vy *= -1;
			this.y -= 10;
		}

		ctx.beginPath();
		let g = ctx.createRadialGradient(
			this.x,
			this.y,
			this.radius * 0.1,
			this.x,
			this.y,
			this.radius
		);
		g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`);
		g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`);

		ctx.fillStyle = g;
		ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
		ctx.fill();
	}
}