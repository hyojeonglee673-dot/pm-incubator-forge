export const LogicalOperationExample = () => {
    const strictEqual = 5 === ('5' as any); /// 엄격한 동등 비교
    const roughEqual = 5 == ('5' as any);   // 느슨한 동등 비교
    const logicalAnd = true && false;      // 논리 AND
    const logicalOr = true || false;       // 논리 OR
    const bitwiseAnd = 5 & 3;               // 비트 AND
    const bitwiseOr = 5 | 3;                // 비트 OR

    return (
        <div>
            <h2>Logical Operation Example</h2>
            <pre>{`
console.log("Strict Equal (5 === '5'): ", ${strictEqual});   // 엄격한 동등 비교
console.log("Rough Equal (5 == '5'): ", ${roughEqual});       // 느슨한 동등 비교
console.log("Logical AND (true && false): ", ${logicalAnd});  // 논리 AND
console.log("Logical OR (true || false): ", ${logicalOr});    // 논리 OR
console.log("Bitwise AND (5 & 3): ", ${bitwiseAnd});          // 비트 AND
console.log("Bitwise OR (5 | 3): ", ${bitwiseOr});            // 비트 OR
            `
            }</pre>        
        </div>
    )
}