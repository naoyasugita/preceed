let lo
window.onload=function(){
    lo = new LocalStorage("datalist");
    var d = lo.load();
    for ( var key in d ) {
        var dl = document.createElement("a");
        dl.id = "restext";
        var data = d[key];
        console.log(key+":" + data);
        document.getElementById("res").appendChild(dl);
        dl.innerHTML = "名前<br>" + key + "<br>" + "メールアドレス<br>" + data + "<br><br>";
    }
}