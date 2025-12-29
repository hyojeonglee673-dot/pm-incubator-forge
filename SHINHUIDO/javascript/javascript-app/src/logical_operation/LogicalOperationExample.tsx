export const LogicalOperationExample = () => {
    const strictEquality = 10 === ("10" as any)
    const roughEquality = 10 === ("10" as any)
    const logicalAnd = true && false
    const logical0r = true || false
    const bitwiseAnd = 5 & 4
    const bitwise0r = 5 | 2

  return (
        <div>
        <h3>javascript 논리 연산자</h3>

            <pre>{
             `
console.log(10 === "10");     // ${strictEquality}
console.log(10 == "10");      // ${roughEquality}
console.log(true && false);   // ${logicalAnd}
console.log(true || false);   // ${logical0r}
console.log(5 & 4);           // ${bitwiseAnd}
console.log(5 | 2);           // ${bitwise0r}
             `
            }</pre>     
        </div>
    )
}
