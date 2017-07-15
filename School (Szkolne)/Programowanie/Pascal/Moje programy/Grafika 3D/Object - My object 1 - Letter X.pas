program obiekt3D;

uses crt, graph, math;
const PI=3.141592653589793;
var
  ster,tryb:integer;
  x:array[1..9999] of real;
  y:array[1..9999] of real;
  z:array[1..9999] of real;
  k:array[1..9999,1..9999] of longint;
  l:array[1..9999] of longint;
  p:array[1..9999,1..9999] of longint;
  xi,yi,zi:real;
  dx,dy,dz:real;
  del:longint;
  ile1,ile2:longint;
  znak:char;

procedure rysuj(alfa,beta,gama,vx,vy,vz,kk,d:real);
var
  i,j:byte;
  wa,ca,sa,wb,cb,sb,wc,cc,sc:real;
  x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4,u,v:real;
  x01,y01,z01:real;
  kol1,wiersz1:real;
  kol:array[1..9999] of real;
  wiersz:array[1..9999] of real;
  k1,w1,k2,w2:longint;
begin
  cleardevice;
  {Obliczenie wspolczynnikow - POCZATEK}
  wa:=alfa*PI/180;
  ca:=cos(wa);
  sa:=sin(wa);
  wb:=beta*PI/180;
  cb:=cos(wb);
  sb:=sin(wb);
  wc:=gama*PI/180;
  cc:=cos(wc);
  sc:=sin(wc);
  {Obliczenie wspolczynnikow - KONIEC}
  for i:=1 to ile1 do
  begin
    x01:=x[i];
    y01:=y[i];
    z01:=z[i];
    {Odwzorowanie punktu - POCZATEK}
      {Obrot wokol osi X}
      x1:=x01;
      y1:=ca*y01-sa*z01;
      z1:=sa*y01+ca*z01;
      {Obrot wokol osi Y}
      x2:=cb*x1-sb*z1;
      y2:=y1;
      z2:=sb*x1+cb*z1;
      {obrot wokol osi Z}
      x3:=cc*x2-sc*y2;
      y3:=sc*x2+cc*y2;
      z3:=z2;
      {Przesuniecie}
      x4:=x3+vx;
      y4:=y3+vy;
      z4:=z3+vz;
      {Rzut na plaszczyzne obrazu}
      u:=-x4/y4*d;
      v:=-z4/y4*d;
      {Konwersja na wspolrzedne ekranowe}
      kol1:=320+kk*u;
      if (kol1<0) then kol1:=0;
      if (kol1>640) then kol1:=640;
      wiersz1:=240-kk*v;
      if (wiersz1<0) then wiersz1:=0;
      if (wiersz1>480) then wiersz1:=480;
    {Odwzorowanie punktu - KONIEC}
    kol[i]:=kol1;
    wiersz[i]:=wiersz1;
  end;
  for i:=1 to ile2 do
  begin
    for j:=1 to l[i]-1 do
    begin
      k1:=Math.floor(kol[k[i,j]]);
      w1:=Math.floor(wiersz[k[i,j]]);
      k2:=Math.floor(kol[k[i,j+1]]);
      w2:=Math.floor(wiersz[k[i,j+1]]);
      line(k1,w1,k2,w2);
    end;
  end;
end;

