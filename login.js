
// 회원가입 양식
function check() {
    var id = document.getElementById("id");
    var pw = document.getElementById("pwd");
    var pwCheck = document.getElementById("pwCheck");
    //아이디 유효성 체크
    if(id.value.length < 3 || id.value.length > 10) {
        alert("아이디는 3자 이상 10자 이하만 입력해주세요");
        id.focus();
        return false;
    } else if(pwd.value.length < 3 || pwd.value.length > 8) {
        alert("비밀번호는 3자 이상 8자 이하만 입력해주세요");
        pw.focus();
        return false;
    } else if(pwd.value != pwCheck.value) {
        alert("비밀번호가 다릅니다. 확인하고 다시 요청해 주세요");
        pwCheck.focus();
        return false;
    } else {
        alert("로그인 되었습니다.") 
    }
}

