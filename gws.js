let points =0 ;
let cpoints =0 ;
let i =0;
let ids = [1,2,3];
let op = document.getElementById('point');
let cp = document.getElementById('cpoint');
let random =0;

function generate()
{
    random = Math.floor(Math.random()* 3-1 + 1);
    console.log(random);
}
const reset = ()=>
{
    points =0;
    cpoints =0;
    op.innerHTML = 0;
    cp.innerHTML = 0;
}

function check(i)
{
    if(i == random)
    {
        alert("Match Draw😁");
    }
    else if(i > random)
    {
        points = points + 1;
        op.innerHTML = points;   
    }
    else if(i < random)
    {
        cpoints = cpoints + 1;
        cp.innerHTML = cpoints;
    }
}
function checks()
{
     i = 0;
    check(i)
}
function checkg()
{
     i =1;
     check(i);
}
function checkw()
{
     i = 2;
     check(i);
}
