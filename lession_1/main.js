// alert('Hi kHANHS')
// var fullName = 'Hong Khanh';
// console.log(fullName);
// setInterval(function(){
//     console.log('akahnh' + Math.random())
// }, 1000)
// var a=1;
// var b=2;
// if (a<0 || b<0)
// {
//     alert('dung')
// }
// var number = 2;

// console.log(number++); // 1
// console.log(number); // 2

// console.log(number++); // 2
// console.log(number); // 3
// var name = 'Hong';
// name += 'khanh'
// console.log(name);
// var a=1;
// var b=2;
// var isSucess = a> b;
// console.log(isSucess)
// var fullName = 'Hong \'Khanh';
// console.log(fullName)
// var id = Symbol('id');
// var id2 = Symbol('id');
// console.log(id==id2)
// var myArray = [
//     'khanh',
//     'honhf'
// ];
// console.log(myArray);
// console.log(typeof myArray)
// console.log(!'hi')
// var result = 'a' && NaN &&'b' && null;
// console.log(result)
// var myString = '';
// function writeLog() {
//     for ( var param of arguments) {
//         myString += `${param} - `
//     }
//     console.log(myString)
// }
// writeLog('kHANH1','KHANHS2')
// var isConfirm = confirm('HongKhanhne?');
// console.log(isConfirm)
// function nhan(a, b) {
//     return a.toString() + b.toString()
// }
// var result = nhan(2,3)
// console.log(result)



// function showMessage() {
//     console.log('m1');
// }
// var showMessage2 = function() {
//     console.log('m2');
// }
// showMessage2();
// var fullName = 'Hong Khanh \'ne\''
// console.log(fullName.length);
// var firstName = 'Hong';
// var lastName = 'Khanh';
// console.log(`${firstName} ${lastName} ne`)
// var fullName = '       Hong Khanh Do Thi';
// console.log(fullName.trim())
// var languages = 'java';
// console.log(languages.toUpperCase)
// var languages = 'java,php,python';
// console.log(languages.split(','))
// var languages =[
//     'java',
//     'php',
//     'python'
// ];
// console.log(languages.pop());
// console.log(languages)
// languages.splice(1, 0,'c#');
// console.log(languages)
// console.log(languages[])
// let numbers = [1, 2, 3, 4, 5];
// let lastElement = numbers[-1];
// console.log(lastElement)
// var myKey = 'email';
// var myInfo = {
//     name: 'kahnh',
//     age: 20,
//     getAge: function() {
//         return this.age
//     },
//     [myKey]: 'khanh@'
// };

//  console.log(myInfo[myKey])
// function User(firstName, lastName, email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.getName = function() {
//         return `${firstName} ${lastName}`;
//     }
// };
// User.prototype.class = '20t2';
// User.prototype.getClass = function() {
//     return this.class;
// }

// var author = new User('kHANH','DO','khanh@');
// var user = new User('an','nguyen','an@');

// author.title =" author ne"

// console.log(author);
// console.log(user.getClass())
// Làm bài tại đây
// function Student(firstName,lastName) {
//     this.getFullName = function() {
//         return `${firstName} ${lastName}`;
//     }
// };



// // Ví dụ khi sử dụng
// var student = new Student('Long', 'Bui');

// console.log(student.firstName);  // 'Long'
// console.log(student.lastName);  // 'Bui'
// console.log(student.getFullName());  // 'Long Bui'
// var date = new Date();

// var month = date.getMonth() + 1;

// console.log(month)
// console.log(Math.floor(Math.random()*10))
// var random = Math.floor(Math.random()*5);
// var bonus = [
//     '5 coin',
//     '10 coin',
//     '15 coin',
//     '20 coin',
// ]

// function getRandomItem(array) {
//     return array[Math.random()]
//  }
//  console.log(getRandomItem(bonus))
// if (random<50) {
//     console.log("thanh con")
// var course = {
//     name: 'java',
//     coin: 200
// }
// // if (course.coin > 0) {
// //     console.log(`${course.coin} coins` )
// // } else {
// //     console.log('frww')
// // }
// var result = course.coin > 0 ? `${course.coin} coins` : 'free'
// console.log(result)
// for (var i =1;i<10;i++) {
//     console.log(i)
// }
// function getRandNumbers(min, max, length) {
//     var array =[]
//     for (var i = 1; i <= length; i++) {
//         array.push(Math.floor(Math.random() * (max - min) + min));
//     }
//     return array;
// }
// console.log(getRandNumbers(2, 10,5))
// var numbers = [1,2,3];
// function getTotal(arr) {
//     total = 0;
//     for (i =0; i<arr.length;i++) {
//         total += arr[i];
//     }
//     return total
// }
// getTotal([1, 2, 3]) 
// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]
// function getTotal(arr) {
//     var arrLength = arr.length;
//     var total = 0;
//     for (var i=0;i<arrLength;i++ ) {
//         total = total + arr[i].price;
//     }
//     return total;
// }



