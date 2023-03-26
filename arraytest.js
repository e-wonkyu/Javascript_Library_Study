function print(x)
{
    console.log(x)
}

/**
 * 배열 할당방법
 */
print("====================배열 할당 방법====================");
//빈 배열 할당
var array = new Array();
// 생성자로 초기화
var array1 = new Array("test","Test1","test1");
//10 만큼 할당
var array2 = new Array(10);
for(var i=0;i<10;i++)
{
    array2.push(`test${i}`);
}


print(array);
print(array1);
// 배열의 길이 반환
print(array2.length);

/**
 * iterator
 *      스트림으로 배열 요소 하나씩 반환하는 방식
 */
print("====================이터레이터 사용법====================");
const iterator = array1[Symbol.iterator]();

for (var i=0;i<array1.length;i++)
{
    print(iterator.next().value);
}

/**
 * 배열 요소 확인
 */
print("====================배열 요소 확인====================");
let index = 2;

print(`인덱스 : ${index} 인덱스의 값 : ${array1.at(index)} `)

print("====================배열에 이어 붙이기====================");
var array3 = array.concat(array2);
print(array3);

print("==================== entries 로 요소마다 순번생성 ====================")

array = ['a','b','c'];
const iter = array.entries();
//iterator 사용하는 방법
print(iter.next().value);
print(iter.next().value);
print(iter.next().value);
print(iter.next().value);

print(typeof iter);
print(iter);
// 순회하며 map 저장
const map = new Map();
for(const [index,element] of array.entries())
{
    map.set(index,element)
    // map[index] = element;
    print(`Index : ${index} Element : ${element}`);
}

print(map);
print(map.size);

//map 에서 key 가 1 인 요소 제거


map.delete(1);
print(map);



print("==================== Every 사용법 ====================");

var exp_function = (value) => value % 2 ==0;

integers = new Array(1,2,3,4,5,6,7,8,9,10);

print(integers);
//배열의 모든 요소가 조건식에 맞는지 확인
print(integers.every(exp_function));

// 특정 인덱스부터 확인
integers.fill(2,2,10);
print(integers.every(exp_function,2));


print("==================== fill 사용법 ====================");

// 배열의 특정 인덱스의 요소를 특정 값으로 채울 때 사용
print(integers.fill(2,2,10));

integers = [1,2,3,4,5,6,7,8,9,10];
print("==================== filter 사용법 ====================");

// 특정 조건에 맞는 요소 배열을 반환
exp_function = (value) => value % 2 == 1;
print(integers.filter(exp_function));

print("==================== find 사용법 ====================");

exp_function = (value) => value === 10;
integers = [1,2,10,4,5,10,7,8,9,10];
//index 2의 요소 반환
print(integers.find(exp_function));
// 찾기 시작할 인덱스 지정 설정
// index 5 의 요소 반환
print(integers.find(exp_function,3));

print("==================== find index 사용법 ====================");

integers = [1,2,10,4,5,10,7,8,9,10];
//index 2의 요소 반환
print(integers.findIndex(exp_function));
// 찾기 시작할 인덱스 지정 설정
// index 5 의 요소 반환
print(integers.findIndex(exp_function,5));

print("==================== find Last , Lastindex 사용법 ====================");

integers = [1,2,10,4,5,10,7,8,9,10];
// 배열의 끝 지점부터 찾기 시작
print(integers.findLast(exp_function));

//배열의 끝지점부터 탐색하여 특정 조건의 맞는 값의 인덱스를 반환
print(integers.findLastIndex(exp_function));


print("===================== flat 사용법 ====================");

integers = [1,2,3,4,5,new Array(10,11,12,new Array(1,2,3,4,new Array(7,8,9,10,new Array(20,30,40,50,60))),14)];
print(integers);
// 배열 내부의 배열의 모든 요소를 함쳐서 flat하게 만든다.

// 배열 내부의 배열, 그 배열 내부의 배열, 그 내부의 배열을 평탄화 한다.
print(integers.flat().flat().flat().flat());

//인셉션 문제 솔루션
//typeof 로 타입 확인후 특정 인덱스부터 배열의 모든 요소를 중간에 삽입


print("===================== array map 사용법 ====================");

// 배열의 모든 요소에 특정 조건식 적용
var map_expression = (value) => value * 2;
integers = [1,2,3,4,5,6,7,8,9,10];
print(integers)
print(integers.map(map_expression));


print("===================== foreach 사용법 ====================");
integers = [1,2,3,4,5,6,7,8,9,10];
integers.forEach(value => print(value*2));


print("===================== Array From 사용법 ====================");

strings = ['string','string1','string2','string3'];
var expression = (value)=> value+= 1;
var characters = [];
var text = ' test';
for(var i=0;i<strings.length;i++)
{
    characters = Array.from(strings[i])
    for(var i=0;i<text.length ;i++ )
    {
        characters.push(text[i]);
    }
    print(characters.join(''));
}

print("===================== reduce 분류법 ====================");
// group 함수도 존재하지만 호환성 문제가 있음
const inventory = [
    { name: "수박", type: "수박", quantity: 5 },
    { name: "참외", type: "참외", quantity: 5 },
    { name: "청양고추", type: "고추", quantity: 0 },
    { name: "젖소", type: "소", quantity: 23 },
    { name: "버팔로", type: "소", quantity: 5 },
    { name: "황소", type: "소", quantity: 22 },
];

let callback = ({type}) => type;
// const result = inventory.group(callback);
// print(result);

//type 별로 분류
const result = inventory.reduce((types,data) => {
    const {type} = data;
    if(types[type])
        types[type].push(data);
    else
        types[type] = [data];
    return types;
},{});

print(result);
print(typeof result);

