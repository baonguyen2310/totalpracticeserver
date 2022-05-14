//Excercise9
//Tháp hà nội
//Recursive

const Excercise9Recursive = (n) => {
    function Try(n, x, y, z){ //Chuyển n đĩa từ x sang y với z là trung gian
        if (n==1) {
            console.log(x, ' --> ', y);
        } else {
            Try(n-1, x, z, y);
            Try(1, x, y, z);
            Try(n-1, z, y, x);
        }
    }
    Try(n, "A", "B", "C");
}


const Excercise9 = (req, res) => {
    const n = 4;
    const body = {};
    body.result1 = Excercise9Recursive(n);
    res.json(body);
}

export default Excercise9;