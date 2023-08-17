// BT1: Thứ tự tăng dần
document.getElementById('sapXep').onclick = function () {
    //B1: Input
    var number1 = +document.getElementById('number1').value;
    var number2 = +document.getElementById('number2').value;
    var number3 = +document.getElementById('number3').value;
    //B2: Xử lý
    var ketQua;
    if (number1 < number2 && number1 < number3) {
        if (number2 < number3) {
            ketQua = (number1 + '<' + number2 + '<' + number3);
        } else {
            ketQua = (number1 + '<' + number3 + '<' + number2);
        }
    }
    else if (number2 < number1 && number2 < number3) {
        if (number1 < number3) {
            ketQua = (number2 + '<' + number1 + '<' + number3);
        } else {
            ketQua = (number2 + '<' + number3 + '<' + number1);
        }
    }
    else if (number3 < number1 && number3 < number2) {
        if (number1 < number2) {
            ketQua = (number3 + '<' + number1 + '<' + number2);
        } else {
            ketQua = (number3 + '<' + number2 + '<' + number1);
        }
    }
    //B3: Output
    document.getElementById('resultBT1').innerHTML = ketQua;
}

//BT2: Chào hỏi
document.getElementById('chaoHoi').onclick = function () {
    //B1: Input
    var thanhVien = document.getElementById('thanhVien').value;
    //B2: Xử lý
    var xinChao;
    if (thanhVien == 'B') {
        xinChao = "Bố"
    } else if (thanhVien == 'M') {
        xinChao = "Mẹ"
    } else if (thanhVien == 'A') {
        xinChao = "Anh Trai"
    } else if (thanhVien == 'E') {
        xinChao = "Em Gái"
    } else {
        alert('Nhập Các Ký Tự B, M, A, E')
    }
    document.getElementById('resultBT2').innerHTML = xinChao;
}

// BT3: Sắp Xếp Chẵn Lẻ
document.getElementById('phanLoai').onclick = function () {
    //B1: Input
    var soNguyen1 = +document.getElementById('soNguyen1').value;
    var soNguyen2 = +document.getElementById('soNguyen2').value;
    var soNguyen3 = +document.getElementById('soNguyen3').value;
    var ketQuaChanLe;
    //B2: Xử lý
    if (soNguyen1 % 2 == 0 && soNguyen2 % 2 == 0) {
        if (soNguyen3 % 2 == 0) {
            ketQuaChanLe = "Có 3 số chẵn"
        } else {
            ketQuaChanLe = "Có 2 số chẵn và 1 số lẻ"
        }
    }
    else if (soNguyen1 % 2 == 0 && soNguyen2 % 2 != 0) {

        if (soNguyen3 % 2 == 0) {
            ketQuaChanLe = "Có 2 số chẵn và 1 số lẻ"
        } else {
            ketQuaChanLe = "Có 1 số chẵn và 2 số lẻ"
        }
    }
    else if (soNguyen1 % 2 != 0 && soNguyen2 % 2 == 0) {

        if (soNguyen3 % 2 == 0) {
            ketQuaChanLe = "Có 2 số chẵn và 1 số lẻ"
        } else {
            ketQuaChanLe = "Có 1 số chẵn và 2 số lẻ"
        }
    }
    else if (soNguyen1 % 2 != 0 && soNguyen2 % 2 != 0) {

        if (soNguyen3 % 2 == 0) {
            ketQuaChanLe = "Có 1 số chẵn và 2 số lẻ"
        } else {
            ketQuaChanLe = "Có 3 số lẻ"
        }
    }
    // function kiemTraSo (x){
    //     if (x % 2 == 0){
    //         return x + '  là số chẵn'
    //     }else {
    //         return x + '  là số lẻ'
    //     }
    // }
    //B3: Output
    document.getElementById('resultBT3').innerHTML = ketQuaChanLe;
}

// BT4: Xác Định Tam Giác
document.getElementById('xacDinh').onclick = function () {
    //B1: Input
    var canhSo1 = +document.getElementById('canhso1').value;
    var canhSo2 = +document.getElementById('canhso2').value;
    var canhSo3 = +document.getElementById('canhso3').value;
    var xacDinhTamGiac
    //B2: Xử lý
    if (((canhSo1 + canhSo2) > canhSo3) && ((canhSo1 + canhSo3) > canhSo2) && ((canhSo2 + canhSo3) > canhSo1) && (canhSo1 > 0) && (canhSo2 > 0) && (canhSo3 > 0)) {
        if ((canhSo1 == canhSo2) && (canhSo2 == canhSo3)){
            xacDinhTamGiac = "Tam Giác Đều"
        } else if ((canhSo1 == canhSo2) || (canhSo2 == canhSo3) || (canhSo1 == canhSo3)){
            xacDinhTamGiac = "Tam Giác Cân"
        } else if ((canhSo1 * canhSo1) == (canhSo2 * canhSo2) + (canhSo3 * canhSo3) || (canhSo2 * canhSo2) == (canhSo1 * canhSo1) + (canhSo3 * canhSo3) || (canhSo3 * canhSo3) == (canhSo1 * canhSo1) + (canhSo2 * canhSo2)) {
            xacDinhTamGiac = "Tam Giác Vuông"
        }else if ((canhSo1 != canhSo2) && (canhSo1 != canhSo3) && (canhSo2 != canhSo3)){
            xacDinhTamGiac = "Tam Giác Nhọn"
        }
    } else{
        alert ('Không thỏa điều kiện')
    }
    //B3: Output
    document.getElementById('resultBT4').innerHTML = xacDinhTamGiac;
}
