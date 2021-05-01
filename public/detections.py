import json
import os
from imageai.Detection import ObjectDetection

filelocation = '../src/imageDetections.json'

with open(filelocation) as json_file:
    data = json.load(json_file)

for root, dirs, files in os.walk("images"):
    execution_path = os.getcwd()
    detector = ObjectDetection()
    detector.setModelTypeAsRetinaNet()
    detector.setModelPath(os.path.join(execution_path , "resnet50_coco_best_v2.1.0.h5"))
    detector.loadModel()
    for filename in files:
        if filename not in data:
            detections = detector.detectObjectsFromImage(input_image='images/'+filename, output_image_path="imagenew.jpg")
            allObjects = set()
            print(filename, ":")
            for eachObject in detections:
                print(eachObject["name"] , " : " , eachObject["percentage_probability"])
                allObjects.add(eachObject["name"])
            print("\n")
            data[filename] = list(allObjects)

with open(filelocation, 'w') as outfile:
    json.dump(data, outfile)

