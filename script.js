// ========== AOS & SWIPER ==========
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 1000, once: true });

  if (document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }
});

// ========== SEARCH ==========
function toggleSearch() {
  const wrapper = document.querySelector(".search-wrapper");
  wrapper.classList.toggle("active");
}
document.addEventListener("click", function (event) {
  const searchWrapper = document.querySelector(".search-wrapper");
  if (searchWrapper && !searchWrapper.contains(event.target)) {
    searchWrapper.classList.remove("active");
  }
});

// ========== MOBILE NAV ==========
function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("show-menu");
}
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }
});

// ========== CART STORAGE ==========
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const updateCartCount = () => {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
};
updateCartCount();

// ========== ADD TO CART ==========
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", () => {
      const item = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: button.dataset.price,
        img: button.dataset.img,
      };
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      alert(`${item.name} added to cart!`);
    });
  });
});

// ===== PRODUCT DETAIL ADD TO CART =====
document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById("addToCartBtn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const quantity = parseInt(document.getElementById("quantity").value) || 1;
      // Define product data
        const products = [
          {
            id: 1,
            name: "REIGN BLACK TEE",
            price: 999,
            img: "assets/product1.jpg",
            color: "black",
          },
          {
            id: 2,
            name: "REIGN GREEN TEE",
            price: 999,
            img: "assets/product2.jpg",
            color: "beige",
          },
          {
            id: 3,
            name: "REIGN BLACK TEE",
            price: 999,
            img: "assets/product3.jpg",
            color: "black",
          },
          {
            id: 4,
            name: "REIGN STREET TEE",
            price: 999,
            img: "assets/product4.jpg",
            color: "white",
          },
          {
            id: 5,
            name: "REIGN OMBRE TEE",
            price: 999,
            img: "assets/product5.jpg",
            color: "navy-blue",
          },
          {
            id: 6,
            name: "REIGN WASHED TEE",
            price: 999,
            img: "assets/product6.jpg",
            color: "red",
          },
          {
            id: 7,
            name: "REIGN SAVE TEERS TEE",
            price: 999,
            img: "assets/product7.jpg",
            color: "black",
          },
        ];

      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      for (let i = 0; i < quantity; i++) {
        cart.push(product);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${quantity} item(s) added to cart!`);
    });
  }
});

// Quantity increment/decrement
function changeQty(val) {
  const input = document.getElementById("quantity");
  let current = parseInt(input.value);
  if (isNaN(current)) current = 1;
  input.value = Math.max(1, current + val);
}

// ========== DISPLAY CART ==========
document.addEventListener("DOMContentLoaded", () => {
  const cartGrid = document.getElementById("cart-grid");
  if (cartGrid && window.location.pathname.includes("cart.html")) {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    cartGrid.innerHTML = "";

    if (currentCart.length === 0) {
      cartGrid.innerHTML = "<p>Your cart is empty. Please add items to cart.</p>";
      return;
    }

    currentCart.cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("product-card");

      div.innerHTML = `
        <img src="${item.img}" alt="${item.name}" onclick="openModal('${item.img}')" style="cursor:pointer; max-height: 200px; object-fit: contain; border-radius: 10px;">
        <h3>${item.name}</h3>
        <p>Price: ₹${product.price}</p>
        <p><strong>Size:</strong> ${product.size || "N/A"}</p>


        <div class="quantity-box" style="justify-content:center; margin:10px 0;">
          <button onclick="updateCartQty(${item.id}, -1)">-</button>
          <input type="number" value="1" readonly style="width:50px; text-align:center;">
          <button onclick="updateCartQty(${item.id}, 1)">+</button>
        </div>

        <button onclick="removeFromCart(${index})" style="background:red; color:white; margin-top:10px;">Remove</button>
      `;

      cartGrid.appendChild(div);
    });

  }
});

function removeFromCart(index) {
  let updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
  updatedCart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  location.reload();
}
function buyNow(name) {
  alert(`Proceeding to buy: ${name}`);
}

// ========== WISHLIST ==========
function updateWishlistCount() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const countSpan = document.getElementById("wishlist-count");
  if (countSpan) {
    countSpan.textContent = wishlist.length;
  }
}
document.addEventListener("DOMContentLoaded", updateWishlistCount);

function updateWishlistCount() {
  const badge = document.getElementById("wishlist-count");
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (badge) badge.textContent = wishlist.length > 0 ? wishlist.length : "";
}
updateWishlistCount();

document.addEventListener('DOMContentLoaded', () => {
  updateWishlistCount();
  document.querySelectorAll('.add-wishlist').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = {
        id: btn.dataset.id,
        name: btn.dataset.name,
        price: btn.dataset.price,
        img: btn.dataset.img,
      };
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      if (!wishlist.find(i => i.id === item.id)) {
        wishlist.push(item);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert("Added to Wishlist!");
        updateWishlistCount();
      } else {
        alert("Already in Wishlist!");
      }
    });
    
  });
});


// ========== FILTER ==========
document.addEventListener("DOMContentLoaded", () => {
  const categoryFilter = document.getElementById("category-filter");
  if (categoryFilter) {
    categoryFilter.addEventListener("change", () => {
      const category = categoryFilter.value;
      document.querySelectorAll(".product-card").forEach(card => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
});

// ========== SUBSCRIBE ==========
function subscribeEmail() {
  const emailInput = document.getElementById("footer-email");
  const email = emailInput.value;
  if (email && email.includes("@")) {
    alert(`Thanks for subscribing, ${email}!`);
    emailInput.value = "";
  } else {
    alert("Please enter a valid email address.");
  }
}

// ========== CHAT ==========
function toggleChat() {
  const popup = document.getElementById("chat-popup");
  if (popup) {
    popup.style.display = popup.style.display === "block" ? "none" : "block";
  }
}
function sendMessage() {
  const input = document.querySelector(".chat-body input");
  const message = input.value.trim();
  if (message) {
    alert("Message sent: " + message);
    input.value = "";
  } else {
    alert("Please enter a message.");
  }
}

// ========== IMAGE MODAL ==========
function openModal(imageSrc) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  if (modal && modalImg) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
  }
}
function closeModal() {
  const modal = document.getElementById("imgModal");
  if (modal) modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
  const allProducts = [
    {
      id: "1",
    name: "BLACK REBIRTH GOTHIC TEE",
    price: "799",
    category: "tshirt",
    images: [
      "assets\black rebirth gothic t-Shirt (1).jpg",
      "assets\black rebirth gothic t-Shirt (2).jpg",
      "assets\black rebirth gothic t-Shirt (3).jpg",
      "assets\black rebirth gothic t-Shirt (4).jpg"
      ]
    },
    {
      id: "2",
    name: "DONT FEAR DEATH TEE",
    price: "799",
    category: "tshirt",
    images: [
      "assets\don't fear death back red (1).jpg",
      "assets\don't fear death back red (2).jpg",
      "assets\Don't fear death back RED (3).jpg",
      "assets\don't fear death back red (4).jpg"
      ]
    },
    {
      id: "3",
    name: "MENACE BEIGE TEE",
    price: "799",
    category: "tshirt",
    images: [
      "assets\menace beige (1).jpg",
      "assets\menace beige (2).jpg",
      "assets\menace beige (3).jpg",
      "assets/menace beige (4).jpg"
      ]
    },
    {
      id: "4",
    name: "SAVE YOUR TEARS TEE",
    price: "799",
    category: "tshirt",
    images: [
      "assets\save your tears (1).jpg",
      "assets\save your tears (2).jpg",
      "assets\save your tears (3).jpg",
      "assets\save your tears (4).jpg"
      ]
    },
  ];
  localStorage.setItem("allProducts", JSON.stringify(allProducts));
});

//button 

document.querySelectorAll(".size-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

document.querySelectorAll(".color-swatch").forEach(swatch => {
  swatch.addEventListener("click", () => {
    document.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("selected"));
    swatch.classList.add("selected");
  });
});
const selectedColor = document.querySelector(".color-swatch.selected")?.dataset.color;


function changeMainImage(thumbnail) {
  const mainImg = document.getElementById("productImg");
  mainImg.src = thumbnail.src;

  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumbnail.classList.add('active');
}

//Working Cart Render Function//
document.addEventListener("DOMContentLoaded", () => {
  const cartGrid = document.getElementById("cart-grid");
  const cartSummary = document.getElementById("cart-summary");
  const cartActions = document.getElementById("cart-actions");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cart.length) {
    cartGrid.innerHTML = "<p>Your cart is empty.</p>";
    cartSummary.innerHTML = "";
    if (cartActions) cartActions.style.display = "none";
    return;
  }

  if (cartActions) cartActions.style.display = "block";
  cartGrid.innerHTML = "";
  let total = 0;

  const grouped = {};
  cart.forEach(item => {
    if (!grouped[item.id]) {
      grouped[item.id] = { ...item, qty: 1 };
    } else {
      grouped[item.id].qty += 1;
    }
  });

  Object.values(grouped).forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const subtotal = product.price * product.qty;
    total += subtotal;

    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" onclick="openModal('${product.img}')" style="cursor:pointer; max-height: 200px; object-fit: contain; border-radius: 10px;">
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>

      <div class="quantity-box" style="justify-content:center; margin:10px 0;">
        <button onclick="updateCartQty(${product.id}, -1)">-</button>
        <input type="number" value="${product.qty}" readonly style="width:50px; text-align:center;">
        <button onclick="updateCartQty(${product.id}, 1)">+</button>
      </div>

      <p>Subtotal: ₹${subtotal}</p>
      <button onclick="removeAllFromCart(${product.id})" style="margin-top:10px; background:red; color:white; border:none; padding:6px 12px; border-radius:4px;">Remove</button>
    `;

    cartGrid.appendChild(card);
  });

  cartSummary.innerHTML = `<h3>Total: ₹${total}</h3>`;
});

