//Excercise4
//Bài toán phân tích số
//BackTracking

const Excercise4BackTracking = (n) => {
    //Initial
    const x = new Array(n+1);
    x[0] = 1;
    const t = new Array(n+1);
    t[0] = 0;
    const result = [];

    function Try(i){
        for (let j = x[i-1]; j <= n; j++){
            x[i] = j;
            t[i] = t[i-1] + x[i];
            if (t[i] == n) {
                result.push(x.slice(1, i+1));
            } else if (t[i] + x[i] <= n) {
                Try(i+1);   
                //Vòng j = 1: Đi từ i = 1 -> 6, sau đó rơi vào if trên, back ra i = 5
                //Vào vòng j = 2: i+1 = 6, back ra i = 5
                //Vào vòng j = 3: i+1 = 6, back ra i = 5
                //Vào vòng j = 6: i+1 = 6, hết vòng 5 (hết j), back ra i = 4
                //Vào vòng j = 2: i+1 = 5, rơi vào if trên ...
            }
        }
    }
    Try(1);
    return result;
}


const Excercise4 = (req, res) => {
    const n = 6;
    const body = {};
    body.result1 = Excercise4BackTracking(n);
    res.json(body);
}

export default Excercise4;