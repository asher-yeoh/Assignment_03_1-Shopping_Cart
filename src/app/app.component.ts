import { Component } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Ace Shopping Mart";
  isShow = true;

  product = [
    {
      id: "000001",
      price: 10,
      desc: "Apple (500g) Product Aaaaaaaaa aa aaa aaaaa aa aaa aaaaa aa aaa aaaaa aaa aa",
      imgFile: "/assets/img/item-01.png",
      qty: 0,
      subtotal: 1000,
      selected: false,
      hidden: false,
    },
    {
      id: "000002",
      price: 20,
      desc: "Orange (500g)",
      imgFile: "/assets/img/item-02.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
    },
    {
      id: "000003",
      price: 30,
      desc: "Strawberry (500g)",
      imgFile: "/assets/img/item-03.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
    },
    {
      id: "000004",
      price: 40,
      desc: "Grapes (500g)",
      imgFile: "/assets/img/item-04.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
    },
    {
      id: "000005",
      price: 50,
      desc: "Cherry (500g)",
      imgFile: "/assets/img/item-05.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
    },
    {
      id: "000006",
      price: 60,
      desc: "Watermelon (500g)",
      imgFile: "/assets/img/item-06.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
    },
  ];

  // productList = Object.keys(this.product)

  // myCart = [];

  onDecreaseQty(i) {
    if (this.product[i].qty > 0) {
      this.product[i].qty -= 1
    }
  }

  onIncreaseQty (i) {
    this.product[i].qty += 1
    // window.alert(this.product[i].qty)

  }

//   onAddToCart(item) {
//     const addToCart = Object.keys(this.product)
  
//     var obj = {
//       id: addToCart[item].id,
//       price: 40,
//       desc: "Grapes (500g)",
//       imgFile: "/assets/img/item-04.png",
//       qty: 0,
//       subtotal: 0,
//       selected: false,
//       hidden: false,
//     };

//   this.arrayText.push(obj);
//   this.todosTasks = Object.keys(this.todos)
// }






// onClearMyCart () {
//   this.product = {}
//   this.productList = []
// }



  // toggleButton.addEventListener('click', () => {
  //   if (isCustomizePage) {
  //     introPage.classList.remove('hidden')
  //     customizePage.classList.add('hidden')
  //   } else {
  //     introPage.classList.add('hidden')
  //     customizePage.classList.remove('hidden')
  //   }
  //   isCustomizePage = !isCustomizePage
  // })







}
