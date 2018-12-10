function Human(name, surname, age, sex) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sex = sex;
    this.type = 'Human';
}

function Doctor(human, healSkill) {
    this.__proto__ = human;
    this.healSkill = healSkill;
    this.type = 'Doctor';
}

function Dentist(doctor, dentistSkill) {
    this.__proto__ = doctor;
    this.dentistSkill = dentistSkill;
    this.type = 'Dentist';
}

function Pathologist(doctor, autopsySkill) {
    this.__proto__ = doctor;
    this.autopsySkill = autopsySkill;
    this.type = 'Pathologist';
}

function Engineer(human, technologySkill) {
    this.__proto__ = human;
    this.technologySkill = technologySkill;
    this.type = 'Engineer';
}

let parent = new Human('Clarke', 'Kent', 38, 'male');
let firstChild = new Doctor(parent, 68);
let firstSubChild = new Dentist(firstChild, 28);
let secondSubChild = new Pathologist(firstChild, 85);
let secondChild = new Engineer(parent, 88);