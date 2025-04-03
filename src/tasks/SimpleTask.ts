import { Task } from "./Task";

export class SimpleTask extends Task{
    complete(realHours: number) {
        console.log(`Task ${this.name} completed in ${realHours} hours. Estimated: ${this.estimatedHours} hours.`);
        this.sender.sendMessage(`Task ${this.name} completed in ${realHours} hours. Estimated: ${this.estimatedHours} hours.`);
    }

}