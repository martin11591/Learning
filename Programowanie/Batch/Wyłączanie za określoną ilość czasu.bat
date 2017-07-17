@echo off
net session >nul 2>&1

IF NOT %errorLevel% == 0 (
  echo Brak praw administratora. Uruchom ponownie z prawami administratora!
  pause >nul
  exit
)

cls
echo Aktualny czas: %TIME:~0,-3%
set /P sh=Podaj ilosc czasu, po ktorej komputer ma zostac wylaczony: 
if NOT DEFINED sh set sh=0
if %sh% LSS 0 goto anuluj
cls
echo Aktualny czas: %TIME:~0,-3%
set /P sm=Podaj ilosc czasu, po ktorej komputer ma zostac wylaczony: %sh%:
if NOT DEFINED sm set sm=0
if %sm% LSS 0 goto anuluj
if %sm% GTR 59 set sm=59
cls
echo Aktualny czas: %TIME:~0,-3%
set /P ss=Podaj ilosc czasu, po ktorej komputer ma zostac wylaczony: %sh%:%sm%:
if NOT DEFINED ss set ss=0
if %ss% LSS 0 goto anuluj
if %ss% GTR 59 set ss=59
cls
echo Aktualny czas: %TIME:~0,-3%
echo Podaj ilosc czasu, po ktorej komputer ma zostac wylaczony: %sh%:%sm%:%ss%
echo.
set /A sh*=3600
set /A sm*=60
set /A timer=%sh%+%sm%+%ss%
shutdown /s /hybrid /f /t %timer% >nul
echo Komputer zostanie wylaczony za %timer% sekund.
pause >nul
exit

:anuluj
shutdown /a >nul
echo Wylaczenie zostalo anulowane.
pause >nul
exit