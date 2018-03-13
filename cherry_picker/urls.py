from django.conf.urls import url
from .views import IndexView

url_patterns = [
    url(r'^$', IndexView.as_view(), name='cherry_picker_main')
]
