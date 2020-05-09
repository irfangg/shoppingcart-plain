import "./style.scss";

function fetchAllProducts(sortType) {
  fetch("https://my-json-server.typicode.com/irfangg/my-apparal-api/apparals")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (sortType === "lowToHigh") {
        data.sort((a, b) => a.Final_Price - b.Final_Price);
      }
      if (sortType === "highToLow") {
        data.sort((a, b) => b.Final_Price - a.Final_Price);
      }
      if (sortType === "discount") {
        data.sort((a, b) => a.Discount_Percent - b.Discount_Percent);
      }
      data.forEach((d) => {
        $(".products").append(`
          <div class="card product-item">
              <img
              title="${d.product_type_name}"
              class="card-img-top"
              src="${d.medium_image_url}"
              alt="${d.title}"
              />
              <div class="card-block">
              <div class="card-title" title="${d.title}">${
          d.title.substring(0, 15) + "..."
        }</div>
              <div class="price-details">
              <span class="finalprice">
              <i class='fa fa-rupee'>${d.Final_Price.toFixed(2)}</i>
              </span>
              <span class="originalprice">${d.Original_Price.toFixed(2)}</span>
              <span class="discountpercentage">${d.Discount_Percent}%</span>
              </div>
              <a
                  href="#"
                  data-id=${d.id}
                  data-name="${d.title}"
                  data-price=${d.Original_Price}
                  data-image=${d.medium_image_url}
                  data-finalprice=${d.Final_Price}
                  data-disc=${d.Discount_Percent}
                  class="add-to-cart btn btn-primary"
                  >Add to cart</a
              >
              </div>
          </div>
          `);
      });

      $(".product-item a.add-to-cart").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var image = $(this).data("image");
        var name = $(this).data("name");
        var finalPrice = $(this).data("finalprice");
        var price = $(this).data("price");
        var disc = $(this).data("disc");

        shoppingCart.addItemToCart(id, image, name, finalPrice, price, disc, 1);
        displayCart();
      });
    });
}

function showProducts(minPrice, maxPrice) {
  $(".products .product-item")
    .hide()
    .filter(function () {
      console.log(this, minPrice, maxPrice);
      var price = parseInt($(this).find(" .finalprice i.fa-rupee").html(), 10);
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
          .html(`<i class='fa fa-rupee'>${ui.value}</i>`);
        showProducts(min, max);
      },
    },
    min,
    max;

  $("#slider-range").slider(options);

  min = $("#slider-range").slider("values", 0);
  max = $("#slider-range").slider("values", 1);

  $("#max")
    .html(
      `<i class='fa fa-rupee'>${$("#slider-range").slider("values", 1)}</i>`
    )
    .position({
      my: "center top",
      at: "center bottom",
      of: $("#slider-range > span:eq(1)"),
      offset: "0, 10",
    });

  $("#min")
    .html(
      `<i class='fa fa-rupee'>${$("#slider-range").slider("values", 0)}</i>`
    )
    .position({
      my: "center top",
      at: "center bottom",
      of: $("#slider-range > span:eq(0)"),
      offset: "0, 10",
    });

  showProducts(min, max);

  fetchAllProducts();

  $(".sortBy ul > li > a").click(function (e) {
    e.preventDefault();
    $("ul > li > a").addClass("notActiveSort");
    $(this).removeClass("notActiveSort");
    $(".products").empty();
    let sortBy = $(this).data("value");
    fetchAllProducts(sortBy);
  });

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };
  $(".searchBar .search-product").on(
    "keyup",
    debounce(function () {
      let input = $(this)[0].value;
      $(".products .product-item")
        .fadeOut()
        .filter(function () {
          let name = $(this).find(".card-title").html();
          return input ? name.match(new RegExp(input, "ig")) && true : true;
        })
        .fadeIn();
    }, 300)
  );
});

var shoppingCart = (function () {
  // =============================
  // Private methods and propeties
  // =============================
  let cart = [];

  // Constructor
  function Item(id, image, name, finalPrice, price, disc, count) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.finalPrice = finalPrice;
    this.price = price;
    this.disc = disc;
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
  obj.addItemToCart = function (
    id,
    image,
    name,
    finalPrice,
    price,
    disc,
    count
  ) {
    for (var item in cart) {
      if (cart[item].id === id) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    console.log("on add cart ", cart);
    var item = new Item(id, image, name, finalPrice, price, disc, count);
    cart.push(item);
    saveCart();
  };
  // Set count from item
  obj.setCountForItem = function (id, count) {
    for (var i in cart) {
      if (cart[i].id === id) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function (id) {
    for (var item in cart) {
      if (cart[item].id === id) {
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
  obj.removeItemFromCartAll = function (id) {
    for (var item in cart) {
      if (cart[item].id === id) {
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
  console.log("cartArray ", cartArray);
  var output = "";
  for (let item of cartArray) {
    output += `
    <div class="cart-item">
      <img src=${item.image} alt=${item.name} />
      <div class="cart-item-details">
        <h6>${item.name}</h6>
        <div class="price-details">
          <span class="finalprice">${item.finalPrice?.toFixed(2)}</span>
          <span class="originalprice">${item.price?.toFixed(2)}</span>
          <span class="discountpercentage">${item.disc}%</span>
        </div>
      </div>
      <div class='input-group cart-item-count'>
        <i class="fa fa-2x fa-minus-circle minus-item input-group-addon btn btn-primary"
          data-id="${item.id}"></i>
        <input type='number' class='item-count form-control' 
          data-id="${item.id}" 
          value=${item.count}>
        <i class="fa fa-2x fa-plus-circle plus-item btn btn-primary input-group-addon"
          data-id="${item.id}"></i>
      </div>
      <div class="cart-item-delete">
      <button class='delete-item btn btn-danger' 
        data-id="${item.id}">Remove</button>
      </div>
    </div>
    `;
  }
  $(".show-cart").html(output);
  $(".total-cart").html(shoppingCart.totalCart());
  $(".total-count").html(shoppingCart.totalCount());
}

// Delete item button

$(".show-cart").on("click", ".delete-item", function (event) {
  var id = $(this).data("id");
  shoppingCart.removeItemFromCartAll(id);
  displayCart();
});

// -1
$(".show-cart").on("click", ".minus-item", function (event) {
  var id = $(this).data("id");
  shoppingCart.removeItemFromCart(id);
  displayCart();
});
// +1
$(".show-cart").on("click", ".plus-item", function (event) {
  var id = $(this).data("id");
  shoppingCart.addItemToCart(id);
  displayCart();
});

// Item count input
$(".show-cart").on("change", ".item-count", function (event) {
  var id = $(this).data("id");
  var count = Number($(this).val());
  shoppingCart.setCountForItem(id, count);
  displayCart();
});

displayCart();
