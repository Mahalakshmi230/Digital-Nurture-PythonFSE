# ==========================================================
# HANDS-ON 1
# Web Framework Foundations & Django Project Setup
# File: notes.py
# ==========================================================

# ----------------------------------------------------------
# Task 1: Request-Response Cycle
# ----------------------------------------------------------

# Example Request:
# GET /api/courses/

# Flow:
# 1. The browser sends an HTTP GET request to the Django server.
# 2. The request first passes through Middleware.
# 3. Django checks urls.py (URL Router) to find a matching URL.
# 4. The matching View is called.
# 5. The View interacts with the Model if data is needed.
# 6. The Model queries the database.
# 7. The database returns data to the Model.
# 8. The Model returns the data to the View.
# 9. The View prepares an HTTP response (HTML or JSON).
# 10. The response passes through Middleware.
# 11. The browser receives and displays the response.

# ----------------------------------------------------------
# Task 2: Middleware
# ----------------------------------------------------------

# Middleware sits between the request and the View.
# It processes requests before they reach the View and
# processes responses before they are sent back to the client.

# Two built-in middleware classes:

# 1. django.middleware.security.SecurityMiddleware
#    - Adds security features like secure HTTP headers.
#    - Helps protect the application from common attacks.

# 2. django.contrib.auth.middleware.AuthenticationMiddleware
#    - Associates the logged-in user with each request.
#    - Makes request.user available inside views.

# ----------------------------------------------------------
# Task 3: WSGI vs ASGI
# ----------------------------------------------------------

# WSGI (Web Server Gateway Interface)
# - Supports synchronous applications.
# - Best for traditional web applications.
# - Handles one request per worker at a time.

# ASGI (Asynchronous Server Gateway Interface)
# - Supports asynchronous programming.
# - Can handle HTTP, WebSockets, and long-lived connections.
# - Suitable for chat applications, live notifications,
#   and real-time features.

# Django uses WSGI by default.

# Switch to ASGI when:
# - Using asynchronous views.
# - Building real-time applications.
# - Working with WebSockets or live streaming.

# ----------------------------------------------------------
# Task 4: MVC vs MVT
# ----------------------------------------------------------

# MVC Pattern
#
# Model:
# - Handles database operations and business logic.
#
# View:
# - Displays data to the user.
#
# Controller:
# - Handles user requests and controls application flow.

# Django follows the MVT pattern.

# Model:
# - Same as MVC Model.
#
# View:
# - Acts like the Controller in MVC.
# - Processes requests and returns responses.
#
# Template:
# - Acts like the View in MVC.
# - Displays HTML to the user.

# MVC to MVT Mapping:
#
# MVC Model      -> Django Model
# MVC View       -> Django Template
# MVC Controller -> Django View

# ==========================================================
# Task 2: Scaffold and Explore the Django Project
# ==========================================================

"""
Goal:
Create a Django application named 'courses', configure URL routing,
and verify that the application responds to an HTTP request.
"""

# ----------------------------------------------------------
# Step 1: Create the Django App
# ----------------------------------------------------------

"""
Command Used:

python manage.py startapp courses

This command creates a new Django application named 'courses'.
"""

# ----------------------------------------------------------
# Step 2: Register the App
# ----------------------------------------------------------

# settings.py

"""
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'courses',
]
"""

# ----------------------------------------------------------
# Step 3: Create the View
# ----------------------------------------------------------

# courses/views.py

"""
from django.http import HttpResponse

def hello_view(request):
    return HttpResponse("Course Management API is running")
"""

# ----------------------------------------------------------
# Step 4: Create URL Configuration for the App
# ----------------------------------------------------------

# courses/urls.py

"""
from django.urls import path
from .views import hello_view

urlpatterns = [
    path("hello/", hello_view),
]
"""

# ----------------------------------------------------------
# Step 5: Connect App URLs to Project URLs
# ----------------------------------------------------------

# coursemanager/urls.py

"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("courses.urls")),
]
"""

# ----------------------------------------------------------
# Output
# ----------------------------------------------------------

"""
Application URL:

http://127.0.0.1:8000/api/hello/

Output:

Course Management API is running
"""

# ----------------------------------------------------------
# Conclusion
# ----------------------------------------------------------

"""
Successfully created a Django application named 'courses',
configured URL routing, registered the application in
settings.py, created a view, and verified that the endpoint

http://127.0.0.1:8000/api/hello/

returns the message:

Course Management API is running
"""