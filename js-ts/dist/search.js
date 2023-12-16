"use strict";
class localstorage {
    addData(d) {
        const existingData = this.getData();
        // Concatenate the new data with existing data
        const newData = existingData.concat(d);
        localStorage.setItem('data', JSON.stringify(newData));
    }
    getData() {
        return JSON.parse(localStorage.getItem("data") || "[]");
    }
    searchData(name) {
        let data = this.getData();
        console.log(data[0].name);
        if (typeof name === 'string') {
            const array = data.filter((item) => {
                if (item.name === name) {
                    console.log("valid");
                }
            });
        }
        else if (Array.isArray(name)) {
            const array = data.filter((item) => {
                if (name.includes(item.name)) {
                    console.log("valid");
                }
                else {
                    console.log("invalid");
                }
            });
        }
    }
}
const lss = new localstorage();
localStorage.clear();
const obj2 = [
    { name: "John", password: "123456" },
    { name: "Jane", password: "987654" },
    { name: "raj", password: "2001" }
];
lss.addData(obj2);
console.log(lss.getData());
const another = [
    {
        name: 'leo',
        password: '123456789'
    }
];
lss.addData(another);
console.log(lss.getData());
lss.searchData(['John', 'Jane']);
