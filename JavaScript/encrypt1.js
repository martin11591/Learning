function encrypt1(str, num) {
  return str.replace(/[a-z0-9]/gi,function(x) {
    if (typeof(t3) == "undefined") return x;
    if (x.charCodeAt(0) >= 48 && x.charCodeAt(0) <= 57) {
      t1 = 48;
      t2 = 10;
    } else {
      t1 = x.toLowerCase() == x ? 97 : 65;
      t2 = 26;
    }
    return String.fromCharCode(((x.charCodeAt(0) - t1 + (t3 < 0 ? (t2 + (t3 % t2)) : t3 % t2)) % t2) + t1);
  });
}