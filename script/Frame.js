import { Button } from "./button.js";
import { createSvg } from "./createSvg.js";

export class Frame {
    constructor(
        frameType,
        title,
        message,
        buttonText,
        question,
        number,
        imageSrc
    ) {
        this.frameType = frameType;
        this.title = title;
        this.message = message;
        this.buttonText = buttonText;
        this.question = question;
        this.imageSrc = imageSrc;
        this.number = number;
        this.create();
    }

    create() {
        if (this.frameType === "notification") {
            this.createNotification();
        }
    }

    createNotification() {
        this.frame = document.createElement("div");
        this.frame.className = `${this.frameType}-frame`;
        const icon = createSvg("notification.svg", "notification");
        icon.classList.add("notification-frame__icon");

        const contentElement = document.createElement("div");
        contentElement.className = "notification";

        const titleElement = document.createElement("h3");
        titleElement.textContent = this.title;

        const messageElement = document.createElement("p");
        messageElement.textContent = this.message;

        contentElement.appendChild(titleElement);
        contentElement.appendChild(messageElement);

        const buttonElement = new Button("buttonText", "orange");
        contentElement.appendChild(buttonElement.getButton());

        this.frame.appendChild(icon);

        this.frame.appendChild(contentElement);
    }
    getFrame() {
        return this.frame;
    }
}
