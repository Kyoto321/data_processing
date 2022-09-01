from django.db import models

# Create your models here.

class Csv(models.Model):
	file_name = models.FileField(upload_to='csvs/', max_length=150)
	uploaded = models.DateTimeField(auto_now_add=True)
	activated = models.BooleanField(default=False)

	def __str__(self):
		return "File_id: {}".format(self.id)