const twotitleMuangay = document.querySelector(".twotitle-muangay");
twotitleMuangay.addEventListener("click", function (e) {
  e.preventDefault();
  const payEmail = document.querySelector(".pay-email");
  const payName = document.querySelector(".pay-name");
  const payAddresssever1 = document.querySelector(".pay-addresssever1");

  const email = payEmail.value.trim();
  const name = payName.value.trim();
  const addresssever1 = payAddresssever1.value.trim();

  const emailerror = document.querySelector(".email-error");
  const nameerror = document.querySelector(".name-error");
  const addresssever1error = document.querySelector(".addresssever1-error");

  emailerror.textContent = "";
  nameerror.textContent = "";
  addresssever1error.textContent = "";

  if (!email) {
    emailerror.textContent = "Vui lòng nhập email của bạn ";
    return;
  }
  if (!name) {
    nameerror.textContent = "Vui lòng nhập  họ và tên của bạn ";
    return;
  }
  if (!addresssever1) {
    addresssever1error.textContent = "Viu lòng nhập địa chỉ của bạn ";
    return;
  }
  alert("bạn đã mua hàng thành công ");
});
const twotitleReturn = document.querySelectorAll(".twotitle-return");
twotitleReturn.forEach(function (element) {
  element.addEventListener("click", function () {
    window.location.href = "https://thotrangcute.github.io/rimuro/";
  });
});
/*
<!-- Trang https://b.com -->
<script>
  window.addEventListener("message", (event) => {
    // Kiểm tra nguồn gửi đến
    if (event.origin !== "https://a.com") return;

    const receivedData = event.data;
    console.log("Dữ liệu nhận được từ a.com:", receivedData);

    // Lưu vào localStorage (nếu muốn)
    localStorage.setItem("receivedFromA", JSON.stringify(receivedData));

      // Hiển thị ra giao diện
      const displayDiv = document.getElementById("display");
      displayDiv.innerHTML = `
        <p><strong>Tên:</strong> ${receivedData.name}</p>
        <p><strong>Tin nhắn:</strong> ${receivedData.message}</p>
  });

</script>
 window.addEventListener("message", (event) => {
      // Kiểm tra đúng nguồn gốc trang A
      if (event.origin !== "https://a.com") return;

      const receivedData = event.data;

      // Hiển thị ra giao diện
      const displayDiv = document.getElementById("display");
      displayDiv.innerHTML = `
        <p><strong>Tên:</strong> ${receivedData.name}</p>
        <p><strong>Tin nhắn:</strong> ${receivedData.message}</p>
      `;
      window.addEventListener("cartItem", (event) => {
        if (event.origin !== "https://thotrangcute.github.io/rimuro/") return;
        const receivedData = event.data;
        console.log(
          "Dữ liệu nhận được từ https://thotrangcute.github.io/rimuro/ :",
          receivedData
        );
        localStorage.setItem("receivedFromA", JSON.stringify(receivedData));
        const hiddenProducts = document.getElementById("hiddenProducts");
        hiddenProducts.innerHTML = `
      <div class="item-content">
      <img src="${receivedData.images}" alt="${receivedData.name}" class="cart-item-img" />
      <div class="cart-item-info">
      <h4>${receivedData.name}</h4>
      <p>${receivedData.price}</p>
      <div class="item-counter">
      <button class="decrease">-</button>
      <div class="value">${receivedData.quantity}</div>
      <button class="increase">+</button>
      </div>
      <div class="item-message"></div>
      </div>
      <div class="cart-item-wash">
      <i class="fa fa-trash-o"></i>
      </div>

      </div>
      `;
    });
    */
const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
