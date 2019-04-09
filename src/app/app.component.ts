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
      price: 10.00,
      desc: "Apple (500g)",
      imgFile: "/assets/img/item-01.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
      button: "Select",
    },
    {
      id: "000002",
      price: 15.00,
      desc: "Orange (500g)",
      imgFile: "/assets/img/item-02.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
      button: "Select",
    },
    {
      id: "000003",
      price: 30.00,
      desc: "Strawberry (500g)",
      imgFile: "/assets/img/item-03.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
      button: "Select",
    },
    {
      id: "000004",
      price: 25.50,
      desc: "Grapes (500g)",
      imgFile: "/assets/img/item-04.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
      button: "Select",
    },
    {
      id: "000005",
      price: 30.50,
      desc: "Cherry (500g)",
      imgFile: "/assets/img/item-05.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
      button: "Select",
    },
    {
      id: "000006",
      price: 20.50,
      desc: "Watermelon (500g)",
      imgFile: "/assets/img/item-06.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
      button: "Select",
    },
    {
      id: "000007",
      price: 50.50,
      desc: "Pineapple (500g)",
      imgFile: "/assets/img/item-07.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
      button: "Select",
    },
    {
      id: "000008",
      price: 40.00,
      desc: "Rasberry (500g)",
      imgFile: "/assets/img/item-08.png",
      qty: 0,
      subtotal: 0,
      selected: false,
      hidden: false,
      button: "Select",
    },
  ];

  myCartList =[];
  order = {};

  onDecreaseQty(i) {
    if (this.productList[i].qty == 0 && this.productList[i].selected === false) {
      window.alert("The quantity cannot be less than 0.")
    }

    if (this.productList[i].qty > 0) {
      if (this.productList[i].qty == 1 && this.productList[i].selected === true){
        window.alert("This item is selected, please remain at least one(1) quantity to proceed.")
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

  onSelect (i) {
    if (this.productList[i].qty == 0){
      window.alert("Please select at least one(1) quantity to proceed.")
    }
    else {
      this.productList[i].selected =!this.productList[i].selected
      // this.productList[i].button = "Deselected"
    }

    if (this.productList[i].selected === false) {
      this.productList[i].qty = 0
      this.productList[i].subtotal = 0
      this.productList[i].button = "Select"
    }
  }

  checkSelected(i): string {
    if (this.productList[i].selected) {
      this.productList[i].button = "Deselected"
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

    let x = this.myCartList.length
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
          'productListIndex': i,
        }),
        x = this.myCartList.length
      }
    }

    for (const i in this.productList) {
      if (this.productList[i].selected === true){
        this.productList[i].qty = 0
        this.productList[i].subtotal = 0
        this.productList[i].selected = false
        this.productList[i].hidden = true
        this.productList[i].button = "Select"
      }
    }
  }

  onClearCart() {
    if (this.checkGrandTotal().toFixed(2) == "0.00") {
      window.alert("Your shopping cart is empty.")
    }

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

  checkHiddenMyCart(i): string {
    if (this.myCartList[i].hidden) {
      return "none"
    }
    else {
      return "inherit"
    }
  }

  onRemove(i) {
      this.productList[this.myCartList[i].productListIndex].hidden = false
      this.myCartList.splice(i, 1)
  }

  onCheckOut() {
    if (this.checkGrandTotal().toFixed(2) == "0.00") {
      window.alert("Your shopping cart is empty.")
    }
    else {
      window.alert("Total payment is RM " + this.checkGrandTotal().toFixed(2) + ".")
      this.onClearCart()
    }
  }

}