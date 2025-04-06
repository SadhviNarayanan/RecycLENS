from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

from sqlalchemy import JSON

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
list_events = []
list_interests = []
login_username = []
login_password = []
login_data = []
list_data = []
username = ""
password = ""


@app.route("/event/data", methods=["POST"])
def receive_event_data():
    data = request.json.get("data")
    print("Received data:", data)
    list_events.append(data)
    print(list_events)

    # Process the data (e.g., perform calculations, interact with APIs)

    return jsonify({"message": "Data received successfully"})


@app.route("/get/upcoming/events", methods=["GET"])
def get_upcoming_events():
    sorted_events = sorted(list_events, key=lambda x: x["date"])

    today = datetime.today().date()
    # Filter upcoming events
    upcoming_events = [
        event
        for event in sorted_events
        if datetime.strptime(event["date"], "%Y-%m-%d").date() >= today
    ]

    # Filter past events
    # past_events = [event for event in sorted_events if datetime.strptime(event['date'], '%Y-%m-%d').date() < today]

    return jsonify(upcoming_events)


@app.route("/get/past/events", methods=["GET"])
def get_past_events():

    today = datetime.today().date()

    # Filter past events
    past_events = [
        event
        for event in list_events
        if datetime.strptime(event["date"], "%Y-%m-%d").date() < today
    ]

    sorted__past_events = sorted(past_events, key=lambda x: x["date"], reverse=True)

    return jsonify(sorted__past_events)


@app.route("/profile/data", methods=["POST"])
def receive_preference_data():
    data = request.json.get("data")
    print("Received data:", data)
    # list_interests = []
    # list_interests.append(data)
    username = login_data[len(login_data) - 1]["username"]
    password = login_data[len(login_data) - 1]["password"]
    list_interests = data["selectedOptions"]
    print(list_interests)
    print(username, password)
    for item in list_data:
        if item["username"] == username and item["password"] == password:
            item["interests"] = list_interests
            break
    print("list data:")
    print(list_interests)

    return jsonify({"message": "Data received successfully"})


@app.route("/get/user/intererst", methods=["GET"])
def get_user_intererst():
    user_interest = []
    if len(login_data) != 0:

        username = login_data[len(login_data) - 1]["username"]
        password = login_data[len(login_data) - 1]["password"]

        for item in list_data:
            if item["username"] == username and item["password"] == password:
                user_interest = item["interests"]
                break
        # print("list data:")
        # print(list_interests)

        # Process the data (e.g., perform calculations, interact with APIs)

        return jsonify(user_interest)

    return jsonify(user_interest)


@app.route("/login/data", methods=["POST"])
def receive_login_data():
    data = request.json.get("data")
    print("Received data:", data)
    # list_interests = []

    # myObj = JSON.parse(data);
    username = data.get("username")
    password = data.get("password")
    print(username, password)
    # login_data.append(data) # register
    # print(login_data)

    if not username or not password:
        return (
            jsonify({"success": False, "message": "Username or password missing"}),
            400,
        )

    # Check if the username and password exist in the stored login data
    user = next(
        (
            user
            for user in login_data
            if user["username"] == username and user["password"] == password
        ),
        None,
    )

    if user:
        login_data.append(data)
        return jsonify({"success": True, "message": "Login successful"})
    else:
        return jsonify({"success": False, "message": "Invalid username or password"})


@app.route("/register/data", methods=["POST"])
def receive_register_data():
    data = request.json.get("data")
    print("Received data Register:", data)
    # list_interests = []

    # myObj = JSON.parse(data);
    name = data.get("name")
    name = name.capitalize()
    username = data.get("username")
    password = data.get("password")
    password_confirm = data.get("confirm_password")
    # print(login_data)

    if not name or not username or not password:
        return (
            jsonify({"success": False, "message": "Username or password missing"}),
            400,
        )

    # Check if the username and password exist in the stored login data
    user = next((user for user in login_data if user["username"] == username), None)
    print(login_data)
    if user:
        print("hi")

        return jsonify({"success": False, "message": "Username already exists"})
    elif password != password_confirm:
        return jsonify({"success": False, "message": "Passwords do not match"}), 400
    else:
        login_data.append(data)  # register
        dictionary = {
            "name": name,
            "username": username,
            "password": password,
            "interests": list_interests,
            "points": 0,
        }
        list_data.append(dictionary)
        return jsonify({"success": True, "message": "Account created successfully!"})
    print(login_data)

    # Process the data (e.g., perform calculations, interact with APIs)

    return jsonify({"message": "Data received successfully"})


