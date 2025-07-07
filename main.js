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
    window.location.href = "https://github.com/Hien0101/rimuro/tree/main";
  });
});
/*
const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
console.log(cartItems);
const cartList = document.getElementById("cart-list");
if (cartItems.length === 0) {
  cartList.innerHTML = "<p>Chưa có sản phẩm trong giỏ hàng.</p>";
} else {
  cartList.innerHTML = cartItems
    .map(
      (item) => `
    <div class="cart-item">
      <img src="${item.images}" alt="${item.name}" />
      <div>
        <h4>${item.name}</h4>
        <p>Giá: ${item.price}</p>
        <p>Số lượng: ${item.quantity}</p>
      </div>
    </div>
  `
    )
    .join("");
}
*/
function getCartFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const cart = params.get("cart");
  if (cart) {
    try {
      return JSON.parse(decodeURIComponent(cart));
    } catch (e) {
      return [];
    }
  }
  return [];
}

const cartItems = getCartFromUrl();
const cartList = document.getElementById("cart-list");
if (cartItems.length === 0) {
  cartList.innerHTML = "<p>Chưa có sản phẩm trong giỏ hàng.</p>";
} else {
  cartList.innerHTML = cartItems
    .map(
      (item) => `
    <div class="cart-item">
      <img src="${item.images}" alt="${item.name}" />
      <div>
        <h4>${item.name}</h4>
        <p>Giá: ${item.price}</p>
        <p>Số lượng: ${item.quantity}</p>
      </div>
    </div>
  `
    )
    .join("");
}
