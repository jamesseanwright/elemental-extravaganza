'use strict';

/* The JS1K guys have made life easier by providing
 * the following shim:
 * - a - a canvas element
 * - b - the body
 * - c - a's 2D context
 * - g - a's 3D context */

var PI = Math.PI;
var PLAYER_X = a.width / 2;
var PLAYER_Y = a.height / 2;
var PLAYER_RADIUS = 45;

var isGameRunning = true;

var shield = {
	init: function () {
		this.rotation = 0;
		this.radianModifier = 1;
		this.radius = PLAYER_RADIUS + 30;
		this.stroke = 'white';

		a.addEventListener('mousemove', function (e) { 
			this.rotate(e);
		}.bind(this));
	},
	
	rotate: function (e) {
		var centre = a.width / 2;
		this.rotation = (PI - (e.clientX - centre)) / 100;
	},

	render: function () {
		var rotation = this.getRotation();

		c.strokeStyle = this.stroke;
		c.beginPath();
		c.arc(PLAYER_X, PLAYER_Y, this.radius, rotation.start, rotation.end);
		c.stroke();
	},

	getRotation: function () {
		return {
			start: (PI + this.radianModifier) - this.rotation,
			end: (PI + PI) - this.radianModifier - this.rotation,
		};
	}
};

function Particle(options) {
	options = options || {};
	this.isPlayer = options.isPlayer;
	this.radius = options.radius || Particle.generateRadius();
	this.fill = Particle.generateFill(this.isPlayer);

	this.setPos(options);
	this.setSpeed();

	if (this.isPlayer) collider.setTarget(this);
}

Particle.baseRadius = 30;
Particle.generationFrequencyMs = 1200;
Particle.lastGeneration = Date.now() - Particle.generationFrequencyMs;
Particle.instances = []; // TODO: collect instances that have left screen
Particle.blur = 100;

Particle.fills = {
	player: 'blue',
	other: ['orange', '#008080']
};

Particle.generateRadius = function () {
	return Particle.baseRadius - (Math.ceil(Math.random() * Particle.baseRadius) / 2);
};

Particle.generateFill = function (isPlayer) {
	var other = Particle.fills.other;

	return isPlayer 
		? Particle.fills.player
		: other[Math.floor(Math.random() * other.length)];
};

Particle.generatePos = function (length) {
	return Math.random() * length;
};

Particle.create = function (options) {
	Particle.instances.push(new Particle(options));
};

Particle.next = function () {
	Particle.tryGenerate();

	for (var i in Particle.instances) {
		var particle = Particle.instances[i];
		particle.render();

		if (!particle.isPlayer) particle.move();
		
		collider.detect(particle);
	}
};

Particle.tryGenerate = function () {
	var now = Date.now();
	var shouldGenerate = now - Particle.lastGeneration >= Particle.generationFrequencyMs;

	if (shouldGenerate) {
		Particle.create();
		Particle.lastGeneration = now;
	}
};

Particle.prototype.render = function () {
	c.fillStyle = this.fill;
	c.shadowColor = this.fill;
	c.shadowBlur = Particle.blur;
	c.beginPath();
	c.arc(this.x, this.y, this.radius, 0, PI * 2);
	c.fill();
	c.closePath();
};

Particle.prototype.setSpeed = function () {
	var distanceFromX = PLAYER_X - this.x;
	var distanceFromY = PLAYER_Y - this.y;
	var aspectRatio =  a.height / a.width;
	var speed = 8;

	this.xSpeed = speed * (distanceFromX / PLAYER_X);
	this.ySpeed = (speed * (distanceFromY / PLAYER_Y)) * aspectRatio;
};

Particle.prototype.setPos = function (options) {
	var isX;
	var hasCustomPos = options.x && options.y;

	if (hasCustomPos) {
		this.x = options.x;
		this.y = options.y;
		return;
	}

	isX = Math.round(Math.random()) === 0;

	if (isX) {
		this.x = Math.random() * a.width;
		this.y = this.getStartPos(a.width);
	} else {
		this.y = Math.random() * a.height;
		this.x = this.getStartPos(a.width);
	}
};

Particle.prototype.getStartPos = function (length) {
	var fromZero = Math.round(Math.random()) === 0;

	return fromZero ? 0 - this.radius : length + this.radius;
};

Particle.prototype.move = function () {
	this.x += this.xSpeed;
	this.y += this.ySpeed;
};

var collider = {
	setTarget: function (particle) {
		this.target = particle;
	},

	detect: function (particle) {
		if (particle.isPlayer) return;

		var target = this.target;
		var isHit = particle.isFromLeft
					? particle.x + particle.width >= target.x
					: particle.x <= target.x + target.width;

		if (isHit && target.onHit) target.onHit();
	}
};

shield.init();

Particle.create({
	isPlayer: true,
	radius: PLAYER_RADIUS,
	x: PLAYER_X,
	y: PLAYER_Y,
	onHit: gameOver
});

loop();

function gameOver() {
	isGameRunning = false;
}

function loop() {
	if (!isGameRunning) return;

	c.clearRect(0, 0, a.width, a.height);
	c.fillStyle = 'black';
	c.fillRect(0, 0, a.width, a.height);

	shield.render();
	Particle.next();

	requestAnimationFrame(loop);
}