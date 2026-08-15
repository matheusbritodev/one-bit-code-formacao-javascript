const target = 3
const attempts = [4, 1, 1, 2, 1]
let count = 0

for (let i = 0; i <= attempts.length; i++) {
    (target === attempts[i]) ? count += 1 : false
}

console.log(count)