@ECHO off
CLS

net session >nul 2>&1

IF NOT %errorLevel% == 0 (
  echo Brak praw administratora. Uruchom ponownie z prawami administratora!
  echo.
  pause
  exit
)

SET WORKINGPATH=%~dp0
SET WORKINGPATH=%WORKINGPATH:~0,-1%

FOR /F "tokens=3 delims= " %%G in ('REG QUERY "HKLM\System\ControlSet001\Control\nls\Language" /v Installlanguage') DO (
set LANGID=%%G
)

IF %LANGID% EQU 0415 set LANG=pl
IF %LANGID% EQU 0409 set LANG=en

IF EXIST "%PROGRAMFILES(X86)%" (
set WOW6432NODE=Wow6432Node\
set PRGFILES=PROGRA~2\
) ELSE (set PRGFILES=PROGRA~1\)

REG ADD "HKLM\Software\%WOW6432NODE%JoWood" /f >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood\Gothic III" /f >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood\Gothic III" /f /v "ActiveSubtitleLanguage" >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood\Gothic III" /f /v "ActiveVoiceLanguage" >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood\Gothic III" /f /v "AudioLanguage" /d "Polish" >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood\Gothic III" /f /v "Copyright" /d "(c) 2012 Nordic Games GmbH & Gothic 3 Community Patch Team (Knights of the 12th chalice)" >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood\Gothic III" /f /v "CurrentVersion" /d "1.75.20108.14" >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood\Gothic III" /f /v "Description" /d "Gothic 3 Enhanced Edition" >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood\Gothic III" /f /v "Flags" /t REG_DWORD /d 0 >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood\Gothic III" /f /v "INSTALL_DIR" /d "%WORKINGPATH%" >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood\Gothic III" /f /v "InstallDate" /d "%DATE:-=%" >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood\Gothic III" /f /v "OSLanguage" /d "%LANG%" >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood\Gothic III" /f /v "OSLanguageID" /t REG_DWORD /d 0x%LANGID% >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood\Gothic III" /f /v "TextLanguage" /d "Polish" >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood Productions Software AG" /f >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood Productions Software AG\Gothic III" /f >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood Productions Software AG\Gothic III" /f /v "COMPANY" /d "JoWooD Productions Software AG" >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood Productions Software AG\Gothic III" /f /v "INSTALL_DIR" /d "%WORKINGPATH%" >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood Productions Software AG\Gothic III" /f /v "PRODUCT_KEY" /d "YourApp.exe" >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood Productions Software AG\Gothic III" /f /v "UNINSTALL_CMD" /d "RunDll32 C:\%PRGFILES%COMMON~1\INSTAL~1\PROFES~1\RunTime\10\01\Intel32\Ctor.dll,LaunchSetup \"C:\%PRGFILES%InstallShield Installation Information\{02B244A2-7F6A-42E8-A36F-8C385D7A1625}\setup.exe\" -l0x15  -uninst" >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood Productions Software AG\Gothic III" /f /v "VERSION" /d "1.0.0" >nul
REG ADD "HKLM\Software\%WOW6432NODE%JoWood Productions Software AG\Gothic III\1.0.0" /f >nul