// Task 2: Inheritance vs. Composition (Notification Service)
// Goal: Learn when to use class inheritance and when to use interface composition to avoid rigid class hierarchies.

// Problem Statement: Build a flexible notification dispatcher.

// Requirements:

// Define an interface NotificationChannel with a method send(recipient: string, message: string): Promise<boolean>.

// Create concrete implementations: EmailChannel, SMSChannel, and PushChannel.

// Create a NotificationService class that accepts an array/list of NotificationChannel instances via dependency injection (constructor).

// Add a notifyAll(recipient: string, message: string) method on NotificationService that iterates through all registered channels and dispatches the message.

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