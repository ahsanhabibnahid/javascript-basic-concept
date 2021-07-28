var age = [15, 12, 17, 19, 25]

console.log(age)
console.log(age[3])

changeAge = age[3] = 30; //replace by 19
console.log(changeAge)
console.log(age)

console.log(age.indexOf(30)) //replace value index show

// array push

var nam = ['sakib', 'taher', 'foyez', 'moin', 'hosen']
nam.push('nahid') // push element
console.log(nam)

// pop array
nam = ['sakib', 'taher', 'foyez', 'moin', 'hosen']
nam.pop()
console.log(nam)

//array te suru te element add kora
nam = ['sakib', 'taher', 'foyez', 'moin', 'hosen']
nam.unshift('nahid','zahid')
console.log(nam)

//array te suru te element remove kora
nam = ['sakib', 'taher', 'foyez', 'moin', 'hosen']
nam.shift()
console.log(nam)

nam = ['sakib', 'taher', 'foyez', 'moin', 'hosen']
var part = nam.slice(1,3)
console.log(part)