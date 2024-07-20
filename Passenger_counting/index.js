let a
function click_me()
{
a=document.getElementById('count').innerText
a++;
document.getElementById('count').innerText=a
}

function save_btn()
{
    console.log(a)
    document.getElementById("entry").textContent+=a+" - "
    document.getElementById("count").innerText=0
}

// function sum()
// {
//     let f=document.getElementById("number1").value
//     let b=document.getElementById("number2").value
//     let add= parseInt(f) + parseInt(b)
//     document.getElementById("ans").innerText="Sum:" +add
// }