// Quantity update
function updateCartQty(id, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (change > 0) {
    const product = cart.find(p => p.id == id);
    if (product) cart.push(product);
  } else {
    const index = cart.findIndex(p => p.id == id);
    if (index !== -1) cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

// Remove all of a product
function removeAllFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(p => p.id != id);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

// Clear Cart
function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}

//completepayment
function completePayment() {
  const card = document.querySelector('input[placeholder="Card Number"]');
  const name = document.querySelector('input[placeholder="Name on Card"]');
  const cvv = document.querySelector('input[placeholder="CVV"]');
  const msg = document.getElementById("checkout-msg");

  if (!card.value || !name.value || !cvv.value) {
    msg.textContent = "Please fill all payment details.";
    msg.className = "checkout-message error";
    msg.style.display = "block";
    return;
  }

  if (cvv.value.length < 3 || cvv.value.length > 4 || !/^\d+$/.test(cvv.value)) {
    msg.textContent = "Please enter a valid CVV.";
    msg.className = "checkout-message error";
    msg.style.display = "block";
    return;
  }

  msg.textContent = "Payment successful! Thank you for shopping.";
  msg.className = "checkout-message success";
  msg.style.display = "block";

  setTimeout(() => {
    localStorage.removeItem("cart");
    window.location.href = "index.html";
  }, 1500);
}

//save name email during login
localStorage.setItem("username", "Puneet Sharma");
localStorage.setItem("email", "puneet@example.com");


//razorpay
function payWithRazorpay() {
  const btn = document.getElementById("payBtn");
  btn.disabled = true;
  btn.textContent = "Processing...";

  const options = {
    // Razorpay setup...
    handler: function (response) {
      localStorage.setItem("lastOrder", JSON.stringify({ cart, total }));
      localStorage.removeItem("cart");
      window.location.href = "thankyou.html";
    },
    modal: {
      ondismiss: () => {
        btn.disabled = false;
        btn.textContent = "Pay with Razorpay";
      }
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}
