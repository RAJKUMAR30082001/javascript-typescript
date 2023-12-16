"use strict";
// Set data in sessionStorage
sessionStorage.setItem('userName', 'raj');
sessionStorage.setItem('userId', '2001');
// Retrieve data from sessionStorage
const userName = sessionStorage.getItem("userName");
let userId = sessionStorage.getItem("userId");
console.log("userName : " + userName);
console.log("userId : " + userId);
// Convert userId string to number
userId: number = Number(userId);
console.log("userId to Number : " + typeof (userId) + userId);
// Short syntax to get data from sessionStorage
const userName1 = sessionStorage.userName;
const userId1 = sessionStorage.userId;
// Remove an item from sessionStorage
const key = 'userName';
sessionStorage.removeItem(key);
console.log("After removing username " + sessionStorage.getItem('userName'));
// Remove all items from sessionStorage
sessionStorage.clear();
console.log("After removing all " + sessionStorage.getItem('userId'));
