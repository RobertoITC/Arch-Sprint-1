/*Composite is a structural design pattern that
lets you compose objects into tree structures and then
 work with these structures as if they were individual objects.
*/


import {Task} from "./Task";


export class CompositeTask extends Task{
    private subTasks: Task[] = [];

    addSubTask(task: Task) {
        this.subTasks.push(task);
    }

    complete(realHours:number){
        console.log(`Composite Task ${this.name} completed in ${realHours} hours. Estimated: ${this.estimatedHours} hours.`);
        this.subTasks.forEach(task => task.complete(realHours/ this.subTasks.length))

    }

}