window.onload=function(){
var restext = document.getElementById("restext");
var savebtn = document.getElementById("save");
var deletebtn = document.getElementById("delete");
let arr = [];
let num = 0;
if (!window.localStorage) {
    restext.innerHTML = "web Storageに対応しておりません。";
    return;
}
savebtn.addEventListener("click", function() {
    var t = document.getElementById("username").value;
    var n = document.getElementById("email").value;

    if ((t == null || t == "") || (n == null || n == "")) {
        check.innerHTML = "データを入力してください";
        return;
    }
    arr.push({"username":t,"email":n});

    var con = new Contact("datalist");
    con.save(arr);
    console.log(con);
    check.innerHTML = "データを保存しました<br>";
    display();
}, true);
function display() {
        var lo = new LocalStorage("datalist");
        var d = lo.load();
        console.log(num);
        console.log(d[num].username);
        var dl = document.createElement("a");
        dl.id = "restext";
        document.getElementById("res").appendChild(dl);
        var dt = document.createElement("p1");
        document.getElementById("restext").appendChild(dt);
        dt.innerHTML = "name:" + d[num].username + "<br>" + "mail:" + d[num].email + "<br><br>";
        num += 1;
};

deletebtn.addEventListener("click", function() {
    window.localStorage.clear();
    var res = document.getElementById("res");
    for (var i = 0; i < res.childNodes.length; i++) {
        res.removeChild(res.childNodes.item(i));
    }
    restext.innerHTML = "保存データを削除しました。";
}, true);
}