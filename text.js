class single {
    constructor(name) {
        this.name = name;
        this.__instance = null
    }
    getName() {
        return this.name;
    }

    static getInstance(name) {
        if (!this.__instance) {
            this.__instance = new single(name);
        }
        return this.__instance
    }
}

let a = single.getInstance("a");
let b = single.getInstance("b");

console.log(a, b)