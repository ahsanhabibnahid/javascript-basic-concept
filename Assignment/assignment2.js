let friendName = ['Mohammad', 'Noman', 'Faruque', 'Naeem', 'Zareen', 'Sultana', 'uyhgihujfdcuiyagbufbu'];

function megaFriend(friend) {
	let large = [0];
	let largest;

	if (friend.length === 0 || typeof friend === 'number' || typeof friend === 'boolean') {
		return 'Please Enter Your Friend Name';
	} 
    else {
		for (let i = 0; i < friend.length; i++) {
			if (friend[i].length > large) {
				large = friend[i].length;
				largest = friend[i];
			}
		}
		return largest;
	}
}

let allFriends = megaFriend(friendName);
console.log('My Largest Friend Name =>', allFriends);