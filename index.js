

// 1 task Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]), и методом .code() (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP», «Oleg is coding on Java»). Метод code должен храниться в прототипе класса. Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида «Hello my name is Oleg»

// class Programmer {
//     constructor(name, stack) {
//         this.name = name;
//         this.stack = stack;
        
//     }
//     code () {
//           this.stack.forEach((codingLanguage) =>
//            console.log((`${this.name} is coding on ${codingLanguage}`)))
//     };

//     toString() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// const pr = new Programmer ('John', ["PHP"]);
// pr.toString();


// 2. Создать массив из 10 случайных инстансов Programmer, и отфильтровать их с помощью функции getSeniorDeveloper так, чтобы в результирующий массив попали только те Programmer, у которы длина массива stack больше 4.
// class Programmer {
//         constructor(name, stack) {
//             this.name = name;
//             this.stack = stack;
            
//         }
//         getSeniorDeveloper() {
        
// return this.stack.length > 4;
//         }
//     }

// const programmers = [
// new Programmer ('John', ['Java', 'Junior']),
// new Programmer ('Michael', ['Java', 'Javascript', 'PHP', 'Python', 'Senior']),
// new Programmer ('Eva', ['Java', 'Python', 'Middle']),
// new Programmer ('Lora', ['SQL', 'Python', 'Junior', 'Senior', 'PHP']),
// new Programmer ('Jimmy', ['Junior', 'Senior', 'Java', 'Javascript', 'PHP']),
// new Programmer ('Adrian', ['Java']),
// new Programmer ('Eleonora', ['PHP', 'Python']),
// new Programmer ('Ann', ['PHP', 'Java', 'Javascript'])
// ];

// const result = programmers.filter(Programmer => Programmer.getSeniorDeveloper());

// console.log(result);


// 4. Создать конструктор Car, который принимает параметры model, color, price. Конструктор должен возвращать объект в котором присутствуют вышеназванные поля со значениями. Каждый представитель класса Car должен обладать методом run() который выводит сообщение вида : MODEL + “ ” + COLOR + ” is running”.
// class Car {
//     constructor(model, color, price){
//     this.model = model;
//     this.color =  color;
//     this. price =  price;
//     }

//     run() {
//         console.log(`${this.model} ${this.color} is running `)
//     }
// };

// const car = new Car ('Audi', 'red');
// car.run();


// 5. Создать конструктор Book, с помощью этого конструктора создать массив из 8 книг (объектов). Каждая книга должна представлять из себя объект, в котором есть три поля: author, bookName, pageAmount. Создать функцию getBiggerBook(), которая принимает массив книг и возвращает ОДНУ книгу с наибольшим количеством страниц

// class Book {
//         constructor(author, bookName, pageAmount) {
//         this.author = author;
//         this.bookName = bookName;
//         this.pageAmount = pageAmount;
//     }
// static getBiggerBook(books) {
//     const maxPageAmount = Math.max(...books.map(book => book.pageAmount));
//     return books.filter(book => book.pageAmount === maxPageAmount);
//   }

// }


// const books = [
//     new Book ('Author1', 'Bookname1', 300),
//     new Book ('Author2', 'Bookname2', 1000),
//     new Book ('Author3', 'Bookname3', 5000) 
//     ];

//     const result = Book.getBiggerBook(books);
// console.log(result);
   