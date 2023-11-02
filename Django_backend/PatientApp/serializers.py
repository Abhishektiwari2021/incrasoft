from rest_framework import serializers
from PatientApp.models import Student

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'