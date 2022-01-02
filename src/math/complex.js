import {
    Float
} from "./float.js";


class Complex {
    constructor(real, img) {
        this.real = Float.round(real);
        this.img = Float.round(img);
    }

    add() {
        return new Complex(this.real + other.real, this.img + other.img);
    }

    sub() {
        return new Complex(this.real - other.real, this.img - other.img);
    }

    mul() {
        return new Complex(this.real * other.real - this.img * other.img, this.real * other.img + this.img * other.real);
    }

    toString() {
        if (this.img < 0) {
            return this.real.toString() + " - i * " + Float.abs(this.img).toString();
        }
        else {
            return this.real.toString() + " + i * " + Float.abs(this.img).toString();
        }
    }
}


export {
    Complex
}
