let cardtimeout = JSON.parse(localStorage.getItem("cardtimeout") || "[]");

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
console.log(getCartFromUrl());

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
const loginBtn = document.getElementById("loginButton");
const savedUsername = localStorage.getItem("username");
if (savedUsername) {
  loginBtn.textContent = savedUsername;
}
console.log(savedUsername);
const popup = document.getElementById("loginPopup");
const closeBtn = document.getElementById("closePopup");
loginBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  const usernameInput = document.querySelector(".secontion-input-name");
  const userpassInput = document.querySelector(".secontion-input-pass");

  if (savedUsername && usernameInput) {
    usernameInput.value = savedUsername;
  }
  if (savedPassword && userpassInput) {
    userpassInput.value = savedPassword;
  }
  popup.style.display = "flex";
  console.log(loginBtn);
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
console.log(popup);
const loginBtnsision = document.getElementById("loginButton");
const loginPopupsision = document.getElementById("loginPopup");
const loginSubmit = document.querySelector(".secontion-severtime");

loginSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const usernameInput = document.querySelector(".secontion-input-name");
  const passwordInput = document.querySelector(".secontion-input-pass");
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const secontionpassError = document.querySelector(".secontion-pass-error");
  const secontionnameError = document.querySelector(".secontion-name-error");

  secontionpassError.textContent = "";
  secontionnameError.textContent = "";
  if (!username) {
    secontionnameError.textContent = "Vui lòng nhập tài khoản của bạn ";
    return;
  }
  if (!password) {
    secontionpassError.textContent = "Vui lòng nhập mật khẩu của bạn ";
    return;
  }
  loginBtnsision.textContent = username;
  loginPopupsision.style.display = "none";
  localStorage.setItem("username", username);
});
console.log(loginSubmit);
