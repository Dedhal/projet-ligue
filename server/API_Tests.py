import requests

url = "http://localhost:3000/"

endpoint = "question"

toAdd = {
    "theme": "culture Geek",
    "question": "Quelle est la réponse a tout?",
    "reponse": "42",
    }

#request = requests.post(url + endpoint, json=toAdd)
request = requests.delete(url + endpoint + "/1")
print(request)