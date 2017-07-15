PROGRAM Grafika;
USES CRT,MATH,GRAPH;
VAR
  scr:ARRAY[0..640,0..480] OF WORD;
  drv,mode:INTEGER;
  i:LONGINT;
  x,y,z:REAL;
  dx,dy,dz:REAL;
FUNCTION RND(num:REAL;mode:STRING):LONGINT;
VAR
  sNum:STRING;
  result:LONGINT;
  resultT:BYTE;
  test:BYTE;
  testT:BYTE;
  correction:INTEGER;
BEGIN
  STR(num:0:2,sNum);
  VAL(COPY(sNum,1,POS('.',sNum)-1),result,resultT);
  VAL(COPY(sNum,POS('.',sNum)+1,1),test,testT);
  mode:=UPCASE(mode);
  IF ((mode='-1')OR(mode='D')OR(mode='DOWN')) THEN correction:=0;
  IF ((mode='0')OR(mode='N')OR(mode='NORMAL')) THEN
    IF test<5 THEN correction:=0 ELSE correction:=1;
  IF ((mode='1')OR(mode='U')OR(mode='UP')) THEN
    IF test>0 THEN correction:=1 ELSE correction:=0;
  result:=result+correction;
  RND:=result;
END;
PROCEDURE MLine(x1,y1,x2,y2:REAL;col:WORD);
VAR
  x,y:REAL;
  qw,er:REAL;
  dx,dy:REAL;
  i:LONGINT;
BEGIN
  IF ((x1<>x2)OR(y1<>y2)) THEN
  BEGIN
    qw:=ABS(x2-x1);
    er:=ABS(y2-y1);
    IF (qw<er) THEN qw:=er;
    dx:=(x2-x1)/qw;
    dy:=(y2-y1)/qw;
    x:=x1;
    y:=y1;
    FOR i:=0 TO RND(qw,'0') DO
    BEGIN
      IF ((x>=0)AND(x<=640)) THEN
        IF ((y>=0)AND(y<=480)) THEN
          scr[RND(x,'-1'),RND(y,'-1')]:=col;
        x:=x+dx;
        y:=y+dy;
      END;
  END;
  IF ((x2>=0)AND(x2<=640)) THEN
   IF ((y2>=0)AND(y2<=480)) THEN
     scr[RND(x2,'-1'),RND(y2,'-1')]:=col;
END;
PROCEDURE Rectangle(x1,y1,x2,y2:REAL;col:WORD);
BEGIN
  MLine(x1,y1,x2,y1,col);
  MLine(x2,y1,x2,y2,col);
  MLine(x2,y2,x1,y2,col);
  MLine(x1,y2,x1,y1,col);
END;
PROCEDURE Line3D(x1,y1,z1,x2,y2,z2,alfa,beta,gamma,vx,vy,vz,k,d:real;col:WORD);
VAR
  ra,sa,ca:real;
  rb,sb,cb:real;
  rg,sg,cg:real;
  oX1,oY1,oZ1:real;
  oX2,oY2,oZ2:real;
  oX3,oY3,oZ3:real;
  oX4,oY4,oZ4:real;
  u,v:real;
  k1,w1,k2,w2:real;
BEGIN
  IF vy=0 THEN vy:=10;
  ra:=alfa*PI/180;
  sa:=SIN(ra);
  ca:=COS(ra);
  rb:=beta*PI/180;
  sb:=SIN(rb);
  cb:=COS(rb);
  rg:=gamma*PI/180;
  sg:=SIN(rg);
  cg:=COS(rg);
  oX1:=x1;
  oY1:=ca*y1-sa*z1;
  oZ1:=sa*y1+ca*z1;
  oX2:=cb*oX1-sb*oZ1;
  oY2:=oY1;
  oZ2:=sb*oX1+cb*oZ1;
  oX3:=cg*oX2-sg*oY2;
  oY3:=sg*oX2+cg*oY2;
  oZ3:=oZ2;
  oX4:=oX3+vx;
  oY4:=oY3+vy;
  oZ4:=oZ3+vz;
  u:=-oX4/oY4*d;
  v:=-oZ4/oY4*d;
  k1:=320+u*k;
  w1:=240+v*k;
  oX1:=x2;
  oY1:=ca*y2-sa*z2;
  oZ1:=sa*y2+ca*z2;
  oX2:=cb*oX1-sb*oZ1;
  oY2:=oY1;
  oZ2:=sb*oX1+cb*oZ1;
  oX3:=cg*oX2-sg*oY2;
  oY3:=sg*oX2+cg*oY2;
  oZ3:=oZ2;
  oX4:=oX3+vx;
  oY4:=oY3+vy;
  oZ4:=oZ3+vz;
  u:=-oX4/oY4*d;
  v:=-oZ4/oY4*d;
  k2:=320+u*k;
  w2:=240+v*k;
  Line(RND(k1,'0'),RND(w1,'0'),RND(k2,'0'),RND(w2,'0'));
END;
PROCEDURE MLine3D(x1,y1,z1,x2,y2,z2,alfa,beta,gamma,vx,vy,vz,k,d:real;col:WORD);
VAR
  ra,sa,ca:real;
  rb,sb,cb:real;
  rg,sg,cg:real;
  oX1,oY1,oZ1:real;
  oX2,oY2,oZ2:real;
  oX3,oY3,oZ3:real;
  oX4,oY4,oZ4:real;
  u,v:real;
  k1,w1,k2,w2:real;
