export const LogicalOperationExample = () => {
    const strictEquality = 10 === ("10"as any)
    const roughEquality = 10 == ("10" as any)
    const logicalAnd = true && false
    // 엔터 키 위에 \\|| 키를 Shift 누르고 입력하면 파이프(||)가 만들어짐
    const logicalOr = true || false
    const bitwiseAnd = 5 & 4
    const bitwiseOr = 5 | 2

    return (
        <div>
            <h3>javascript 논리 연산자</h3>

            <pre>{
                `
console. log(10 === "10")       // ${strictEquality}
console. log(10 == "10")        // ${roughEquality}
console. log(true && false)     // ${logicalAnd}
console. log(true || false)     // ${logicalOr}
console. log(5 & 4)             // ${bitwiseAnd}
console. log(5 | 2)             // ${bitwiseOr}
                `
            }</pre>
        </div>
    )  
}
