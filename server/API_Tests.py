import requests
import json

url = "http://localhost:5000/"

endpoint = "api/users/"

users = ["649c44a943a62df5642ba631", "649c44ab43a62df5642ba632", "649c44ae43a62df5642ba633"]
headers = {'content-type': 'application/json'}

print(json.dumps(users))

#request = requests.post(url + endpoint, json=toAdd)
request = requests.delete(url + endpoint, data=json.dumps(users), headers=headers)
print(request)