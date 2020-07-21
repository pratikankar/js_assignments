class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.courses = [];
    }

    login() {
        console.log(`${this.name} has logged in.`);
        return this;
    }
    logout() {
        console.log(`${this.name} has logged out.`);
        return this;
    }

}

class Moderator extends User {
    constructor(name, age, email) {
        super(name, age, email);
    }
    addCoins(user) {
        user.coins++;
        console.log(`${user.name} has ${user.coins} coins.`);
        return this;
    }

    removeCoins(user) {
        user.coins--;
        console.log(`${user.name} has ${user.coins} coins`);
        return this;
    }
}

class Admin extends Moderator {
    constructor(name, age, email) {
        super(name, age, email);
    }
    addCourse(user, course) {
        user.courses.push(course);
        console.log(`Course ${course} added to user ${user.name}.`);
    }

    deleteCourse(user, course) {
        user.courses.splice(user.courses.indexOf(course), 1);
        console.log(`Course ${course} removed to user ${user.name}.`);
    }
}

let user1 = new User('Pratik', 30, 'pratik@gmail.com');
let user2 = new User('Vikram', 31, 'vikram@gmail.com');

let mod1 = new Moderator('Akash', 30, 'm.akash@gmail.com');
user1.login();
mod1.addCoins(user1);
mod1.addCoins(user1);
mod1.addCoins(user1);
user1.logout();

user2.login();
mod1.addCoins(user2);
user2.logout();

mod1.removeCoins(user1);

let admin = new Admin('Rajesh', 35, 'a.rajesh@gmail.com')
admin.addCourse(user1, 'JavaScript')
admin.addCourse(user1, 'Blockchain')

admin.addCourse(user2, 'Python')