const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
    // var ans= calculateSum(100);
    var sum= req.query.hello
    res.send('Hello World!' + calculateSum(sum));
})

function createUser(req,res){
    
}

app.post('/createUser', createUser);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
function calculateSum(counter){

    var sum =0;
    for (var i=0;i<counter;i++){
        sum+=i;
    }
    return sum;
    console.log(sum);
}

calculateSum(100);