/**
 * Created by caoyafei on 2018/4/19.
 */
(function(){
    console.log(1111);
   //给验证码添加click事件
    $(".span").on("click",(e)=>{
        e.preventDefault();
        if($(".span").html()!=="获取验证码") return;
       var phone=$(".phone").val();
        if(phone==""){
            alert("请输入验证码");
        }else{
            if(validphone(phone)){
                //调用定时器
                time();
                //发起发送验证码的请求,把接口放入
                //$.get("/",(data)=>{data中应该有该用户的请求次数，以及是否已发送验证码信息
                //    //在请求成功后。根据后台返回的数据判断是否超过10次。
                //});
            }else{
                alert("请输入正确的手机号");
            }
        }
    });
    //给登录添加事件监听
    $(".login").on("click",()=>{
        var phonenum=$(".phone").html();
        var validnum=$(".validnum").html();
        if(validphone(phonenum)){alert("请输入正确的手机号码");return;}
        if(validnum==""){alert("请输入验证码");return;}
       if($(".checkbox").prop("checked")){
           console.log("走了");
           //发起ajax请求
           //$.ajax({
           //    data:$(".form").serialize(),
           //    url:"/",//请求的接口
           //    success:(data)=>{
           //        if(data.code==1){//验证通过
           //            location.href="/";//主页的HTML
           //        }else{
           //            alert("验证码或手机号不正确!");
           //        }
           //    }
           //});
       }else{
           alert("请同意条款!");
       }
    });
    //倒计时定时器
    function time(){
        var time=61;
        var timer=setInterval(()=>{
            time--;
            //$(".span").addClass("time");
            if(time==0){
                clearTimeout(timer);
                $(".span").html("获取验证码");
                return;
            }
            $(".span").html(time);
        },1000);
    }
   //验证手机号
    function validphone(reg){
     var regExp=/^[1][3,4,5,7,8][0-9]{9}$/;
        return regExp.test(reg);
    }

})();
