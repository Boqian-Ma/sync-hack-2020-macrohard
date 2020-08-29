import random 
from datetime import datetime
# {'time': datetime(2020, 1, 1, 12, 14, 34), 'username': 'adammbq', 'company': 'facebook', 'note': "advertisement"},

# 29/08/2020 datetime(2020, 8, 22 - 29, 0, 0, 0)
# 


companies = ['google', 'tiktok', 'facebook', 'linkedin']
note = ['advertisement', 'maps', 'search_engine', 'machine_learning', 'security']
def random_company():
    num = random.randint(0, len(companies) - 1)
    return companies[num]

def random_note():
    return note[random.randint(0, len(note) - 1)]

def random_data(start, end, num):
    data = []
    for i in range(num):
        company = random_company()
        note = random_note()
        day = random.randint(start, end)
        hour = random.randint(0,23)
        min = random.randint(0, 59)
        sec = random.randint(0,59)
        new = {'time': datetime(2020, 8, day, hour, min, sec), 'username': 'adammbq', 'company': company, 'note': note}
        data.append(new)
    sort_data(data)

def sort_data(data):
    '''
    sort data by datetime
    '''
    data.sort(key = lambda x:x['time']) 
    for i in range(len(data)):
        print(f"{data[i]},")

if __name__ == "__main__":
    random_data(22,29,100)