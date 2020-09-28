let userLogged = Cookies.get("userLogin");
let userToken = Cookies.get("getToken");

if (userLoggedIn == undefined) {
    document.getElementById("welcome-user").innerhtml = "Not valid credentials!";
    let loginButton = document.createElement("Button");
    loginButton.innerHTML = "Log In Now";
    document.getElementById("loginButton").appendChild("loginButton");
} else {
    document.getElementById("welcome-user").innerHTML = "<h2> Welcome </h2>" = "<h2>" + userLogged + "</h2>";
    let logout = document.createElement("Button");
    logout.innerHTML = "Logout";
    document.getElementById("logoutButton").appendChild(logout);
    showColors();
};

//no user logged in function
function invalidUser() {
    window.open("./index.html", "_self");
}

document.getElementById("loginButton").addEventListener("click", invalidUser);

//logout function
function logOut() {
    window.open("../index.html", "_self");
    Cookies.remove("userLogin");
    Cookies.remove("getToken")
}

document.getElementById("logoutButton").addEventListener("click", logOut);

//Insert Colors
function insertColors() {
    let ajax = new XMLHttpRequest;
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let insertColors = JSON.parse(this.responseText);
            for (i = 0; i < insertColors.data.length; i++) {
                let abundanceOfColors = document.getElementById("color-insert");
                document.getElementById("color-name").innerHTML += "<h3>Name: " + insertColors.data[i].name + "</h3>";
                document.getElementById("color-year").innerHTML += "<h4>Year: " + insertColors.data[i].year + "</h4>";
                document.getElementById("color-box").innerHTML += "<div class='color-box'></div>";
                abundanceOfColors[i].style.backgroundColor = insertColors.data[i].color;
            }
        }
    }
    ajax.open("GET", "https://reqres.in/api/unknown", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();

}