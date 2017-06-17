let lo
window.onload=function(){
    lo = new LocalStorage("datalist");
    var d = lo.load();
    let buttons = document.getElementById('buttons')
    for ( var key in d ) {
        buttons.innerHTML +=
            '<div class="waku1">' +
                '<div class="haikei">' +
                    '<div class="mozi">' +
                         key +
                    '</div>' +
                    '<div class="wakub">' +
                        '<a href="edit.html" >' +
                        '<button type="submit" class="gradientButton" onclick="edit(\'' + key + '\', \'' + d[key] + '\')">' +
                            '編集' +
                        '</button>' +
                        '</a>' +
                    '</div>' +
                '</div>' +
            '</div>'
        }
}

function edit( name, email ){
    localStorage.setItem( 'edit', JSON.stringify( { name: name, email: email } ) )
    window.location.href = './edit.html'
}