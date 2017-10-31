var a = prompt('Podaj wartosc liczby a: '),
	b = prompt('Podaj wartosc liczby b: '),
	value = (a * a) - (2 * a * b) + (b * b);

console.log('Wynik naszego działania to: ' + value);

if (value < 0) {
	console.log('Wynik jest ujemny');
}
else if (value > 0) {
	console.log('Wynik jest dodatni');
}
else if (value == 0) {
	console.log('Wynik jest równy 0');
}
else {
	console.log('Nieprawidłowe dane');
}