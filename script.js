var acc=1;
var accout=0;
function log() {
    accout++;
    alert("вы вошли в аккаунт админа")
}
function logout() {
    if (acc === accout) {
        accout--;
        alert("Вы вышли с админского аккаунта")
    } else {
        alert("нажмите кнопку Войти чтобы войти в админский аккаунт")
    }
}
function index() {
    alert("Ты тупой ты и так на главной")
}