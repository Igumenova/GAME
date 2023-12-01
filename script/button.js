export class Button {
    constructor(text, style) {
        this.text = text;
        this.style = style;
        this.createButton();
    }

    createButton() {
        this.button = document.createElement("button");
        this.button.textContent = this.text;
        this.button.className = `button ${this.style}`;
        this.button.type = "button";
    }

    getButton() {
        return this.button;
    }

    setText(newText) {
        this.text = newText;
        this.button.textContent = this.text;
    }

    setStyle(newStyle) {
        this.style = newStyle;
        this.button.className = `btn ${this.style}`;
    }
}
