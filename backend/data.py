from datetime import datetime, timedelta

# datetime(year, month, day, hour, minute, second, microsecond)


companies = {   'facebook': ['location','login_location', 'gender, ''following', "connections", 'recent_activities', 'searches'], 
                'google': ['location','gender', 'age', 'hobbies', 'youtube_history', 'recent_activities', 'searches', 'deletions', 'internship_rejection_emails'], 
                'linkedin':['location','login_location', 'gender, ''following', "connections", 'recent_activities', 'searches'], 
                'tiktok':['viewing_history', 'gender', 'age', 'location'], 
                'twitter': ['location','login_location', 'gender, ''following', "connections", 'recent_activities', 'searches'], 
                'telegram':['location'], 
                'davidjones':['purchase_history', 'gender', 'age']}
DATA = {
    'users': [
        {   'username': 'adamma', #primary key
            'password': '123456', 
            'email': "adammbq@gmail.com",
            'accounts': ['facebook', 'google', 'linkedin'] # render these at top
        },
        {   'username': 'mattjuan', #primary key
            'password': '123456', 
            'email': "mattjuan@gmail.com",
            'accounts': ['facebook', 'google', 'tiktok'] # render these at top
        }
    ],
    'data':  [{'time': datetime.datetime(2020, 8, 22, 1, 13), 'username': 'adammbq', 'company': 'tiktok', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 22, 2, 25, 46), 'username': 'adammbq', 'company': 'linkedin', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 22, 2, 52, 38), 'username': 'adammbq', 'company': 'google', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 22, 3, 32), 'username': 'adammbq', 'company': 'facebook', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 22, 3, 43, 45), 'username': 'adammbq', 'company': 'facebook', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 22, 5, 13, 10), 'username': 'adammbq', 'company': 'tiktok', 'note': 'search_engine'}, {'time': datetime.datetime(2020, 8, 22, 7, 15, 21), 'username': 'adammbq', 'company': 'linkedin', 'note': 'search_engine'}, {'time': datetime.datetime(2020, 8, 22, 9, 1, 22), 'username': 'adammbq', 'company': 'tiktok', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 22, 9, 5, 16), 'username': 'adammbq', 'company': 'linkedin', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 22, 9, 50), 'username': 'adammbq', 'company': 'google', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 22, 10, 27), 'username': 'adammbq', 'company': 'google', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 22, 10, 38, 54), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 22, 10, 52), 'username': 'adammbq', 'company': 'google', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 22, 11, 17, 30), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 22, 12, 9), 'username': 'adammbq', 'company': 'facebook', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 22, 12, 39, 7), 'username': 'adammbq', 'company': 'google', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 22, 13, 12, 58), 'username': 'adammbq', 'company': 'linkedin', 'note': 'maps'}, {'time': datetime.datetime(2020, 8, 22, 13, 40, 42), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 22, 14, 26, 38), 'username': 'adammbq', 'company': 'tiktok', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 22, 15, 6, 44), 'username': 'adammbq', 'company': 'linkedin', 'note': 'search_engine'}, {'time': datetime.datetime(2020, 8, 22, 16, 7, 38), 'username': 'adammbq', 'company': 'linkedin', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 22, 16, 11, 27), 'username': 'adammbq', 'company': 'facebook', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 22, 17, 3, 54), 'username': 'adammbq', 'company': 'tiktok', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 22, 18, 15, 16), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 22, 18, 58, 12), 'username': 'adammbq', 'company': 'linkedin', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 22, 19, 27, 4), 'username': 'adammbq', 'company': 'tiktok', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 22, 19, 53, 25), 'username': 'adammbq', 'company': 'linkedin', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 22, 20, 0, 13), 'username': 'adammbq', 'company': 'google', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 22, 21, 35, 58), 'username': 'adammbq', 'company': 'facebook', 'note': 'maps'}, {'time': datetime.datetime(2020, 8, 22, 21, 44, 32), 'username': 'adammbq', 'company': 'facebook', 'note': 'maps'}, {'time': datetime.datetime(2020, 8, 22, 21, 58, 54), 'username': 'adammbq', 'company': 'facebook', 'note': 'maps'}, {'time': datetime.datetime(2020, 8, 22, 23, 40, 55), 'username': 'adammbq', 'company': 'tiktok', 'note': 'maps'}, {'time': datetime.datetime(2020, 8, 23, 0, 6, 17), 'username': 'adammbq', 'company': 'tiktok', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 23, 1, 0, 4), 'username': 'adammbq', 'company': 'linkedin', 'note': 'search_engine'}, {'time': datetime.datetime(2020, 8, 23, 1, 13, 23), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 23, 1, 56, 35), 'username': 'adammbq', 'company': 'google', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 23, 2, 42, 5), 'username': 'adammbq', 'company': 'tiktok', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 23, 4, 27, 59), 'username': 'adammbq', 'company': 'google', 'note': 'maps'}, {'time': datetime.datetime(2020, 8, 23, 4, 46, 11), 'username': 'adammbq', 'company': 'tiktok', 'note': 'search_engine'}, {'time': datetime.datetime(2020, 8, 23, 5, 3, 26), 'username': 'adammbq', 'company': 'facebook', 'note': 'search_engine'}, {'time': datetime.datetime(2020, 8, 23, 5, 5), 'username': 'adammbq', 'company': 'linkedin', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 23, 5, 37, 13), 'username': 'adammbq', 'company': 'google', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 23, 5, 51, 36), 'username': 'adammbq', 'company': 'tiktok', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 23, 6, 1, 42), 'username': 'adammbq', 'company': 'linkedin', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 23, 7, 7, 34), 'username': 'adammbq', 'company': 'tiktok', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 23, 8, 54, 14), 'username': 'adammbq', 'company': 'tiktok', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 23, 8, 55, 5), 'username': 'adammbq', 'company': 'tiktok', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 23, 8, 55, 55), 'username': 'adammbq', 'company': 'google', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 23, 8, 58, 31), 'username': 'adammbq', 'company': 'google', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 23, 10, 51, 39), 'username': 'adammbq', 'company': 'linkedin', 'note': 'search_engine'}, {'time': datetime.datetime(2020, 8, 23, 11, 8, 4), 'username': 'adammbq', 'company': 'tiktok', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 23, 12, 40, 23), 'username': 'adammbq', 'company': 'facebook', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 23, 12, 44, 40), 'username': 'adammbq', 'company': 'facebook', 'note': 'search_engine'}, {'time': datetime.datetime(2020, 8, 23, 13, 35, 32), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 23, 13, 39, 36), 'username': 'adammbq', 'company': 'tiktok', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 23, 13, 54, 40), 'username': 'adammbq', 'company': 'tiktok', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 23, 14, 10, 8), 'username': 'adammbq', 'company': 'linkedin', 'note': 'maps'}, {'time': datetime.datetime(2020, 8, 23, 14, 20, 20), 'username': 'adammbq', 'company': 'google', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 23, 14, 42, 8), 'username': 'adammbq', 'company': 'google', 'note': 'search_engine'}, {'time': datetime.datetime(2020, 8, 23, 16, 6, 12), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 23, 18, 23, 27), 'username': 'adammbq', 'company': 'tiktok', 'note': 'search_engine'}, {'time': datetime.datetime(2020, 8, 23, 19, 12, 34), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 23, 19, 29, 52), 'username': 'adammbq', 'company': 'facebook', 'note': 'search_engine'}, {'time': datetime.datetime(2020, 8, 23, 19, 44, 34), 'username': 'adammbq', 'company': 'facebook', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 23, 19, 52, 55), 'username': 'adammbq', 'company': 'facebook', 'note': 'search_engine'}, {'time': datetime.datetime(2020, 8, 23, 20, 21, 25), 'username': 'adammbq', 'company': 'google', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 23, 23, 42, 32), 'username': 'adammbq', 'company': 'tiktok', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 23, 23, 51, 55), 'username': 'adammbq', 'company': 'google', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 24, 0, 22, 28), 'username': 'adammbq', 'company': 'google', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 24, 1, 23, 58), 'username': 'adammbq', 'company': 'google', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 24, 1, 40), 'username': 'adammbq', 'company': 'google', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 24, 2, 38, 59), 'username': 'adammbq', 'company': 'google', 'note': 'maps'}, {'time': datetime.datetime(2020, 8, 24, 3, 34, 53), 'username': 'adammbq', 'company': 'linkedin', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 24, 4, 20, 47), 'username': 'adammbq', 'company': 'linkedin', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 24, 4, 55, 39), 'username': 'adammbq', 'company': 'tiktok', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 24, 5, 23, 55), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 24, 5, 25, 1), 'username': 'adammbq', 'company': 'tiktok', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 24, 6, 47, 57), 'username': 'adammbq', 'company': 'facebook', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 24, 8, 1, 7), 'username': 'adammbq', 'company': 'google', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 24, 8, 57, 10), 'username': 'adammbq', 'company': 'google', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 24, 8, 59, 24), 'username': 'adammbq', 'company': 'tiktok', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 24, 10, 38, 41), 'username': 'adammbq', 'company': 'google', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 24, 13, 9, 6), 'username': 'adammbq', 'company': 'linkedin', 'note': 'maps'}, {'time': datetime.datetime(2020, 8, 24, 14, 6, 9), 'username': 'adammbq', 'company': 'tiktok', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 24, 15, 11, 42), 'username': 'adammbq', 'company': 'google', 'note': 'search_engine'}, {'time': datetime.datetime(2020, 8, 24, 15, 12, 51), 'username': 'adammbq', 'company': 'facebook', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 24, 16, 8, 59), 'username': 'adammbq', 'company': 'tiktok', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 24, 16, 47, 27), 'username': 'adammbq', 'company': 'tiktok', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 24, 17, 21), 'username': 'adammbq', 'company': 'google', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 24, 18, 17, 55), 'username': 'adammbq', 'company': 'google', 'note': 'maps'}, {'time': datetime.datetime(2020, 8, 24, 18, 57, 41), 'username': 'adammbq', 'company': 'tiktok', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 24, 19, 11, 17), 'username': 'adammbq', 'company': 'linkedin', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 24, 19, 42, 27), 'username': 'adammbq', 'company': 'linkedin', 'note': 'maps'}, {'time': datetime.datetime(2020, 8, 24, 19, 45, 8), 'username': 'adammbq', 'company': 'google', 'note': 'advertisement'}, {'time': datetime.datetime(2020, 8, 24, 19, 56, 30), 'username': 'adammbq', 'company': 'tiktok', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 24, 21, 20, 44), 'username': 'adammbq', 'company': 'tiktok', 'note': 'search_engine'}, {'time': datetime.datetime(2020, 8, 24, 22, 18), 'username': 'adammbq', 'company': 'google', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 24, 22, 41, 24), 'username': 'adammbq', 'company': 'linkedin', 'note': 'machine_learning'}, {'time': datetime.datetime(2020, 8, 24, 23, 0, 56), 'username': 'adammbq', 'company': 'tiktok', 'note': 'security'}, {'time': datetime.datetime(2020, 8, 24, 23, 24, 36), 'username': 'adammbq', 'company': 'facebook', 'note': 'security'}]
    
}

