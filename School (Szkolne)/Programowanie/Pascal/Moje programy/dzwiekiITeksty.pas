program dzwieki_i_teksty;
uses crt;
var
  curX:integer;
  curY:integer;
  freq:longint;
  dela:longint;
  rep:char;

begin
  repeat
    clrscr;
    write('Podaj pozycje pozioma kursora:');
    readln(curX);
    write('Podaj pozycje pionowa kursora:');
    readln(curY);
    write('Podaj czestotliwosc dzwieku:');
    readln(freq);
    write('Podaj dlugosc dzwieku:');
    readln(dela);
    clrscr;
    gotoXY(curX,curY);
    write('*');
    sound(freq);
    delay(dela);
    nosound;
    writeln;
    writeln;
    write('Jeszcze raz (T\N) ?');
    rep:=upcase(readkey);
  until not (rep='T')
end.