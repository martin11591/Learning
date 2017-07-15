@echo off

cls
chcp 1250 >nul

setlocal enableextensions
setlocal enabledelayedexpansion

if EXIST "%~dp0wget.exe" (set wget="%~dp0wget.exe") ELSE (set wget="D:\Programy\Portable\wget\wget.exe")

title Œci¹ganie ca³ych rozdzia³ów mangi z serwisu Mangatown
echo Podaj œcie¿kê, do której bêd¹ pobierane obrazy:
echo (naciœnij ENTER aby u¿yæ œcie¿ki, w której znajduje siê ten program):
set "workingLocation=%~dp0"
set /P "workingLocation="
if NOT EXIST "%workingLocation%" (
  echo Œcie¿ka "%workingLocation%" nie istnieje.
  set "workingLocation=%~dp0"
  echo U¿yto nastêpuj¹cej œcie¿ki: !workingLocation!
)

if [%1]==[] (
  echo Plik zawieraj¹cy adresy obrazów nie zosta³ podany.
  echo Podaj œcie¿kê do pliku lub jego sam¹ nazwê pliku zawieraj¹cego adresy:
  set "template=Data.txt"
  :templateData
  set /P "template="
  if NOT EXIST "%workingLocation%!template!" (
    echo "%workingLocation%!template!" nie istnieje.
  ) ELSE (set "template=%workingLocation%!template!")
  if NOT EXIST "!template!" (
    echo "!template!" nie istnieje.
    echo.
    goto templateData
  )
) ELSE (
  set template=%1
  set template=!template:~1,-1!
)

set mangaName=
set chapterName=
set pageLink=
set mangasCount=0
set chapterCount=0
set chaptersCount=0
set pageCount=0
set pagesCount=0

echo Obliczanie ³¹cznej liczby mang, rozdzia³ów i stron do pobrania...

for /f "tokens=*" %%a in ('type "%template%"') do (
  set line=%%a
  if NOT x!line!x==x!line:http=!x (
    set /a pageCount=!pageCount!+1
    set /a pagesCount=!pagesCount!+1
  ) else (
    if NOT x!line!x==x!line:Chapter=!x (
      set pageCount=0
      set /a chapterCount=!chapterCount!+1
      set /a chaptersCount=!chaptersCount!+1
    ) else (
      set /a mangasCount=!mangasCount!+1
      set chapterCount=0
    )
  )
  set tmp=!pagesCount! stron
  set /a tmp2=!pagesCount!%%100
  set /a tmp3=!pagesCount!%%10
  set tmpS=
  if !pagesCount! EQU 1 set tmpS=a
  if !tmp3! GEQ 2 if !tmp3! LEQ 4 set tmpS=y
  if !tmp2! GEQ 12 if !tmp2! LEQ 14 set tmpS=
  set tmp=!tmp!!tmpS! w !chaptersCount! rozdzia
  if !chaptersCount! EQU 1 (set tmp=!tmp!le) ELSE set tmp=!tmp!³ach
  set tmp=!tmp! w !mangasCount! man
  if !mangasCount! EQU 1 (set tmp=!tmp!dze) ELSE set tmp=!tmp!gach
  title !tmp!
)

echo %tmp%.
echo.
echo Naciœnij dowolny klawisz aby rozpocz¹æ.
echo.
pause >nul

set mangasSum=%mangasCount
set chaptersSum=%chaptersCount%
set pagesSum=%pagesCount%

set mangasCount=0
set chapterCount=0
set chaptersCount=0
set pageCount=0
set pagesCount=0
set requestsCount=0
set maxRequests=8

