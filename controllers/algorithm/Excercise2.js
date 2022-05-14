//Excercise2
//Liệt kê các tập con k phần tử (của n phần tử) theo thứ tự từ điển

//Generate
const Excercise2Generate = (n, k) => {
    //Initial
    let i = k;
    const x = new Array(k+1);
    for(let i = 0; i < k + 1; i++){
        x[i] = i;
    }
    const result = [];

    //Generate
    result.push(x.slice(1, k+1));
    while(i > 0) {
        if(x[i] < n-k+i) {
            x[i] += 1;
            for(let j = i+1; j <=k; j++) {
                x[j] = x[j-1] + 1;
            }
            result.push(x.slice(1, k+1));
            i = n;
        } else {
            i = i-1;
        }
    }

    return result;
    
}

//BackTracking
const Excercise2BackTracking = (n, k) => {
     //Initial
     const x = new Array(k+1);
     for(let i = 0; i < k + 1; i++){
         x[i] = i;
     }
     const result = [];

     //BackTracking
     function Try(i) {
        for (let j = x[i-1] + 1; j <= n-k+i; j++) {
            x[i] = j;
            if (i == k) {
                result.push(x.slice(1, k+1));
            } else {
                Try(i+1);
            }
        }
     }

     Try(1);
     return result;
}

const Excercise2 = (req, res) => {
    const n = 10;
    const k = 4;
    const body = {};
    body.result1 = Excercise2Generate(n, k);
    body.result2 = Excercise2BackTracking(n, k);
    
    res.json(body);
};

export default Excercise2;