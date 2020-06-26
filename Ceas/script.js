console.log('mergee');

function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    let timp = h + ":" + m + ":" + s
    document.getElementById('ceas').innerHTML = timp;
    let t = setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };  // add zero in front of numbers < 10
    return i;
  }