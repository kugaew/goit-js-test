'use strict';

/* ================4-1-48================= */

/* function makePizza() {
    return 'Your pizza is being prepared, please wait.';
}
// Change code below this line

const result = makePizza();
const pointer = makePizza;

console.log(result);
console.log(pointer); */

/* ================4-2-48================= */

/* function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
    return callback(pizzaName);
}

console.log(makeMessage('Neapolo', deliverPizza));
console.log(makeMessage('Hawai', makePizza)); */

/* ================4-3-48================= */

/* function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
}

makePizza('Royal Grand', function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza('Ultracheese', function eatPizza(pizzaName) {
    console.log(`Eating pizza ${pizzaName}`);
}); */

/* ================4-4-48================= */

/* const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, onSuccess, onError) {
        if (this.pizzas.includes(pizzaName)) {
            return onSuccess(pizzaName);
        }
        return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
    },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
    return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
console.log(pizzaPalace.order('Vienna', makePizza, onOrderError)); */

/* ================4-5-48================= */

/* function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line
  
  orderedItems.forEach(function (orderItems) {
    totalPrice += orderItems;
  });

  // Change code above this line
  return totalPrice;
}; */

/* ================4-6-48================= */

/* function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line

    numbers.forEach(function (number) {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });

    // Change code above this line
    return filteredNumbers;
} */

/* ================4-7-48================= */

/* function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line

    firstArray.forEach(function (checkNumber) {
        if (secondArray.includes(checkNumber)) {
            commonElements.push(checkNumber);
        }
    });

    return commonElements;
    // Change code above this line
} */

/* ================4-8-48================= */

// Change code below this line

/* const calculateTotalPrice = (quantity, pricePerItem) => {
  // Change code above this line
  return quantity * pricePerItem;
} */

/* ================4-9-48================= */

// Change code below this line
/* const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem; */

// Change code above this line

/* ================4-10-48================= */

// Change code below this line
/* const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach( item => { totalPrice += item; });

  return totalPrice;
} */
// Change code above this line

/* ================4-11-48================= */

// Change code below this line
/* const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach( number => { 
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
} */

/* ================4-12-48================= */

// Change code below this line
/* const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];

    firstArray.forEach(element => {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
    });

    // Change code above this line
    return commonElements;
}; */

/* ================4-13-48================= */

/* function changeEven(numbers, value) {
    // Change code below this line
    const newArrNumbers = [];

    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] % 2 === 0) {
            newArrNumbers.push(numbers[i] + value);
        } else {
            newArrNumbers.push(numbers[i]);
        }
    }

    return newArrNumbers;
    // Change code above this line
} */

/* ================4-14-48================= */

/* const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// Change code below this line
const planetsLengths = planets.map(planet => planet.length); */

/* ================4-15-48================= */

/* const books = [
    {
        title: 'The Last Kingdom',
        author: 'Bernard Cornwell',
        rating: 8.38,
    },
    {
        title: 'Beside Still Waters',
        author: 'Robert Sheckley',
        rating: 8.51,
    },
    {
        title: 'The Dream of a Ridiculous Man',
        author: 'Fyodor Dostoevsky',
        rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];
// Change code below this line

const titles = books.map(({ title }) => title); */

/* ================4-16-48================= */
/* const books = [
    {
        title: 'The Last Kingdom',
        author: 'Bernard Cornwell',
        genres: ['adventure', 'history'],
    },
    {
        title: 'Beside Still Waters',
        author: 'Robert Sheckley',
        genres: ['fiction'],
    },
    {
        title: 'Redder Than Blood',
        author: 'Tanith Lee',
        genres: ['horror', 'mysticism'],
    },
];
// Change code below this line

const genres = books.flatMap(book => book.genres); */
/* ================4-17-48================= */
// Change code below this line
/* const getUserNames = users => {
    
return users.map(user => user.name);
  }; */
// Change code above this line
/* ================4-18-48================= */
// Change code below this line
/* const getUserEmails = users => {
    
return users.map( user => user.email );
  }; */
