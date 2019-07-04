$_$wp(1);
const phonePrice = ($_$w(1, 0), 5000);
const taxRate = ($_$w(1, 1), 0.08);
const accessory = ($_$w(1, 2), 200);
const spendThreshold = ($_$w(1, 3), 6520);
function buyPhone(bankMoney) {
    $_$wf(1);
    let actualPrice = ($_$w(1, 4), phonePrice * (1 + taxRate));
    let numPhone = ($_$w(1, 5), 0);
    while ($_$w(1, 6), bankMoney >= actualPrice) {
        for (let moneySpend = actualPrice; $_$w(1, 7), ($_$w(1, 8), moneySpend <= spendThreshold) && ($_$w(1, 9), moneySpend <= bankMoney); moneySpend += accessory) {
            $_$w(1, 10), numPhone++;
            $_$w(1, 11), bankMoney -= moneySpend;
        }
    }
    return $_$w(1, 12), `I have bought ${ numPhone } phones, with $${ bankMoney } left in the account`;
}
$_$w(1, 13), $_$tracer.log(buyPhone(30000), 'buyPhone(30000)', 1, 13);
let x = ($_$w(1, 14), 15);
function minus() {
    $_$wf(1);
    var y = ($_$w(1, 15), 9);
    $_$w(1, 16), $_$tracer.log(y, 'y', 1, 16);
    while ($_$w(1, 17), x >= 10) {
        var y = ($_$w(1, 18), 15);
        $_$w(1, 19), x--;
        $_$w(1, 20), $_$tracer.log(y, 'y', 1, 20);
    }
    $_$w(1, 21), $_$tracer.log('I am finished ' + y, '\'I am finished \' + y', 1, 21);
}
$_$w(1, 22), $_$tracer.log(minus(), 'minus()', 1, 22);
switch ($_$w(1, 23), 11 + 3) {
case 42: {
        $_$w(1, 24), $_$tracer.log('the answer is 42', '', 1, 24);
        {
            $_$w(1, 25);
            break;
        }
    }
case 14: {
        $_$w(1, 26), $_$tracer.log('the answer is 14', '', 1, 26);
    }
case 14: {
        $_$w(1, 27), $_$tracer.log('the answer is 41', '', 1, 27);
        {
            $_$w(1, 28);
            break;
        }
    }
}
function marry(lover) {
    $_$wf(1);
    function theWife(wife) {
        $_$wf(1);
        return $_$w(1, 29), `${ lover } married ${ wife }`;
    }
    return $_$w(1, 30), theWife;
}
let husband = ($_$w(1, 31), marry('John'));
$_$w(1, 32), $_$tracer.log(husband('Marry'), 'husband(\'Marry\')', 1, 32);
function foo() {
    $_$wf(1);
    $_$w(1, 33), $_$tracer.log(this.bar, 'this.bar', 1, 33);
}
var bar = ($_$w(1, 34), 'global');
var obj1 = ($_$w(1, 35), {
    bar: 'obj1',
    foo: foo
});
var obj2 = ($_$w(1, 36), { bar: 'obj2' });
$_$w(1, 37), foo();
$_$w(1, 38), obj1.foo();
$_$w(1, 39), foo.call(obj2);
$_$w(1, 40), new foo();
let today = ($_$w(1, 41), new Date());
let dayList = ($_$w(1, 42), [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]);
let day = ($_$w(1, 43), today.getDay());
$_$w(1, 44), $_$tracer.log('Today is: ' + dayList[day - 1] + '.', '\'Today is: \' + dayList[day - 1] + \'.\'', 1, 44);
let hour = ($_$w(1, 45), today.getHours());
let hourIn12 = ($_$w(1, 46), hour > 12 ? ($_$w(1, 47), hour - 12) : ($_$w(1, 48), hour));
let minutes = ($_$w(1, 49), today.getMinutes());
let seconds = ($_$w(1, 50), today.getSeconds());
let dayNight = ($_$w(1, 51), hour >= 12 ? ($_$w(1, 52), hour - 12 + 'PM') : ($_$w(1, 53), hour + 'AM'));
$_$w(1, 54), $_$tracer.log('Current time is: ' + dayNight + ' : ' + minutes + ' : ' + seconds, '\'Current time is: \' + dayNight + \' : \' +...', 1, 54);
$_$wpe(1);