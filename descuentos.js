// const precioOriginal = 120;
// const descuento = 18;

// const coupons = [
//   "bataman",
//   "pero_no_le_digas_a_nadie",
//   "corbacho"
// ];

const coupons = [
  {
    name: "bataman",
    discount: 15,
  },
  {
    name: "auron",
    discount: 30,
  },
  {
    name: "corbacho",
    discount: 45,
  },
]

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = ((precio * porcentajePrecioConDescuento) / 100);
  
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("input-price");
  const valueInputPrice = inputPrice.value;

  const inputCoupon = document.getElementById("input-coupon");
  const valueInputCoupon = inputCoupon.value;

  console.log(valueInputCoupon);
  console.log(valueInputPrice);
  // let discount;

  const isCouponValueValid = function(coupon) {
    return coupon.name === valueInputCoupon;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupon " + valueInputCoupon + " no es valido");
  } 
  else {
    const discount = userCoupon.discount;
    const finalPrice = calcularPrecioConDescuento(valueInputPrice, discount);

    const result = document.getElementById("result");
    result.innerText = "El precio con descuento es: $" + finalPrice;
  }

  // switch(valueInputCoupon) {
  //   case coupons[0]: // "batman"
  //     discount = 15;
  //   break;
  //   case coupons[1]: // "pero_no_le_digas_a_nadie"
  //     discount = 30;
  //   break;
  //   case coupons[2]: // "corbacho"
  //     discount = 25;
  //   break;
  // }

  // if (!coupons.includes(valueInputCoupon)){
  //     alert("Por favor ingresa un código válido");

  // } else if (valueInputCoupon === coupons[0]) {
  //   discount = 15;
  // } else if (valueInputCoupon === coupons[1]) {
  //   discount = 30; 
  // } else if (valueInputCoupon === coupons[2]) {
  //   discount = 45;
  // } 
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento
// });