//quantity 분류
const result1 = inventory.reduce((qunt,data) => {
    const {quantity} = data;
    if(qunt[quantity])
        qunt[quantity].push(data);
    else
        qunt[quantity] = [data];
    return qunt;
},{});


print(result1);
print(typeof result);

print("===================== includes , indexof 사용법 ====================");

// 문자열 내에 특정 문자열이 있는지 확인
var str = 'string test __';
print(str.includes('test'));

// 배열 내에 특정 값이 있는지 확인
array = [1,2,3,4,5,6,7,8,9,10];
print(array.includes(3));

// 문자열 배열 내에 특정 값이 있는지 확인
array = ['test','arr','어레이'];

print(array.includes('arr'));
print(array.includes('te'));


// 문자열에서 'test' 문자열이 일치하는 가장 앞의 인덱스를 반환
print(str.indexOf('test'));

// 배열 에서 특정 값이 몇번째 인덱스에 있는지 확인
print(array.indexOf('arr'));


print("===================== is Array 사용법 ====================");

// 배열인지 확인
print(Array.isArray(array));

print(Array.isArray({1:'test'}));

print("===================== join 사용법 ====================");

strings = "strings __test";
//character 배열로 변환
characters = Array.from(strings)

//delemeter 를 추가하여 character 배열 취합
print(characters.join());
//delemeter 를 추가하지 않고 character 배열 취합
print(characters.join(''));


print("===================== keys 사용법 ====================");
//entries 관련
strings = "strings __test";
//character 배열로 변환
characters = Array.from(strings)
print(characters);
// iterator 로 키 반환
const itr = characters.keys();

for (const key of itr)
{
    print(key);
}
//정수 키 배열 반환
const integer_keys = [...characters.keys()];
//문자 키 배열 반환
const character_keys = Object.keys((characters));
print(integer_keys);
print(character_keys);


print("===================== values 사용법 ====================");
//entries 관련
strings = "strings __test";
//character 배열로 변환
characters = Array.from(strings)
print(characters);
// iterator 로 키 반환
itrator1 = characters.values();

for (const value of itrator1)
{
    print(value);
}

//문자 키 배열 반환
const values = Object.values((characters));
print(values);


print("===================== Array of 사용법 ====================");

array = Array.of(1,2,3,4,5);

print(array);


print("===================== reverse 사용법 ====================");

array = ['string','string1','string2'];
array = array.reverse();
print(array);

strings = "strings __test";
characters = Array.from(strings)
//delemeter 를 추가하여 character 배열 취합
characters = characters.reverse();
print(characters.join());
//delemeter 를 추가하지 않고 character 배열 취합
print(characters.join(''));


print("===================== slice 사용법 ====================");

array = ['string','string1','string2','string4','string5'];
// 배열에서 1번 인덱스부터 3번 인덱스까지의 배열 반환
print(array.slice(1,3));


print("===================== some 사용법 ====================");

expression = (value) => value % 2 === 0;
array = [1,3,3,3,1,1,11,10];
// array 의 요소 중 expression 함수의 조건에 맞는 요소가 하나라도 존재한다면 true 반환
print(array.some(expression));

print("===================== sort 사용법 ====================");
var persons = [
    { name: '이xx', age: 20 },
    { name: '이xx', age: 37 },
    { name: '박xx', age: 45 },
    { name: '김xx', age: 21 },
    { name: '이xx', age: 27 },
    { name: '박xx', age: 37 }
];
var comparefunc = (a,b) => {
    if (a.age > b.age) {
        return 1;
    }
    else if(a.age < b.age){
        return -1;
    }
    return 0;
}
function comparefunction(a,b)
{
    if (a.age > b.age) {
        return 1;
    }
    else if(a.age < b.age){
        return -1;
    }
    return 0;
}

const sortByname = (a,b) =>{
    var A = a.name.toUpperCase();
    var B = b.name.toUpperCase();

    if(A < B)
    {
        return -1;
    }
    else if (A > B)
    {
        return 1;
    }
    return 0;
}

// 숫자로 비교
print(persons.sort(comparefunction));
print(persons.sort(comparefunc));

//문자열 비교
print(persons.sort(sortByname));

//아스키 문자가 아닐 경우

//mdn 배열
var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
const non_ascii_compare = (a,b) =>{
    return a.localeCompare(b);
}
print(items.sort(non_ascii_compare));


print("===================== splice 사용법 ====================");

array = [2,3,6]

print(array);

//index 0 번째에 삭제하지 않고 데이터 1을 추가
array.splice(0,0,1);
print(array);

array.splice(3,0,4);
print(array);
array.splice(4,0,5);
print(array);



print("===================== unshift 사용법 ====================");
array = [1,2,3,4,5]
array.unshift(6,7,8)
print(array);



print("===================== Queue 사용법 ====================");

class Queue{
    queue = [];
    size = 0;
    Queue()
    {
        this.queue = [];
        this.size = 0;
    }
    constructor(...elements)
    {
        this.queue = [];
        this.size = 0;
        for (const e of elements)
        {
            this.queue.push(e);
            this.size++;
        }
    }

    Enqueue(element)
    {
        this.size++;
        this.queue.push(element);
    }

    Dequeue()
    {
        if(this.size == 0)
        {
            return -1;
        }
        return this.queue.shift()
    }

    Destroy()
    {
        delete this;
    }

}

var queue = new Queue();
print(queue.Enqueue(1));
print(queue.Enqueue(1));
print(queue.Enqueue(1));
print(queue.Enqueue(1));
print(queue.queue);
print(queue.Dequeue());
print(queue.Dequeue());
print(queue.Dequeue());
print(queue.Dequeue());
print(queue.queue);


queue = new Queue(1,2,3,4,5,6,7);
print(queue.queue);


queue = new Queue(10,20,30,40,50,60,70);
print(queue.queue);