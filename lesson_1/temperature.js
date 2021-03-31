var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 *инкремент увеличил значение а на 1, а стало 2, дальше с мы присвоили значение а, то есть, 2*
d = b++; alert(d);           // 1 *d мы присвоили значение b, то есть, 1, после чего, инкремент увеличил значение b на 1 и теперь b=2*
c = (2+ ++a); alert(c);      // 5 *на предыдущем шаге значение а стало = 2, сейчас наш инкремент снова увеличил а на 1, а=3, значит, 2 + 3 = 5*
d = (2+ b++); alert(d);      // 4 *на предыдущем шаге значение b стало = 2, значит, 2 + 2 = 4, теперь инкремент увеличил b на 1, и b=3*
alert(a);                    // 3 *на предыдущем шаге а=3*
alert(b);                    // 3 *на предыдущем шаге b=3*


var a = 2;
var x = 1 + (a *= 2); // a мы сначала умножаем на 2, и присваиваем это значение а. Значение стало 4. Теперь выполняем операцию сложения. 1+4=5

//если a и b положительные, вывести их разность;

var a = 6;
var b = -2;
if(a>0 && b>0) {
    alert(a-b);
} 

//если а и b отрицательные, вывести их произведение;

else if(a<0 && b<0) {
    alert(a*b);
} 

//если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

else if(a<=0 && b>=0 || a>=0 && b<=0) {
    alert(a+b);
}


//-----------------------//

a = +prompt ('Введите число от 0 до 15');
		switch (a) {
        case 0:
            alert(0);
        case 1:
		    alert(1);
		case 2:
			alert(2);
		case 3:
		    alert(3);
        case 4:
            alert(4); 
        case 5:
            alert(5);
		case 6:
			alert(6);
		case 7:
			alert(7);
		case 8:
			alert(8);
		case 9:
			alert(9);
		case 10:
			alert(10);
		case 11:
			alert(11);
		case 12:
			alert(12);
		case 13:
			alert(13);
		case 14:
			alert(14);
		case 15:
			alert(15);
			break;	
		}	

//-----------------------//

var a = 2;
var b = 3;

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function del (a, b) {
    return a / b;
}

function mult (a, b) {
    return a * b;
}

//-----------------------//

function mathOperation(arg1, arg2, operation){
    switch(operation){
            case 'сложение':
                return arg1 + arg2;
             break;
            case 'вычитание':
                return arg1 - arg2;
             break;
         case 'деление':
                return arg1 / arg2;
             break;
            case 'умножение':
                return arg1 * arg2;
             break;
       }
}