import { Button } from "./button.js";
import { Card } from "./card.js";
import { ProjectCard } from "./projectCard.js";
import { Frame } from "./Frame.js";

const card = new Card("asd", "15000", "storage");
const pCard = new ProjectCard("Hospital", 90, 30, "hospital");
const btn1 = new Button("asd", "answer red");
const btn2 = new Button("asd", "answer green");
const btn3 = new Button("asd", "answer grey", document.body);
const btn4 = new Button("asd");
const fr = new Frame(
    "notification",
    "Уведомление",
    "asdasdasdasd",
    "Продолжить"
);
const fr2 = new Frame(
    "form",
    "Вопрос",
    "asdasdasdasd",
    "Продолжить",
    "asdasd",
    "1 из 10",
    "./img/jpg/1.jpg"
);

pCard.changeDays(22);

document.body.appendChild(pCard.getProjectCard());
document.body.appendChild(card.getCard());
document.body.appendChild(btn1.getButton());
document.body.appendChild(btn2.getButton());
document.body.appendChild(btn3.getButton());
document.body.appendChild(btn4.getButton());
document.body.appendChild(fr.getFrame());
btn1.setText("asdasd");
