$(document).ready(function() {
    $('#btn-send').click(function(event) {
        save();
    });
    $('#btn-read').click(function(event) {
        read();
    });
});

function save() {
    let flag = 1;
    let parameter = new Object();
    let postURL = "https://script.google.com/macros/s/AKfycbzK8LwoI81yGYSODMQkTB7ytgqrYDj7a44Y38uB/exec";
    parameter.method = "write";
    parameter.Who = $("input[name='Who']").val();
    parameter.Where = $("input[name='Where']").val();
    parameter.What = $("textarea[name='What']").val();
    parameter.sheetUrl = "https://docs.google.com/spreadsheets/d/1doUyHaiaXS1ZNRBhSbw3xdH4pVwnV60_N8vy-6kUQpw/edit?usp=sharing";
    parameter.sheetTag = "工作表1";
    if (parameter.Who == '' || parameter.Where == '' || parameter.What == '') {
        flag = 0;
    }
    if (flag) {
        $.post(postURL, parameter, function(data) {
            if (data.result == "success") {
                alert("寫入成功");
                $('#form')[0].reset();
            } else {
                alert(data.msg);
            }
        });
    } else {
        alert("不可空格");
    }
}

function read() {
    let parameter = new Object();
    let postURL = "https://script.google.com/macros/s/AKfycbzK8LwoI81yGYSODMQkTB7ytgqrYDj7a44Y38uB/exec";
    let count;
    parameter.method = "read";
    parameter.sheetUrl = "https://docs.google.com/spreadsheets/d/1doUyHaiaXS1ZNRBhSbw3xdH4pVwnV60_N8vy-6kUQpw/edit?usp=sharing";
    parameter.sheetTag = "工作表1";
    $.get(postURL, parameter, function(data) {

        alert(data.who + '在' + data.where + data.what);
    });
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};