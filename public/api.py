from flask import Flask, request
import numpy as np
import cv2
from detections import detect

from PIL import Image  

app = Flask(__name__)

@app.route('/image', methods=['POST'])
def image():
    nparr = np.fromstring(request.data, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    cv2.imwrite('../img-analysis/image.jpg', img)
    allObjects = detect('../img-analysis/image.jpg')
    return {
        'imageObjects': allObjects
    }