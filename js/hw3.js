'use strict';

/* ===============3-31-41================== */

/* function add(...args) {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
    // Change code above this line
}

console.log(add(15, 20)); */

/* ===============3-32-41================== */

// Change code below this line
/* function addOverNum(checkNum, ...args) {
    let total = 0;

    for (const arg of args) {
        if (arg > checkNum) {
            total += arg;
        }
    }

    return total;
    // Change code above this line
}

console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); */

/* ===============3-33-41================== */

// Change code below this line
/* function findMatches(arr, ...args) {
    const matches = []; // Don't change this line
    for (const arg of args) {
        if (arr.includes(arg)) {
            matches.push(arg);
        }
    }
    // Change code above this line
    return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); */

/* ================3-34-41================= */

/* const bookShelf = {
    // Change code below this line
    books: ['The last kingdom', 'The guardian of dreams'],
    getBooks() {
        return 'Returning all books';
    },
    addBook(bookName) {
        return `Adding book ${bookName}`;
    },
    removeBook(bookName) {
        return `Deleting book ${bookName}`;
    },
    updateBook(oldName, newName) {
        return `Updating book ${oldName} to ${newName}`;
    },
    // Change code above this line
};

console.log(bookShelf.getBooks());
console.log(bookShelf.addBook('Haze'));
console.log(bookShelf.removeBook('Red sunset'));
console.log(bookShelf.updateBook('Sands of dune', 'Dune')); */

/* ================3-35-41================= */

/* const bookShelf = {
    books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
    updateBook(oldName, newName) {
        // Change code below this line
        this.books.splice(this.books.indexOf(oldName), 1, newName);
        // Change code above this line
    },
};

bookShelf.updateBook('Haze', 'Dungeon chronicles');
bookShelf.updateBook('The last kingdom', 'Dune');
console.table(bookShelf.books); */

/* ================3-36-41================= */

/* const atTheOldToad = {
    // Change code below this line
    potions: [],
    // Change code above this line
};
console.log(atTheOldToad.potions); */

/* ================3-37-41================= */

/* const atTheOldToad = {
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
    // Change code below this line
    getPotions() {
        return this.potions;
    },
    // Change code above this line
};

console.table(atTheOldToad.potions); */

/* ================3-38-41================= */

/* const atTheOldToad = {
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
    addPotion(potionName) {
        // Change code below this line
        this.potions.push(potionName);
        // Change code above this line
    },
};

console.table(atTheOldToad.potions);

atTheOldToad.addPotion('Invisibility');
console.table(atTheOldToad.potions);

atTheOldToad.addPotion('Power potion');
console.table(atTheOldToad.potions); */

/* ================3-39-41================= */

/* const atTheOldToad = {
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
    removePotion(potionName) {
        // Change code below this line
        this.potions.splice(this.potions.indexOf(potionName), 1);
        // Change code above this line
    },
};

console.table(atTheOldToad.potions);

atTheOldToad.removePotion('Dragon breath');
console.table(atTheOldToad.potions);

atTheOldToad.removePotion('Speed potion');
console.table(atTheOldToad.potions); */

/* ================3-40-41================= */

/* const atTheOldToad = {
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
    updatePotionName(oldName, newName) {
        // Change code below this line
        this.potions.splice(this.potions.indexOf(oldName), 1, newName);
        // Change code above this line
    },
};

console.table(atTheOldToad.potions);

atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
console.table(atTheOldToad.potions);

atTheOldToad.updatePotionName('Stone skin', 'Invisibility');
console.table(atTheOldToad.potions);
 */

/* ================3-41-41================= */

/* const atTheOldToad = {
    potions: [
        { name: 'Speed potion', price: 460 },
        { name: 'Dragon breath', price: 780 },
        { name: 'Stone skin', price: 520 },
    ],
    // Change code below this line
    getPotions() {
        return this.potions;
    },

    addPotion(newPotion) {
        for (const potion of this.potions) {
            const { name } = potion;
            if (name === newPotion.name) {
                console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
        }
        this.potions.push(newPotion);
    },

    removePotion(potionName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            const { name } = this.potions[i];
            if (name === potionName) {
                this.potions.splice(i, 1);
                return null;
            }
        }
        console.log(`Potion ${potionName} is not in inventory!`);
        return `Potion ${potionName} is not in inventory!`;
    },

    updatePotionName(oldName, newName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            const { name } = this.potions[i];
            if (name === oldName) {
                this.potions[i].name = newName;
                return null;
            }
        }
        console.log(`Potion ${oldName} is not in inventory!`);
        return `Potion ${oldName} is not in inventory!`;
    },
    // Change code above this line
};

console.table(atTheOldToad.getPotions());

atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
console.table(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
console.table(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
console.table(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
console.table(atTheOldToad.getPotions());
atTheOldToad.removePotion('Dragons breath');
console.table(atTheOldToad.getPotions());
atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
console.table(atTheOldToad.getPotions());
atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
console.table(atTheOldToad.getPotions()); */
