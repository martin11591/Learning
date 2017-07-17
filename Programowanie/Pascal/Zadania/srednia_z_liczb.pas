program srednia_z_liczb;
uses crt;
var i, liczba, a : integer;
var suma : real;
begin
  clrscr;
  write('Ilosc liczb : ');
  readln(liczba);
  a:=0;
  for i:=1 to liczba do
    begin
    write('Podaj ', i, ' liczbe : ');
    readln(a);
    suma:=suma+a;
    end;
  suma:=suma/liczba;
  writeln('Srednia z tych liczb wynosi : ',suma :10 :2);
  readln;
end.