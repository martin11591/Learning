// encrypt1(str [String], num [Number, Integer])
//
// Przekształca litery w ciągu na ich sąsiadujące odpowiedniki w alfabecie
// Nie zamienia dużych w małe i małych w duże; 
//
// gdy num = 1:
// a -> b, z -> a, 9 -> 0
//
// Użycie encrypt1("Tekst", 15) zwraca "itzhi" (String);

function encrypt1(str, num) {
  return str.replace(/[a-z0-9]/gi,function(x) {
    if (typeof(num) == "undefined") return x;
    if (x.charCodeAt(0) >= 48 && x.charCodeAt(0) <= 57) {
      t1 = 48; // początek kodów ASCII dla cyfr
      t2 = 10;
    } else {
      t1 = x.toLowerCase() == x ? 97 : 65; // rozróżnienie małych i dużych znaków
      t2 = 26; // liczba znaków (liter w alfabecie, bez polskich znaków diakrytycznych)
    }
    return String.fromCharCode(((x.charCodeAt(0) - t1 + (num < 0 ? (t2 + (num % t2)) : num % t2)) % t2) + t1);
  });
}