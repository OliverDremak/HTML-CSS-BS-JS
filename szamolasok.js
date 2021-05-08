function haromszogk() {
    var a = parseFloat(document.getElementById("ha").value);
    var b = parseFloat(document.getElementById("hb").value);
    var c = parseFloat(document.getElementById("hc").value);
    var val = document.getElementById("valaszt").value;
    if (val === "m") {
      document.getElementById("hszk").value = a + b + c + " m";
    }
    if (val === "dm") {
      document.getElementById("hszk").value = a + b + c + " dm";
    }
    if (val === "cm") {
      document.getElementById("hszk").value = a + b + c + " cm";
    }
  }
  function haromszogt() {
    var a = parseFloat(document.getElementById("ha").value);
    var b = parseFloat(document.getElementById("hb").value);
    var c = parseFloat(document.getElementById("hc").value);
    var hma = parseFloat(document.getElementById("hma").value);
    var val = document.getElementById("valaszt").value;
    if (a <= 0 || b <= 0 || c <= 0|| hma <= 0) {
        alert("Csak pozitív számot írhat")
    }    
    if ((a < (b + c))&& (b < (a + c)) && (c < (a + b))){
      if (val === "m") {
        document.getElementById("hszt").value = (a * hma) / 2 + " m2";
      }
      if (val === "dm") {
        document.getElementById("hszt").value = (a * hma) / 2 + " dm2";
      }
      if (val === "cm") {
        document.getElementById("hszt").value = (a * hma) / 2 + " cm2";
      }
    }
     else document.getElementById("hszt").value = " Nem szerkeszthető";
    }
  function teglalapKerulet() {
    var a = parseFloat(document.getElementById("na").value);
    var val = document.getElementById("valaszt2").value;
    if (val === "m") {
      document.getElementById("nt").value = a * 4 + " m";
    }
    if (val === "dm") {
      document.getElementById("nt").value = a * 4 + " dm";
    }
    if (val === "cm") {
      document.getElementById("nt").value = a * 4 + " cm";
    }
  }
  function teglalapTerulet() {
    var a = parseFloat(document.getElementById("na").value);
    var val = document.getElementById("valaszt2").value;
    if (val === "m") {
      document.getElementById("nk").value = a * a + " m2";
    }
    if (val === "dm") {
      document.getElementById("nk").value = a * a + " dm2";
    }
    if (val === "cm") {
      document.getElementById("nk").value = a * a + " cm2";
    }
  }
  function gulaTérfogat() {
    var h = parseFloat(document.getElementById("hem").value);
    var r = parseFloat(document.getElementById("her").value);
    var val = document.getElementById("valaszt3").value;
    if (val === "m") {
      document.getElementById("het").value = r * r * 3.14 * h + " m3";
    }
    if (val === "dm") {
      document.getElementById("het").value = r * r * 3.14 * h + " dm3";
    }
    if (val === "cm") {
      document.getElementById("het").value = r * r * 3.14 * h + " cm3";
    }
  }
  function gulaFelszin() {
    var magasság = parseFloat(document.getElementById("hem").value);
    var alap = parseFloat(document.getElementById("her").value);
    var val = document.getElementById("valaszt3").value;
    if (val === "m") {
      document.getElementById("hef").value =
        (alap + magasság) / 3 + " m2";
    }
    if (val === "dm") {
      document.getElementById("hef").value =
      (alap + magasság) / 3 + " dm2";
    }
    if (val === "cm") {
      document.getElementById("hef").value =
      (alap + magasság) / 3 + " cm2";
    }
  }
  
  function teglatestTerfogat() {
    var a = parseFloat(document.getElementById("ta").value);
    var b = parseFloat(document.getElementById("tb").value);
    var c = parseFloat(document.getElementById("tc").value);
    var val = document.getElementById("valaszt4").value;
    if (val === "m") {
      document.getElementById("tt").value = a * b * c + " m3";
    }
    if (val === "dm") {
      document.getElementById("tt").value = a * b * c + " dm3";
    }
    if (val === "cm") {
      document.getElementById("tt").value = a * b * c + " cm3";
    }
  }
  function teglatestFelszin() {
    var a = parseFloat(document.getElementById("ta").value);
    var b = parseFloat(document.getElementById("tb").value);
    var c = parseFloat(document.getElementById("tc").value);
    var val = document.getElementById("valaszt4").value;
    if (val === "m") {
      document.getElementById("tf").value = 2 * (a * b + a * c + b * c) + " m2";
    }
    if (val === "dm") {
      document.getElementById("tf").value = 2 * (a * b + a * c + b * c) + " dm2";
    }
    if (val === "cm") {
      document.getElementById("tf").value = 2 * (a * b + a * c + b * c) + " cm2";
    }
  }
