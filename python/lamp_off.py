import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)

GPIO.setwarnings(True)
GPIO.setup(2, GPIO.OUT)
GPIO.output(2, True)
