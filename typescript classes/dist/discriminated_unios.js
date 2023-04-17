"use strict";
function dmgBoss(boss) {
    console.log(`You're attacking the ${boss.type}!`);
    let bossPower = 0;
    const diceNumber = Math.floor(Math.random() * 20);
    switch (boss.type) {
        case 'dragon':
            bossPower = boss.firePower;
            break;
        case 'monster':
            bossPower = boss.handPower;
            break;
        default:
            break;
    }
    const hit = Math.max(0, diceNumber - bossPower);
    boss.life = Math.max(0, boss.life - hit);
    console.log(`Dice number: ${diceNumber}`);
    console.log(`Boss power: ${bossPower}`);
    console.log(`Hit: ${hit}`);
    if (boss.life > 0) {
        console.log(`The ${boss.type} ${boss.name} lost ${hit} life points. Its life is now ${boss.life}.`);
    }
    else {
        console.log(`You defeated the ${boss.type} ${boss.name}!`);
    }
}
const bloodDragon = {
    type: 'dragon',
    name: 'Blood Dragon',
    life: 100,
    firePower: 8,
};
dmgBoss(bloodDragon);
