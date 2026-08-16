function kesimo(arr, k) {
    const sorted = arr.sort((a, b) => b - a)
    const equals = new Set(arr).size <= 1

    if (equals === false) {
        return sorted[k - 1]
    }  else {
        return sorted[0]
    }
}

console.log(kesimo([3, 2, 1, 5, 6, 4], 2))
console.log(kesimo([7, 7, 7, 7], 1))
console.log(kesimo([-1, -3, -2, 0], 1))
console.log(kesimo([10], 1))
console.log(kesimo([5,5,5,5,5], 3))


























/*function mergeSort(arr) {
    if (nums.length <= 1) {
        return nums
    }

    const middle = Math.floor(nums.length / 2)
    const left = nums.slice(0, middle)
    const right = nums.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let i = 0
    let j = 0

    while
}*/