//Excercise3
//Liệt kê hoán vị

//Generate


//BackTracking
const Excercise3BackTracking = (n) => {
    //Initial
    const x = new Array(n+1);
    const Free = new Array(n+1).fill(true);
    const result = [];

    //BackTracking
    function Try(i){
        for(let j = 1; j <= n; j++){
            if (Free[j]){
                x[i] = j;
                if (i == n) {
                    result.push(x.slice(1, n+1));
                } else {
                    Free[j] = false;
                    Try(i+1);
                    Free[j] = true;
                }
            }
        }
    }

    Try(1);
    return result;
}

const Excercise3 = (req, res) => {
    const n = 5;
    const body = {};
    body.result2 = Excercise3BackTracking(n);
    
    res.json(body);
}

export default Excercise3;