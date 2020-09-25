import common from './common.js'

common.callMessage('hello world!')

// =================== 1 ===================
// var 使用let 和 const代替 优先使用const
const func_1 = () => {
    var person = {
        id: 12,
        name: "tom",
        phone: "1233121",
        address: "street 1"
    }
    return {
        ...person
    };
}

// =================== 2 ===================
// 字符串使用单引号
const func_2 = () => {
    let name = 'xiaoming';
// 动态字符串使用反引号
    console.log(`my name is ${name}`);
}

// =================== 3 ===================
// 优先使用解构赋值
const func_3 = (person_new) => {
    let age = [1, 2, 3, 4];
    let [son_1, son_2, , son_3] = age;
    console.log(son_1 + " " + son_2 + " " + son_3);

    let {name, address} = person_new;
    console.log(name + " " + address);
}

// =================== 4 ===================
// 纯函数I 使用Object.assign 复制对象不改变原来的对象
// 对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。
const func_4 = (person_new) => {
    let person = {};
    Object.assign(person, person_new);
    person.name = 'jack';
    console.log(person_new);
    console.log(person);
};

// =================== 5 ===================
// 简写属性
const func_5 = () => {
    // 自动对应变量
    let name = "rose";
    let address = "street";

    let person = {
        name,
        address,
        age: 12,
        getPhone() {
            console.log("phone: " + 123456)
        }
    }

    console.log(person);
    person.getPhone();
};

// =================== 6 ===================
// 纯函数II 使用入参不要修改全局变量
const func_6 = (person) => {
    let keys = Object.keys(person);
    let person_new = {};
    // let map = new Map(person);
    keys.forEach(key => {
        person_new[key] = person[key]
    })

    console.log(keys);
    console.log(person_new);
    // console.log(map);

}

// =================== 7 ===================
// 函数解构赋值, 入参可以有默认值
const func_7_1 = ({name, age = 13}) => {
    console.log(name + " " + age);
};
// 所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
const func_7_2 = ({name, age = 13}) => ({
    name,
    age
});
// 箭头函数使用注意事项
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
// ============== this ==============
// this指向的固定化，并不是因为箭头函数内部有绑定this的机制，
// 实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。
// 正是因为它没有this，所以也就不能用作构造函数。
// =====================================================================================
// ES6
function func_7_3() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
// ES5
function func_7_4() {
    var _this = this;
    setTimeout(function () {
        console.log('id:', _this.id);
    }, 100);
}
// 上面代码中，转换后的 ES5 版本清楚地说明了，箭头函数里面根本没有自己的this，而是引用外层的this。
// =====================================================================================



// 执行 execute
const person_new = func_1();
func_2();
func_3(person_new)
func_4(person_new)
func_5()
func_6(person_new)
func_7_1(person_new)
console.log(func_7_2(person_new))
func_7_3.call({id: 13})
