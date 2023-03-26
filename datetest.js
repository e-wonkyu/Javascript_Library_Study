
function print(x)
{
    console.log(x)
}


print("====================Date 클래스 사용법====================");
print(Intl.DateTimeFormat().resolvedOptions().timeZone);

array = [new Date()];
localestr = array.toLocaleString('ko',{timeZone:'Asia/Seoul'});
print(localestr);

const Clock = {
    getCurrentTime : function (date){
        if (!(date instanceof Date)) return '현재 시간을 구할 수 없습니다.';
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const timestamp = '현재 시간은 ${year}';

        return (
            '현재 시간은 ' +
            year +
            '년 ' +
            month +
            '월 ' +
            day +
            '일 ' +
            hours +
            '시 ' +
            minutes +
            '분 ' +
            seconds +
            '초 입니다.'
        );
    },
}

print(Clock.getCurrentTime(new Date()));

print("===================== toLocaleString 사용법 ====================");


array = [1,'test',new Date()];
localestr = array.toLocaleString('en',{timeZone:'Asia/Seoul'});
print(localestr);




