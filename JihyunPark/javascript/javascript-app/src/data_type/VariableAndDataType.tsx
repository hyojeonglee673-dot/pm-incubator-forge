export const VariableAndDataType = () => {
    let firstNumber = 10;
    const secondConstant = "Hello";
    var thirdBoolean = true;
    let fourthNull = null;
    let fifthUndefined = undefined;
    let sixthMap = { key: "value" };
    let seventhArray = [1, 2, 3];

    // 변수 작성법
    // 1. 맨 앞에 let, const, var 키워드 작성
    // 2. 변수 이름 작성 (camelCase 권장)
    // 3. 등호(=) 작성
    // 4. 값 작성
    // 5. 세미콜론(;) 작성 (생략 가능)

    return (
        <div>
            <h3>javascript 변수와 데이터 타입</h3>
            <pre>{
                `
let firstNumber = ${firstNumber} // 숫자 타입(Number)
const secondConstant = "${secondConstant}" // 문자열 타입(String)
var thirdBoolean = ${thirdBoolean} // 참/거짓 (Boolean)
let fourthNull = ${fourthNull} // Null 타입
let fifthUndefined = ${fifthUndefined} // Undefined 타입
let sixthMap = ${sixthMap} // Object 타입, Map 형식
let sixthMapJasonify = ${JSON.stringify(sixthMap)} // Object 타입을 JSON 문자열로 변환
let seventhArray = [${seventhArray}] // 배열 타입 (Array)
                `
            }</pre>
        </div>
    )
}

// JSON.stringify(변수이름) 형태로 작성하면
// 해당 변수 이름이 Object라는 전제하에 Object 내부의 내용을 출력하게 됩니다.
