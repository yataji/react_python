from django.db import models

# class LocalManager():
#     def create_local(self, place, distance, disponibilite, duration):
#         Local = self.model(place=place, distance=distance, disponibilite=disponibilite, duration=duration)
#         Local.save()
#         return Local

class Local(models.Model):
    place = models.CharField(max_length=255)
    distance = models.CharField(max_length=255)
    disponibilite = models.CharField(max_length=255)
    duration = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # objects = LocalManager()

    def __str__(self):
        return self.place
