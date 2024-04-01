function removeChars(charsToRemove) {
    const inputString = "hello world";
    return inputString.replace(new RegExp(`[${charsToRemove}]`, 'g'), '');
}

// Запитуємо символи для видалення від користувача
const charsToRemove = prompt("Введіть символи, які потрібно видалити із: hello world");


const result = removeChars(charsToRemove);  // Викликаємо функцію
alert(`Модифікований рядок: ${result}`);

