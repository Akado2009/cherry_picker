from django.conf.urls import url
from .views import upload_file

app_name = 'cherry_picker'


urlpatterns = [
    url(r'^upload_file', upload_file, name='cherry_picker_upload_file')
]
