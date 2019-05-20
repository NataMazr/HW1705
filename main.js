let a = +prompt();
b = a - 1;
n = a;
for (let i = 1; i < b; i++) {
    n = n * (a - i);
}
console.log(n);