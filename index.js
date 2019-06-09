var dom = {
    city: window.document.getElementById('city'),
    dist: window.document.getElementById('dist'),
    road: window.document.getElementById('road'),
    submit: window.document.getElementById('submit'),
    result: window.document.getElementById('result'),

    addr: window.document.getElementById('addr'),
    submitAddr: window.document.getElementById('submit-addr'),
};

var api = 'https://zip5.5432.tw/zip5json.py?adrs=';
var xhr = new window.XMLHttpRequest();
xhr.onload = function () {
    var result = '';
    if (xhr.status == 200) {
        result = window.JSON.parse(xhr.responseText).zipcode;
        if (result == '') {
            window.alert('沒有結果');
            return;
        }

        dom.result.textContent = result;

        return;
    }

    window.alert('發生錯誤');
    window.console.log('failed! ', xhr);
};

dom.submit.addEventListener('click', function (e) {
    if (!dom.city.value) {
        window.alert('請輸入「縣市」');
        return;
    }

    if (!dom.dist.value) {
        window.alert('請輸入「鄉鎮（市）區」');
        return;
    }

    if (!dom.road.value) {
        window.alert('請輸入「路、街或鄉里」');
        return;
    }

    xhr.open('GET', api + dom.city.value + dom.dist.value + dom.road.value);
    xhr.send();
});

dom.submitAddr.addEventListener('click', function (e) {
    if (!dom.addr.value) {
        window.alert('請輸入地址');
        return;
    }

    xhr.open('GET', api + dom.addr.value);
    xhr.send();
});
