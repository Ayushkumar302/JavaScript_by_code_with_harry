class employee {
  login() {
    console.log(`Employee has loggged In`);
  }
  logout() {
    console.log(`Employee has loggged Out`);
  }
  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves - auto approved`);
  }
}

class programmer extends employee {
  requestCoffee(x) {
    console.log(`Employee has requested ${x} Coffees`);
  }

  requestLeaves(leaves) {
    //console.log(`Employee has requested ${leaves+1} leaves (One extra)`);
    super.requestLeaves(leaves + 1);// call the parent class method
    console.log("one extra is granted");
  }
}

let e = new programmer();
e.login();
e.requestLeaves(3);
