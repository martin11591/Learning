program RzutKostka;
uses crt;
var
  kostka:byte;
  czyTak:char;
  ileRazy:longint;
  i:longint;

begin
  randomize;
  repeat
    clrscr;
    writeln('Rzut kostka.');
    writeln;
    write('Ile razy rzucac kostka ? ');
    readln(ileRazy);
    writeln;
    for i:=1 to ileRazy do
      begin
        kostka:=random(6)+1;
        writeln('Rzut ',i,'. Wyrzucono ',kostka,' oczek.');
      end;
    writeln;
    write('Czy jeszcze raz ? (T)ak ');
    czyTak:=UpCase(ReadKey);
  until not (czyTak='T');
end.