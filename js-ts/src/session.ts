// Set data in sessionStorage
sessionStorage.setItem('userName', 'raj');
sessionStorage.setItem('userId', '2001');

// Retrieve data from sessionStorage
const userName: string | null = sessionStorage.getItem("userName");
let userId: string | null = sessionStorage.getItem("userId");

console.log("userName : " + userName);
console.log("userId : " + userId);

// Convert userId string to number
userId:number = Number(userId);
console.log("userId to Number : " + typeof (userId) + userId);

// Short syntax to get data from sessionStorage
const userName1: string | null = sessionStorage.userName;
const userId1: string | null = sessionStorage.userId;

// Remove an item from sessionStorage
const key: string = 'userName';
sessionStorage.removeItem(key);

console.log("After removing username " + sessionStorage.getItem('userName'));

// Remove all items from sessionStorage
sessionStorage.clear();
console.log("After removing all " + sessionStorage.getItem('userId'));
