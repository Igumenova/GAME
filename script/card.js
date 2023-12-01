import { createSvg } from "./createSvg.js";
export class Card {
    constructor(name, amount, iconName) {
        this.name = name;
        this.amount = amount;
        this.iconName = iconName;
        this.createCard();
    }

    createCard() {
        const app = document.getElementById("app");

        this.card = document.createElement("div");
        this.card.classList.add("card");

        const leftSection = document.createElement("div");
        leftSection.classList.add("card__left-section");

        const icon = createSvg("storage.svg", "storage");
        icon.classList.add("card-icon");

        const cardName = document.createElement("p");
        cardName.classList.add("card-name");
        cardName.textContent = this.name;

        leftSection.appendChild(icon);
        leftSection.appendChild(cardName);

        const rightSection = document.createElement("div");
        rightSection.classList.add("card__right-section");

        const cardAmount = document.createElement("p");
        cardAmount.classList.add("card-amount");
        cardAmount.textContent = this.amount;

        const cardButton = document.createElement("button");
        cardButton.classList.add("card-button");
        const Buttonicon = createSvg("greenPlus.svg", "greenPlus");
        Buttonicon.classList.add("card-icon");
        cardButton.appendChild(Buttonicon);
        cardButton.addEventListener("click", () => this.incrementAmount());

        rightSection.appendChild(cardAmount);
        rightSection.appendChild(cardButton);

        this.card.appendChild(leftSection);
        this.card.appendChild(rightSection);
    }

    getCard() {
        return this.card;
    }

    incrementAmount() {
        this.amount++;
        document.querySelector(".card-amount").textContent = this.amount;
    }
}
