document.getElementById('book').addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    const dropdown = document.getElementById('productDropdown');
    dropdown.classList.toggle('show'); // Thay đổi trạng thái hiển thị
});