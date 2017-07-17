program wielomian;
uses crt;
var
n, i : integer;
a, x, y : real;
begin
  clrscr;
  i:=0;
  y:=0;
  writeln('Oblicz wartosci wielomianu');
  writeln;
  write('Podaj stopien wielomianu : ');
  readln(n);
  write('Podaj wartosc X : ');
  readln(x);
  writeln;
  write('Podaj ', n+1, ' wartosci wspolczynnika a(n) od a(0) do a(', n, ') : ');
  writeln;
  repeat
    write('a(', i, ')=');
    readln(a);
    y:=y*x+a;
    i:=i+1;
  until i>n;
  writeln;
  write('x=', x:5:2, '   y=', y:5:2);
  readln;
end.