def get_data():
    return DATA

def new_user(username, password, email):
    # create a new user
    # check if user existed 
    for user in DATA['users']:
        if user['username'] == username or user['email'] == email:
            raise ValueError("user already registered")
    new = {'username': username, 'password': password, 'email': email, 'accounts':[]}
    DATA['users'].append(new)
    return DATA

def new_data_request():
    '''
    create new data request
    '''
    pass

def new_account(username, account):
    # check if this user has registered this company
    if account not in companies:
        raise ValueError("company does not exist")
    for user in DATA['users']:
        if user['username'] == username:
            for company in user['accounts']:
                print(company)
                if company == account:
                    raise ValueError("account already registered")
            user['accounts'].append(account)
    return DATA

def get_user(username):
    for user in DATA['users']:
        if user['username'] == username:
            return user
    return None

def get_frequency_week(username):
    '''
    get_frequency returns the number of times the account is accessed in total
    can only call get_freq if user has this account else should be impossible
    return an object

    [facebook: no of accesses]
    '''
    # check is it exists
    #freq = {'username': username, "account": account, 'count': 0}
    # check if user has account 
    # find current date
    freq = {}
    now = datetime.date()
    last_week = now - timedelta(days=7)
    for data in DATA['data']:
        if last_week <= data['time'] <= now:
            if data['company'] not in freq:
                freq[data['company']] = 1
            else:
                freq[data['company']] += 1
    return freq

def get_frequency_7day(username):
    '''
    return an list of integers of the number of data access in the past 7 days
    '''
    freq = [0] * 7
    now = datetime.date()
    last_week = now - timedelta(days=7)
    filtered_list = filter(lambda x: last_week <= x['time'] <= now, DATA['data'])
    #filtered_list_sorted = sorted(filtered_list, key=lambda x: x['time'])

    for i in range(7, 0, -1):
        date_lo, date_hi = now - timedelta(days=i), now - timedelta(days=i-1)
        for data in DATA['data']:
            if date_lo <= data['date'] <= date_hi:
                freq[i-1] += 1
    return freq
