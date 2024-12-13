
var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));


if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers!");
} else {

    var sum = num1 + num2;
    var difference = num1 - num2;
    var product = num1 * num2;
    var division = num2 !== 0 ? num1 / num2 : "Infinity (division by zero)";
    var remainder = num2 !== 0 ? num1 % num2 : "N/A (division by zero)";
    var power = Math.pow(num1, num2);

    var areEqual = num1 === num2;

    var floatingPointTest = 0.1 + 0.2;

    console.log('Literals',);
    console.log(`Results:`);
    console.log(`${num1} + ${num2} = ${sum}`);
    console.log(`${num1} - ${num2} = ${difference}`);
    console.log(`${num1} * ${num2} = ${product}`);
    console.log(`${num1} / ${num2} = ${division}`);
    console.log(`${num1} % ${num2} = ${remainder}`);
    console.log(`${num1} ^ ${num2} = ${power}`);
    console.log(`Are ${num1} and ${num2} equal? ${areEqual}`);
    console.log(`What happens when you add 0.1 and 0.2?`);
    console.log(`0.1 + 0.2 = ${floatingPointTest} (due to floating-point precision).`);
}

