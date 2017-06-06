$(loaded);

function loaded() {
    showText();

    $("#formButton").click(
        function() {
            saveText();
            showText();
        });
}

function saveText() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var datalist = {
        name: name,
        email: email,
        message: message
    }
    localStorage.setItem("datalist", JSON.stringify(datalist));
    JSON.parse(localStorage.getItem("datalist"));
    return datalist;
}

function showText() {
    var list = $("#list");
    list.children().remove();
    var key, value, html = [];
    for (var i = 0, len = localStorage.length; i < len; i++) {
        key = localStorage.key(i);
        value = localStorage.getItem(key);
        html.push($("<p>").text(value));
    }
    list.append(html);
}
