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
  echo U¿yto nastêpuj¹cej œcie¿ki: !dir!
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

set nLine=0

for /f "tokens=*" %%a in ('type "%template%"') do (
  if !nLine! EQU 0 (
    for /f "tokens=*" %%b in ("%%a") do (
      set workingLocation=!workingLocation!%%b\
      if NOT EXIST "!workingLocation!" md "!workingLocation!"
      del "!workingLocation!log.txt" >nul
      set /a nLine=!nLine!+1
    )
  ) ELSE (
    for /f "tokens=1,2,3,4 delims=," %%b in ("%%a") do (
      set startPage=%%b
      set endPage=%%c
      set pageOffset=%%d
      set /a nLine=!nLine!+1
      echo.
      echo Pobieranie od strony !startPage! do strony !endPage!, offset !pageOffset!.
      echo.

      for /f "tokens=1-8 delims=/" %%b in ("%%e") do (
        for /f "tokens=1 delims=." %%j in ("%%g") do (
          set errInCh=0
          set errTxt=
          set chapter=%%j
          if NOT EXIST "!workingLocation!!chapter!" md "!workingLocation!!chapter!"
        )
        for /l %%k IN (!startPage!,1,!endPage!) do (
          set /a counter=%%k+!pageOffset!
          set counter=00!counter!
          set counter=!counter:~-3!
          for /f "tokens=1,2 delims=." %%l in ("%%i") do (
            for /f "tokens=1,3 delims=<>" %%n in ("%%l") do (
              set filename=%%n!counter!%%o
            )
            set link=%%b//%%c/%%d/%%e/%%f/%%g/%%h/!filename!.%%m
            set tm=%%m
            set filename=!filename!.!tm:~0,3!
            if NOT EXIST "!workingLocation!!chapter!\!filename!" (%wget% --output-document "!workingLocation!!chapter!\!filename!" "!link!" -q -nv -b)
            for /f "tokens=*" %%s in ("!workingLocation!!chapter!\!filename!") do (
              set filesize=%%~zs
              if !filesize! EQU 0 (
                del "!workingLocation!!chapter!\!filename!" >nul
                echo Chapter !chapter!, page %%k of !endPage!... ERROR!!
                if !errInCh! EQU 0 (
                  set errInCh=1
                  set "errTxt=Rozdzia³ !chapter!: "
                )
                set "errTxt=!errTxt!%%k, "
              ) ELSE (echo Chapter !chapter!, page %%k of !endPage!... OK!!)
            )
          )
        )
        if NOT EXIST "!workingLocation!log.txt" (
          echo Brakuj¹ce strony: >"!workingLocation!log.txt"
          echo. >>"!workingLocation!log.txt"
        )
        if NOT [!errTxt!]==[] echo !errTxt:~0,-2! >>"!workingLocation!log.txt" 
      )
    )
  )
)

echo.
echo Wszystko zosta³o pobrane. Mo¿e brakowaæ
echo podwójnych stron (³¹czonych) oraz stron bonusowych
echo lub stron o nietypowym indeksowaniu (np. nazwa pliku co 2).
echo SprawdŸ plik log.txt wewn¹trz folderu, gdzie pobierano.
echo.
pause >nul