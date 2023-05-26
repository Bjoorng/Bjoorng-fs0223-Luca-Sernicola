
interface Smartphone {
    credit:number;
    calls:number;
    callCost:number;

    recharge(euros:number):void;
    number404():string;
    getNumberOfCalls():number;
    callTime(minutes:number):void;
    emptyCalls():void;
}

interface outgoingCall {
    id:number;
    duration:number;
    date:string;

    getCalls():void;
    findYourCall():void;
}

class SmartphoneClass implements Smartphone {

    credit:number = 0;
    calls:number = 0;
    callCost:number = 0.20;
    callMemory:outgoingCall[] = [];

    constructor(credit:number, calls:number, callCost:number,){
        this.credit = credit;
        this.calls = calls;
        this.callCost = callCost;
        this.callMemory = [];
    }

    recharge(euros:number):void {
        this.credit += euros;
    }
    number404():string {
        return `You still have ${this.credit.toFixed(2)}€ left.`;
    }
    getNumberOfCalls():number {
        return this.calls;
    }
    callTime(minutes:number):void {
        const callPrice = minutes * this.callCost;
        let callDate = new Date();
        let callMonth = callDate.getMonth() + 1;
        let callDay = callDate.getDate();
        let callHour = callDate.getHours();
        let callMinute = callDate.getMinutes();
        if (callPrice <= this.credit) {
            this.credit -= callPrice;
            this.calls++;
            let newCall:outgoingCall = {
                id: this.calls,
                duration: minutes,
                date: `${callMonth}/${callDay}/${callHour}:${callMinute}`,
                getCalls: function (): void {
                    throw new Error("Function not implemented.");
                },
                findYourCall: function (): void {
                    throw new Error("Function not implemented.");
                }
            }
            this.callMemory.push(newCall);
            console.log(`This call lasted: ${minutes} minutes`);
        }else{
            console.log(`Sorry, your credit is not enough to make the call.`);
        }
    }
    getCalls():void {
        this.callMemory.forEach(call => {
            console.log(`${call.date}. The call lasted: ${call.duration} minutes and it costed: ${call.duration * this.callCost}€`);
        })
    }
    findYourCall(insertDate:string):void {
        let date = new Date(insertDate);
        this.callMemory.forEach(element => {
        if (new Date(element.date).getDate() == date.getDate()){
            console.log(`The call you're looking for is: ${element.id}, ${element.duration}, ${element.date}`);
        }else{
            console.log("Couldn't find any calls matching the date you were looking for.");
        }
    });
    }
    emptyCalls(): void {
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
