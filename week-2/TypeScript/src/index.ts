let a:number=1;
a=5;
a=10;

let e: Array<string>=["a","b"];
e.push("c");


let f: string[]=["a","b"];
f.push("c");

let f1: number[]=[1,2,3];
f1.push(4);

let g: Record<string,number[]>={
    a:[1],
    b:[2],
};

let h:[number,string,Boolean]=[1,"s",true]

enum colour {
    Red,
    Green,
    Blue,
}

let i:colour=1;
let i1:colour=colour.Green;

console.log("i",i)


const sum=(a:number,b:number):number=>{
    return a+b
}

