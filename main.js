// function calculateBudget() {
// 	const income = parseFloat(document.getElementById("income").value);
// 	const expenses = parseFloat(document.getElementById("expenses").value);
// 	const car = parseFloat(document.getElementById("car").value);
// 	const groceries = parseFloat(document.getElementById("groceries").value);

// 	if (isNaN(income) || isNaN(expenses) || isNaN(car) || isNaN(groceries)) {
// // 		alert("Veuillez saisir des nombres valides.");
// 		return;
// // 	}

// 	const totalExpenses = expenses + car + groceries;
// 	const budget = income - totalExpenses;

// 	if (budget >= 0) {
// 		document.getElementById("result").innerHTML = "Votre budget mensuel est de " + budget.toFixed(2) + " euros.";
// 	} else {
// 		document.getElementById("result").innerHTML = "Vous êtes en déficit de " + Math.abs(budget).toFixed(2) + " euros par mois.";
// 	}
// }


// 

