@echo off

mode con: cols=80 lines=25

setlocal enableextensions
setlocal enabledelayedexpansion

set APL=¤
set CPL=
set EPL=¨
set LPL=
set NPL=ã
set OPL=à
set SPL=—
set XPL=
set ZPL=½
set aPL=¥
set cPL=†
set ePL=©
set lPL=ˆ
set nPL=ä
set oPL=¢
set sPL=˜
set xPL=«
set zPL=¾

title Masowe zmienianie nazwy plik%oPL%w i folder%oPL%w
echo Podaj %sPL%cie%zPL%k%ePL%, w kt%oPL%rej b%ePL%d%aPL% zmieniane nazwy plik%oPL%w i folder%oPL%w
echo (naci%sPL%nij ENTER aby u%zPL%y%cPL% %sPL%cie%zPL%ki, w kt%oPL%rej znajduje si%ePL% ten program:
set /P dir=
if NOT DEFINED dir set dir=%~dp0
echo.
echo Podaj fragment nazwy pliku/folderu maj%aPL%cy ulec zmianie:
set /P renameFrom=
echo.
echo Podaj, co ma zosta%cPL% wstawione:
set /P renameTo=
echo.
echo.
echo Zmienia%cPL% nazwy folder%oPL%w? (wci%sPL%nij po prostu ENTER je%zPL%eli nie)
set /P folders=
if NOT DEFINED folders (set folders=NIE) ELSE set folders=TAK
cls
echo Folder dzia%lPL%a%nPL%:     %dir%
echo Fragment do zmiany: %renameFrom%
echo Zamiana na:         %renameTo%
echo Foldery:            %folders%
echo.

title Zmienianie nazw...
if %folders%==NIE goto noFolders
for /D %%f in ("%dir%\*%renameFrom%*") do (
set newName=%%~nxf
set newName=!newName:%renameFrom%=%renameTo%!
call rename "%dir%\%%~nxf" "!newName!" >nul
echo Folder: %%~nxf
)
:noFolders
for %%f in ("%dir%\*%renameFrom%*") do (
set newName=%%~nxf
set newName=!newName:%renameFrom%=%renameTo%!
call rename "%dir%\%%~nxf" "!newName!" >nul
echo Plik: %%~nxf
)
echo.
pause