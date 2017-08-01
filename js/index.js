/**
 * Created by BJT on 17/8/1.
 */
// 切换导航栏按钮的选中状态
$(document).ready(function () {
    $('nav ul.nav > li').click(function (e) {
        e.preventDefault();
        $('nav ul.nav > li').removeClass('active');
        $(this).addClass('active');

    });

});