program grafika;
uses crt, graph;
var
ster, tryb, x, y, krok, gestosc, gestoscP : integer;
klawisz : char;
begin
  ster:=VGA;
  tryb:=VGAHi;
  repeat
    clrscr;
    write('Podaj gestosc poczatkowa:');
    readln(gestoscP);
    write('Podaj krok wzrostu gestosci:');
    readln(krok);
    initgraph(ster, tryb, 'C:\BP\BGI');
    x:=639;
    gestosc:=gestoscP;
    while (x>0) do
      begin
        line(0,0,x,479);
        x:=x-gestosc;
        gestosc:=gestosc+krok;
      end;
    y:=479;
    gestosc:=gestoscP;
    while (y>0) do
      begin
        line(0,0,639,y);
        y:=y-gestosc;
        gestosc:=gestosc+krok;
      end;
    x:=0;
    gestosc:=gestoscP;
    while (x<639) do
      begin
        line(639,479,x,0);
        x:=x+gestosc;
        gestosc:=gestosc+krok;
      end;
    y:=0;
    gestosc:=gestoscP;
    while (y<479) do
      begin
        line(639,479,0,y);
        y:=y+gestosc;
        gestosc:=gestosc+krok;
      end;
    readln;
    closegraph;
    write('Czy jeszcze raz ? ');
    klawisz:=upcase(readkey);
  until not (klawisz='T');
end.