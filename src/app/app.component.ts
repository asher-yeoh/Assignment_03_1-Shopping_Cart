import { Component } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Ace Shopping Mart";
  isSelected = false;
  grandTotal = 0;

  productList = [
    {
      id: "000001",
      price: 10.50,
      desc: "Apple (500g) Product Aaaaaaaaa aa aaa aaaaa aa aaa aaaaa aa aaa aaaaa aaa aa",
      imgFile: "/assets/img/item-01.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
    },
    {
      id: "000002",
      price: 20.50,
      desc: "Orange (500g)",
      imgFile: "/assets/img/item-02.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
    },
    {
      id: "000003",
      price: 30.50,
      desc: "Strawberry (500g)",
      imgFile: "/assets/img/item-03.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
    },
    {
      id: "000004",
      price: 40.50,
      desc: "Grapes (500g)",
      imgFile: "/assets/img/item-04.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
    },
    {
      id: "000005",
      price: 50.50,
      desc: "Cherry (500g)",
      imgFile: "/assets/img/item-05.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
    },
    {
      id: "000006",
      price: 60.50,
      desc: "Watermelon (500g)",
      imgFile: "/assets/img/item-06.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
    },
  ];

  myCartList =[];

  onDecreaseQty(i) {
    if (this.productList[i].qty > 0) {
      if (this.productList[i].qty == 1 && this.productList[i].selected === true){
        window.alert("This item is selected, qty has to be at least one(1).")
        this.productList[i].qty += 1
      }

      this.productList[i].qty -= 1
      this.productList[i].subtotal = this.productList[i].qty * this.productList[i].price
    }
  }

  onIncreaseQty (i) {
    this.productList[i].qty += 1
    this.productList[i].subtotal = this.productList[i].qty * this.productList[i].price
  }

  checkGrandTotal(): number{
    let grandTotal = 0
    for (const i in this.myCartList) {
      grandTotal = grandTotal + this.myCartList[i].subtotal
    }
    return grandTotal
  }

  onSelected (i) {
    if (this.productList[i].qty == 0){
      window.alert("Please select at least one(1) qty.")
    }
    else {
      this.productList[i].selected =!this.productList[i].selected
    }

    if (this.productList[i].selected === false) {
      this.productList[i].qty = 0
      this.productList[i].subtotal = 0
    }
  }

  checkSelected(i): string {
    if (this.productList[i].selected) {
      return "rgba(178, 147, 136, 1)"
    }
    else {
      return "rgba(140, 128, 124, 0.7)"
    }
  }

  showSelected(): boolean {
    for (const i in this.productList) {
      if (this.productList[i].selected === true) {
        this.isSelected = true
        break
      }
      else {
        this.isSelected = false
      }
    }
    return this.isSelected
  }

  onAddToCart() {
    for (const i in this.productList) {
      if (this.productList[i].selected === true){
        this.myCartList.push({
          'id': this.productList[i].id,
          'price': this.productList[i].price,
          'desc': this.productList[i].desc,
          'imgFile': this.productList[i].imgFile,
          'qty': this.productList[i].qty,
          'subtotal': this.productList[i].subtotal,
          'selected': this.productList[i].selected,
          'hidden': this.productList[i].hidden,
        }),

     
        window.alert(this.myCartList.length)
      }
    }

    for (const i in this.productList) {
      if (this.productList[i].selected === true){
        this.productList[i].hidden = true
      }
    }
  }

  onClearCart() {
    for (const i in this.productList) {
      this.productList[i].qty = 0
      this.productList[i].subtotal = 0
      this.productList[i].selected = false
      this.productList[i].hidden = false
    }

    this.myCartList =[]
  }
  
  checkHiddenProduct(i): string {
    if (this.productList[i].hidden) {
      return "none"
    }
    else {
      return "inherit"
    }
  }

  checkHiddenMyCart(j): string {
    if (this.myCartList[j].hidden) {
      return "none"
    }
    else {
      return "inherit"
    }
  }

}