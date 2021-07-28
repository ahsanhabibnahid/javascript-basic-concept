// var names = 'Nahid'

// switch(names){
//     case 'zahid':
//         console.log('my name is zahid')
//         break
//     case 'ashik':
//         console.log('my name is ashik')
//         break;
//     case 'Nahid':
//         console.log('my name is ' + names)
//         break;
//     default:
//         console.log('nothing found')

// }

// var foo = 0;
// switch (foo) {
//   case -1:
//     console.log('negative 1');
//     break;
//   case 0: // foo is 0 so criteria met here so this block will run
//     console.log(0);
//     // NOTE: the forgotten break would have been here
//   case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     break; // it encounters this break so will not continue into 'case 2:'
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log('default');
// }


// var foo = 5;
// switch (foo) {
//   case 2:
//     console.log(2);
//     break; // it encounters this break so will not continue into 'default:'
//   default:
//     console.log('default')
//     // fall-through
//   case 5:
//     console.log(foo);
// }


// var foo = 1;
// var output = 'Output: ';
// switch (foo) {
//   case 0:
//     output += 'So ';
//   case 1:
//     output += 'What ';
//     output += 'Is ';
//   case 2:
//     output += 'Your ';
//   case 3:
//     output += 'Name';
//   case 4:
//     output += '?';
//     console.log(output);
//     break;
//   case 5:
//     output += '!';
//     console.log(output);
//     break;
//   default:
//     console.log('Please pick a number from 0 to 5!');
// }

const action = 'say_hello';
switch (action) {
  case 'say_hello':
    let message = 'hello';
    console.log(message);
    break;
  case 'say_hi':
    let message = 'hi';
    console.log(message);
    break;
  default:
    console.log('Empty action received.');
    break;
}

