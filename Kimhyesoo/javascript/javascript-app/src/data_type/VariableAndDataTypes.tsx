export const VariableAndDataTypes = () => {
    let firstNumber = 10;
    const secondConstant = "Hello";
    var thirdBoolean = true;
    let fourthNull = null;
    let fifthUndefined = undefined;
    let sixthMap = { key: "value"};
    let seventhArray = [1, 2, 3];
    return(
        <div>
            <h3>Javascript 변수와 데이터 타입</h3>
            <pre>{
                // `는 ~키 아래 있는 기호
                `
                let firstNumber = ${firstNumber}           //숫자타입(Number)
                const secondConstant = ${secondConstant}   //문자열타입(string)
                var thirdBoolean = ${thirdBoolean}         //참/거짓타입(boolean)
                let fourthNull = ${fourthNull}             //NULL타입(null)
                let fifthUndefined = ${fifthUndefined}     //정의되지않음(undefined)
                let sixthMap = ${sixthMap}                 //객체타입(object)
                let seventhArray = ${seventhArray}         //배열타입(Array)
                `
            
            }</pre>
        </div>
    )
}