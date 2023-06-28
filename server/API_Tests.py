import requests
import json

url = "http://localhost:5000/"

endpoint = "api/users/"

users = ["649c3d4143a62df5642ba630", "649c3d3e43a62df5642ba62f", "649c3acd43a62df5642ba62e"]
headers = {'content-type': 'application/json'}

print(json.dumps(users))

#request = requests.post(url + endpoint, json=toAdd)
request = requests.delete(url + endpoint, data=json.dumps(users), headers=headers)
print(request)