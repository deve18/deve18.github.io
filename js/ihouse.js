$(function(){
    var status1 = 0;
    var status2 = 0;
    var status3 = 0;
    var status4 = 1;
    var status5 = 0;
    var status6 = 0;
    var status7 = 0;
    var status8 = 0;
//
    $(".a1,.pic").mouseover(function(){
        $(".pic").show();
    });
    $(".pic").mouseleave(function(){
        $(".pic").hide();
    })
//name test
    $(".inp1 input").on("input change",function(){
        var zz = /[\u4e00-\u9fa5]/;
        var val = $(".inp1 input").val();
        if( !zz.test(val)){
            $(".warn").show();
            $(".icon1").hide();
            status1 = 0;
        }else{
            $(".icon1").show();
            $(".warn").hide();
            status1 = 1
        }
    })

// select test
    $(".s1").blur(function(){
        if($(".s1").val()==""){
            $(".icon2").show();
            $(".icon3").hide();
            status2 = 0;
        }else if(!$(".s1").val()=="" &&!$(".s2").val()=="" ){
            $(".icon3").show();
            $(".icon2").hide();
            status2 = 1;
        }
    });
    $(".s2").blur(function(){
        if($(".s2").val()==""){
            $(".icon2").show();
            $(".icon3").hide();
            status2 = 0;
        }else if(!$(".s1").val()=="" &&!$(".s2").val()=="" ){
            $(".icon3").show();
            $(".icon2").hide();
            status2 = 1;
        }
    })

//huose type test

    function type(nums){
        var nums1 = $(".inp2 input").val();
        var nums2 = $(".inp3 input").val();
        var nums3 = $(".inp4 input").val();
        var nums4 = $(".inp5 input").val();
        if(!zz.test(nums)){
            $(".warn1").show();
            $(".warn1-1").hide();
            $(".icon5").hide();
            status3 = 0;
        }else if(nums1==0&&nums2==0&&nums3==0&&nums4==0){
            $(".warn1").hide();
            $(".warn1-1").show();
            $(".icon5").hide();
            status3 = 0;
        }else{
            $(".warn1").hide();
            $(".warn1-1").hide();
            $(".icon5").show();
            status3 = 1;
        }
    }
    var zz = /^\+?(0|[1-9][0-9]*)$/;
    $(".inp2 input").change("input",function(){
        var nums1 = $(".inp2 input").val();
        var nums2 = $(".inp3 input").val();
        var nums3 = $(".inp4 input").val();
        var nums4 = $(".inp5 input").val();
        type(nums1)
    })
    $(".inp3 input").change("input",function(){
        var nums1 = $(".inp2 input").val();
        var nums2 = $(".inp3 input").val();
        var nums3 = $(".inp4 input").val();
        var nums4 = $(".inp5 input").val();
        type(nums2)
    })
    $(".inp4 input").change("input",function(){
        var nums1 = $(".inp2 input").val();
        var nums2 = $(".inp3 input").val();
        var nums3 = $(".inp4 input").val();
        var nums4 = $(".inp5 input").val();
        type(nums3)
    })
    $(".inp5 input").change("input",function(){
        var nums1 = $(".inp2 input").val();
        var nums2 = $(".inp3 input").val();
        var nums3 = $(".inp4 input").val();
        var nums4 = $(".inp5 input").val();
        type(nums4)
    })

//rent way  test
    $(".inp7 input").click(function(){
         $(".s3,.s4").attr({"disabled":false});
         if($(".s3").val()=="" || $(".s4").val()==""){
            $(".warn1-2").show();
            $(".icon7").hide();
            status4 = 0;
        }
    });
    $(".s3").blur(function(){
        if($(".s3").val()==""){
            $(".warn1-2").show();
            $(".icon7").hide();
            staus4 = 0;
        }else if(!$(".s3").val()=="" &&!$(".s4").val()=="" ){
            $(".icon7").show();
            $(".warn1-2").hide();
            status4 = 1;
        }
    });
    $(".s4").blur(function(){
        if($(".s4").val()==""){
            $(".warn1-2").show();
            $(".icon7").hide();
            status4 = 0;
        }else if(!$(".s3").val()=="" &&!$(".s4").val()=="" ){
            $(".icon7").show();
            $(".warn1-2").hide();
            status4 = 1;
        }
    });
    $(".inp6 input").click(function(){
        $(".warn1-2").hide();
        $(".icon7").show();
        $(".s3,.s4").attr({"disabled":true});
        status4 = 1;
    });

//area and rent test
    $(".inp8 input").on("input change",function(){
        var zz = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
        var nums = $(".inp8 input").val();
        if(nums == 0 | !zz.test(nums)){
            $(".warn2").show();
            $(".icon9").hide();
            status5 = 0;
        }else{
            $(".icon9").show();
            $(".warn2").hide();
            status5 = 1;
        }
    })
    $(".inp9 input").on("input change",function(){
        var zz = /^([1-9]\d*\.\d*\.\d+|[1-9]\d*)$/;
        var nums = $(".inp9 input").val();
        if(nums == 0 | !zz.test(nums)){
            $(".warn3").show();
            $(".icon11").hide();
            status6 = 0;
        }else{
            $(".icon11").show();
            $(".warn3").hide();
            status6 = 1;
        }
    })

// pay way
    $(".check1,.check2").click(function(){
        if($(".check1").is(":checked")|| $(".check2").is(":checked")){
            $(".icon13").show();
            status7 = 1;
        }else{
            $(".icon13").hide();
            status7 = 0;
        }

    })
    $(".check2").click(function(){
        $(".check1").attr({"disabled":true});
        if($(".check2").is(":checked")){
            $(".check1").attr({"checked":false});
        }else{
            $(".check1").attr({"disabled":false});
        }
    })

// phone number test
    $(".inp15 input").blur(function(){
        var zz = /^1[34578]\d{9}$/;
        var nums = $(".inp15 input").val();
        if(nums == ""){
            $(".warn5").show();
            $(".warn4").hide();
            $(".icon15").hide();
            status8 = 0;
        }else if(!zz.test(nums)){
            $(".warn4").show();
            $(".warn5").hide();
            $(".icon15").hide();
            status8 = 0;
        }else{
            $(".icon15").show();
            $(".warn4").hide();
            $(".warn5").hide();
            status8 = 1;
        }
    })

// file picture
    $(".inp17").click(function(){
        $(".inp17").hide();
        $(".img").show();
    })
    $(".close").click(function(){
        $(".inp17").show();
        $(".img").hide();
    })


// collect
    $(window).on("change",function(){
        var a = $(".inp1 input").val();
        var b = $(".s1").val();
        var c = $(".s2").val();
        var d = $(".inp2 input").val();
        var e = $(".inp3 input").val();
        var f = $(".inp4 input").val();
        var g = $(".inp5 input").val();
        var h;
        var i = $(".inp8 input").val();
        var j = $(".inp9 input").val();
        var k1,k2,k3,k4,k5;
        var l = $(".inp15 input").val();

        if(d == 0|| d ==""){
            d = "";
        }else{
            d = $(".inp2 input").val()+"室";
        }
        if(e == 0|| e ==""){
            e = "";
        }else{
            e = $(".inp3 input").val()+"厅";
        }
        if(f == 0|| f ==""){
            f = "";
        }else{
            f = $(".inp4 input").val()+"卫";
        }
        if(g == 0||g ==""){
            g = "";
        }else{
            g = $(".inp5 input").val()+"阳台";
        }
        if($(".inp6 input").is(":checked")){
            h = "出租方式：整租";
        }else{
            h = "出租方式：合租,条件限制："+ $(".s3").val()+" "+ $(".s4").val();
        }
        if(i == 0||i == ""){
            i = "";
        }else{
            i = ",面积："+ $(".inp8 input").val()+"平方米";
        }
        if(j == 0||j == ""){
            j = "";
        }else{
            j = ",租金："+ $(".inp9 input").val()+"元/月";
        }
        if($("#c1").is(":checked")){
            k1 = ",付款方式：月付";
        }else{
            k1= "";
        }
        if($("#c2").is(":checked")){
            k2 = ",付款方式：季付";
        }else{
            k2= "";
        }
        if($("#c3").is(":checked")){
            k3 = ",付款方式：半年付";
        }else{
            k3= "";
        }
        if($("#c4").is(":checked")){
            k4 = ",付款方式：年付";
        }else{
            k4= "";
        }
        if($("#c5").is(":checked")){
            k5 = ",付款方式：都可以";
        }else{
            k5= "";
        };
        $("textarea").text(a+""+b+""+c+""+d+""+e+""+f+""+g+""+h+""+i+""+j+""
        +""+k1+""+k2+""+k3+""+k4+""+k5+""+l)
    })

//  submit judge
    $(".submit").click(function(){
        if(status1==1&&status2==1&&status3==1&&status4==1&&status5==1&&
            status6==1&&status7==1&&status8==1){
            $(".submit").text("提交成功");
        }else{
            $(".submit").text("信息有误");
        }
    })
})
