let formPageIndex = JSON.parse(localStorage.getItem("pageIndex")) || 1
let formPage = document.getElementById("formContainer")

// multiple steps form display
const loadPage = () => {
    formPage.innerHTML = ""
    if (formPageIndex === 1) {
        formPage.innerHTML += ` 
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
    else if (formPageIndex === 2) {
        formPage.innerHTML += `
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

`
    }
    else if (formPageIndex === 3) {
        formPage.innerHTML += `  
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
        return
        endForm()
    }
}
loadPage()

// summary page display
const endForm = () => {
    formPage.innerHTML = ""
    formPage.innerHTML += "This is the summary page"
}

// next button function
const nextBtn = document.getElementById("nextBtn")
nextBtn.addEventListener("click", () => {
    // getting user details

    const users = JSON.parse(localStorage.getItem("users")) || []





    console.log(typeof (users))
    localStorage.setItem("users", JSON.stringify(users))

    if (formPageIndex === 1) {
        const namee = document.getElementById("name").value
        const email = document.getElementById("email").value
        const phone = document.getElementById("num").value
        const user = {
            name: namee,
            email: email,
            phone: phone
        }
        users.push(user)
        if (namee && email && phone) {
            formPageIndex++;

            loadPage();

        }
        else {
            console.log("input correct details ")

        }
    }
    else if (formPageIndex === 2) {
        const arcade = document.getElementById("arcade")
        const advanced = document.getElementById("advanced")
        const pro = document.getElementById("pro")
        if (localStorage.getItem("plan")) {
            formPageIndex++;

            loadPage();
        }
        else {
            console.log("Kindly select a subscription plan ")

        }
    }
    // else {
    //     endForm();
    // }
    console.log(formPageIndex)
    localStorage.setItem("pageIndex", formPageIndex)
    // window.location.href = "index.html"
});

arcade.addEventListener("click", () => {
    localStorage.setItem("plan", "Arcade")
})

advanced.addEventListener("click", () => {
    localStorage.setItem("plan", "Advanced")
})
pro.addEventListener("click", () => {
    localStorage.setItem("plan", "Pro")
})

