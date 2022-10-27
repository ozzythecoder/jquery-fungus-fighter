$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let heroAP = 100;
const attacks = [ {
		name: 'arcane-sceptre',
		dmg: 14,
		cost: 12
	}, {
		name: 'entangle',
		dmg: 9,
		cost: 23
	}, {
		name: 'dragon-blade',
		dmg: 47,
		cost: 38
	}, {
		name: 'star-fire',
		dmg: 25,
		cost: 33
	}
]

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
	let thisAtk;
	// loop over attacks
	for (let atk of attacks) {
		// identify what attack is being called
		if ( $(this).hasClass(atk.name) ) {
			thisAtk = atk;
		}
	}

	// reduce fungus HP by dmg amount, minimum 0
	fungusHP -= thisAtk.dmg;
	if (fungusHP < 0) { fungusHP = 0 };

	// reduce hero AP by cost amount, minimum 0
	heroAP -= thisAtk.cost;
	if (heroAP < 0) { heroAP = 0};

	console.log('fungus HP is now', fungusHP);
	console.log('hero AP is now', heroAP);

	render();
}

function render() {
	// render AP value
	$('.ap-text').html(heroAP + ' AP')
	$('.hp-text').html(fungusHP + ' HP')
}