// Change code above this line
/* ================4-19-48================= */
/* const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => !(number % 2));
const oddNumbers = numbers.filter(number => number % 2); */
/* ================4-20-48================= */
/* const books = [
    {
        title: 'The Last Kingdom',
        author: 'Bernard Cornwell',
        genres: ['adventure', 'history'],
    },
    {
        title: 'Beside Still Waters',
        author: 'Robert Sheckley',
        genres: ['fiction', 'mysticism'],
    },
    {
        title: 'Redder Than Blood',
        author: 'Tanith Lee',
        genres: ['horror', 'mysticism', 'adventure'],
    },
];
// Change code below this line
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genre, index, arr) => arr.indexOf(genre) === index); */
/* ================4-21-48================= */
/* const books = [
    {
        title: 'The Last Kingdom',
        author: 'Bernard Cornwell',
        rating: 8.38,
    },
    {
        title: 'Beside Still Waters',
        author: 'Robert Sheckley',
        rating: 8.51,
    },
    {
        title: 'The Dream of a Ridiculous Man',
        author: 'Fyodor Dostoevsky',
        rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';
// Change code below this line

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR); */
/* ================4-22-48================= */
// Change code below this line
/* const getUsersWithEyeColor = (users, color) => {
 
return users.filter(user => user.eyeColor === color)
}; */
// Change code above this line
/* ================4-23-48================= */
// Change code below this line
/* const getUsersWithAge = (users, minAge, maxAge) => {
 
return users.filter(user => user.age >= minAge && user.age <= maxAge)
}; */
// Change code above this line
/* ================4-24-48================= */
// Change code below this line
/* const getUsersWithFriend = (users, friendName) => {
   return users.filter(user => user.friends.includes(friendName))
}; */
// Change code above this line
/* ================4-25-48================= */
// Change code below this line
/* const getFriends = (users) => {
   return users.flatMap(user => user.friends).filter((friend, index, arr) => arr.indexOf(friend) === index)
}; */
// Change code above this line
/* ================4-26-48================= */
// Change code below this line
/* const getActiveUsers = users => {
    return users.filter(user => user.isActive);
}; */
// Change code above this line
/* ================4-27-48================= */
// Change code below this line
/* const getInactiveUsers = (users) => {
   return users.filter(user => !user.isActive)
}; */
// Change code above this line
/* ================4-28-48================= */
/* const books = [
    {
        title: 'The Last Kingdom',
        author: 'Bernard Cornwell',
        rating: 8.38,
    },
    {
        title: 'Beside Still Waters',
        author: 'Robert Sheckley',
        rating: 8.51,
    },
    {
        title: 'The Dream of a Ridiculous Man',
        author: 'Fyodor Dostoevsky',
        rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR); */
/* ================4-29-48================= */
// Change code below this line
/* const getUserWithEmail = (users, email) => {
   return users.find(user => user.email === email)
}; */
// Change code above this line
/* ================4-30-48================= */
/* const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(element => !(element%2));
const eachElementInFirstIsOdd = firstArray.every(element => element%2);

const eachElementInSecondIsEven = secondArray.every(element => !(element%2));;
const eachElementInSecondIsOdd = secondArray.every(element => element%2);;

const eachElementInThirdIsEven = thirdArray.every(element => !(element%2));;
const eachElementInThirdIsOdd = thirdArray.every(element => element%2);; */
/* ================4-31-48================= */
// Change code below this line
/* const isEveryUserActive = (users) => {
   return users.every(user => user.isActive)
}; */
// Change code above this line
/* ================4-32-48================= */
/* const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some(element => !(element % 2));
const anyElementInFirstIsOdd = firstArray.some(element => element % 2);

const anyElementInSecondIsEven = secondArray.some(element => !(element % 2));
const anyElementInSecondIsOdd = secondArray.some(element => element % 2);

const anyElementInThirdIsEven = thirdArray.some(element => !(element % 2));
const anyElementInThirdIsOdd = thirdArray.some(element => element % 2); */

