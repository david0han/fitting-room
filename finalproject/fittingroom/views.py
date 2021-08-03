from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'fittingroom/index.html')

def main(request):
    return render(request, 'fittingroom/main.html')

def resources(request):
    return render(request, 'fittingroom/resources.html')

def room(request):
    return render(request, 'fittingroom/room.html')

def select_custom(request):
    return render(request, 'fittingroom/select-custom.html')

def select_pre(request):
    return render(request, 'fittingroom/select-pre.html')

