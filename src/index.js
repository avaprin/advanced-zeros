module.exports = function getZerosCount(number, base) {
    function maxFactPower(p,n) {
        let k = 0;
        let degree = 1;
        while (true)
        {
            degree *= p;
            let a = Math.floor(n / degree);
            if (a === 0)
                return k;
            k += a;
        }
    }
    function getPrime(num){
        var div = 2,res=[],max=0,degree=0;
        while(num>1){
            degree =0;
            max=div;
            while(num%div===0){
                num = Math.floor(num/div);
                ++degree;
            }
            res.push([max,degree]);
            ++div;
        }
        return res;
    }
    var prime = getPrime(base);
    for(let a of prime){
        a[0]=maxFactPower(a[0],number);
    }
    var minimum = Math.floor(prime[0][0]/prime[0][1]);
    for(let a of prime){
        minimum = Math.min(minimum,Math.floor(a[0]/a[1]));
    }
    return minimum;// your implementation
}