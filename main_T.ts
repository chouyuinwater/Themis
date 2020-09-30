import {MemberInterface, Member} from "./member";

// ============ 变量定义 ============
let a: string = 'data';
console.log('a is string, value = ' + a);

// ============ 函数定义 ============
const checkMember = ({system, info}: {system: {person: { [key: string]: number } }, info: Member }) => {
    console.log('id = ' + system.person.id);
    console.log('info = ' + info.name);
};

const queryVip = (member: MemberInterface): MemberInterface => {
    console.log('member info = ' + JSON.stringify(member));
    return member;
};

const closeVip= (id: number) => id > 100;

// ============ 调用函数 ============
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
let memberQuery: MemberInterface = {
    _name: 'name',
    _age: 12,
    _vip: true,
    openVip: (id: number, days: number): boolean => {
        return id > 100;
    }
};

let member = queryVip(memberQuery);
console.log('func member = ' + JSON.stringify(member))

// ============ 函数类型推断 ============
let z: number = 100;
function add(x, y): number {
    console.log(x + y + z);
    z = 120;
    return 11;
}
console.log(add(10, 10));
// console.log('aaaa == ' + a);

let Add_1: (x: number, y: number) => number = add;
// 推断类型
let Add_2: (first: number, second: number) => number = (x: number, y: number) => {
    console.log(add(x, y));
    return x + y;
}
// 完整写法
let Add_3: (first: number, second: number) => number = function (x: number, y: number): number {
    console.log(add(x, y));
    return x + y;
}