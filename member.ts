interface MemberInterface {
    _name: string;
    _age: number;
    _phone?: string;
    _vip: boolean;

    openVip(id: number, days: number): boolean;
}

class Member implements MemberInterface {
    _name: string;
    _age: number;
    _vip: boolean;


    constructor(name: string, age: number, vip: boolean) {
        this._name = name;
        this._age = age;
        this._vip = vip;
    }

    openVip(id: number, days: number): boolean {
        console.log('number = ' + id + ' open vip ' + days + ' days');
        return true;
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

export {MemberInterface, Member};

