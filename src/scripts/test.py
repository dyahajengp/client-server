import string
import numpy as np
import sys, json

def get_lines():
    lines = input()
    return lines

def user_name(data):
    name = data['name']
    return name

def user_gender(data):
    gender = data['gender']
    while gender not in ['male', 'female']:
        print("Please insert your gender correctly")
    return gender

def user_age(data):
    age = int(data['age'])
    while age not in list(range(13, 61)):
        print("We need to say sorry, this app is only for 13 - 60 years old for now")
        age = int(age) 
    return age

def user_goal(data):
    user_goal = data['goals']
    if user_goal == "gain":
        add_cal = int(500)
    elif user_goal == "maintain":
        add_cal = 0
    elif user_goal == "loss":
        add_cal = int(-500)
    return add_cal

def user_height(data):
  height = int(data['height'])
  while height not in list(range(80, 301)):
    print("Please insert your height correctly")
    height = int(data['height'])
  return height

def user_weight(data):
  weight = int(data['weightCurrent'])
  while weight not in list(range(20, 500)):
    print("Please insert your weight correctly")
    weight = int(data['weightCurrent'])
  return weight

def BMR(name, gender, height, weight, age, goal):
  if gender == "male":
    bmr = int(88.4 + (13.4*weight) + (4.8*height) - (5.68*age) + goal)
  elif gender == "female":
    bmr = int(447.6 + (9.25*weight) + (3.1*height) - (4.33*age) + goal)
  return bmr

