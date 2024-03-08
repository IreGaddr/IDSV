@echo off

rem Change to the server directory
cd %~dp0\idsv

rem Start the server
echo Starting server...
start cmd /k "npm run start:prod"

rem Change to the client directory
cd %~dp0\idsvfe

rem Start the client
echo Starting client...
start cmd /k "npm run start"

rem Wait for the user to close the client window
:waitForClient
tasklist /FI "IMAGENAME eq cmd.exe" | find /I /N "cmd.exe" > nul
if not errorlevel 1 goto waitForClient

exit