from flask import Flask, request
import numpy as np
import cv2

from PIL import Image  

app = Flask(__name__)

# @app.route('/api', methods=['GET'])
# def api():
#     return {
#         'title': 'Hello World!'
#     }

@app.route('/image', methods=['POST'])
def image():
    nparr = np.fromstring(request.data, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    cv2.imwrite('image.jpg', img)
    return {
        'image': "New image"
    }