def list_activity(weight, activity):
  a = list(range(1, 118))
  for i in range(0, len(a)):
    a[i] = str(a[i])

  print("""
  (1) Cycling
  (2) Stationary Cycling
  (3) Calisthenics
  (4) Circuit training, minimal rest
  (5) Weight lifting
  (6) Health club exercise
  (7) Stair Machine
  (8) Rowing Machine
  (9) Ski machine
  (10) Aerobics
  (11) Water Aerobics
  (12) Jazzercise
  (13) Stretching
  (14) Ballet, twist, jazz, tap
  (15) Ballroom dancing 
  (16) Running
  (17) Track and field
  (18) Archery
  (19) Badminton
  (20) Basketball
  (21) Billiards
  (22 )Bowling
  (23) Boxing
  (24) Coaching: football, basketball, soccer
  (25) Cricket
  (26) Croquet
  (27) Curling
  (28) Darts (wall or lawn)
  (29) Fencing
  (30) Football
  (31) Frisbee
  (32) Golf
  (33) Gymnastics
  (34) Hacky sack
  (35) Handball
  (36) Hockey (field or ice hockey)
  (37) Riding a horse
  (38) Jai alai
  (39) Martial arts
  (40) Krav maga training
  (41) Juggling
  (42) Kickball
  (43) Lacrosse
  (44) Orienteering
  (45) Paddleball
  (46) Polo
  (47) Racquetball
  (48) Rock climbing
  (49) Jumping rope
  (50) Rugby
  (51) Shuffleboard, lawn bowling
  (52) Skateboarding
  (53) Roller skating
  (54) Roller blading, in-line skating
  (55) Sky diving
  (56) Soccer
  (57) Baseball
  (58) Softball
  (59) Squash
  (60) Table tennis, ping pong
  (61) Tai chi
  (62) Tennis
  (63) Trampoline
  (64) Volleyball
  (65) Wrestling
  (66) Wallyball
  (67) Backpacking, hiking with pack
  (68) Carrying infant
  (69) Playing with children
  (70) Loading, unloading car
  (71) Climbing hills
  (72) Bird watching
  (73) Marching, rapidly, military
  (74) Children's game, hopscocth, dodgeball
  (75) Pushing stroller or walking with children
  (76) Pushing a wheelchair
  (77) Race walking
  (78) Rock climbing, mountain climbing
  (79) Walking
  (80) Boating, power, speed boat
  (81) Canoeing
  (82) Crew, sculling, rowing
  (83) Kayaking
  (84) Paddle boat
  (85) Windsurfing
  (86) Sailing
  (87) Skiing
  (88) Skin diving
  (89) Snorkeling
  (90) Surfing, body surfing or board surfing
  (91) Whitewater rafting
  (92) Swimming
  (93) Water aerobics
  (94) Water polo
  (95) Water volleyball
  (96) Water jogging
  (97) Diving, springboard or platform
  (98) Ice skating
  (99) Cross country snow skiing
  (100) Downhill snow skiing
  (101) Sledding, tobagganing, luge
  (102) Snow shoeing
  (103) Snowmobiling
  (104) General Housework
  (105) Cleaning gutters
  (106) Painting
  (107) Playing with animal
  (108) Mowing lawn
  (109) Snow blower
  (110) Shoveling snow by hand
  (111) Raking lawn
  (112) Gardening
  (113) Carpentry
  (114) Carrying loads
  (115) Cleaning
  (116) Walking, pushing a wheelchair
  (117) Teach physical education, exercise class
"""
)

  activity = input("Select your today activities ")
  if activity == "1":
    print("""
    (a) <4.5 m/s, leisure bicycling
    (b) 4.5 - 5.4 m/s, light
    (c) 5.4 - 6.2 m/s, moderate
    (d) 6.2 - 7.1 m/s, vigorous
    (e) 7.1 - 8.5 m/s, very fast, racing
    (f) >9 m/s, racing
    (g) Mountain bike, bmx
    (h) Unicycling
    """)
    kind = input("Choose the level of your activity ").lower()
    while kind not in list(string.ascii_lowercase)[:8]:
      print("Insert your level correctly")
      kind = input("Choose the level of your activity ").lower()
    if kind == "a":
      duration = float(input("""Duration (in hour) """))
      bmr_1 = int((4*weight-0.18)*duration)
    elif kind == "b":
      duration = float(input("""Duration (in hour) """))
      bmr_1 = int((6*weight+0.4)*duration) 
    elif kind == "c":
      duration = float(input("""Duration (in hour) """))
      bmr_1 = int((8*weight-1.2)*duration) 
    elif kind == "d":
      duration = float(input("""Duration (in hour) """))
      bmr_1 = int((10*weight-0.62)*duration)
    elif kind == "e":
      duration = float(input("""Duration (in hour) """))
      bmr_1 = int((12*weight-1.38)*duration) 
    elif kind == "f":
      duration = float(input("""Duration (in hour) """))
      bmr_1 = int((16*weight-0.64)*duration)
    elif kind == "g":
      duration = float(input("""Duration (in hour) """))
      bmr_1 = int((8.5*weight+0.62)*duration)
    elif kind == "h":
      duration = float(input("""Duration (in hour) """))
      bmr_1 = int((5*weight+0.36)*duration)


  elif activity == "2":
    print("""
      (a) very light
      (b) light
      (c) moderate
      (d) vigorous
      (e) very vigorous
    """)
    kind = input("Choose the level of your activity ").lower()
    while kind not in list(string.ascii_lowercase)[:5]:
      print("Insert your level correctly")
      kind = input("Choose the level of your activity ").lower()
    if kind == "a":
      duration = float(input("""Duration (in hour) """))
      bmr_1 = int((3*weight+0.2)*duration)
    elif kind == "b":
      duration = float(input("""Duration (in hour) """))
      bmr_1 = int((5.5*weight+0.83)*duration)
    elif kind == "c":
      duration = float(input("""Duration (in hour) """))
      bmr_1 = int((7*weight+0.94)*duration)
    elif kind == "d":
      duration = float(input("""Duration (in hour) """))
      bmr_1 = int((10.5*weight+1.2)*duration)
    elif kind == "e":
      duration = float(input("""Duration (in hour) """))
      bmr_1 = int((12.5*weight+1.36)*duration)

  return bmr_1

def user_activity(data, weight):
  activity_question = len(data['activities'])
  addCalorie = 0
  if activity_question == 0:
    aktivitas = 0
    addCalorie = 0
    return addCalorie
  elif activity_question > 0:
    activity_lists = data['activities']
    for item in activity_lists:
        bmr_1 = 0
        # list_activity(weight, item)
        addCalorie = addCalorie + list_activity(weight, item)
    return addCalorie

def calories_need(bmr, activities):
    cal_need = bmr + activities
    # cal_need = bmr
    return cal_need

def main():
    x = { "email": "bubu@gmail.com",
      "password": "1234567",
      "name": "bubu",
      "weightCurrent": "50",
      "height": "180",
      "gender": "male",
      "age": "26",
      "goals": "gain",
      "activities": [1,2],
      "test": [{
        "activityName": "makan",
        "kind": "a",
        "duration": 0.2,
      }]}
    
    # lines = get_lines()
    # data = json.loads(lines)
    data = x
    name = user_name(data)
    gender = user_gender(data)
    goal = user_goal(data)
    age = user_age(data)
    height = user_height(data)
    weight = user_weight(data)
    bmr = BMR(name, gender, height, weight, age, goal)
    activities = user_activity(data, weight)
    total = calories_need(bmr, activities)
    print("You need " + str(total) + " calories today, " + name)
    print(lines)
    
    

if __name__=='__main__':
    main()