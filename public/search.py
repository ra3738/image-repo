import json

imageDetections = '../src/imageDetections.json'
labelsLocation = '../src/labels.json'

with open(imageDetections) as json_file:
    data = json.load(json_file)

labelDict = {}

for image in data:
    for label in data[image]:
        if label not in labelDict:
            labelDict[label] = [image]
        else:
            if data[image] not in labelDict[label]:
                labelDict[label].append(image)

print(labelDict)

with open(labelsLocation, 'w') as outfile:
    json.dump(labelDict, outfile)
