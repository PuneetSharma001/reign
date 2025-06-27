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


function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}
