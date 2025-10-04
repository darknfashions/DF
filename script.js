window.onload = function() {
  setTimeout(() => {
    document.getElementById('loader-wrapper').style.display = 'none';
    document.getElementById('main-content').style.display = '';
  }, 1600);
}
const sampleProducts = [
  {
    title: "Urban Black T-shirt",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=400&h=400&q=80",
    price: "₹499"
  },
  {
    title: "Classic White Hoodie",
    img: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&w=400&h=400",
    price: "₹799"
  },
  {
    title: "Trendy Denim Jacket",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400",
    price: "₹1199"
  },
  {
    title: "Comfy Cargo Joggers",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=400&h=400",
    price: "₹899"
  },
  {
    title: "Street Style Oversized Tee",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=facearea&w=400&h=400",
    price: "₹529"
  },
  {
    title: "Minimal Black Cap",
    img: "https://images.pexels.com/photos/997512/pexels-photo-997512.jpeg?auto=compress&w=400&h=400",
    price: "₹299"
  },
  {
    title: "Trendy Checked Shirt",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=400&h=400",
    price: "₹699"
  },
  {
    title: "Denim Blue Jeans",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=400&h=400",
    price: "₹899"
  }
];
function renderProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  sampleProducts.forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.img}" alt="${p.title}" />
        <div class="product-title">${p.title}</div>
        <div class="product-price">${p.price}</div>
        <button class="buy-btn" onclick="alert('Pay via UPI or Razorpay below and send screenshot to our Instagram DM!')">Buy Now</button>
      </div>
    `;
  });
}
renderProducts();
function openUPIApp() {
  window.location.href = "upi://pay?pa=14314589@upi&pn=DARKEN";
}
const razorpayBtn = document.getElementById('razorpayBtn');
if(razorpayBtn) {
  razorpayBtn.onclick = function(e) {
    e.preventDefault();
    var options = {
      "key": "rzp_test_YourRazorpayKey", // <--- Replace with your Razorpay Key
      "amount": 50000,
      "currency": "INR",
      "name": "DARKEN",
      "description": "Fashion Purchase",
      "image": "logo.png",
      "handler": function (response){
        alert("Payment successful! Razorpay Payment ID: " + response.razorpay_payment_id);
      },
      "prefill": {
        "email": "",
        "contact": ""
      },
      "theme": {
        "color": "#00d4ff"
      }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  }
}
const ADMIN_MOBILE = "9535370779";
function sendOTP() {
  const mob = document.getElementById('adminMobile').value;
  if(mob === ADMIN_MOBILE) {
    alert('OTP sent! (Use 1234 for demo)');
    document.getElementById('adminOTP').style.display = '';
    document.getElementById('otpBtn').style.display = '';
  } else {
    alert('Invalid admin number.');
  }
}
function verifyOTP() {
  const otp = document.getElementById('adminOTP').value;
  if(otp === "1234") {
    document.getElementById('adminLoginBox').style.display = 'none';
    document.getElementById('dashboardPanel').style.display = '';
    loadOrders();
  } else {
    alert('Invalid OTP!');
  }
}
function logoutAdmin() {
  document.getElementById('dashboardPanel').style.display = 'none';
  document.getElementById('adminLoginBox').style.display = '';
  document.getElementById('adminOTP').style.display = 'none';
  document.getElementById('otpBtn').style.display = 'none';
}
function loadOrders() {
  document.getElementById('ordersList').innerHTML = "<p>No orders yet. (Demo only)</p>";
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js');
  });
}