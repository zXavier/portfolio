
document.getElementById("submitIncome").addEventListener("click",computeMonthlyIncome);
document.getElementById("submitExpenses").addEventListener("click",computeExpenses);
document.getElementById("incomeButton").addEventListener("click",showIncome);
document.getElementById("expenseButton").addEventListener("click",showExpenses);

function showIncome() {

  // console.log("working");

  var income = document.querySelector(".income");
  var expense = document.querySelector(".expenses");

  if (income.classList.contains("hidden")) {
    income.classList.remove("hidden");
    expense.classList.add("hidden");
    document.getElementById("incomeButton").style.backgroundColor = "rgb(128, 171, 3)";
    document.getElementById("expenseButton").style.backgroundColor = "rgb(128, 171, 3, 0.6)";
  }
}

function showExpenses() {

  var income = document.querySelector(".income");
  var expense = document.querySelector(".expenses");

  if (expense.classList.contains("hidden")) {
    expense.classList.remove("hidden");
    income.classList.add("hidden");
    document.getElementById("expenseButton").style.backgroundColor = "rgb(128, 171, 3)";
    document.getElementById("incomeButton").style.backgroundColor = "rgb(128, 171, 3, 0.6)";
  }

}

function computeMonthlyIncome() {

  var monthlyIncome;
  var salary = parseFloat(document.getElementById("salary").value);

  if (isNaN(salary)) {
    salary = (parseFloat(document.getElementById("hourlyWage").value) *
    parseInt(document.getElementById("weeklyHours").value)) * 52;

    console.log("Salary: " + salary);
  }

  monthlyIncome = salary / 12;

  if (!isNaN(parseFloat(document.getElementById("additionalIncome").value))) {
    monthlyIncome += parseFloat(document.getElementById("additionalIncome").value);
  }
  console.log("Monthly Income: " + monthlyIncome);

}

function computeExpenses() {

  var totalExpenses = 0;

  var expenses = document.querySelectorAll(".expenses input");

  console.log(expenses);

  for (var i = 0; i < expenses.length; i++) {
    if (!isNaN(parseFloat(expenses[i].value))) {
      totalExpenses += parseFloat(expenses[i].value);
    }
  }

  console.log(totalExpenses);

}
