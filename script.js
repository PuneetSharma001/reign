// Init AOS
AOS.init({ duration: 1000, once: true });

// Swiper setup
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

//navbar
function toggleDropdown() {
  const dropdown = document.getElementById("loginDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

  function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

function toggleSearch() {
  const search = document.getElementById("mobile-search");
  if (search.style.display === "block") {
    search.style.display = "none";
  } else {
    search.style.display = "block";
  }
}


  function toggleSearch() {
  const wrapper = document.querySelector(".search-wrapper");
  wrapper.classList.toggle("active");
}

// Hide search input when clicking outside
document.addEventListener("click", function (event) {
  const searchWrapper = document.querySelector(".search-wrapper");
  if (!searchWrapper.contains(event.target)) {
    searchWrapper.classList.remove("active");
  }
});





// Cart logic
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const updateCartCount = () => {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
};
updateCartCount();

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

// Example product object when adding to cart
// Display Cart Items
if (cartGrid && window.location.href.includes("cart.html")) {
  cartGrid.innerHTML = "";
  if (cart.length === 0) {
    cartGrid.innerHTML = "<p>Your cart is empty. Please add items to cart.</p>";
  } else {
    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("product-card");
      div.innerHTML = `
        <a href="${item.img}" target="_blank">
          <img src="${item.img}" alt="${item.name}" style="width: 100%; max-height: 200px; object-fit: contain; border-radius: 10px;">
        </a>
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="buyNow('${item.name}')">Buy Now</button>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartGrid.appendChild(div);
    });
  }
}


// Buy Now function
function buyNow(name) {
  alert(`Proceeding to buy: ${name}`);
  // Redirect to checkout if needed
}

// Remove from Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload(); // Refresh cart page
}



// ======================= WISHLIST =======================
document.addEventListener('DOMContentLoaded', () => {
  updateWishlistCount();
});

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

function updateWishlistCount() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const icon = document.getElementById("wishlist-count");
  if (icon) icon.textContent = wishlist.length;
}

// ======================= FILTER =======================
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

// ======================= SUBSCRIBE =======================
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

// ======================= CHAT BOT =======================
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


// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  menuToggle?.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
});


function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('active');
}





function toggleMenu() {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("active");
}

function toggleSearch() {
  const wrapper = document.querySelector(".search-wrapper");
  wrapper.classList.toggle("active");
}

// Optional: close search input when clicking outside
document.addEventListener("click", function (e) {
  const wrapper = document.querySelector(".search-wrapper");
  if (!wrapper.contains(e.target)) {
    wrapper.classList.remove("active");
  }
});

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
}

function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("show-menu");
}