/* ================4-33-48================= */
// Change code below this line
/* const isAnyUserActive = users => {
   return users.some(user => user.isActive)
}; */
// Change code above this line
/* ================4-34-48================= */
/* const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((totalTime, playTime) => totalTime + playTime, 0);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length; */
/* ================4-35-48================= */
/* const players = [
    { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
    { name: 'Poly', playtime: 469, gamesPlayed: 2 },
    { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
    { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((averageTimePerGame, player) => {
    return averageTimePerGame + player.playtime / player.gamesPlayed;
}, 0); */
/* ================4-36-48================= */
// Change code below this line
/* const calculateTotalBalance = users => {
   return users.reduce((totalBalance, user) => {return totalBalance + user.balance}, 0)
}; */
// Change code above this line
/* ================4-37-48================= */
// Change code below this line
/* const getTotalFriendCount = users => {
   return users.reduce((totalFriends, user) => {return totalFriends + user.friends.length}, 0)
}; */
// Change code above this line
/* ================4-38-48================= */
/* const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky'];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort(); */

/* ================4-39-48================= */
/* const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a); */
/* ================4-40-48================= */
/* const authors = [
    'Tanith Lee',
    'Bernard Cornwell',
    'Robert Sheckley',
    'Fyodor Dostoevsky',
    'Howard Lovecraft',
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a)); */
/* ================4-41-48================= */
/* const books = [
    {
        title: 'The Last Kingdom',
        author: 'Bernard Cornwell',
        rating: 8.38,
    },
    {
        title: 'Beside Still Waters',
        author: 'Robert Sheckley',
        rating: 8.51,
    },
    {
        title: 'The Dream of a Ridiculous Man',
        author: 'Fyodor Dostoevsky',
        rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
]; */
// Change code below this line

/* const sortedByAuthorName = [...books].sort((currentBook, nextBook) =>
    currentBook.author.localeCompare(nextBook.author)
);

const sortedByReversedAuthorName = [...books].sort((currentBook, nextBook) =>
    nextBook.author.localeCompare(currentBook.author)
);

const sortedByAscendingRating = [...books].sort(
    (currentBook, nextBook) => currentBook.rating - nextBook.rating
);

const sortedByDescentingRating = [...books].sort(
    (currentBook, nextBook) => nextBook.rating - currentBook.rating
); */
/* ================4-42-48================= */
// Change code below this line
/* const sortByAscendingBalance = users => {
   return users.sort((currentUser, nextUser) => currentUser.balance - nextUser.balance)
}; */
// Change code above this line
/* ================4-43-48================= */
// Change code below this line
/* const sortByDescendingFriendCount = users => {
   return [...users].sort((a, b) => b.friends.length - a.friends.length)
}; */
// Change code above this line
/* ================4-44-48================= */
// Change code below this line
/* const sortByName = users => {
   return [...users].sort((a, b) => a.name.localeCompare(b.name))
}; */
// Change code above this line
/* ================4-45-48================= */
/* const books = [
    {
        title: 'The Last Kingdom',
        author: 'Bernard Cornwell',
        rating: 8.38,
    },
    {
        title: 'Beside Still Waters',
        author: 'Robert Sheckley',
        rating: 8.51,
    },
    {
        title: 'The Dream of a Ridiculous Man',
        author: 'Fyodor Dostoevsky',
        rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    {
        title: 'The Dreams in the Witch House',
        author: 'Howard Lovecraft',
        rating: 8.67,
    },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books
    .filter(book => book.rating > MIN_BOOK_RATING)
    .map(book => book.author)
    .sort((a, b) => a.localeCompare(b)); */
/* ================4-46-48================= */
// Change code below this line
/* const getNamesSortedByFriendCount = users => {
   return [...users]
     .sort((a, b) => a.friends.length - b.friends.length)
     .map(user => user.name)
}; */
// Change code above this line
/* ================4-47-48================= */
// Change code below this line
/* const getSortedFriends = users => {
   return users
  .flatMap(user => user.friends)
  .filter((friend, index, arr) => arr.indexOf(friend) === index)
  .sort((a, b) => a.localeCompare(b))
}; */
// Change code above this line
/* ================4-48-48================= */
// Change code below this line
/* const getTotalBalanceByGender = (users, gender) => {
   return users
  .filter(user => user.gender === gender)
  .reduce((totalBalance, user) => totalBalance + user.balance, 0)
}; */
// Change code above this line
