@echo off
REM -------------------------------
REM Development Environment Setup
REM -------------------------------

echo ================================
echo Setting up Node dependencies...
echo ================================
call npm install

echo.
echo ================================
echo Starting Metro bundler...
echo ================================
call npx react-native start --reset-cache
