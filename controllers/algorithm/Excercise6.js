//Excercise6
//Bài toán người du lịch
//Branch and Bound

const Excercise6BranchAndBound = (n) => {
    //Input Cost
    const max = 10000;
    const c = new Array(n+1);
    for (let i = 1; i <= n; i++){
        c[i] = new Array(n+1);
    };
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <=n; j++){
            if(i === j){
                c[i][j] = 0;
            } else {
                c[i][j] = max;
            }
        }
    }

    c[1][2] = 3;
    c[1][3] = 2;
    c[1][4] = 1;
    c[2][3] = 1;
    c[2][4] = 2;
    c[3][4] = 4;

    for (let i = 1; i <= n; i++){
        for (let j = 1; j <=n; j++){
            c[j][i] = c[i][j];
        }
    }
    
    console.log(c);


    //Initial
    const x = new Array(n+1);
    const t = new Array(n+1).fill(0);
    const Free = new Array(n+1).fill(true);
    Free[1] = false;
    x[1] = 1;
    let bestCofig = new Array(n+1);
    let minSpending = max;

    const result = [];

    //Branch And Bound
    function Try(i){
        for(let j = 2; j <= n; j++){
            if (Free[j]) {
                console.log("j", j);
                console.log("i", i);
                x[i] = j;
                t[i] = t[i-1] + c[x[i-1]][j];

                if(t[i] + c[j][1] < minSpending) {
                    if(i === n){
                        result.push(x.slice(1, n+1));
                        bestCofig = x.slice(1, n+1);
                        minSpending = t[i] + c[j][1];
                        console.log(t[i] + c[j][1]);
                    } else {
                        Free[j] = false;
                        Try(i + 1);
                        Free[j] = true;
                    }
                }
            }
        }
    }

    Try(2);
    return bestCofig;
}


const Excercise6 = (req, res) => {
    const n = 4;
    const body = {};
    body.result1 = Excercise6BranchAndBound(n);
    res.json(body);
}

export default Excercise6;