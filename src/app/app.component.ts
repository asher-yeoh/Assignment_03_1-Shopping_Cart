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
      desc: "Cherry Product Aaaaaaaaa aa aaa aaaaa aa aaa aaaaa aa aaa aaaaa aaa aa",
      imgFile: "/assets/img/item-05.png",
      qty: 0,
      selected: false,
      hidden: false,
    },
    {
      id: "000002",
      price: 20,
      desc: "Product Bb",
      imgFile: "/assets/img/item-05.png",
      qty: 0,
      selected: false,
      hidden: false,
    },
    {
      id: "000003",
      price: 30,
      desc: "Product Cc",
      imgFile: "/assets/img/item-05.png",
      qty: 0,
      selected: false,
      hidden: false,
    },
    {
      id: "000004",
      price: 40,
      desc: "Product Dd",
      imgFile: "/assets/img/item-05.png",
      qty: 0,
      selected: false,
      hidden: false,
    },
    {
      id: "000005",
      price: 50,
      desc: "Product Ee",
      imgFile: "/assets/img/item-05.png",
      qty: 0,
      selected: false,
      hidden: false,
    },
    {
      id: "000006",
      price: 60,
      desc: "Product Ff",
      imgFile: "/assets/img/item-05.png",
      qty: 0,
      selected: false,
      hidden: false,
    },
  ];

  productList = Object.keys(this.product)

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
