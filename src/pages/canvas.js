import React, { Component } from 'react';
import Menu from '../components/header'

class Works extends Component {
    state = {
        amount: 30
    }

    componentDidMount() {
        this.ctx = this.refs.canvas.getContext('2d');
        this.init()
        this.refs.canvas.width = window.innerWidth;
        this.refs.canvas.height = window.innerHeight/ 100 * 98;
        // window.addEventListener('resize', function risiz(){
        // this.setState({
        //     wind:window.innerWidth / 100 * 84
        // })
    // })
    }
    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.risiz);
    // }
    // resiz = () => {
    //     this.refs.canvas.width = window.innerWidth / 100 * 84;
    //     this.refs.canvas.height = window.innerHeight;
    // }

    init = (e) => {
        let ctx = this.refs.canvas.getContext('2d');
        // let .0 = {
        //     x: 0,
        //     y: 0
        // }
        // this.refs.canvas.addEventListener('mousemove', (e) => {

        //     mouse.x = e.clientX - this.refs.canvas.getBoundingClientRect().left;
        //     mouse.y = e.clientY - this.refs.canvas.getBoundingClientRect().top;
        // })

        function rotate(velocity, angle) {
            const rotatedVelocities = {
                x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
                y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
            };

            return rotatedVelocities;
        }

        function resolveCollision(particle, otherParticle) {
            const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
            const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;
            const xDist = otherParticle.x - particle.x;
            const yDist = otherParticle.y - particle.y;
            particle.color = 'rgba(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() + ')';
            otherParticle.color = 'rgba(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() + ')';
            // Prevent accidental overlap of particles
            if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

                // Grab angle between the two colliding particles
                const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

                // Store mass in var for better readability in collision equation
                const m1 = particle.mass;
                const m2 = otherParticle.mass;

                // Velocity before equation
                const u1 = rotate(particle.velocity, angle);
                const u2 = rotate(otherParticle.velocity, angle);

                // Velocity after 1d collision equation
                const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
                const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

                // Final velocity after rotating axis back to original location
                const vFinal1 = rotate(v1, -angle);
                const vFinal2 = rotate(v2, -angle);

                // Swap particle velocities for realistic bounce effect
                particle.velocity.x = vFinal1.x;
                particle.velocity.y = vFinal1.y;

                otherParticle.velocity.x = vFinal2.x;
                otherParticle.velocity.y = vFinal2.y;
            }
        }



        function Circle(x, y, radius) {
            this.x = x;
            this.y = y;
            this.velocity = {
                x: (Math.random() - 0.5) * 3,
                y: (Math.random() - 0.5) * 3
            }
            this.radius = radius;
            this.friction = 0.4;
            this.mass = 1;
            this.color = 'rgba(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() + ')';

            this.draw = () => {
                ctx.beginPath()
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false)
                ctx.fill();
            }

            this.update = (arr) => {
                this.x += this.velocity.x;
                this.y += this.velocity.y;

                //  bounce from the sides
                if (this.x + this.radius + this.velocity.x > window.innerWidth / 100 * 98 || this.x - this.radius < 0) {
                    this.velocity.x = -this.velocity.x;
                }

                // bounce from the top/bottom
                if (this.y + this.radius + this.velocity.y > window.innerHeight/ 100 * 98 || this.y - this.radius < 0) {
                    this.velocity.y = -this.velocity.y;
                } else {
                    //this.velocity.y += 1;            //gravity
                }
                //collision
                for (let i = 0; i < arr.length; i++) {
                    if (this === arr[i]) {
                        continue;
                    }
                    if (distance(this.x, this.y, arr[i].x, arr[i].y) - this.radius * 2 < 0) {

                        resolveCollision(this, arr[i])

                    }
                }

                //hover effect
                // if (this.radius < 50 && mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                //     this.color = 'rgba(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() + ')';
                // }
                // else if(this.radius >100){
                //   this.radius-=1;
                // }

                //slows down the ball if it fall on the ground
                if (Math.floor(this.y) === Math.floor(window.innerHeight / 100 * 98 - this.radius)) {
                    if (Math.round(this.velocity.x) === 0) {
                        this.velocity.x = 0;
                    }
                    if (this.velocity.x > 0) {
                        this.velocity.x -= 0.1;
                    } else if (this.velocity.x < 0) {
                        this.velocity.x += 0.1;
                    }
                }
                this.draw()
            }
        }
        let arr = [];

        function distance(x1, y1, x2, y2) {
            let xDist = x2 - x1;
            let yDist = y2 - y1;
            return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        }


        for (let i = 0; i < this.state.amount; i++) {
            let radius = 30;
            let x = Math.random() * ((window.innerWidth / 100 * 98 - radius) - (radius * 2)) + (radius * 2); //Math.random() * (10 - 9) + 9
            let y = Math.random() * ((window.innerHeight/ 100 * 98 - radius) - (radius * 2)) + (radius * 2);
            if (i !== 0) {
                for (let j = 0; j < arr.length; j++) {
                    if (distance(x, y, arr[j].x, arr[j].y) - radius * 2 < 0) {
                        x = Math.random() * ((window.innerWidth / 100 * 98 - radius) - (radius * 2)) + (radius * 2); //Math.random() * (10 - 9) + 9
                        y = Math.random() * ((window.innerHeight / 100 * 98- radius) - (radius * 2)) + (radius * 2);
                        j = -1;
                    }
                }
            }
            arr.push(new Circle(x, y, radius));
        }
        let animation = () => {
            requestAnimationFrame(animation);
            this.ctx.clearRect(0, 0, window.innerWidth / 100 * 98, window.innerHeight/ 100 * 98)
            for (let i = 0; i < arr.length; i++) {
                arr[i].update(arr)
            }
        }
        animation()
    }

    
    onAmountChange = (e, index, value) => {
        this.setState({ amount: value }, () => this.init());
    }
    onColorChange = (e, index, value) => {
        this.setState({ color: value });
    }
    render() {
        return (
            <div>
            <Menu />
              <canvas ref="canvas" />
            </div>


        );
    }
}

export default Works;