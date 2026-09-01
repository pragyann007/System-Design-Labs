// Task 3: Polymorphism & Strategy Pattern (Payment Processing Platform)
// Goal: Handle dynamic behavior at runtime without massive if/else or switch statements.

// Problem Statement: Design a checkout system that supports multiple payment methods seamlessly.

// Requirements:

// Define an abstract class or interface PaymentStrategy with a method processPayment(amount: number): { success: boolean; transactionId: string }.

// Implement three strategies: CreditCardPayment, PayPalPayment, and CryptoPayment.

// Create a PaymentProcessor class with a method setStrategy(strategy: PaymentStrategy) and pay(amount: number).

// Demonstrate changing payment strategies dynamically at runtime for a single PaymentProcessor instance.

interface PaymentResult {
    success: boolean;
    transactionId: string;
}

interface PaymentStrategy {
    processPayment(amount: number): PaymentResult;
}

class CreditCardPayment implements PaymentStrategy {
    processPayment(amount: number): PaymentResult {
        console.log(`Processing $${amount} via Credit Card...`);
        return {
            success: true,
            transactionId: `cc_${Math.floor(Math.random() * 1000000)}`
        };
    }
}

class PayPalPayment implements PaymentStrategy {
    processPayment(amount: number): PaymentResult {
        console.log(`Processing $${amount} via PayPal...`);
        return {
            success: true,
            transactionId: `pp_${Math.floor(Math.random() * 1000000)}`
        };
    }
}

class CryptoPayment implements PaymentStrategy {
    processPayment(amount: number): PaymentResult {
        console.log(`Processing $${amount} via Crypto...`);
        return {
            success: true,
            transactionId: `cx_${Math.floor(Math.random() * 1000000)}`
        };
    }
}

class PaymentProcessor {
    constructor(private strategy?: PaymentStrategy) {}

    setStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    pay(amount: number): PaymentResult {
        if (!this.strategy) {
            throw new Error("Payment strategy not selected.");
        }
        return this.strategy.processPayment(amount);
    }
}

// Usage
const processor = new PaymentProcessor();

processor.setStrategy(new PayPalPayment());
const res1 = processor.pay(2000);
console.log(res1);

// Change strategy dynamically at runtime
processor.setStrategy(new CryptoPayment());
const res2 = processor.pay(500);
console.log(res2);