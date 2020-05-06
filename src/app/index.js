import "./style.scss";

function fetchAllProducts() {
  fetch("../../Apparals.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((d) => {
        $(".products").append(`
          <div class="card product-item">
              <img
              class="card-img-top"
              src="${d.medium_image_url}"
              alt=${d.title}
              />
              <div class="card-block">
              <div class="card-title">${d.product_type_name}</div>
              <div class="price-details">
              <span class="finalprice">${d.Final_Price.toFixed(2)}</span>
              <span class="originalprice">${d.Original_Price.toFixed(2)}</span>
              <span class="discountpercentage">${d.Discount_Percent}%</span>
              </div>
              <a
                  href="#"
                  data-name="${d.title}"
                  data-price=${d.Final_Price}
                  class="add-to-cart btn btn-primary"
                  >Add to cart</a
              >
              </div>
          </div>
          `);
      });

      $(".product-item a.add-to-cart").on("click", function (event) {
        event.preventDefault();
        var name = $(this).data("name");
        var price = Number($(this).data("price"));
        shoppingCart.addItemToCart(name, price, 1);
        displayCart();
      });
    });
}

function showProducts(minPrice, maxPrice) {
  $(".products .product-item")
    .hide()
    .filter(function () {
      console.log(this, minPrice, maxPrice);
      var price = parseInt($(this).find(" .finalprice").html(), 10);
      return price >= minPrice && price <= maxPrice;
    })
    .show();
}

$(function () {
  var options = {
      range: true,
      min: 0,
      max: 5000,
      values: [500, 3000],
      animate: "slow",
      create: function () {
        $("#min").appendTo($("#slider-range > span:eq(0)"));
        $("#max").appendTo($("#slider-range > span:eq(1)"));
      },
      slide: function (event, ui) {
        var min = ui.values[0],
          max = ui.values[1];

        $(ui.handle)
          .find("span")
          .html("$" + ui.value);
        showProducts(min, max);
      },
    },
    min,
    max;

  $("#slider-range").slider(options);

  min = $("#slider-range").slider("values", 0);
  max = $("#slider-range").slider("values", 1);

  $("#max")
    .html("$" + $("#slider-range").slider("values", 1))
    .position({
      my: "center top",
      at: "center bottom",
      of: $("#slider-range > span:eq(1)"),
      offset: "0, 10",
    });

  $("#min")
    .html("$" + $("#slider-range").slider("values", 0))
    .position({
      my: "center top",
      at: "center bottom",
      of: $("#slider-range > span:eq(0)"),
      offset: "0, 10",
    });

  showProducts(min, max);

  fetchAllProducts();
});

var shoppingCart = (function () {
  // =============================
  // Private methods and propeties
  // =============================
  let cart = [];

  // Constructor
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  // Save cart
  function saveCart() {
    sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
  }

  // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem("shoppingCart"));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }

  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};

  // Add to cart
  obj.addItemToCart = function (name, price, count) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  };
  // Set count from item
  obj.setCountForItem = function (name, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count--;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  };

  // Remove all items from cart
  obj.removeItemFromCartAll = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  };

  // Clear cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  };

  // Count cart
  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  };

  // Total cart
  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  };

  // List cart
  obj.listCart = function () {
    var cartCopy = [];
    for (let i in cart) {
      let item = cart[i];
      let itemCopy = {};
      for (let p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy);
    }
    return cartCopy;
  };

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();

// *****************************************
// Triggers / Events
// *****************************************
// Add item

// Clear items
$(".clear-cart").click(function () {
  shoppingCart.clearCart();
  displayCart();
});

function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for (var i in cartArray) {
    output +=
      "<tr>" +
      "<td>" +
      cartArray[i].name +
      "</td>" +
      "<td>(" +
      cartArray[i].price +
      ")</td>" +
      "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" +
      cartArray[i].name +
      ">-</button>" +
      "<input type='number' class='item-count form-control' data-name='" +
      cartArray[i].name +
      "' value='" +
      cartArray[i].count +
      "'>" +
      "<button class='plus-item btn btn-primary input-group-addon' data-name=" +
      cartArray[i].name +
      ">+</button></div></td>" +
      "<td><button class='delete-item btn btn-danger' data-name=" +
      cartArray[i].name +
      ">X</button></td>" +
      " = " +
      "<td>" +
      cartArray[i].total +
      "</td>" +
      "</tr>";
  }
  $(".show-cart").html(output);
  $(".total-cart").html(shoppingCart.totalCart());
  $(".total-count").html(shoppingCart.totalCount());
}

// Delete item button

$(".show-cart").on("click", ".delete-item", function (event) {
  var name = $(this).data("name");
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
});

// -1
$(".show-cart").on("click", ".minus-item", function (event) {
  var name = $(this).data("name");
  shoppingCart.removeItemFromCart(name);
  displayCart();
});
// +1
$(".show-cart").on("click", ".plus-item", function (event) {
  var name = $(this).data("name");
  shoppingCart.addItemToCart(name);
  displayCart();
});

// Item count input
$(".show-cart").on("change", ".item-count", function (event) {
  var name = $(this).data("name");
  var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

displayCart();

$(".cart-items").on("click", function () {
  alert();
});
