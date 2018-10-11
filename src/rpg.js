export class Character {
  constructor(name, skill, power, defense, health, level) {
    this.name = name;
    this.skill = skill;
    this.power = power;
    this.defense = defense;
    this.health = health;
    this.level = level;
  };
}

const saitama = new Saitama ('Saitama', 'Serious-Punch', 100, 100, 100, 1)

export class Saitama extends Character {
  constructor(name, skill, power, defense, health, level) {
  super(name, skill, power, defense, health, level);
}

seriousPunch(Saitama) {
  return `${this.name} is going HAM!`;
}

seriousPunch(Saitama) {
  return `${this.skill} ADIOS!`;
}

};

export class Enemy {
  constructor(type, power, defense, health, level) {
    this.type = type;
    this.power = power;
    this.defense = defense;
    this.health = health;
    this.level = level;
    this.skill = skill;
  };
}

const monster = new Monster ('Godzilla', 'Body-Slam', 1000, 1000, 1000, 100)

export class Monster extends Enemy {
  constructor(name, skill, power, defense, health, level) {
    super(name, skill, power, defense, health, level);
  }

BasicAttack(Monster) {
  return `${this.name} is attacking!`;
}

SpecialAttack(Monster) {
  return `${this.skill} is going to DESTROY the CITY!`;
}






};
