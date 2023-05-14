@echo off

cd frontend
call npm run build
cd ..
call venv\Scripts\activate
cls
start http://127.0.0.1:8000
call python manage.py runserver