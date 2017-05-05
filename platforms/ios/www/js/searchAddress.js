// 取得データの描画を行う
function drawData2result(data) {
    jQuery("#result").css("opacity", 0.0).css("font-size", "100%"); // 一旦可視性を0に

    if (data.results) { // 取得データに対象のプロパティが存在するか
        var div_st = "<div>";
        var div_ed = "</div>";
        var res = "";

        for (var i = 0; i < data.results.length; i++) { // 一応順番を担保するために
            var d = data.results[i];
            res += div_st;
            res += d.address1 + " " + d.address2 + " " + d.address3;
            res += div_ed;

            res += "<button onclick='saveData(\"" + d.zipcode + "\"" + ",\" " + d.address1 + " " + d.address2 + " " + d.address3 + "\")'>保存</button>";
        }

        jQuery("#result").html(res); // 結果をDOMに反映
    }

    // jQuery("#result").animate({
    //     opacity: 1.0
    // }, 1000);
}

// 住所検索を行う
function searchAddressFromZipno() {
    var zip_no = document.getElementById("zipno").value;
    // drawData2result(zip_no); // 画面に結果を表示する
    if (zip_no && (zip_no.match(/[0-9]{7}/) != null)) {
        var params = {};
        params["zipcode"] = zip_no;
        // 住所検索APIにrequestを発行
        jQuery.ajax({
            type: "GET",
            url: "http://zipcloud.ibsnet.co.jp/api/search",
            dataType: "jsonp",
            jsonpCallback: "myCallback",
            data: params,
            success: function(data) {
                console.log("ajax success!!");
                drawData2result(data); // 画面に結果を表示する
                return;
            },
            error: function(data) {
                alert("ajax error occured!!)");
            }
        });
    } else {
        alert("7桁の数字を入力してください");
    }
}
