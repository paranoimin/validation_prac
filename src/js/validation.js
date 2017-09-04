function validation() {
    var userId = document.forms["validationForm"]["userId"].value;
    var userPass = document.forms["validationForm"]["userPass"].value;
    var userEmail = document.forms["validationForm"]["userEmail"].value;
    var pattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/;
    var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // var pattern = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{6,16}$/;

    // 아이디는 4자 보다 크고 15자 보다 작아야 함
    if("" == userId || null == userId) {
        alert("아이디 를 입력해 주세요!!");
        return false;
    } else if(4 > userId.length || 15 < userId.length) {
        alert("아이디는 4자 이상 15자 이하 로 입력해 주세요!");
        return false;
    }

    // 비밀번호 안에 아이디가 있으면 안댐 특수문자 있어야 됨 숫자도 있어야됨
    if("" == userPass || null == userPass) {
        alert("비밀번호 를 입력해 주세요!!");
        return false;
    } else if(6 > userPass.length || 18 < userPass.length) {
        alert("비밀번호는 6자 이상 18자 이하 로 입력해 주세요!");
        return false;
    } else if(-1 < userPass.indexOf(userId)) {
        alert("비밀번호에 아이디 가 들어갈 수 없어요.");
        return false;
    } else if(false == pattern.test(userPass)) {
        alert("비밀번호에는 숫자 와 특수문자가 하나씩 포함 되어야 합니다.");
        return false;
    }

    if("" == userEmail || null == userEmail) {
        alert("이메일 을 입력해 주세요.");
        return false;
    } else if(false == email_regex.test(userEmail)) {
        alert("이메일 형식에 맞게 입력해 주세요.");
        return false;
    }   
    

}