interface NotificationChannel {
    send(recipient: string, message: string): Promise<boolean>;
}

class EmailChannel implements NotificationChannel {
    async send(recipient: string, message: string): Promise<boolean> {
        console.log(`Sent email to ${recipient}: "${message}"`);
        return true;
    }
}

class SMSChannel implements NotificationChannel {
    async send(recipient: string, message: string): Promise<boolean> {
        console.log(`Sent sms to ${recipient}: "${message}"`);
        return true;
    }
}

class PushChannel implements NotificationChannel {
    async send(recipient: string, message: string): Promise<boolean> {
        console.log(`Sent push notification to ${recipient}: "${message}"`);
        return true;
    }
}

class NotificationService {
    constructor(
        private readonly channels: NotificationChannel[]
    ) {}

    async notifyAll(recipient: string, message: string): Promise<boolean[]> {
        const promises = this.channels.map(channel => 
            channel.send(recipient, message)
        );
        return Promise.all(promises);
    }
}

// Usage
const notificationService = new NotificationService([
    new EmailChannel(),
    new SMSChannel(),
    new PushChannel()
]);

notificationService.notifyAll("ab12", "hi i am in hurry");