class YourBlock extends Block {
    constructor(x, y, size, color1, color2) {
        super(x, y, size);
        this.color1 = color1;
        this.color2 = color2;
    }

    draw() {
        // Your custom drawing code here
        fill(this.color1);
        rect(this.x, this.y, this.size / 2, this.size / 2);
        fill(this.color2);
        rect(this.x + this.size / 2, this.y, this.size / 2, this.size / 2);
        // Add more shapes as needed
    }
}
