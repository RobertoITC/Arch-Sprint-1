/* Factory Method is a creational design pattern that provides an
interface for creating objects in a superclass, but allows subclasses
to alter the type of objects that will be created.
*/


import {MessageSender} from "../senders/MessageSender";
import {SimpleTask} from "../tasks/SimpleTask";
import {CompositeTask} from "../tasks/CompositeTask";

export class TaskFactory {
    static createTask(name: string, estimatedHours: number, sender: MessageSender): any {
        if(estimatedHours > 4){
            console.log("Creating a Composite Task");
            const compositeTask = new CompositeTask(name, sender, estimatedHours);
            for(let i = 0; i < estimatedHours/4; i++){
                compositeTask.addSubTask(new SimpleTask(`${name} - Subtask ${i+1}`, sender, 4));
            }
            return compositeTask;


        }else{
            return new SimpleTask(name, sender, estimatedHours);
        }
    }
}