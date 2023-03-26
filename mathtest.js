
function print(x)
{
    console.log(x)
}

print("====================abs 함수 사용법====================");

//절대값
print(Math.abs(-10));

print("====================삼각함수 사용법====================");

var h = 30;
var a = 20;
var b = 10;

/**
       /|
      / |
     /  |
    /   |
A  ------
*/

var sinA = a/h;
print(sinA);
var cosA = b/h;
print(cosA);
var tanA = a/b;
print(tanA);

var cscA = 1/sinA;
print(cscA)
var secA = 1/cosA;
print(secA)
var cotA = 1/tanA;
print(cotA)

//각도로 sin 비율을 반환
print(Math.sin(20));

print(Math.cos(30));
print(Math.tan(70));

print("====================Math 라이브러리 사용법====================");


//자연상수의 거듭제곱 값
print(Math.exp(2));

// 같거나 작은 수 중 가장 큰 수 반환
print(Math.floor(11.7));

print(Math.fround(1.337));

//밑변 , 높이를 입력해서 빗변을 구하는 경우
print(Math.hypot(3,4));

//빠른 정수 곱셈
print(Math.imul(2,4));

print(Math.log10(1000000000));

print(Math.log(2));

//최대값
print(Math.max(1,2,3,4,10,9,1020,1,9999));
//최소값
print(Math.min(1,2,3,4,10,9,1020,1,9999));
//제곱
print(Math.pow(3,2));
//제곱근
print(Math.sqrt(9));

//random 범위 지정
// random() * (max - min) + min ;
print(Math.floor(Math.random() * (10 - 5) +5 ));
// 부호 확인
print(Math.sign(-1000));



print("====================Number 라이브러리 사용법====================");

var num = 1.2345678;
var num1 = "1.234567a"

print(Number.parseFloat(num));
print(Number.parseInt(num));

print(Number.parseFloat(num1));
print(Number.parseInt(num1));
