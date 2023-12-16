"use strict";
class LocalStorage {
    clearData() {
        if (localStorage.length !== 0)
            localStorage.clear();
    }
    AddData(s) {
        let data = JSON.stringify(s);
        localStorage.setItem("data", data);
    }
    getData() {
        const d = localStorage.getItem("data");
        if (!d)
            return null;
        else {
            const parsedData = JSON.parse(d);
            console.log(parsedData);
            return JSON.parse(d);
        }
    }
    dataRemove(name) {
        const d = localStorage.getItem("data");
        if (!d)
            return null;
        else {
            const parsedData = JSON.parse(d);
            console.log(parsedData);
            const newdata = parsedData.filter((item) => item.name !== name);
            localStorage.setItem('data', JSON.stringify(newdata));
        }
    }
}
const ls = new LocalStorage();
const obj = [
    { name: "John", password: 123456 },
    { name: "Jane", password: 987654 },
    { name: "raj", password: 2001 }
];
// localStorage.setItem("data",JSON.stringify({name:'raj',password:300}))
ls.AddData(obj);
console.log(ls.getData());
ls.dataRemove('raj');
console.log(ls.getData());
