export const LogicalOperationExample = () => {
    const strictEquality = 10 === ("10" as any)
    const roughEquality = 10 == ("10" as any)
    const logicalAnd = true && false
    const logicalOr = true || false
    const bitwiseAnd = 5 & 4
    const bitwiserOr = 5 | 2

    return (
        <div>
            <h3>JavaScript 논리 연산자 예제</h3>
            
            <pre>{
                ` 
console. log(10 === "10")               // ${strictEquality} 엄격한 동등 비교 (값과 타입 모두 비교)
console. log(10 == "10")                // ${roughEquality} 느슨한 동등 비교 (값만 비교)
console. log(true && false)             // ${logicalAnd} 논리 AND 연산자
console. log(true || false)             // ${logicalOr} 논리 OR 연산자
console. log(5 & 4)                     // ${bitwiseAnd} 비트 AND 연산자
console. log(5 | 2)                     // ${bitwiserOr} 비트 OR 연산자
                `
            }</pre>
        </div>
    )
}

