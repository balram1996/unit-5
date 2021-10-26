

interface IButton {
    label:string;
    onClick:Function;
}

interface person {
    fname:string,
    lname:string,
    pnumber?:number,
    snumber :number| string,
    address?:{
        street:string,
        lane:string,
        city:string,
        hno:number
    };
}

function getFullName (p:person):string {
    console.log(p.fname)
     return p.fname

}

