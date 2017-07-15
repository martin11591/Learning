program srednia_arytmetyczna;
uses crt;
var
suma : real;
i : integer;
liczba : real;
srednia : real;
begin
  clrscr;
  i:=1;
  suma:=0;
  repeat
    write('Podaj liczbe : ');
    readln(liczba);
    suma:=suma+liczba;
    srednia:=suma/i;
    i:=i+1;
    writeln('Srednia arytmetyczna wynosi ', srednia :10 :2);
    writeln;
  until suma > 150;
  writeln('Suma wszystkich liczb przekroczyla wartosc 150!');
  readln;
end.
