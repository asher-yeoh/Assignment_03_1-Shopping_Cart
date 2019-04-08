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

  product = [
    {
      id: "000001",
      price: 10,
      desc: "Apple (500g) Product Aaaaaaaaa aa aaa aaaaa aa aaa aaaaa aa aaa aaaaa aaa aa",
      imgFile: "/assets/img/item-01.png",
      qty: 0,
      subtotal: 0,
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

  myCart = [{}];
  // myCartList = Object.keys(this.myCart)
  
  onDecreaseQty(i) {
    if (this.product[i].qty > 0) {
      if (this.product[i].qty == 1 && this.product[i].selected === true){
        window.alert("This item is selected, qty has to be at least one(1).")
        this.product[i].qty += 1
      }

      this.product[i].qty -= 1
      this.product[i].subtotal = this.product[i].qty * this.product[i].price
    }
  }

  onIncreaseQty (i) {
    this.product[i].qty += 1
    this.product[i].subtotal = this.product[i].qty * this.product[i].price
  }

  // When myCart List is ready
  // checkGrandTotal(): number{
  //   let sum = 0
  //   for (const i in this.myCart) {
  //     sum = sum + this.myCart[i].subtotal
  //   }
  //   return sum
  // }

  onSelected (i) {
    if (this.product[i].qty == 0){
      window.alert("Please select at least one(1) qty.")
    }
    else {
      this.product[i].selected =!this.product[i].selected
    }

    if (this.product[i].selected === false) {
      this.product[i].qty = 0
      this.product[i].subtotal = 0
    }
  }

  checkSelected(i): string {
    if (this.product[i].selected) {
      return "rgba(178, 147, 136, 1)"
    }
    else {
      return "rgba(140, 128, 124, 0.7)"
    }
  }

  showSelected(): boolean {
    for (const i in this.product) {
      if (this.product[i].selected === true) {
        this.isSelected = true
        break
      }
      else {
        this.isSelected = false
      }
    }
    return this.isSelected
  }
  

  // onAddToCart() {
  //   window.alert("Check Point 01")
  //   for (const i in this.product) {
  //     if (this.product[i].selected === true){
  //       window.alert(i)
  //     }
  //   }
  // }


  // onAddToCart() {
  //   window.alert("Check Point 01")

  //   const j = Object.keys(this.myCart)

  //   for (const i in this.product) {
  //     if (this.product[i].selected === true){
  //       for (const j in this.myCart) {
          
  //         this.myCart[j].id = this.product[i].id
  //         this.myCart[j].price = this.product[i].price
  //         this.myCart[j].desc = this.product[i].desc
  //         this.myCart[j].imgFile = this.product[i].imgFile
  //         this.myCart[j].qty = this.product[i].subtotal
  //         this.myCart[j].selected = this.product[i].selected
  //         this.myCart[j].hidden = this.product[i].hidden
  //         window.alert(i)
  //         window.alert(j)
  //       }
  //     }
  //   }
  //   this.myCartList = Object.keys(this.myCart)
  // }

  // onAddToCart() {
  //   const tasks = Object.keys(this.myCart)
  //   this.myCart.id = "test1"
  //   this.myCartList = Object.keys(this.myCart)
  //   window.alert(this.myCart[0].id )
  // }

  // onAddToCart() {
  //   this.myCart[0].id = this.product[0].id
  //   this.myCart[0].price = this.product[0].price
  //   this.myCart[0].desc = this.product[0].desc
  //   this.myCart[0].imgFile = this.product[0].imgFile
  //   this.myCart[0].qty = this.product[0].subtotal
  //   this.myCart[0].selected = this.product[0].selected
  //   this.myCart[0].hidden = this.product[0].hidden
    
  //   this.myCartList = Object.keys(this.myCart)
  //   window.alert("hello")
  // }



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
