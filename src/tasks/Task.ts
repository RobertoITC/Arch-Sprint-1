/* Bridge is a structural design pattern that
lets you split a large class or a set of closely related classes
into two separate hierarchies—abstraction
 and implementation—which can be developed independently of each other.
 */

import {MessageSender} from "../senders/MessageSender";

export abstract class Task {
    protected sender: MessageSender;
    protected name: string;
    protected estimatedHours: number;

    constructor(name: string, sender: MessageSender, estimatedHours: number) {
        this.name = name;
        this.sender = sender;
        this.estimatedHours = estimatedHours;
    }

    abstract complete(realHours: number): void;


}