// // Expected results:
// console.log(getTotal(orders)) // Output: 8700000
// var myInfo = {
//     name: 'Khanh',
//     age: 21
// };
// for (var key1 in myInfo) {
//     console.log(myInfo[key1])
// }
// // var myString = 'Khanh';
// // for (var key in myString) {
// //     console.log(myString[key])
// // }
// function run(object) {
//     result = [];
//     for (var key in object) {
//        result.push('Thuoc tinh'+ object[key])
//     }
//     return result
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// // Output:
// // [
// //     "Thuộc tính name có giá trị Nguyen Van A",
// //     "Thuộc tính age có giá trị 16"
// // ]
// function run(object) {
//     var result = [];
//         for (var key in object) {
//             result.push('Thuộc tính ' + key + ' có giá trị '+ object[key])
//         }
//         return result;
//     }
    
//     // Expected results:
//     console.log(run({ name: 'Nguyen Van A', age: 16 }));
//     // Output:
//     // [
//     //     "Thuộc tính name có giá trị Nguyen Van A",
//     //     "Thuộc tính age có giá trị 16"
//     // ]
// var languages = {
//     name: 'khanh',
//     age: 21
// }
// for (var value of Object.values(languages)) {
//     console.log(value)
// }
// for ( var i =1; i<10;i++) {
    
//     if (i%2===0) {
//        continue;
//     }
//     console.log(i);
// }
// var myArray = [
//     [1,2],
//     [2,3],
//     [3,4]
// ];
// for (var i=0; i<myArray.length;i++){
//     for( var j=0;j<myArray[i].length;j++)
//     {
//         console.log(myArray[i][j])
//     }
// }
// for(var i=1;i<50;i += 5){
//     console.log(i)
// }
// var arr = ['a','b','c','a','b','c','d']
// console.log(new Set(arr))
//3! = 3*2*1
// 2! = 2*1
// function giaiThua(number) {
//     if (number > 0) {
//         return (number * giaiThua(number-1));
//     }
//     return 1;
// };
// console.log(giaiThua(3));
var courses = [
    {
        id: 1,
        name: 'java',
        coin: 0
    },
    {
        id: 2,
        name: 'javascript',
        coin: 551
    },
    {
        id: 3,
        name: 'python',
        coin: 45
    },
    {
        id: 4,
        name: 'java',
        coin: 0
    },
];
// courses.forEach(function(course, index) {
//     console.log(index, course)
// })
// var isFree = courses.filter(function(course, index) {
//     console.log(index)
//     return course.name === 'java'
// })
// console.log(isFree)
// function courseHandle(course,index) {
//     return ` ${course.name}</h2>`
    
// }
// var newCourses = courses.map(courseHandle);
// console.log(newCourses.join(''))
// var i=0;
// function coinHandle(accumulator, currentValue, currentIndex, originArray) {
//     i++;
//     var totalCoin = accumulator + currentValue.coin;
//     console.table({
//         'Luot chay: ':i,
//         'bien tich tru: ':accumulator,
//         'coin: ':currentValue.coin,
//         'gia sau: ':totalCoin,
//     })
//     return totalCoin;
// }
// var totalCoinn = courses.reduce(coinHandle,0);
// console.log(totalCoinn)
// var depthArray = [1,2,[3,4],5,[6,7]];
// // console.log(depthArray)
// var flatArray = depthArray.reduce(function(ouput,depthItem) {
//     return ouput.concat(depthItem)
// },[])
// console.log(flatArray)
// function calculateRating(movies) {
//     const nolanMovies = movies.filter(function(movie) {
//         return movie.Director  === "Christopher Nolan"
//     });
//     const nolanMoviesCount = nolanMovies.length;
  
//     if (nolanMoviesCount === 0) {
//       return 0;
//     }
//     var totalRating = nolanMovies.reduce(function(acc, movie) {
//         return acc += parseFloat(movie.imdbRating)
//     },0);
   
//     const avgRating = totalRating / nolanMoviesCount;
//     return avgRating;
//   }
  
//   const watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
//   ];
  
//   console.log(calculateRating(watchList)); // Output: 8.675
// function arrToObj(arr) {
//     return arr.reduce(function(obj, current) {
//       obj[current[0]] = current[1];
//       console.log(current[0]);
//       console.log(current[1])
//       return obj;
//     }, {});
//   }
   
