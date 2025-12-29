export const LogicalOperationExample = () => {
    const strictEquality = 10 === ("10" as any)
    const roughEquality = 10 == ("10" as any)
    const logicalAnd = true && false
    const logicalOr = true || false
    const bitwiseAnd = 5 & 4
    const bitwiseOr = 5 | 2
    
    return(
        <div>
            <h3>Javascript 변수와 데이터 타입</h3>
            <pre>{
                // `는 ~키 아래 있는 기호
                `
                console.log(10 ==="10");           // ${strictEquality}
                console.log(10 =="10");           // ${roughEquality}
                console.log(true && false);           // ${logicalAnd}
                console.log(true || false);           // ${logicalOr}
                console.log(5 & 4);           // ${bitwiseAnd}
                console.log(5 | 2);           // ${bitwiseOr}
                `
            
            }</pre>
        </div>
    )
}