$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let heroAP = 100;


const attacks = {
	'arcane-sceptre': { dmg: 14, cost: 12 },
	'entangle': { dmg: 9, cost: 23 },
	'dragon-blade': { dmg: 47, cost: 38 },
	'star-fire': { dmg: 25, cost: 33 }
}

function onReady() {
    
	// Make sure you check the index.html file! 
	// There are lots of buttons and things ready for you to hook into here!
	$('.attack-btn').on('click', handleAttack)
	
	// 🧠 Remember
	// - Handle events that ->
	// - Updates state which is ->
	// - Rendered to the DOM
}


function handleAttack() {

	// getting attack and statistics by button class name
	let thisAtk = $(this).attr('class').split(' ')[1]
	let thisDmg = attacks[thisAtk].dmg
	let thisCost = attacks[thisAtk].cost

	console.log('thisAtk is', thisAtk, thisDmg, thisCost);

	// check if AP remaining is enough to pay cost
	// if not, fail attack
	if (thisCost > heroAP) {
		render();
		return false;
	}

	// reduce fungus HP by dmg amount
	fungusHP -= thisDmg;

	// if fungus HP is reduced to 0, set it to 0, render the DOM,
	// and move to win state
	if (fungusHP <= 0) {
		fungusHP = 0;
		render();
		gameWin();
	};

	// // reduce hero AP by cost amount, minimum 0
	heroAP -= thisCost;

	// if hero AP is reduced to 0, set it to 0, redner the DOM,
	// and move to failure state
	if (heroAP < 0) {
		heroAP = 0;
		render();
		gameOver();
	};

	render();
}

function render() {
	// render AP & HP values to the DOM
	$('.ap-text').html(heroAP + ' AP')
	$('.hp-text').html(fungusHP + ' HP')
}