//   // Expected results:
//   var arr = [
//       ['name', 'Sơn Đặng'],
//       ['age', 18],
//   ];
//   console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
// Array.prototype.myMap = function(cb) {
//     var output = [];
//     for ( var i=0; i< this.length;++i) {
//         var result = cb(this[i],i);
//         output.push(result)

//     }
//     return output;
// }

// // Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]
// Array.prototype.myFilter = function(cb) {
//     var output = [];
//     for( var index in this) {
//         if(this.hasOwnProperty(index)) {
//             var result = cb(this[index],index, this);
//             if (result) {
//                 output.push();
//             }
//         }
//     }
//     return output;
// }



// // Expected results:

// const numbers = [1, 2, 3, 4];

// console.log(numbers.myFilter(function (number) {
//     return number % 2 === 0;
// })); Output: [2, 4]

// console.log(numbers.myFilter(function (number, index) {
//     return index % 2 === 0;
// })); Output: [1, 3]

// console.log(numbers.myFilter(function (number, index, array) {
//     return array.length % 2 === 0;
// })); Output: [1, 2, 3, 4]
// var headingNode = document.getElementById('heading');
// console.log(typeof headingNode)
// var nodeBox = document.querySelector('.box');
// console.log(nodeBox);
// console.log(nodeBox.getElementsByTagName('li'))
// var aElement = document.querySelector('a');
// aElement.title = 'HongKhanh'
// var abc = document.querySelector('.box');
// // abc.classList.add('gh','green')
// setInterval(()=>{
//     abc.classList.toggle('green')
// },1000)
// abc= document.getElementsByTagName
// var ulElement = document.querySelector('ul');
// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }
// ulElement.onclick = function(e) {
//     console.log(e.target)
// }

// function myFunction() {
//     console.log('Hello World!');
//   }
  
//   setInterval(myFunction, 0); // Thực hiện hàm myFunction() lặp lại sau mỗi 1 giây
// function hell(value, cb) {
//     cb(value);
// }

// // Không sử dụng Promise dẫn đến tạo ra callback hell 
// hell(1, function (valueFromA) {
//     hell(valueFromA + 1, function (valueFromB) {
//         hell(valueFromB + 1, function (valueFromC) {
//             hell(valueFromC + 1, function (valueFromD) {
//                 console.log(valueFromD + 1);
//             });
//         });
//     });
// });

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
// function notHell(value) {
//     return new Promise(function (resolve) {
//         resolve(value);
//     });
// }

// notHell(1)
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         console.log(value + 1);
//     });
// var promise1 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve([1]);
//     },2000);
// })
// var promise2 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve([2,3]);
//     },5000);
// })
// Promise.all([promise1,promise2])
//     .then(function(result) {
//         var result1 = result[0];
//         var result2 = result[1];
//         console.log(result1.concat(result2))
//     })

// let iscucuc  = false;
// if (true) {
//     let iscucuc = true
// }
// console.log(iscucuc)
// var x = 10;
// let y = 20;
// const z = 30;

// function myFunction() {
//   var x = 5;
//   let y = 15;
//   console.log(x); // 5
//   console.log(y); // 15
// }

// myFunction();
// console.log(x); // 10
// console.log(y); // ReferenceError: y is not defined
// console.log(z); // 30

// z = 40; // TypeError: Assignment to constant variable.
// const sum  = (a,b) => ([a,b]);
// console.log(sum(1,2))
// const person = {
//     name: "John",
//     age: 30,
//     address: {
//       city: "New York"
//     }
//   };
  
//   console.log(person.address.city); // New York
//   console.log(person.address.street); // TypeError: Cannot read property 'street' of undefined
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const tabs = $$(".tab-item");
// const panes = $$(".tab-pane");

// const tabActive = $(".tab-item.active");
// const line = $(".tabs .line");

// // SonDN fixed - Active size wrong size on first load.
// // Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
// requestIdleCallback(function () {
//   line.style.left = tabActive.offsetLeft + "px";
//   line.style.width = tabActive.offsetWidth + "px";
// });

// tabs.forEach((tab, index) => {
//   const pane = panes[index];

//   tab.onclick = function () {
//     $(".tab-item.active").classList.remove("active");
//     $(".tab-pane.active").classList.remove("active");

//     line.style.left = this.offsetLeft + "px";
//     line.style.width = this.offsetWidth + "px";

//     this.classList.add("active");
//     pane.classList.add("active");
//   };
// });
// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played
