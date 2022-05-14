//EXcercise1
//Liệt kê các cấu hình nhị phân n chữ số

//Generate
const Excercise1Generate = (n) => {
    const result = [];
    const x = new Array(n+1).fill(0); //n+1 do js tính từ index 0
    //cosnt x = Array.from(Array(n).fill(0));
    
    result.push(x.slice(1, n+1));
    let i = n;
    while (i > 0) {
        if (x[i] === 0){
            x[i] = 1;
            for(let j = i + 1; j <= n; j++){
                x[j] = 0;
            }
            i = n;
            result.push(x.slice(1, n+1)); //Không dùng push(x) vì tham chiếu cùng 1 bộ nhớ, dùng spread hoặc slice
        }else {
            i = i - 1;
        }
    }
    return result;
};

//BackTracking
const Excercise1BackTracking = (n) => {
    const result = [];
    const x = new Array(n+1).fill(0);
    function Try(i){
        for (let j = 0; j <=1; j++){
            x[i] = j;
            if (i === n) {
                result.push(x.slice(1, n+1));
            } else {
                Try(i + 1);
            }
        }
    }
    Try(1);
    return result;
};

const Excercise1 = (req, res) => {
    const n = 3;
    const body = {};
    body.result1 = Excercise1Generate(n);
    body.result2 = Excercise1BackTracking(n);
    res.json(body);
};

export default Excercise1;