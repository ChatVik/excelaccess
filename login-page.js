const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Vikas" && password === "99"
	||username === "Rohit" && password === "100"
	||username === "Abhishikha" && password === "101"
	||username === "Prerna" && password === "102"
	||username === "Kashish" && password === "103"
	||username === "Shabnam" && password === "104"
	||username === "Kasis" && password === "105"
	||username === "Ashish" && password === "106"
	||username === "Rahul" && password === "107"
	||username === "Arushi" && password === "108"
	||username === "Sunekha" && password === "109"
	||username === "Surjeet" && password === "110"
	||username === "Rishi" && password === "111"
	||username === "Danish" && password === "112"
	||username === "Shiv" && password === "113"
	||username === "Harshit" && password === "114"
	||username === "Meenakshi" && password === "115"
	||username === "Shweta" && password === "116"
	||username === "Rajni" && password === "117"
	||username === "Priya" && password === "118"
	||username === "Atul" && password === "119"
	||username === "Vivek" && password === "120"
	||username === "Payal" && password === "121"
	||username === "Muskan" && password === "122"
	||username === "Shivani" && password === "123"
	||username === "Shivani" && password === "124"
	||username === "Shivani" && password === "125"
	||username === "Sheetal" && password === "126"
	||username === "Diksha" && password === "127"
	||username === "Palak" && password === "128"
	||username === "Vishal" && password === "129"
	||username === "Jai" && password === "130"
	||username === "Mohammad" && password === "131"
	||username === "Anurag" && password === "132"
	||username === "Harish" && password === "133"
	||username === "Ankur" && password === "134"
	||username === "Aryan" && password === "135"
	||username === "Ankita" && password === "136"
	||username === "Deepak" && password === "137"
	||username === "Rishav" && password === "138"
	||username === "Divya" && password === "139"
	||username === "Ritika" && password === "140"
	||username === "Anshit" && password === "141"
	||username === "Tanvi" && password === "142"
	||username === "Pratibha" && password === "143"
	||username === "Ritika" && password === "144"
	||username === "Joyti" && password === "145"
	||username === "Simran" && password === "146"
	||username === "Swati" && password === "147") {
        alert("Successfully logged in, Press ok for strat the exam NOTE Don't Exit your Exam or Press Close button");
        window.location="examjs.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})