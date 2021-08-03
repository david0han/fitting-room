from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'fittingroom/index.html')

def main(request):
    return render(request, 'fittingroom/main.html')
