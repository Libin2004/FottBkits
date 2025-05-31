const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
registerBtn.addEventListener('click',()=>{
    container.classList.add("active")
});
loginBtn.addEventListener('click',()=>{
    container.classList.remove("active")
});

// const cartbtn = document.querySelector(".cart-btn")
// const payment= document.querySelector(".payment")
// const close=document.querySelector(".close")

// cartbtn.addEventListener("click", ()=>{
//     payment.style.display = "inline";

// });

// close.addEventListener("click", () =>{
//     payment.style.display = "none";
// });

function fun(){
   var c= document.getElementById('pay')
   c.style.display="flex"


}
function cl(){
    var d= document.getElementById('pay')
   d.style.display="none"
}

    


// document.getElementById('cart-btn').addEventListener('click', function() {
//     document.getElementById('paymentModal').style.display = 'block';
// });
 
// document.querySelector('.close').addEventListener('click', function() {
//     document.getElementById('paymentModal').style.display = 'none';
// });
 
// window.addEventListener('click', function(event) {
//     if (event.target === document.getElementById('paymentModal')) {
//         document.getElementById('paymentModal').style.display = 'none';
//     }
// });
 
// document.getElementById('paymentForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Payment Submitted');
//     document.getElementById('paymentModal').style.display = 'none';
// });
