program sredniaUcznia;
uses crt, textGraph;
var
  opcjeMenuGlowne:array[0..4] of string;

procedure czysc(x1,y1,x2,y2:longint);
var
  i,j:longint;
begin
  gotoxy(x1,y1);
  write(' ' (x2-x1)*(y2-y1));
end;

begin
end.
