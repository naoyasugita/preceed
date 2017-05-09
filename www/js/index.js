let con
window.onload = function() {
    var restext = document.getElementById("restext");
    var savebtn = document.getElementById("add");
    con = new Contact("datalist");
    // var deletebtn = document.getElementById("delete");
    let arr = [];
    let num = 0;
    if (!window.localStorage) {
        restext.innerHTML = "web Storageに対応しておりません。";
        return;
    }
    savebtn.addEventListener("click", function() {
        var name = document.getElementById("username").value;
        var mail = document.getElementById("email").value;
        if ((name == null || name == "") || (mail == null || mail == "")) {
            alert("データを入力してください");
            return;
        }

        con.add(name, mail);
        console.log(con);
        // display();
    }, true);
    // function display() {

    // };
}
