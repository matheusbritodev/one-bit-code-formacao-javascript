let users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" }
]

function groupByRole(users) {
    let user = users.reduce((accumulator, currentValue) => {
        accumulator[currentValue.role] = accumulator[currentValue.role] || []
        accumulator[currentValue.role].push(currentValue.name)

        return accumulator
        
    }, {})

    return user
}


console.log(groupByRole(users))