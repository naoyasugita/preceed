window.onload=function(){
var restext = document.getElementById("restext");
var savebtn = document.getElementById("save");
var deletebtn = document.getElementById("delete");
if (!window.localStorage) {
    restext.innerHTML = "web Storageに対応しておりません。";
    return;
}

savebtn.addEventListener("click", function() {
    var t = document.getElementById("uname").value;
    var n = document.getElementById("email").value;
    var m = document.getElementById("message").value;
    var count = 0
    if ((t == null || t == "") || (n == null || n == "") || (m == null || m == "")) {
        restext.innerHTML = "データを入力してください";
        return;
    }
    var datalist = {
        uname: t,
        email: n,
        message:m
    }

    window.localStorage.setItem("datalist", JSON.stringify(datalist));
    restext.innerHTML = "データを保存しました";
    count ++
    display();
}, true);

function display() {
    var d = JSON.parse(window.localStorage.getItem("datalist"));
    var dl = document.createElement("dl");
    dl.id = "resdata";
    document.getElementById("res").appendChild(dl);
    var dt = document.createElement("dt");
    var dd = document.createElement("dd");
    var dm = document.createElement("dm");
    document.getElementById("resdata").appendChild(dt);
    document.getElementById("resdata").appendChild(dd);
    document.getElementById("resdata").appendChild(dm);
    dt.innerHTML = d.uname;
    dd.innerHTML = d.email;
    dm.innerHTML = d.message;

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