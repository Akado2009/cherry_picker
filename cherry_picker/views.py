# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import TemplateView

import os
import urllib.request


# Create your views here.
class IndexView(TemplateView):
    template_name = 'cherry_picker/index.html'


class ReportView(TemplateView):
    template_name = 'cherry_picker/report.html'


def upload_file(request):
    if request.method == 'POST':
        print(request.FILES)
        g = open('shit.png', 'wb')
        g.write(request.FILES.get('file').read())
        g.close()




    return JsonResponse({'data': 'data'})
