let formPageIndex = localStorage.getItem("pageIndex") || 1
const formPage = document.getElementById("formContainer")
const loadPage = () => {

    if (formPageIndex = 1) {
        formPage.innerHTML = ` 
        <h2>Personal Info</h2>
        <p>Please provide your name, email address and phone number</p>
        
        <div>
            <label for="name">Name</label>
            <input type="text" name="" id="name" placeholder="e.g Blessing John">
        </div>
        <div>
            <label for="email">Email address</label>
            <input type="text" name="" id="email" placeholder="e.g blessingjohn@gmail.com">
        </div><div>
            <label for="num">Phone number</label>
            <input type="number" name="" id="num" placeholder="+2348123456789">
        </div>
        
        <button id="nextBtn">Next</button>
        `
    }
    else if (formPageIndex = 2) {
        formPage.innerHTML = `<form action="">
 <h2>Select your plan</h2>
<p>You have the option of monthly or yearly billing.   </p>

<div id="arcade">
<p>Arcade</p>
<p>9$/mo</p>
</div>
<div id="advanced">
<p>Advanced</p>
<p>15$/mo</p>
</div><div id="pro">
<p>Pro</p>
<p>150$/Yr</p>
</div>

 <button id="nextBtn">Next</button>
</form> 

`
    }

    else if (formPageIndex = 3) {
        formPage.innerHTML = `  
        // <form action="">
    <!-- Add-ons Step -->
<h2>Choose Add-ons</h2>
<p>Select additional features to enhance your subscription.</p>


<br>
<label>
<input type="checkbox" class="addon" data-price="10">
Priority Customer Support — $10/month
</label>
<br>
<label>
<input type="checkbox" class="addon" data-price="15">
Team Collaboration (up to 5 users) — $15/month
</label>
<br>
<label>
<input type="checkbox" class="addon" data-price="20">
Advanced Analytics & Reports — $20/month
</label>

<div class="total-box">
<strong>Total Add-ons:</strong> $<span id="addons-total">0</span>/month
</div>


     <button id="nextBtn">Next</button>
//  </form>`
    }

    else {
        endForm()
    }
}

loadPage()



const endForm = () => {

}
// next b
// const next = () => {
//     if (formPageIndex < 4) {
//         formPageIndex++
//     }
// }

const nextBtn = document.getElementById("nextBtn")
nextBtn.addEventListener("click", () => {
    formPageIndex++;
    if (formPageIndex < 3) {
        loadPage();
    }
    else {
        endForm();
    }
    console.log(formPageIndex)
    localStorage.setItem("pageIndex", formPageIndex)
    // window.location.href = "index.html"
});

