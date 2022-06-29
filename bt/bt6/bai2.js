function trungBinh() {
    let toan = +document.getElementById("toan").value
    let ly = +document.getElementById('ly').value
    let hoa = +document.getElementById('hoa').value
    let diemTrungBinh = (toan + ly + hoa) / 3;
    document.getElementById('diemTB').innerHTML = diemTrungBinh
}