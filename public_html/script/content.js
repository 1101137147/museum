function login() {
    var account = document.getElementById("account").value;
    var password = document.getElementById("password").value;
    if ((account !== "") && (password !== "")) {
        localStorage.setItem('account', account);
        localStorage.setItem('password', password);
        localStorage.getItem('account');
        document.getElementById("name").innerHTML = account + "你好";
        document.getElementById("member").innerHTML = "會員登出";
        document.getElementById("member2").innerHTML = "會員登出";
        document.getElementById("member3").innerHTML = "會員登出";
    } else {
        alert("請輸入帳密");
    }
}
function logout() {
    var member = document.getElementById("member").innerHTML;
    if (member == "會員登出") {
        localStorage.removeItem('account');
        localStorage.removeItem('password');
        alert("已登出");
        var account = document.getElementById("account").value = "";
        var password = document.getElementById("password").value = "";
        document.getElementById("member").innerHTML = "會員登入";
        document.getElementById("member2").innerHTML = "會員登入";
        document.getElementById("member3").innerHTML = "會員登入";
        var att = document.getElementById("member");
        var att2 = document.getElementById("member2");
        var att3 = document.getElementById("member3");
        att.setAttribute("href", "#");
        att2.setAttribute("href", "#");
        att3.setAttribute("href", "#");
        location.reload();
    }
}
function check() {
    var member = document.getElementById("member").innerHTML;
    if (member == "會員登入") {
        alert("請先登入");
        var att = document.getElementById("shop");
        var att2 = document.getElementById("shop2");
        var att3 = document.getElementById("shop3");
        att.setAttribute("href", "#");
        att2.setAttribute("href", "#");
        att3.setAttribute("href", "#");
        location.reload();
    }
}
function order(){
    var num1 = document.getElementById("number").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var dish = document.getElementById("dish").textContent;
    var flower = document.getElementById("flower").textContent;
    var draw = document.getElementById("draw").textContent;
    localStorage.setItem('商品1', dish);
    localStorage.setItem('商品2', flower);
    localStorage.setItem('商品3', draw);
    localStorage.setItem('盤子數量', num1);
    localStorage.setItem('花瓶數量', num2);
    localStorage.setItem('圖畫數量', num3);
     var count = localStorage.getItem('discount');
    var coupon = localStorage.getItem("折扣");
    var result = (150 * num1) + (200 * num2) + (300 * num3);
    if (count == 5) {
        result = (result * 0.5)-coupon; 
    } else if (count == 7) {
        result = (result * 0.7)-coupon;       
    } else if (count == 8) {
        result = (result * 0.8)-coupon;
    } else if (count == 9) {
        result = (result * 0.9)-coupon;     
    } 
    localStorage.setItem('res', result);
    var dish =localStorage.getItem('盤子數量');
    var flower =localStorage.getItem('花瓶數量');
    var draw =localStorage.getItem('圖畫數量');
     var result=localStorage.getItem('res');
      var coupon = localStorage.getItem("折扣");
     document.getElementById("dish2").innerHTML = dish + "個" ;
      document.getElementById("flower2").innerHTML = flower + "個";
       document.getElementById("draw2").innerHTML = draw + "個";
        document.getElementById("coupon").innerHTML = coupon + "元";
       document.getElementById("sum").innerHTML = result + "元";
       
}
function scratch(){
    var check = document.getElementById("scratcher3Pct").textContent;
    var count = check.split("%");
    if (count[0] >= 90) {
        var coupon = localStorage.getItem("折扣");
        alert("恭喜你獲得： " + coupon + " 元優惠券！！！");
        location.href = "#pageone";
    } else {
        alert("請刮乾淨一點");
    }
}
function save(){
     var num1 = document.getElementById("number").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var dish = document.getElementById("dish").textContent;
    var flower = document.getElementById("flower").textContent;
    var draw = document.getElementById("draw").textContent;
     localStorage.setItem('商品1', dish);
    localStorage.setItem('商品2', flower);
    localStorage.setItem('商品3', draw);
    localStorage.setItem('盤子數量', num1);
    localStorage.setItem('花瓶數量', num2);
    localStorage.setItem('圖畫數量', num3);
     var result = (150 * num1) + (200 * num2) + (300 * num3);
     localStorage.setItem('res', result);
}
