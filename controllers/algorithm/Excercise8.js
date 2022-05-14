//Excercise8
//Fibonaci
//Recursive

const Excercise8Recursive = (n) => {
    function Try(n){
        if (n==1 || n==2) {
            return 1;
        } else {
            return Try(n-1) + Try(n-2);
        }
    }
    return Try(n);
}

const Excercise8 = (req, res) => {
    const n = 7;
    const body = {};
    body.result1 = Excercise8Recursive(n);
    res.json(body);
}

export default Excercise8;