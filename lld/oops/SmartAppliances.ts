// Task 4: Abstraction & Interface Segregation (Smart Home Devices)
// Goal: Interface Segregation Principle (ISP) — ensure classes only implement methods they actually use.

// Problem Statement: Design interfaces for smart home devices without forcing non-applicable features on basic devices.

// Requirements:

// Instead of one monolithic SmartDevice interface, create smaller interfaces: Switchable (turnOn(), turnOff()), Dimmable (setBrightness(level: number)), and TemperatureControllable (setTemperature(temp: number)).

// Implement a SmartBulb class that implements Switchable and Dimmable.

// Implement a Thermostat class that implements Switchable and TemperatureControllable.

// Create a HubController class with a function turnOffEverything(devices: Switchable[]) to show how abstraction allows treating different physical devices uniformly.

interface Switchable {
    turnOn(): boolean;
    turnOff(): boolean;
}

interface Dimmable {
    setBrightness(level: number): boolean;
}

interface TemperatureControllable {
    setTemperature(temp: number): boolean;
}

class SmartBulb implements Switchable, Dimmable {
    private isOn: boolean = false;
    private brightness: number = 100;

    turnOn(): boolean {
        this.isOn = true;
        console.log("SmartBulb turned ON");
        return this.isOn;
    }

    turnOff(): boolean {
        this.isOn = false;
        console.log("SmartBulb turned OFF");
        return this.isOn;
    }

    setBrightness(level: number): boolean {
        if (level < 0 || level > 100) {
            throw new Error("Brightness level must be between 0 and 100.");
        }
        this.brightness = level;
        console.log(`SmartBulb brightness set to ${this.brightness}%`);
        return true;
    }
}

class Thermostat implements Switchable, TemperatureControllable {
    private isOn: boolean = false;
    private temperature: number = 22; // Default Celsius

    turnOn(): boolean {
        this.isOn = true;
        console.log("Thermostat turned ON");
        return this.isOn;
    }

    turnOff(): boolean {
        this.isOn = false;
        console.log("Thermostat turned OFF");
        return this.isOn;
    }

    setTemperature(temp: number): boolean {
        if (temp < 10 || temp > 35) {
            throw new Error("Temperature out of safe operating range (10-35°C).");
        }
        this.temperature = temp;
        console.log(`Thermostat temperature set to ${this.temperature}°C`);
        return true;
    }
}

class HubController {
    turnOffEverything(devices: Switchable[]): void {
        console.log("--- Executing Shutdown Command ---");
        devices.forEach(device => device.turnOff());
    }
}

// Usage
const bulb = new SmartBulb();
const thermostat = new Thermostat();

bulb.turnOn();
thermostat.turnOn();

const hub = new HubController();
hub.turnOffEverything([bulb, thermostat]);