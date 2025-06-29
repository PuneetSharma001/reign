
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

// Navbar Dropdown
function toggleDropdown() {
  const dropdown = document.getElementById("loginDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

// Update Cart Count
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}
updateCartCount();

// Add to Cart Functionality
document.querySelectorAll(".add-cart").forEach(button => {
  button.addEventListener("click", () => {
    const item = {
      id: button.dataset.id,
      name: button.dataset.name,
      price: button.dataset.price,
      img: window.location.origin + "/" + button.dataset.img,
    };
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${item.name} added to cart!`);
  });
});

// Wishlist Functionality
function updateWishlistCount() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const icon = document.getElementById("wishlist-count");
  if (icon) icon.textContent = wishlist.length;
}

document.addEventListener("DOMContentLoaded", () => {
  updateWishlistCount();
});

document.querySelectorAll(".add-wishlist").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = {
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: btn.dataset.price,
      img: window.location.origin + "/" + btn.dataset.img,
    };

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.find(p => p.id === item.id)) {
      wishlist.push(item);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Added to Wishlist!");
      updateWishlistCount();
    } else {
      alert("Already in Wishlist!");
    }
  });
});

// Filter Logic
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

// Subscribe Email
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

// Chat Toggle
function toggleChat() {
  const popup = document.getElementById("chat-popup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
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
