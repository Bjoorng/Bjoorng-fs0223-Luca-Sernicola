"use strict";
class SmartphoneClass {
    constructor(credit, calls, callCost) {
        this.credit = 0;
        this.calls = 0;
        this.callCost = 0.20;
        this.callMemory = [];
        this.credit = credit;
        this.calls = calls;
        this.callCost = callCost;
        this.callMemory = [];
    }
    recharge(euros) {
        this.credit += euros;
    }
    number404() {
        return `You still have ${this.credit.toFixed(2)}€ left.`;
    }
    getNumberOfCalls() {
        return this.calls;
    }
    callTime(minutes) {
        const callPrice = minutes * this.callCost;
        let callDate = new Date();
        let callMonth = callDate.getMonth() + 1;
        let callDay = callDate.getDate();
        let callHour = callDate.getHours();
        let callMinute = callDate.getMinutes();
        if (callPrice <= this.credit) {
            this.credit -= callPrice;
            this.calls++;
            let newCall = {
                id: this.calls,
                duration: minutes,
                date: `${callMonth}/${callDay}/${callHour}:${callMinute}`,
                getCalls: function () {
                    throw new Error("Function not implemented.");
                },
                findYourCall: function () {
                    throw new Error("Function not implemented.");
                }
            };
            this.callMemory.push(newCall);
            console.log(`This call lasted: ${minutes} minutes`);
        }
        else {
            console.log(`Sorry, your credit is not enough to make the call.`);
        }
    }
    getCalls() {
        this.callMemory.forEach(call => {
            console.log(`${call.date}. The call lasted: ${call.duration} minutes and it costed: ${call.duration * this.callCost}€`);
        });
    }
    findYourCall(insertDate) {
        let date = new Date(insertDate);
        this.callMemory.forEach(element => {
            if (new Date(element.date).getDate() == date.getDate()) {
                console.log(`The call you're looking for is: ${element.id}, ${element.duration}, ${element.date}`);
            }
            else {
                console.log("Couldn't find any calls matching the date you were looking for.");
            }
        });
    }
    emptyCalls() {
        this.calls = 0;
        console.log(`No calls left.`);
    }
}
let smartphone = new SmartphoneClass(0, 0, 0.20);
console.log(smartphone);
console.log(`You've made: ${smartphone.calls} calls`);
smartphone.recharge(30);
smartphone.recharge(15);
smartphone.number404();
console.log(smartphone.number404());
smartphone.callTime(10);
smartphone.callTime(8);
smartphone.callTime(18);
smartphone.callTime(18);
console.log(`You've made: ${smartphone.calls} calls`);
console.log(smartphone.number404());
smartphone.getCalls();
smartphone.findYourCall('May 26 2023 15:13');
smartphone.emptyCalls();
console.log(`You've made: ${smartphone.calls} calls`);
let smartphone2 = new SmartphoneClass(50, 2, 0.20);
console.log(smartphone2);
let smartphone3 = new SmartphoneClass(35, 8, 0.20);
console.log(smartphone3);
//# sourceMappingURL=script.js.map