//Excercise7
//Giai thừa
//Recursive

const Excercise7Recursive = (n) => {
    function Try(n){
        console.log(n);
        if (n < 2) {
            return 1;
        } else {
            console.log(n);
            return n * Try(n-1);
        }
    }
    return Try(n);
}


const Excercise7 = (req, res) => {
    const n = 6;
    const body = {};
    body.result1 = Excercise7Recursive(n);
    res.json(body);
}

export default Excercise7;