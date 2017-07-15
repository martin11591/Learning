program mojProgram1;

USES
crt;

var
a,b : longint;
c : extended;
znak : char;

begin
  clrscr;
  write('Pierwszy argument:');
  readln(a);
  write('Drugi argument:');
  readln(b);
  write('Znak dziaˆania:');
  readln(znak);
  if znak='+' then c:=a+b;
  if znak='-' then c:=a-b;
  if znak='*' then c:=a*b;
  if znak='/' then c:=a/b;
  if znak='\' then c:=a/b;
  if znak=':' then c:=a/b;
  if znak='%' then c:=a mod b;
  writeln;
  write(a, znak, b, '=', c :2 :0);
  readln;
end.
