let formPageIndex = JSON.parse(localStorage.getItem("pageIndex")) || 1
let formPage = document.getElementById("formContainer")
let page1 = document.getElementById("page1")
let page2 = document.getElementById("page2")
let page3 = document.getElementById("page3")
let page4 = document.getElementById("page4")

// multiple steps form display
const loadPage = () => {
    formPage.innerHTML = ""
    if (formPageIndex === 1) {
        page1.style.backgroundColor = "white"
        page1.style.color = "navy"

        formPage.innerHTML += ` 
        <h2>Personal Info</h2>
        <p>Please provide your name, email address and phone number</p>
        
        <div>
            <label for="name">Name</label> <br>
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
        page1.style.backgroundColor = "none"

        page2.style.backgroundColor = "white"
        page2.style.color = "navy"

        formPage.innerHTML += `
 <h2>Select your plan</h2>
<p>You have the option of monthly or yearly billing.   </p>

<div id="arcade" class="plan">
<img src="assets/images/icon-arcade.svg" alt="">


<p>Arcade</p>
<p>9$/mo</p>
</div>
<div id="advanced" class="plan">
<img src="assets/images/icon-advanced.svg" alt="">

<p>Advanced</p>
<p>15$/mo</p>
</div>
<div id="pro" class="plan">
<img src="assets/images/icon-pro.svg" alt="">

<p>Pro</p>
<p>150$/Yr</p>
</div>

 <button id="nextBtn">Next</button>

`
    }
    else if (formPageIndex === 3) {
        page1.style.backgroundColor = "none"
        page2.style.backgroundColor = "none"

        page3.style.backgroundColor = "white"
        page3.style.color = "navy"

        formPage.innerHTML += `  
    <!-- Add-ons Step -->
<h2>Choose Add-ons</h2>
<p>Select additional features to enhance your subscription.</p>
<br>
<label>
<input type="checkbox" class="addon" data-price="10" id="support">
Priority Customer Support — $10/month
</label>
<br>
<label>
<input type="checkbox" class="addon" data-price="15" id="collab">
Team Collaboration (up to 5 users) — $15/month
</label>
<br>
<label>
<input type="checkbox" class="addon" data-price="20" id="reports">
Advanced Analytics & Reports — $20/month
</label>

<div class="total-box">
<strong>Total Add-ons:</strong> $<span id="addons-total">0</span>/month
</div>


     <button id="nextBtn">Next</button>`
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
    let user = {}
    if (formPageIndex === 1) {
        const namee = document.getElementById("name").value
        const email = document.getElementById("email").value
        const phone = document.getElementById("num").value
        // const user = {
        //     name: namee,
        //     email: email,
        //     phone: phone
        // }
        user.name = namee
        user.email = email
        user.phone = phone
        users.push(user)
        if (namee && email && phone) {
            formPageIndex++;
            users.push(user)
            localStorage.setItem("user", JSON.stringify(user))

            localStorage.setItem("users", JSON.stringify(users))

            loadPage();

        }
        else {
            console.log("input correct details ")

        }
    }
    else if (formPageIndex === 2) {
        let plan = localStorage.getItem("plan")
        console.log(typeof (plan))

        if (plan) {
            formPageIndex++;
            let user = localStorage.getItem("user")

            user.plann = plan
            users.push(user)
            localStorage.setItem("pageIndex", formPageIndex)

            loadPage();

        }
        else {
            console.log("Kindly select a subscription plan ")

        }

        const arcade = document.getElementById("arcade")
        const advanced = document.getElementById("advanced")
        const pro = document.getElementById("pro")
        arcade.addEventListener("click", () => {
            localStorage.setItem("plan", "Arcade")
        })

        advanced.addEventListener("click", () => {
            localStorage.setItem("plan", "Advanced")
        })
        pro.addEventListener("click", () => {
            localStorage.setItem("plan", "Pro")
        })
    }

    else if (formPageIndex === 3) {
        const collab = document.getElementById("collab")
        const report = document.getElementById("report")
        const support = document.getElementById("support")
        const addonCheckboxes = document.querySelectorAll(".addon");
        // const totalDisplay = document.getElementById("addons-total");

        addonCheckboxes.forEach(cb => {
            cb.addEventListener("change", () => {
                let total = 0;
                addonCheckboxes.forEach(item => {
                    if (item.checked) {
                        total += parseInt(item.getAttribute("data-price"));

                    }
                    localStorage.setItem("totalAddons", total)
                    console.log(item)

                });
            });

        });

        if (localStorage.getItem("totalAddons")) {
            formPageIndex++;
            let user = localStorage.getItem("user")

            let addOns = JSON.parse(localStorage.getItem("totalAddons"))
            user.addOns = addOns
            users.push(user)
            localStorage.setItem("pageIndex", formPageIndex)

            endForm();
        }
        else {
            console.log("add addonS ")
            // endForm()

        }

    }
    localStorage.setItem("user", JSON.stringify(user))

    localStorage.setItem("users", JSON.stringify(users))

    // else {
    //     endForm();
    // }
    console.log(formPageIndex)
    localStorage.setItem("pageIndex", formPageIndex)
    // window.location.href = "index.html"
});

const addOns = JSON.parse(localStorage.getItem("addOns")) || []
const adds = {}



