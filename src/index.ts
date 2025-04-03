import {TelegramSender} from "./senders/TelegramSender";
import {Database} from "./database/Database";
import {TaskFactory} from "./factories/TaskFactory";
import {SlackSender} from "./senders/SlackSender";
import {WhatsAppSender} from "./senders/WhatsAppSender";

const senderTelegram = new TelegramSender();
const senderSlack = new SlackSender();
const senderWhatsApp = new WhatsAppSender();
const db = Database.getInstance();

const task1 = TaskFactory.createTask(
    "Implementar página de Tasks por usuario",
    4,
    senderTelegram
);

const task2 = TaskFactory.createTask(
    "Implementar página de Tasks por equipo",
    10,
    senderSlack
);

const task3 = TaskFactory.createTask(
    "Implementar página de Tasks por proyecto",
    8,
    senderWhatsApp
);

db.addTask(task1);
db.addTask(task2);
db.addTask(task3);

task1?.complete(5);
task2?.complete(12);
task3?.complete(10);

console.log("Tareas en la base de datos:", db.getTask());
