import os
from openai import OpenAI
import json

def func():
  
  list_events = [{'name': 'Computer Science Event', 'date': '2024-05-27', 'description': 'Learn how to code in Python and learn AI!'}, {'name': 'Gardening Event', 'date': '2024-05-29', 'description': 'Learn how to plant flowers!'}, {'name': 'Medical Event', 'date': '2024-05-29', 'description': 'Learn how the human biology works.'}]
  list_interests  = [{'name': 'User 1', 'interests': 'Computer Science, Artificial Intelligence, Engineering'}]
  client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))


  completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": "Here is a list of events you will have to analyze " + str(list_events)},
        {"role": "user", "content": "Here is information about a person's interets: " + str(list_interests)},
        {"role": "assistant", "content": "Just return a list of the events from the provided events (with name, date, and description in dictionary format) that this person would be most interested in based on their interests. No other text."}
    ]
    )   

# Retrieve the response
  response_messages = completion.choices[0].message.content

# Look for the assistant's response
  

# Now you can use assistant_response as needed
  print(response_messages)


func()