begin
  ster:=VGA;
  tryb:=VGAHi;
  { Wspolrzedne punktow obiektu 3D - START }
  x[1]:=-12;
  y[1]:=-6;
  z[1]:=21;
  x[2]:=0;
  y[2]:=-6;
  z[2]:=10;
  x[3]:=12;
  y[3]:=-6;
  z[3]:=21;
  x[4]:=21;
  y[4]:=-6;
  z[4]:=12;
  x[5]:=10;
  y[5]:=-6;
  z[5]:=0;
  x[6]:=21;
  y[6]:=-6;
  z[6]:=-12;
  x[7]:=12;
  y[7]:=-6;
  z[7]:=-21;
  x[8]:=0;
  y[8]:=-6;
  z[8]:=-12;
  x[9]:=-12;
  y[9]:=-6;
  z[9]:=-21;
  x[10]:=-21;
  y[10]:=-6;
  z[10]:=-12;
  x[11]:=-12;
  y[11]:=-6;
  z[11]:=0;
  x[12]:=-21;
  y[12]:=-6;
  z[12]:=12;
  x[13]:=-12;
  y[13]:=6;
  z[13]:=21;
  x[14]:=0;
  y[14]:=6;
  z[14]:=10;
  x[15]:=12;
  y[15]:=6;
  z[15]:=21;
  x[16]:=21;
  y[16]:=6;
  z[16]:=12;
  x[17]:=10;
  y[17]:=6;
  z[17]:=0;
  x[18]:=21;
  y[18]:=6;
  z[18]:=-12;
  x[19]:=12;
  y[19]:=6;
  z[19]:=-21;
  x[20]:=0;
  y[20]:=6;
  z[20]:=-12;
  x[21]:=-12;
  y[21]:=6;
  z[21]:=-21;
  x[22]:=-21;
  y[22]:=6;
  z[22]:=-12;
  x[23]:=-12;
  y[23]:=6;
  z[23]:=0;
  x[24]:=-21;
  y[24]:=6;
  z[24]:=12;
  x[25]:=-6;
  y[25]:=-3;
  z[25]:=10.5;
  x[26]:=0;
  y[26]:=-3;
  z[26]:=5;
  x[27]:=6;
  y[27]:=-3;
  z[27]:=10.5;
  x[28]:=10.5;
  y[28]:=-3;
  z[28]:=6;
  x[29]:=5;
  y[29]:=-3;
  z[29]:=0;
  x[30]:=10.5;
  y[30]:=-3;
  z[30]:=-6;
  x[31]:=6;
  y[31]:=-3;
  z[31]:=-10.5;
  x[32]:=0;
  y[32]:=-3;
  z[32]:=-6;
  x[33]:=-6;
  y[33]:=-3;
  z[33]:=-10.5;
  x[34]:=-10.5;
  y[34]:=-3;
  z[34]:=-6;
  x[35]:=-6;
  y[35]:=-3;
  z[35]:=0;
  x[36]:=-10.5;
  y[36]:=-3;
  z[36]:=6;
  x[37]:=-6;
  y[37]:=3;
  z[37]:=10.5;
  x[38]:=0;
  y[38]:=3;
  z[38]:=5;
  x[39]:=6;
  y[39]:=3;
  z[39]:=10.5;
  x[40]:=10.5;
  y[40]:=3;
  z[40]:=6;
  x[41]:=5;
  y[41]:=3;
  z[41]:=0;
  x[42]:=10.5;
  y[42]:=3;
  z[42]:=-6;
  x[43]:=6;
  y[43]:=3;
  z[43]:=-10.5;
  x[44]:=0;
  y[44]:=3;
  z[44]:=-6;
  x[45]:=-6;
  y[45]:=3;
  z[45]:=-10.5;
  x[46]:=-10.5;
  y[46]:=3;
  z[46]:=-6;
  x[47]:=-6;
  y[47]:=3;
  z[47]:=0;
  x[48]:=-10.5;
  y[48]:=3;
  z[48]:=6;
  { Wspolrzedne punktow obiektu 3D - KONIEC }
  ile2:=28;
  ile1:=48;
  { Krawedzie obiektu 3D - START }
  l[1]:=13;
  k[1,1]:=1;
  k[1,2]:=2;
  k[1,3]:=3;
  k[1,4]:=4;
  k[1,5]:=5;
  k[1,6]:=6;
  k[1,7]:=7;
  k[1,8]:=8;
  k[1,9]:=9;
  k[1,10]:=10;
  k[1,11]:=11;
  k[1,12]:=12;
  k[1,13]:=1;
  l[2]:=13;
  k[2,1]:=13;
  k[2,2]:=14;
  k[2,3]:=15;
  k[2,4]:=16;
  k[2,5]:=17;
  k[2,6]:=18;
  k[2,7]:=19;
  k[2,8]:=20;
  k[2,9]:=21;
  k[2,10]:=22;
  k[2,11]:=23;
  k[2,12]:=24;
  k[2,13]:=13;
  l[3]:=2;
  k[3,1]:=1;
  k[3,2]:=13;
  l[4]:=2;
  k[4,1]:=2;
  k[4,2]:=14;
  l[5]:=2;
  k[5,1]:=3;
  k[5,2]:=15;
  l[6]:=2;
  k[6,1]:=4;
  k[6,2]:=16;
  l[7]:=2;
  k[7,1]:=5;
  k[7,2]:=17;
  l[8]:=2;
  k[8,1]:=6;
  k[8,2]:=18;
  l[9]:=2;
  k[9,1]:=7;
  k[9,2]:=19;
  l[10]:=2;
  k[10,1]:=8;
  k[10,2]:=20;
  l[11]:=2;
  k[11,1]:=9;
  k[11,2]:=21;
  l[12]:=2;
  k[12,1]:=10;
  k[12,2]:=22;
  l[13]:=2;
  k[13,1]:=11;
  k[13,2]:=23;
  l[14]:=2;
  k[14,1]:=12;
  k[14,2]:=24;
  l[15]:=13;
  k[15,1]:=25;
  k[15,2]:=26;
  k[15,3]:=27;
  k[15,4]:=28;
  k[15,5]:=29;
  k[15,6]:=30;
  k[15,7]:=31;
  k[15,8]:=32;
  k[15,9]:=33;
  k[15,10]:=34;
  k[15,11]:=35;
  k[15,12]:=36;
  k[15,13]:=25;
  l[16]:=13;
  k[16,1]:=37;
  k[16,2]:=38;
  k[16,3]:=39;
  k[16,4]:=40;
  k[16,5]:=41;
  k[16,6]:=42;
  k[16,7]:=43;
  k[16,8]:=44;
  k[16,9]:=45;
  k[16,10]:=46;
  k[16,11]:=47;
  k[16,12]:=48;
  k[16,13]:=37;
  l[17]:=2;
  k[17,1]:=25;
  k[17,2]:=37;
  l[18]:=2;
  k[18,1]:=26;
  k[18,2]:=38;
  l[19]:=2;
  k[19,1]:=27;
  k[19,2]:=39;
  l[20]:=2;
  k[20,1]:=28;
  k[20,2]:=40;
  l[21]:=2;
  k[21,1]:=29;
  k[21,2]:=41;
  l[22]:=2;
  k[22,1]:=30;
  k[22,2]:=42;
  l[23]:=2;
  k[23,1]:=31;
  k[23,2]:=43;
  l[24]:=2;
  k[24,1]:=32;
  k[24,2]:=44;
  l[25]:=2;
  k[25,1]:=33;
  k[25,2]:=45;
  l[26]:=2;
  k[26,1]:=34;
  k[26,2]:=46;
  l[27]:=2;
  k[27,1]:=35;
  k[27,2]:=47;
  l[28]:=2;
  k[28,1]:=36;
  k[28,2]:=48;
  { Krawedzie obiektu 3D - KONIEC }
  repeat
    xi:=0;
    yi:=0;
    zi:=0;
    clrscr;
    write('Krok obrotu osi X:');
    readln(dx);
    write('Krok obrotu osi Y:');
    readln(dy);
    write('Krok obrotu osi Z:');
    readln(dz);
    writeln;
    if ((dx=0) and (dy=0) and (dz=0)) then
    begin
      write('Poczatkowe ustawienie osi X:');
      readln(xi);
      write('Poczatkowe ustawienie osi Y:');
      readln(yi);
      write('Poczatkowe ustawienie osi Z:');
      readln(zi);
    end;
    writeln;
    write('OpôŽnienie (w milisekundach) micdzy kolejnym rysowaniem:');
    readln(del);
    writeln;
    InitGraph(ster,tryb,'C:\bgi');
    rysuj(xi,yi,zi,0,150,0,5.5,250);
    repeat
      if ((dx<>0) or (dy<>0) or (dz<>0)) then rysuj(xi,yi,zi,0,150,0,5.5,250);
      xi:=xi+dx;
      while (xi<=-360) do xi:=xi+720;
      while (xi>=360) do xi:=xi-720;
      yi:=yi+dy;
      while (yi<=-360) do yi:=yi+720;
      while (yi>=360) do yi:=yi-720;
      zi:=zi+dz;
      while (zi<=-360) do zi:=zi+720;
      while (zi>=360) do zi:=zi-720;
      if (del>0) then delay(del);
    until keypressed;
    CloseGraph;
    write('Czy jeszcze raz ? (T) ');
    znak:=readkey;
    znak:=' ';
    znak:=UpCase(ReadKey);
  until not (znak='T');
end.
