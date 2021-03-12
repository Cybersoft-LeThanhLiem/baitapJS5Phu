/**
 * Bài 1: Tính thuế thu nhập cá nhân
 */

const u60 = 5;
const f60_t120 = 10;
const f120_t210 = 15;
const f210_t384 = 20;
const f384_t624 = 25;
const f624_t960 = 30;
const h960 = 35;

document.getElementById("btnTax").onclick = function () {
    var income = Number(document.getElementById("income").value);
    var dependents = Number(document.getElementById("dependents").value);

    var taxedIncome = income - 4000000 - dependents * 1600000;
    var tI = taxedIncome / 1000000;
    var tax;

    if (tI > 0 && tI <= 60) {
        tax = taxedIncome * u60 / 100;
    } else if (tI > 60 && tI <= 120) {
        tax = taxedIncome * f60_t120 / 100;
    } else if (tI > 120 && tI <= 210) {
        tax = taxedIncome * f120_t210 / 100;
    } else if (tI > 210 && tI <= 384) {
        tax = taxedIncome * f210_t384 / 100;
    } else if (tI > 384 && tI <= 624) {
        tax = taxedIncome * f384_t624 / 100;
    } else if (tI > 624 && tI <= 960) {
        tax = taxedIncome * f624_t960 / 100;
    } else if (tI > 960) {
        tax = taxedIncome * h960 / 100;
    } else {
        alert('Dữ liệu nhập vào không hợp lệ');
        return;
    }

    document.getElementById("kqBai1").innerHTML = "Thuế thu nhập cá nhân: " + new Intl.NumberFormat().format(tax) + " VNĐ";
}

/**
 * Bài 2: Tính tiền cáp
 */

var connectionsInput = document.getElementById("connections");
var companyRadio = document.getElementById("company");
var personalRadio = document.getElementById("personal");

companyRadio.onclick = function () {
    connectionsInput.removeAttribute("disabled");
}

personalRadio.onclick = function () {
    connectionsInput.setAttribute("disabled", "true");
    connectionsInput.value = "";
}

document.getElementById("btnTinhTien").onclick = function () {
    var customer = document.getElementById("customerID").value;
    var premium = Number(document.getElementById("premium").value);
    var connections = Number(connectionsInput.value);
    var thanhTien = 0;

    if (personalRadio.checked) {
        thanhTien = 4.5 + 20.5 + 7.5 * premium;
    } else if (companyRadio.checked) {

        if (connections > 0 && connections <= 10) {
            thanhTien = 15 + 75 + 50 * premium;
        } else if (connections > 10) {
            thanhTien = 15 + 75 + (connections - 10) * 5 + 50 * premium;
        } else {
            alert("Số kết nối phải lớn hơn 0!");
            return;
        }

    } else {
        alert("Vui lòng chọn loại khách hàng!");
        return;
    }

    document.getElementById("kqBai2").innerHTML = "Khách hàng: <b>" + customer + "</b><br>" + "Tổng tiền phải thanh toán: " + "<b>" + new Intl.NumberFormat().format(thanhTien) + "$</b>";
}