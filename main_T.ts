let a: string = 'data';

console.log("a is string, value = " + a);


class Member {
    private _name: string;
    private _age: number;
    private _vip: boolean;


    constructor(name: string, age: number, vip: boolean) {
        this._name = name;
        this._age = age;
        this._vip = vip;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get vip(): boolean {
        return this._vip;
    }

    set vip(value: boolean) {
        this._vip = value;
    }
}

const checkMember = ({system, info}: {system: {person: { [key: string]: number } }, info: Member }) => {
    console.log('id = ' + system.person.id);
    console.log('info = ' + info.name);
};

let system = {
    person: {
        id: 1000
    }
}

let param = {
    system: system,
    info: new Member('bingbing', 10, false)
}
checkMember(param);