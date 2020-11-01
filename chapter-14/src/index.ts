import { SportsProduct, SPORT } from "./product";
import { Cart } from "./cart";

let kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersports);
let hat = new SportsProduct(2, "Hat", 22.1, SPORT.Watersports, SPORT.Running);
let ball = new SportsProduct(3, "Soccer Ball", 19.5, SPORT.Soccer);

let cart = new Cart("Bobby");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(ball, 2);

console.log(`Cart has ${cart.itemCount} items`);
console.log(`Cart value is $${cart.totalPrice.toFixed(2)}`);
