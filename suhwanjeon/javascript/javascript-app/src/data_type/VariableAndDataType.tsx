export const VariableAndDataType = () => {
    let firstNumber = 10;
    const secondNumber = "Hello"
    var thridBoolean = true;
    let fourthNull = null
    let fifthUndefined = undefined;
    
    //변수 작성법
    // 1. 맨 앞에 let, const, var 중 하나를 작성한다.
    // 2. 변수 이름을 작성한다.
    // 3. 변수의 값을 지정한다. 

    // 변수의 이름이 필요한 이유는 무엇일까요? 
    // 100개의 점수를 합산해서 평균을 계산하는 프로그램 
    // 평균을 계산할 건데 let z <- 이름이 이와 같으면 z가 뭔지 알 수 있을까요? 없을까요? <- 알 수 없죠. 
    // 명시성이 없기 때문에 z라는 변수가 무엇을 위한 정보인지 알 수 없습니다. 
    // 이 문제를 해결하려면 명시성을 주면 해결됩니다. 
    // 고로 let average 혹은 mean <-  형태로 작성해주면 됩니다. 
    // 실제로 좀 옛날 회사나 꽤 많은 요상한 회사로 갈 경우
    // 아래와 같은 변수명을 볼 수 있습니다. 
    // let fsdfh = 100; <- 모든 코드가 이런 형태로 되어 있습니다. 
    // 보는 순간 정신을 잃어버리는 것이죠. 
    // export const VADT = () => {} <- { 블라 블라 블라 }
    // VADT가 뭐지???? 
    // -> 실제로 PO가 된다고 한다면, 이런 걸 잘 찾고 명확한 명칭을 할 수 있도록 알려야 합니다. 
    
    // Map 형식  
    // 사물함 열쇠 <- key 
    // 사물함 내용물 <- "value"
    let sixthMap = { key: "value" };
    
    // Array (배열) 형식
    // 1 ~ 1000까지 숫자를 적어야 할 때 
    // first, second, third, fourth, fifth, sixth
    // 일일히 변수 이름을 지정하려고 하면 피곤함.
    // 그러니 그냥 Array라는 배열을 하나 잡아높고 필요한 값들을 설정 
    let seventhArray = [1, 2, 3];
    
    return (
        <div>
            <h3>javascrpit 변수와 데이터 타입</h3>
            {/* Pre 태그 사이에 있는 내용들은 전체가 웹 페이지에 그대로 반영됩니다. */} 
            <pre>{
                `
                let firstNumber = ${firstNumber}            // number 타입 (숫자 타입)
                const secondNumber = "${secondNumber}"      // string 타입 (문자열 타입)
                var thridBoolean = ${thridBoolean}          // boolean 타입 (참/거짓 타입)
                let fourthNull = ${fourthNull}              // null 타입 (값이 없음)
                let fifthUndefined = ${fifthUndefined}      // undefined 타입 (정의되지 않음)
                let sixthMap = ${sixthMap}                  // object 타입 (객체 타입)
                let sixthMapJsonify = ${JSON.stringify(sixthMap)}  // object 타입 해석 (객체 타입) - JSON.stringify() 사용 시 문자열로 변환 (해석)
                let seventhArray = ${seventhArray}          // Array 타입 (배열 타입) 
                `
                
                }</pre>
        </div>
    )
}

