type locall = {
    name: string;
    password: string; // Change to string for password
};

class localstorage {
    addData(d: Array<locall>): void {
        const existingData = this.getData();

        // Concatenate the new data with existing data
        const newData = existingData.concat(d);
        localStorage.setItem('data', JSON.stringify(newData));
    }

    getData(): Array<locall> {
        return JSON.parse(localStorage.getItem("data") || "[]") as Array<locall>;
    }

    searchData(name: string | Array<string>): void {
        let data = this.getData();
        console.log(data[0].name);

        if (typeof name === 'string') {
            const array = data.filter((item: locall) => {
                if (item.name === name) {
                    console.log("valid");
                }
            });
        } else if (Array.isArray(name)) {
            const array = data.filter((item: locall) => {
                if (name.includes(item.name)) {
                    console.log("valid");
                } else {
                    console.log("invalid");
                }
            });
        }
    }
}

const lss = new localstorage();
localStorage.clear()

const obj2: Array<locall> = [
    { name: "John", password: "123456" },
    { name: "Jane", password: "987654" },
    { name: "raj", password: "2001" }
];

lss.addData(obj2);
console.log(lss.getData());

const another: locall[] = [
    {
        name: 'leo',
        password: '123456789'
    }
];

lss.addData(another);
console.log(lss.getData());

lss.searchData(['John', 'Jane']);
