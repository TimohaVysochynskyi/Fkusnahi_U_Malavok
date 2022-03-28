let breackfasts = document.getElementById('breackfasts');
let main_food = document.getElementById('main-food');
let snacks = document.getElementById('snacks');
let deserts = document.getElementById('deserts');
let drinks = document.getElementById('drinks');
let adds = document.getElementById('adds');

function Show_Breackfasts(){
	main_food.style.display = 'none';
	snacks.style.display = 'none';
	deserts.style.display = 'none';
	drinks.style.display = 'none';
	adds.style.display = 'none';
	breackfasts.style.display = 'unset';
}
function Show_Main_Food(){
	main_food.style.display = 'unset';
	snacks.style.display = 'none';
	deserts.style.display = 'none';
	drinks.style.display = 'none';
	adds.style.display = 'none';
	breackfasts.style.display = 'none';
}
function Show_Snacks(){
	main_food.style.display = 'none';
	snacks.style.display = 'unset';
	deserts.style.display = 'none';
	drinks.style.display = 'none';
	adds.style.display = 'none';
	breackfasts.style.display = 'none';
}
function Show_Deserts(){
	main_food.style.display = 'none';
	snacks.style.display = 'none';
	deserts.style.display = 'unset';
	drinks.style.display = 'none';
	adds.style.display = 'none';
	breackfasts.style.display = 'none';
}
function Show_Drinks(){
	main_food.style.display = 'none';
	snacks.style.display = 'none';
	deserts.style.display = 'none';
	drinks.style.display = 'unset';
	adds.style.display = 'none';
	breackfasts.style.display = 'none';
}
function Show_Adds(){
	main_food.style.display = 'none';
	snacks.style.display = 'none';
	deserts.style.display = 'none';
	drinks.style.display = 'none';
	adds.style.display = 'unset';
	breackfasts.style.display = 'none';
}
console.log("Hi");