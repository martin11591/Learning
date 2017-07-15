@ECHO off
CLS

net session >nul 2>&1

IF NOT %errorLevel% == 0 (
  echo Brak praw administratora. Uruchom ponownie z prawami administratora!
  echo.
  pause
  exit
)

IF EXIST "%PROGRAMFILES(X86)%" (set WOW6432NODE=Wow6432Node\)

REG DELETE "HKLM\Software\%WOW6432NODE%JoWood" /f
REG DELETE "HKLM\Software\%WOW6432NODE%JoWood Productions Software AG" /f

pause