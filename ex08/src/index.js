function Mymutation(arr) {
    let a = arr[1].toLowerCase();
    let b = arr[0].toLowerCase();
    for (let i = 0; i < a.length; i++) {
      if (b.indexOf(a[i]) < 0) return false;
    }
    return true;
  }
  
  console.log(Mymutation(["hello", "hey"]));
  console.log(Mymutation(["hello", "Hello"]));
  console.log(Mymutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
  console.log(Mymutation(["Mary", "Army"]));
  console.log(Mymutation(["Mary", "Aarmy"]));
  console.log(Mymutation(["Alien", "line"]));
  console.log(Mymutation(["floor", "for"]));
  console.log(Mymutation(["hello", "neo"]));
  console.log(Mymutation(["voodoo", "no"]));
  console.log(Mymutation(["ate", "date"]));
  console.log(Mymutation(["Tiger", "Zebra"]));
  console.log(Mymutation(["Noel", "Ole"]));
  module.exports = Mymutation;