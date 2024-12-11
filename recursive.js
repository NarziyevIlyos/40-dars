function displayNumbers(n, current = 1) {
    /**
     * o'z-o'zini chaqiruvchi funksiya (= recursive function)
     * Rekursiv ravishda 1 dan n gacha bo'lgan raqamlarni ko'rsatadi.
     *
     * @param {number} n - Qaysi raqamlar ko'rsatilishini belgilovchi raqam.
     * @param {number} current - Joriy raqam ko'rsatiladi (standart 1).
     */
    if (current > n) {
        return; // Asosiy holat: oqim n dan oshganda rekursiyani to'xtatadi
    }
    console.log(current);
    displayNumbers(n, current + 1); // Oshirib borilgan current (= joriy) raqam bilan rekursiv chaqiriladi
}

// Example usage
// const n = parseInt(prompt("Enter a number: "), 10); //Foydalanuvchidan kirish raqamini oling

n = 12;

if (n > 0) {
    displayNumbers(n);
} else {
    console.log("Please enter a positive number.");
}

// zinadan ko'tarilish
function climbStairs(steps) {
    if (steps === 0) {  // Base case
        console.log("You’ve reached the top!");
        return;
    }
    console.log(`Climbing step ${steps}`);  // Action
    climbStairs(steps - 1);  // Repeat
}

climbStairs(5);
