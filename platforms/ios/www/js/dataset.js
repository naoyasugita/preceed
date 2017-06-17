let lo
window.onload=function(){
    lo = new LocalStorage("datalist");
    var d = lo.load();
    var count = 0;

    let height = 84
    let space = 10

    let buttons = document.getElementById('buttons')

    for ( var key in d ) {
        /*
        console.log(count);
        var dl = document.createElement("a");
        var ele = document.createElement('div id="a"');
        var back = document.getElementById("back");
        ele.innerHTML= '<div><button type="submit" class="edit">編集</button><p id="res' + count + '"></p></div>';

        var buttons = document.getElementById("buttons");

        ele.appendChild(back);
        buttons.appendChild(ele);
        var data = d[key];
        document.getElementById("res" + count).appendChild(dl);
        dl.innerHTML = "名前:" + key + "<br>" + "メールアドレス:" + data + "<br>";
        count += 1;
        */

        buttons.innerHTML += '<div id="back" style="top:' + ((space * count) + (height * (count++))) + 'px"><div><button type="submit" class="edit" onclick="edit(\'' + key + '\', \'' + d[key] + '\')">編集</button>' + key + '</div></div>'



    }
}

function edit( name, email ){
    localStorage.setItem( 'edit', JSON.stringify( { name: name, email: email } ) )
    window.location.href = ''
}