@app.route("/get/register/data", methods=["GET"])
def get_register_data():
    username = login_data[len(login_data) - 1]["username"]
    password = login_data[len(login_data) - 1]["password"]

    for item in list_data:
        if item["username"] == username and item["password"] == password:
            name = item
            break

    print(name)
    return jsonify(name)


@app.route("/points/data", methods=["POST"])
def receive_point_data():
    data = request.json.get("data")
    point = data.get("points")
    print("Received data:", data)
    if len(login_data) != 0:

        username = login_data[len(login_data) - 1]["username"]
        password = login_data[len(login_data) - 1]["password"]

        for item in list_data:
            if item["username"] == username and item["password"] == password:
                item["points"] = point
                break
        # print("list data:")
        # print(list_interests)

        # Process the data (e.g., perform calculations, interact with APIs)

    return jsonify(point)


@app.route("/get/point/data", methods=["GET"])
def get_point_data():
    print("hellllooooooo")
    username = login_data[len(login_data) - 1]["username"]
    password = login_data[len(login_data) - 1]["password"]

    point = 0
    print(username, password)
    print(len(list_data))
    for item in list_data:
        if item["username"] == username and item["password"] == password:
            print("this")
            point = item["points"]
            break

        # Process the data (e.g., perform calculations, interact with APIs)

    print(point)
    return jsonify(point)


# need to add button so that when selected, it will display recommended events with the 'curl' call to this function
# need to fix recommendation system


def segregate_img(img_path):
    from PIL import Image
    import google.generativeai as genai

    genai.configure(api_key="AIzaSyCmFRdCxOFx1AeF7gv7uUJ2TuFGRx2HeKo")
    img = Image.open(img_path)
    model = genai.GenerativeModel("gemini-2.0-flash")

    response = model.generate_content(
        [
            img,
            "Should images in this object go to recycle, compost, or trash? Give answer in one word: recycle ,compost, trash",
        ]
    )
    # answer in:
    # compost
    # recycle
    # trash
    return response.text


import os
from openai import OpenAI
import json

import os
from openai import OpenAI
import json


@app.route("/get/rec/upcoming/events", methods=["GET"])
def func_upcoming_events():

    sorted_events = sorted(list_events, key=lambda x: x["date"])

    today = datetime.today().date()
    # Filter upcoming events
    upcoming_events = [
        event
        for event in sorted_events
        if datetime.strptime(event["date"], "%Y-%m-%d").date() >= today
    ]

    print(upcoming_events)
    print("hi")
    print(list_interests)

    username = login_data[len(login_data) - 1]["username"]
    password = login_data[len(login_data) - 1]["password"]

    for item in list_data:
        if item["username"] == username and item["password"] == password:
            user_interest = item["interests"]
            break

    client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "user",
                "content": "Here is a list of events you will have to analyze "
                + str(upcoming_events),
            },
            {
                "role": "user",
                "content": "Here is information about a person's interets. Look at ALL the intersts to see what type of things they like. "
                + str(user_interest),
            },
            {
                "role": "assistant",
                "content": "Just return a list of the events from the provided events (with name, date, and description in dictionary format) that this person would be interested in based on their interests and likes. Please make sure to look at all their interests. No other text.",
            },
        ],
    )

    # Retrieve the response

    response_messages = completion.choices[0].message.content
    print(response_messages)

    # Look for the assistant's response

    # Now you can use assistant_response as needed
    return jsonify(eval(response_messages))


@app.route("/get/rec/past/events", methods=["GET"])
def func_past_events():

    sorted_events = sorted(list_events, key=lambda x: x["date"])

    today = datetime.today().date()
    # Filter upcoming events
    past_events = [
        event
        for event in sorted_events
        if datetime.strptime(event["date"], "%Y-%m-%d").date() < today
    ]

    print(past_events)
    print("hi")
    print(list_interests)

    username = login_data[len(login_data) - 1]["username"]
    password = login_data[len(login_data) - 1]["password"]

    for item in list_data:
        if item["username"] == username and item["password"] == password:
            user_interest = item["interests"]
            break

    client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "user",
                "content": "Here is a list of events you will have to analyze "
                + str(past_events),
            },
            {
                "role": "user",
                "content": "Here is information about a person's interets. Look at ALL the intersts to see what type of things they like. "
                + str(user_interest),
            },
            {
                "role": "assistant",
                "content": "Just return a list of the events from the provided events (with name, date, and description in dictionary format) that this person would be interested in based on their interests and likes. Please make sure to look at all their interests. No other text.",
            },
        ],
    )

    # Retrieve the response

    response_messages = completion.choices[0].message.content
    print(response_messages)

    # Look for the assistant's response

    # Now you can use assistant_response as needed
    return jsonify(eval(response_messages))


# func()


if __name__ == "__main__":
    app.run(debug=True, port=5001)
