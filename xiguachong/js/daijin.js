window.onload = function () {


    // 顶部选项卡切换
    var tabs = $(".tab a");
    $(".tab > a").click(function () {
        changeTab(tabs, $(this));
    })

}

function changeTab(tabs, currentTab) {

    /***** 切换Tab标题 *****/
    tabs.each(function (index) {
        $(this).css("color", "#fff");
    })
    currentTab.css("color", "#1dbcd2");

    /***** 切换Tab内容 *****/
    var inuse = $(".inuse");
    var used = $(".used");
    var passed = $(".passed");
    if (currentTab.html() == "有效期") {     // 有效期Tab

        // 隐藏其它内容
        used.css("display", "none");
        passed.css("display", "none");

        // 点击Tab标签显示当前相应内容
        (inuse.css("display") == "none") ? inuse.css("display", "block") : null;
        if ($(".inuse").html() == "" || $(".inuse").html() == null) {
            inuse.append(
            );
        }
        setEleLocation();
    } else if (currentTab.html() == "已使用") {     // 已使用Tab

        // 隐藏其它内容而不是删除节点
        inuse.css("display", "none");
        passed.css("display", "none");

        // 显示当前内容
        (used.css("display") == "none") ? used.css("display", "block") : null;
        if ($(".used ul").html() == "" || $(".used ul").html() == null) {
            used.css("display", "block");
            $(".used ul").append(
                "<div class='used'>" +
                "<div class='card'>" +
                "<div>" +
                "<p>演唱会代金券</p>" +
                "<span>50</span>" +
                "<img src='imgs/daijin/xiguachong@2x.png' class='am-img-responsive'>" +
                "</div>" +
                "<div>" +
                "<span>使用期限：</span>" +
                "<span>2015.08.04-2015.09.04</span>" +
                "<div style='clear: both;'></div>" +
                " <span>已使用 </span > " +
                "</div>" +
                "</div>" +
                "</div>"
            );
        }
    } else if (currentTab.html() == "已过期") {     // 已过期Tab

        // 隐藏其它内容
        inuse.css("display", "none");
        used.css("display", "none");


        // 显示当前内容
        (passed.css("display") == "none") ? passed.css("display", "block") : null;
        if ($(".passed ul").html() == "" || $(".passed ul").html() == null) {
            passed.css("display", "block");
            $(".passed ul").append(
                "<div class='passed'>" +
                "<div class='card'>" +
                "<div>" +
                "<p>演唱会代金券</p>" +
                "<span>50</span>" +
                "<img src='imgs/daijin/xiguachong@2x.png' class='am-img-responsive'>" +
                "</div>" +
                "<div>" +
                "<span>使用期限：</span>" +
                "<span>2015.08.04-2015.09.04</span>" +
                "<div style='clear: both;'></div>" +
                " <span>已过期 </span > " +
                "</div>" +
                "</div>" +
                "</div>"

            );
        }
    }
}
$(function () {
    var rules = $("div >a");
    rules.attr("href","usageRule.html")

});