BEGIN
  IF vy=0 THEN vy:=10;
  ra:=alfa*PI/180;
  sa:=SIN(ra);
  ca:=COS(ra);
  rb:=beta*PI/180;
  sb:=SIN(rb);
  cb:=COS(rb);
  rg:=gamma*PI/180;
  sg:=SIN(rg);
  cg:=COS(rg);
  oX1:=x1;
  oY1:=ca*y1-sa*z1;
  oZ1:=sa*y1+ca*z1;
  oX2:=cb*oX1-sb*oZ1;
  oY2:=oY1;
  oZ2:=sb*oX1+cb*oZ1;
  oX3:=cg*oX2-sg*oY2;
  oY3:=sg*oX2+cg*oY2;
  oZ3:=oZ2;
  oX4:=oX3+vx;
  oY4:=oY3+vy;
  oZ4:=oZ3+vz;
  u:=-oX4/oY4*d;
  v:=-oZ4/oY4*d;
  k1:=320+u*k;
  w1:=240+v*k;
  oX1:=x2;
  oY1:=ca*y2-sa*z2;
  oZ1:=sa*y2+ca*z2;
  oX2:=cb*oX1-sb*oZ1;
  oY2:=oY1;
  oZ2:=sb*oX1+cb*oZ1;
  oX3:=cg*oX2-sg*oY2;
  oY3:=sg*oX2+cg*oY2;
  oZ3:=oZ2;
  oX4:=oX3+vx;
  oY4:=oY3+vy;
  oZ4:=oZ3+vz;
  u:=-oX4/oY4*d;
  v:=-oZ4/oY4*d;
  k2:=320+u*k;
  w2:=240+v*k;
  MLine(k1,w1,k2,w2,col);
END;
PROCEDURE Draw;
VAR
  x,y:LONGINT;
  col:BYTE;
BEGIN
  FOR y:=0 TO 480 DO
  BEGIN
    LINE(0,y,640,y);
    FOR x:=0 TO 640 DO
      BEGIN
        PUTPIXEL(x,y,scr[x,y]);
      END;
  END;
END;
PROCEDURE Circle(x1,y1,x2,y2:REAL;col:WORD);
VAR
  k1,w1,k2,w2:REAL;
  rx,ry:REAL;
  sx,sy:REAL;
  i:LONGINT;
BEGIN
  rx:=ABS(x2-x1)/2;
  ry:=ABS(y2-y1)/2;
  sx:=x1+rx;
  sy:=y1+ry;
  k1:=sx+SIN(0)*rx;
  w1:=sy-COS(0)*ry;
  FOR i:=1 TO 360 DO
  BEGIN
    k2:=sx+SIN(i*PI/180)*rx;
    w2:=sy-COS(i*PI/180)*ry;
    MLine(k1,w1,k2,w2,col);
    k1:=k2;
    w1:=w2;
  END;
END;
PROCEDURE RCircle(sx,sy,rx,ry:REAL;col:WORD);
VAR
  k1,w1,k2,w2:REAL;
  i:LONGINT;
BEGIN
  k1:=sx+SIN(0)*rx;
  w1:=sy-COS(0)*ry;
  FOR i:=1 TO 360 DO
  BEGIN
    k2:=sx+SIN(i*PI/180)*rx;
    w2:=sy-COS(i*PI/180)*ry;
    MLine(k1,w1,k2,w2,col);
    k1:=k2;
    w1:=w2;
  END;
END;
PROCEDURE Clear;
VAR
  x,y:LONGINT;
BEGIN
  FOR y:=0 TO 480 DO
    FOR x:=0 TO 640 DO
      scr[x,y]:=0;
END;
BEGIN
  CLRSCR;
  drv:=VGA;
  mode:=VGAHi;
  INITGRAPH(drv,mode,'D:\MARTIN\Szkola\Moje programy\Grafika 3D\GRAFIKA');

  x:=0;
  y:=0;
  z:=0;
  RANDOMIZE;
  dx:=RANDOM(2)-1;
  RANDOMIZE;
  dy:=RANDOM(2)-1;
  RANDOMIZE;
  dz:=RANDOM(2)-1;
  REPEAT
  BEGIN
    Line3D(-1,-1,-1,1,-1,-1,x,y,z,0,0,0,200,5,15);
    Line3D(1,-1,-1,1,1,-1,x,y,z,0,0,0,200,5,15);
    Line3D(1,1,-1,-1,1,-1,x,y,z,0,0,0,200,5,15);
    Line3D(-1,1,-1,-1,-1,-1,x,y,z,0,0,0,200,5,15);

    Line3D(-1,-1,-1,-1,-1,1,x,y,z,0,0,0,200,5,15);
    Line3D(-1,-1,1,1,-1,1,x,y,z,0,0,0,200,5,15);
    Line3D(1,-1,1,1,1,1,x,y,z,0,0,0,200,5,15);
    Line3D(1,1,1,-1,1,1,x,y,z,0,0,0,200,5,15);
    Line3D(-1,1,1,1,1,1,x,y,z,0,0,0,200,5,15);

    Line3D(1,1,1,-1,1,1,x,y,z,0,0,0,200,5,15);
    Line3D(-1,1,1,-1,-1,1,x,y,z,0,0,0,200,5,15);
    Line3D(1,-1,-1,1,-1,1,x,y,z,0,0,0,200,5,15);
    Line3D(1,1,-1,1,1,1,x,y,z,0,0,0,200,5,15);
    Line3D(-1,1,-1,-1,1,1,x,y,z,0,0,0,200,5,15);

    Line3D(-0.25,0,0,0.25,0,0,x,y,z,0,0,0,200,5,15);
    Line3D(0,-0.25,0,0,0.25,0,x,y,z,0,0,0,200,5,15);
    Line3D(0,0,-0.25,0,0,0.25,x,y,z,0,0,0,200,5,15);

    x:=x+dx;
    y:=y+dy;
    z:=z+dz;
    DELAY(50);
    CLEARDEVICE;
  END;
  UNTIL Keypressed;
END.
