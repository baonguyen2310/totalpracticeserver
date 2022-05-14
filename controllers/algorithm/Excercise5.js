//Excercise5
//Bài toán xếp hậu
//BackTracking

const Excercise5BackTracking = (n) => {

    const x = new Array(n + 1);   //i là hàng, x[i] là cột trên hàng đó
    const a = new Array(n + 1).fill(true);    //Free cột
    //Tính chất đường chéo
    const b = new Array(2 * n + 1).fill(true);  //Free đường chéo 1
    const c = new Array(2 * n + 1).fill(true);  //Free đường chéo 2
    //Mặc dù mục tiêu là 1-n -> n-1, nhưng js thì negative index là từ cuối dãy
    //Không nên dùng c.at(-2) vì lúc gán sẽ lỗi
    //Nên ta map 1-n:n-1 thành 1:2n, bằng cách 1-n+n:n-1+n

    const result = [];  //Kết quả là 1 mảng gồm nhiều cấu hình được push vào
    //Mỗi cấu hình gồm n quân hậu, mỗi quân hậu gồm 2 phần tử i(luôn từ 1 đến n), x[i]

    function Try(i) {
        for (let j = 1; j <= n; j++) {
            if (a[j] && b[i + j] && c[i-j+n]) {
                x[i] = j;
                if (i == n) {
                    result.push(x.slice(1, n + 1));
                } else {
                    a[j] = b[i + j] = c[i-j+n] = false;
                    Try(i + 1);
                    a[j] = b[i + j] = c[i-j+n] = true;
                }
            }
        }
    }

    Try(1);
    return result;
}


const Excercise5 = (req, res) => {
    const n = 5;
    const body = {};
    body.result1 = Excercise5BackTracking(n);
    res.json(body);
}

export default Excercise5;