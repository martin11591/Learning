program grafika;
uses crt, graph;
var
ster, tryb, x, y, gestosc : integer;
klawisz : char;
begin
  ster:=VGA;
  tryb:=VGAHi;
  repeat
    clrscr;
    write('Podaj gestosc:');
    readln(gestosc);
    initgraph(ster, tryb, 'C:\BP\BGI');
    x:=0;
    while (x<639) do
      begin
        line(0,0,x,479);
        x:=x+gestosc;
      end;
    y:=479;
    while (y>0) do
      begin
        line(0,0,639,y);
        y:=y-gestosc;
      end;
    x:=639;
    while (x>0) do
      begin
        line(639,479,x,0);
        x:=x-gestosc;
      end;
    y:=0;
    while (y<479) do
      begin
        line(639,479,0,y);
        y:=y+gestosc;
      end;
    readln;
    closegraph;
    write('Czy jeszcze raz ?');
    klawisz:=upcase(readkey);
  until not (klawisz='T');
end.