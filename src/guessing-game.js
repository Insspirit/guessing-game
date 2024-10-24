// class GuessingGame {

//     /*Конструктор и свойства класса. Когда ты создаёшь новый класс, 
//     внутри него можно определить специальные переменные — свойства, 
//     которые будут доступны для всех методов этого класса.*/ 
//     constructor() { // это специальный метод, который вызывается, когда ты создаёшь новый объект этого класса
//         //Использование this позволяет сохранить данные внутри объекта
//         this.min = 0 // создаём переменную min и устанавливаем её в 0
//         this.max = 0 // создаём переменную max и устанавливаем её в 0
//         this.currentGuess = 0 // создаём переменную для хранения текущего предположения
//     }

//     /*Метод setRange(min, max). Этот метод устанавливает диапазон чисел, в котором игра будет угадывать.*/
//     setRange(min, max) {
//         this.min = min // сохраняем переданный аргумент min в свойство объекта min
//         this.max = max // сохраняем переданный аргумент max в свойство объекта max
//     }
    
//     /*Метод guess(). Этот метод будет возвращать текущую "догадку". Он выбирает число посередине между min и max.*/
//     guess() {
//     this.currentGuess = Math.floor((this.min + this.max) / 2); // находим середину диапазона и округляем вниз
//     return this.currentGuess; // возвращаем текущую догадку
//     // Проверяем, что min меньше или равен max
//     }

//     /*Метод lower(). Этот метод вызывается, если наша "догадка" (currentGuess)
//     оказалась больше загаданного числа. 
//     Если догадка больше, значит, загаданное число находится левее по диапазону, и мы должны сдвинуть max*/
//     lower() {
//     this.max = this.currentGuess - 1; // сдвигаем верхнюю границу на один меньше текущей догадки
//     }

//     /*Метод greater(). Этот метод вызывается, если наша догадка оказалась меньше загаданного числа. 
//     Если догадка меньше, значит, загаданное число находится правее по диапазону, и мы должны сдвинуть min.*/
//     greater() {
//     this.min = this.currentGuess + 1; // сдвигаем нижнюю границу на один больше текущей догадки
//     }
// }

// module.exports = GuessingGame;
class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;  
    }

    guess() {
        this.num = Math.ceil(this.min + this.max) / 2;
        this.num = Math.ceil((this.min + this.max) / 2);
        return this.num;
    }

    lower() {
        this.max =  this.num;
    }

    greater() {
        this.min = this.num;
    }
}

module.exports = GuessingGame;