for /f "tokens=*" %%a in ('type "%template%"') do (
  set line=%%a
  if NOT x!line!x==x!line:http=!x (
    call:pageLink
  ) else (
    if NOT x!line!x==x!line:Chapter=!x (
      call:chapterName
    ) else (
      call:mangaName
    )
  )
  set /a perc=!pagesCount!*10000/%pagesSum%
  if !perc! LSS 100 (set perc=0!perc!) else if !perc! LSS 10 (set perc=0!perc!)
  set perc=!perc:~0,-2!.!perc:~-2!%%
  set tmp=!perc! !pagesCount! stron
  set /a tmp2=!pagesCount!%%100
  set /a tmp3=!pagesCount!%%10
  set tmpS=
  if !pagesCount! EQU 1 set tmpS=a
  if !tmp3! GEQ 2 if !tmp3! LEQ 4 set tmpS=y
  if !tmp2! GEQ 12 if !tmp2! LEQ 14 set tmpS=
  set tmp=!tmp!!tmpS! w !chaptersCount! rozdzia
  if !chaptersCount! EQU 1 (set tmp=!tmp!le) ELSE set tmp=!tmp!³ach
  set tmp=!tmp! w !mangasCount! man
  if !mangasCount! EQU 1 (set tmp=!tmp!dze) ELSE set tmp=!tmp!gach
  set tmp=!tmp!, !requestsCount! ¿¹da
  set /a tmp2=!requestsCount!%%100
  set /a tmp3=!requestsCount!%%10
  set tmpS=ñ
  if !pagesCount! EQU 1 set tmpS=nie
  if !tmp3! GEQ 2 if !tmp3! LEQ 4 set tmpS=nia
  if !tmp2! GEQ 12 if !tmp2! LEQ 14 set tmpS=ñ
  set tmp=!tmp!!tmpS!
  title !tmp!
)

set tmp=!pageCount! stron
set /a tmp2=!pageCount!%%100
set /a tmp3=!pageCount!%%10
set tmpS=
if !pageCount! EQU 1 set tmpS=a
if !tmp3! GEQ 2 if !tmp3! LEQ 4 set tmpS=y
if !tmp2! GEQ 12 if !tmp2! LEQ 14 set tmpS=
set tmp=!tmp!!tmpS!.
echo !tmp!

echo.
goto end

:mangaName
set mangaName=!line!
set /a mangasCount=!mangasCount!+1
set chapterCount=0
echo MANGA NAME: !mangaName!
if NOT EXIST "!workingLocation!!mangaName!" md "!workingLocation!!mangaName!" >nul
goto:eof

:chapterName
set chapterName=!line!/
:sCut1
if NOT "x!chapterName!x"=="x!chapterName:./=!x" (
  set chapterName=!chapterName:./=!/
  goto sCut1
)
:sCut2
if NOT "x!chapterName!x"=="x!chapterName: /=!x" (
  set chapterName=!chapterName: /=!/
  goto sCut2
)
set chapterName=!chapterName:~0,-1!
set /a chapterCount=!chapterCount!+1
set /a chaptersCount=!chaptersCount!+1
if !chapterCount! GEQ 2 (
  set tmp=!pageCount! stron
  set /a tmp2=!pageCount!%%100
  set /a tmp3=!pageCount!%%10
  set tmpS=
  if !pageCount! EQU 1 set tmpS=a
  if !tmp3! GEQ 2 if !tmp3! LEQ 4 set tmpS=y
  if !tmp2! GEQ 12 if !tmp2! LEQ 14 set tmpS=
  set tmp=!tmp!!tmpS!.
  echo !tmp!
)
echo !chapterName!
set pageCount=0
if NOT EXIST "!workingLocation!!mangaName!\!chapterName!" md "!workingLocation!!mangaName!\!chapterName!" >nul
goto:eof

:pageLink
set pageLink=!line!
set requestsCount=0
for /f "tokens=*" %%b in ('tasklist /fi "imagename eq wget.exe" /fo csv') do (
  set tmp=%%b
  if x!tmp!x==x!tmp:INFO=!x set /a requestsCount=!requestsCount!+1
)
if !requestsCount! GEQ %maxRequests% (
  goto pageLink
)
for /f "tokens=1 delims=?" %%b in ("!pageLink!") do (
  set fileName=%%b
)
:cut
if NOT x!fileName!x==x!fileName:/=!x (
  for /f "tokens=1 delims=/" %%b in ("!fileName!") do (
    set fileName=!fileName:%%b//=!
    set fileName=!fileName:%%b/=!
  )
  goto cut
)
set file=!workingLocation!!mangaName!\!chapterName!\!fileName!
set /a pageCount=!pageCount!+1
set /a pagesCount=!pagesCount!+1
if EXIST "!file!" (
  for /f "tokens=*" %%b in ("!file!") do (
    set fileSize=%%~zb
    if !fileSize! EQU 0 (del "!file!" >nul)
  )
)
echo !file!
if NOT EXIST "!file!" (
  start "" %wget% -O "!file!" "!pageLink!" -q >nul
)
goto:eof

:end
echo Naciœnij dowolny klawisz aby zakoñczyæ program.
pause >nul
