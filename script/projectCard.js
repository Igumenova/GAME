import { createSvg } from "./createSvg.js";
export class ProjectCard {
    constructor(name, percent, days, fileSvg) {
        this.name = name;
        this.percent = percent;
        this.days = days;
        this.fileSvg = fileSvg;
        this.createProjectCard();
    }

    createProjectCard() {
        this.card = document.createElement("div");
        this.card.className = "card-project";

        const icon = createSvg(`${this.fileSvg}.svg`, this.fileSvg);
        icon.classList.add("img-project");

        const infoElement = document.createElement("div");
        infoElement.className = "card-project__info";

        const nameElement = document.createElement("div");
        nameElement.className = "card-project__name";
        nameElement.textContent = this.name;

        const readinessElement = document.createElement("div");
        readinessElement.className = "card-project__readiness";

        const percentElement = document.createElement("div");
        percentElement.className = "card-project__percent";
        percentElement.textContent = `Завершена на ${this.percent}%`;

        const daysElement = document.createElement("div");
        daysElement.className = "card-project__days";
        daysElement.textContent = `Осталось: ${this.days} дней`;

        readinessElement.appendChild(percentElement);
        readinessElement.appendChild(daysElement);

        infoElement.appendChild(nameElement);
        infoElement.appendChild(readinessElement);

        this.card.appendChild(icon);
        this.card.appendChild(infoElement);
    }
    getProjectCard() {
        return this.card;
    }
    changeDays(newDays) {
        this.days = newDays;
        this.card.querySelector(
            ".card-project__days"
        ).textContent = `Осталось ${this.days} дней`;
    }
    changePercent(newPecent) {
        this.percent = newPecent;
        this.card.querySelector(
            ".card-project__percent"
        ).textContent = `Завершена на ${this.percent}%`;
    }
}
