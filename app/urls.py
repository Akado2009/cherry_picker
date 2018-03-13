from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url, include

from cherry_picker.views import IndexView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', IndexView.as_view(), name='index'),
    # url(r'^cherry_picker/', include(('cherry_picker.urls', 'cherry_picker'), namespace='cherry_picker')),

]

if settings.DEBUG:
    import debug_toolbar

    urlpatterns += [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ] \
    + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
