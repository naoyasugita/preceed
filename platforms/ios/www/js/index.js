window.onload=function(){
var restext = document.getElementById("restext");
var savebtn = document.getElementById("save");
var deletebtn = document.getElementById("delete");
let arr = [];
if (!window.localStorage) {
    restext.innerHTML = "web Storageに対応しておりません。";
    return;
}
savebtn.addEventListener("click", function() {
    var t = document.getElementById("uname").value;
    var n = document.getElementById("email").value;
    var m = document.getElementById("message").value;

    if ((t == null || t == "") || (n == null || n == "") || (m == null || m == "")) {
        restext.innerHTML = "データを入力してください";
        return;
    }

    // var arr = '"' + count + '":{"uname":' + t + "," + '"email":' + n + "," +'"message":' + m +"},"

    arr.push({"uname":t,"email":n,"message":m});
    localStorage.setItem('datalist', arr);

    window.localStorage.setItem("datalist", JSON.stringify(arr));
    restext.innerHTML = "データを保存しました";
    display();
}, true);


window.addEventListener("storage", function(evt) {
  console.log(evt.storageArea);
}, true);

localStorage.setItem("hoge", "bbb");

function display() {
       let data = JSON.parse(window.localStorage.getItem("datalist"));
        for (let i in data){
            console.log("name;" + data[i].uname);
            console.log("email:" + data[i].email);
            console.log("message:" + data[i].message);
            console.log("-----------------");
        }
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


