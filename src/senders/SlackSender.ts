import {MessageSender} from "./MessageSender";

export class SlackSender implements MessageSender {
    sendMessage(content: string): void {
        console.log(`Sending message via Slack: ${content}`);
    }
}