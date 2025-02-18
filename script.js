// Hàm chuyển trang khi bấm "Yes"
function nextPage() {
    window.location.href = "yes.html"; // Thay bằng URL của trang tiếp theo
}

// Hàm để di chuyển nút "No" khi hover
function moveButton() {
    const button = document.getElementById("noButton");
    const maxX = window.innerWidth - button.clientWidth - 50;
    const maxY = window.innerHeight - button.clientHeight - 50;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = "absolute"; // Đảm bảo nút có thể di chuyển
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// Gán sự kiện bằng JavaScript thay vì trong HTML
document.getElementById("yesButton").addEventListener("click", nextPage);
document.getElementById("noButton").addEventListener("mouseover", moveButton);
