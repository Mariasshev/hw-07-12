//  метод для проверки – это прошедшая дата или будущая (если
// прошедшая, то метод возвращает false; если будущая или текущая, то
// true);
//  метод для проверки – високосный год или нет;
//  метод, возвращающий следующую дату.
// Создать объект класса ExtendedDate и вывести на экран результаты
// работы новых методов.

class ExtendedDate extends Date {
    #_date = this.getDate();
    #_month = this.getMonth();
    #_year = this.getFullYear();

    showData() {
        document.write(`Current date: ${this.#_date}/${this.#_month}`);
    }
    isTheDatePast(date) 
    {
        let currentDate = this.#_date + this.#_month;

        date = date.split('/');
        date = Number(date[0]) + Number(date[1]);

        console.log(date, currentDate);
        
        return date > currentDate ? 1 : date < currentDate ? -1 : 0;
    }
    isALeapYear(year) {
        return year % 4 == 0 ? 1 : 0;
    }
    nextDate(date) {
        date = date.split('.');

        if (date[0] < 31)
            date[0]++;
        else {
            date[0] = 1;

            if (date[1] < 12)
                date[1]++;
            else
                date[1] = 1;
        }

        return date.join('.');
    }
}

let today = new Date();
let newDate = today;

let date = new ExtendedDate();
date.showData();

newDate.setDate(newDate.getDate() - 2);
newDate = newDate.getDate() + "/" + newDate.getMonth() + "/" + newDate.getFullYear();

let rez = date.isTheDatePast(newDate);
document.write(`<p>${newDate} - это ${rez == 1 ? "future" : 
rez == -1 ? "past" : "current"} date</p>`);

let year = 2023;
document.write(`<p>${year} - ${date.isALeapYear(year) == 1 ? "leap" : 
"not lea["} year</p>`);

document.write(`<p>${newDate} - next date: ${date.nextDate(newDate)}</p>`);



// --------------- 2 -------------------
// class Marker {
//     defColor = "#4f7аed";

//     constructor() {
//         this.colorMarker = this.defColor;
//         this.theAmountInkInMarker = 1.0;
//     }

//     print(line) {
//         if (this.colorMarker == undefined)
//             this.colorMarker = this.defColor;

//         document.write(`<p style="color: ${this.colorMarker};">`);
//         for (let i = 0; i < line.length; i++) {
//             if (line[i] != ' ' && i != 0)
//                 this.theAmountInkInMarker -= 0.1;

//             document.write(`<span style="opacity: ${(this.theAmountInkInMarker).toFixed(1)}">${line[i]}</span>`);
//         }
//         document.write(`</p>`);
//     }
// }

// class RefillMarker extends Marker {
//     constructor() {
//         super();
//     }
//     fillUp(color) {
//         this.colorMarker = color;
//         this.theAmountInkInMarker = 1.0;
//     }
// }

// let marker = new Marker();
// marker.print("Hello world");

// let refillMarker = new RefillMarker();
// refillMarker.fillUp();
// marker = refillMarker;
// marker.print("Hello world");

// refillMarker.fillUp("#0ddeb8");
// marker = refillMarker;
// marker.print("Hello world");
