$(document).ready(function() {
    // 鼠标移动显示隐藏
    $('.more').on('mouseenter', function() {
        $("#somemore").show(); //更多产品 鼠标进 显示
    });
    $('#somemore').on('mouseleave', function() {
        $("#somemore").hide(); //更多产品 鼠标走 隐藏
    });

    $('.wrp-bgchanges-inner').on('mouseenter', function() {
        $("#wrp-bgchanges-show").show(); //换肤  鼠标进 显示
    });
    $('.wrp-bgchanges').on('mouseleave', function() {
        $("#wrp-bgchanges-show").hide(); //换肤 鼠标走 隐藏
    });

    $('#xyt').on("click", function() {
        $('body').css({
            'background': 'url(./images/766.jpg)no-repeat',
            'background-size': '100% 100%', //换背景
        })
        $('.header .nav a.mnav').removeClass('oldcolor'); //移除旧字体颜色
        $('.header .nav a.mnav').addClass('newcolor'); //添加新字体颜色
        $('#changelogo').attr("src", "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png")
            //使用新LOGO
        $(".wrp-bgchanges-inner").css("color", "#fff"); //替换字体颜色
        $(".wrp-bgchanges-more div").css("color", "#fff"); //替换字体颜色
        $("#changebtn").removeClass("oldbtn"); //移除旧的搜索按钮
        $("#changebtn").addClass("btn"); //添加新的搜索按钮
        $('#myfooter').removeClass('.myfooter a'); //修改底部字体信息颜色
        $('#myfooter').removeClass('.myfootercolor');
        $('#myfooter').removeClass('.myfooter p a');
        $('#myfooter').addClass('newfootercolor');
        $('#myfooter').addClass('newfooter a');
        $('#myfooter').addClass('newfooter p');

        localStorage.colorstyle = "xyt"; //写入样式到localStorage
    })
    $('#ls').on("click", function() {
        $('body').css({
            'background': 'url(./images/761.jpg)no-repeat',
            'background-size': '100% 100%',
        })
        $('.header .nav a.mnav').removeClass('oldcolor');
        $('.header .nav a.mnav').addClass('newcolor');
        $('#changelogo').attr("src", "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png")
        $(".wrp-bgchanges-inner").css("color", "#fff");
        $(".wrp-bgchanges-more div").css("color", "#fff");
        $("#changebtn").removeClass("oldbtn");
        $("#changebtn").addClass("btn");
        $('#myfooter').removeClass('.myfooter a');
        $('#myfooter').removeClass('.myfootercolor');
        $('#myfooter').removeClass('.myfooter p a');
        $('#myfooter').addClass('newfootercolor');
        $('#myfooter').addClass('newfooter a');
        $('#myfooter').addClass('newfooter p');
        localStorage.colorstyle = "ls";
    })
    $('#jeyx').on("click", function() {
        $('body').css({
            'background': 'url(./images/625.jpg)no-repeat',
            'background-size': '100% 100%',
        })
        $('.header .nav a.mnav').removeClass('oldcolor');
        $('.header .nav a.mnav').addClass('newcolor');
        $('#changelogo').attr("src", "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png")
        $(".wrp-bgchanges-inner").css("color", "#fff");
        $(".wrp-bgchanges-more div").css("color", "#fff");
        $("#changebtn").removeClass("oldbtn");
        $("#changebtn").addClass("btn");
        $('#myfooter').removeClass('.myfooter a');
        $('#myfooter').removeClass('.myfootercolor');
        $('#myfooter').removeClass('.myfooter p a');
        $('#myfooter').addClass('newfootercolor');
        $('#myfooter').addClass('newfooter a');
        $('#myfooter').addClass('newfooter p');
        localStorage.colorstyle = "jeyx";
    })
    $('#old').on("click", function() {
        $('body').css({
            'background': '#FFF',
        })
        $('.header .nav a.mnav').removeClass('newcolor');
        $('.header .nav a.mnav').addClass('oldcolor');
        $('#changelogo').attr("src", "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png")
        $(".wrp-bgchanges-inner").css("color", "#333");
        $(".wrp-bgchanges-more div").css("color", "#333");
        $("#changebtn").removeClass("btn");
        $("#changebtn").addClass("oldbtn");
        $('#myfooter').addClass('.myfooter a');
        $('#myfooter').addClass('.myfootercolor');
        $('#myfooter').addClass('.myfooter p a');
        $('#myfooter').removeClass('newfootercolor');
        $('#myfooter').removeClass('newfooter a');
        $('#myfooter').removeClass('newfooter p');
        localStorage.removeItem('colorstyle');

    })
    if (localStorage.colorstyle) {
        css(localStorage.colorstyle)
    } //判断localStorage写入的样式

    function css(bgColor) { //替换样式
        switch (bgColor) {
            case 'xyt':
                $('body').css({
                    'background': 'url(./images/766.jpg)no-repeat',
                    'background-size': '100% 100%', //换背景
                })
                $('.header .nav a.mnav').removeClass('oldcolor'); //移除旧字体颜色
                $('.header .nav a.mnav').addClass('newcolor'); //添加新字体颜色
                $('#changelogo').attr("src", "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png")
                    //使用新LOGO
                $(".wrp-bgchanges-inner").css("color", "#fff"); //替换字体颜色
                $(".wrp-bgchanges-more div").css("color", "#fff"); //替换字体颜色
                $("#changebtn").removeClass("oldbtn"); //移除旧的搜索按钮
                $("#changebtn").addClass("btn"); //添加新的搜索按钮
                $('#myfooter').removeClass('.myfooter a');
                $('#myfooter').removeClass('.myfootercolor');
                $('#myfooter').removeClass('.myfooter p a');
                $('#myfooter').addClass('newfootercolor');
                $('#myfooter').addClass('newfooter a');
                $('#myfooter').addClass('newfooter p');
                break;
            case 'ls':
                $('body').css({
                    'background': 'url(./images/761.jpg)no-repeat',
                    'background-size': '100% 100%',
                })
                $('.header .nav a.mnav').removeClass('oldcolor');
                $('.header .nav a.mnav').addClass('newcolor');
                $('#changelogo').attr("src", "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png")
                $(".wrp-bgchanges-inner").css("color", "#fff");
                $(".wrp-bgchanges-more div").css("color", "#fff");
                $("#changebtn").removeClass("oldbtn");
                $("#changebtn").addClass("btn");
                $('#myfooter').removeClass('.myfooter a');
                $('#myfooter').removeClass('.myfootercolor');
                $('#myfooter').removeClass('.myfooter p a');
                $('#myfooter').addClass('newfootercolor');
                $('#myfooter').addClass('newfooter a');
                $('#myfooter').addClass('newfooter p');
                break;
            case 'jeyx':
                $('body').css({
                    'background': 'url(./images/625.jpg)no-repeat',
                    'background-size': '100% 100%',
                })
                $('.header .nav a.mnav').removeClass('oldcolor');
                $('.header .nav a.mnav').addClass('newcolor');
                $('#changelogo').attr("src", "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png")
                $(".wrp-bgchanges-inner").css("color", "#fff");
                $(".wrp-bgchanges-more div").css("color", "#fff");
                $("#changebtn").removeClass("oldbtn");
                $("#changebtn").addClass("btn");
                $('#myfooter').removeClass('.myfooter a');
                $('#myfooter').removeClass('.myfootercolor');
                $('#myfooter').removeClass('.myfooter p a');
                $('#myfooter').addClass('newfootercolor');
                $('#myfooter').addClass('newfooter a');
                $('#myfooter').addClass('newfooter p');
                break;
        }
    }

    //鼠标经过变换背景色
    $("#s_menus_wrapper span").each(function(index) {
        $(this).mouseover(function() {
            $("#bgchange").removeClass("bgchanges");
            $(this).addClass("bgchanges")
        }).mouseout(function() {
            $("#s_menus_wrapper span").removeClass("bgchanges");
        });
    });


    //点击切换标签页
    $("#s_menus_wrapper span").each(function(index) {
        $(this).on('click', function() {
            if (index == 0) {
                $("#s_menus_wrapper .bgchanges2").removeClass("bgchanges2"); //删除默认第一项标签背景色
                $("#bgchange").removeClass("bgchanges2"); //删除其余标签背景色
                $("#bgtj").addClass("bgchanges2"); //添加选中项标签背景色
                $(".ctner_contents .mydisplay").removeClass("mydisplay"); //删除所有标签内容显示
                $("#ctner_contents_out").addClass("ctner_contents1"); //添加特殊div大小
                $("#tj").addClass("mydisplay"); //添加显示标签内容
            } else if (index == 1) {
                $("#s_menus_wrapper .bgchanges2").removeClass("bgchanges2");
                $("#bgchange").removeClass("bgchanges2");
                $("#bgdh").addClass("bgchanges2");
                $(".ctner_contents .mydisplay").removeClass("mydisplay");
                $(".mydiy .ctner_contents1").removeClass("ctner_contents1"); //删除特殊标签大小
                $("#dh").addClass("mydisplay");
            } else if (index == 2) {
                $("#s_menus_wrapper .bgchanges2").removeClass("bgchanges2");
                $("#bgchange").removeClass("bgchanges2");
                $("#bgsp").addClass("bgchanges2");
                $(".ctner_contents .mydisplay").removeClass("mydisplay");
                $("#ctner_contents_out").addClass("ctner_contents1");
                $("#sp").addClass("mydisplay");
            } else if (index == 3) {
                $("#s_menus_wrapper .bgchanges2").removeClass("bgchanges2");
                $("#bgchange").removeClass("bgchanges2");
                $("#bggw").addClass("bgchanges2");
                $(".ctner_contents .mydisplay").removeClass("mydisplay");
                $("#ctner_contents_out").addClass("ctner_contents1");
                $("#gw").addClass("mydisplay");
            }
        })

    });
    $("#bgchange").on("click", function() { //点击我的关注，隐藏别的标签页内容，显示原版标签页内容
        $(".ctner_contents .mydisplay").removeClass("mydisplay");
        $("#myindex").addClass("mydisplay");
        $("#s_menus_wrapper .bgchanges2").removeClass("bgchanges2");
        $("#bgchange").addClass("bgchanges2");
    })

    $("#shownav").on('click', function() {

        $('.mynav-more').toggle(function() {
            $(".mine-title-icon em").css({
                'border': '5px dashed transparent',
                'border-top': '5px solid #666',
            })
        });


    })

    $('.goheader-icon').on('mouseenter', function() {
        $(".goheader-icon").hide();
        $(".gomyheader").show(); //更多产品 鼠标进 显示

    });
    $('.gomyheader').on('mouseleave', function() {
        $(".goheader-icon").show();
        $(".gomyheader").hide(); //更多产品 鼠标走 隐藏

    });
    $(".gomyheader").on("click", function() {
        //回到页头 
        //http://www.zhangxinxu.com/wordpress/2010/07/%E9%94%9A%E7%82%B9%E8%B7%B3%E8%BD%AC%E5%8F%8Ajquery%E4%B8%8B%E7%9B%B8%E5%85%B3%E6%93%8D%E4%BD%9C%E4%B8%8E%E6%8F%92%E4%BB%B6/?jdfwkey=tvile
        $("html,body").animate({ scrollTop: $("#myheader").offset().top }, 1000);
    })
});



// logo
// https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png
// 透明https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png
//127行，显示能改变箭头，隐藏要怎么变回去。显示隐藏有间隔动画，无法消除。
//
//查询localStorage，能否跟on click事件一起写。JS写了一堆，感觉有点冗余，是否还有什么好点的算法吗。
//
