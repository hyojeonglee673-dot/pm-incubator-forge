export const LogicalOperationExample = () => {
    const strictEquality = 10 === ("10" as any)
    const roughEquality = 10 == ("10" as any)
    const logicalAnd = true && false
    const logicalOr = true || false
    const bitwiseAnd = 5 & 4
    const bitwiseOr = 5 | 2

    return (
        <div>
            <h3>javascript 논리 연산자</h3>

            <pre>{
                `
console.log(10 === "10"); // 엄격한 동등 비교 (값과 타입 모두 비교) => ${strictEquality}
console.log(10 == "10"); // 느슨한 동등 비교 (값만 비교) => ${roughEquality}
console.log(true && false); // 논리 AND 연산 => ${logicalAnd}
console.log(true || false); // 논리 OR 연산 => ${logicalOr}
console.log(5 & 4); // 비트 AND 연산 => ${bitwiseAnd}
console.log(5 | 2); // 비트 OR 연산 => ${bitwiseOr}
                `
            }</pre>
        </div>
    )
}