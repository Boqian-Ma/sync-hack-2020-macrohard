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
    'data':  [{'time': datetime(2020, 8, 22, 4, 42, 8), 'username': 'adammbq', 'company': 'tiktok', 'note': 'maps'},
{'time': datetime(2020, 8, 22, 5, 43, 19), 'username': 'adammbq', 'company': 'linkedin', 'note': 'search_engine'},
{'time': datetime(2020, 8, 22, 6, 33, 40), 'username': 'adammbq', 'company': 'linkedin', 'note': 'advertisement'},
{'time': datetime(2020, 8, 22, 7, 38, 55), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'},
{'time': datetime(2020, 8, 22, 12, 28, 18), 'username': 'adammbq', 'company': 'facebook', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 22, 14, 48, 7), 'username': 'adammbq', 'company': 'linkedin', 'note': 'search_engine'},
{'time': datetime(2020, 8, 22, 16, 4, 24), 'username': 'adammbq', 'company': 'tiktok', 'note': 'search_engine'},
{'time': datetime(2020, 8, 22, 19, 9, 33), 'username': 'adammbq', 'company': 'linkedin', 'note': 'search_engine'},
{'time': datetime(2020, 8, 22, 21, 28, 16), 'username': 'adammbq', 'company': 'tiktok', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 22, 21, 33, 43), 'username': 'adammbq', 'company': 'tiktok', 'note': 'maps'},
{'time': datetime(2020, 8, 22, 21, 33, 50), 'username': 'adammbq', 'company': 'linkedin', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 22, 22, 13, 14), 'username': 'adammbq', 'company': 'tiktok', 'note': 'security'},
{'time': datetime(2020, 8, 22, 23, 5, 41), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'},
{'time': datetime(2020, 8, 23, 2, 3, 21), 'username': 'adammbq', 'company': 'google', 'note': 'search_engine'},
{'time': datetime(2020, 8, 23, 5, 29, 45), 'username': 'adammbq', 'company': 'linkedin', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 23, 6, 57, 39), 'username': 'adammbq', 'company': 'linkedin', 'note': 'advertisement'},
{'time': datetime(2020, 8, 23, 8, 35, 19), 'username': 'adammbq', 'company': 'linkedin', 'note': 'maps'},
{'time': datetime(2020, 8, 23, 9, 40, 27), 'username': 'adammbq', 'company': 'facebook', 'note': 'security'},
{'time': datetime(2020, 8, 23, 10, 14, 9), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'},
{'time': datetime(2020, 8, 23, 13, 44, 58), 'username': 'adammbq', 'company': 'google', 'note': 'advertisement'},
{'time': datetime(2020, 8, 23, 15, 46, 59), 'username': 'adammbq', 'company': 'facebook', 'note': 'search_engine'},
{'time': datetime(2020, 8, 23, 15, 49, 7), 'username': 'adammbq', 'company': 'tiktok', 'note': 'security'},
{'time': datetime(2020, 8, 23, 18, 30, 35), 'username': 'adammbq', 'company': 'tiktok', 'note': 'search_engine'},
{'time': datetime(2020, 8, 23, 22, 13, 6), 'username': 'adammbq', 'company': 'tiktok', 'note': 'search_engine'},
{'time': datetime(2020, 8, 24, 1, 15, 58), 'username': 'adammbq', 'company': 'linkedin', 'note': 'maps'},
{'time': datetime(2020, 8, 24, 1, 54, 51), 'username': 'adammbq', 'company': 'linkedin', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 24, 7, 52, 1), 'username': 'adammbq', 'company': 'facebook', 'note': 'maps'},
{'time': datetime(2020, 8, 24, 9, 17, 57), 'username': 'adammbq', 'company': 'google', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 24, 11, 26, 18), 'username': 'adammbq', 'company': 'linkedin', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 24, 11, 40, 1), 'username': 'adammbq', 'company': 'tiktok', 'note': 'security'},
{'time': datetime(2020, 8, 24, 15, 55, 55), 'username': 'adammbq', 'company': 'tiktok', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 24, 18, 24, 5), 'username': 'adammbq', 'company': 'facebook', 'note': 'security'},
{'time': datetime(2020, 8, 24, 19, 22, 36), 'username': 'adammbq', 'company': 'linkedin', 'note': 'security'},
{'time': datetime(2020, 8, 24, 20, 21, 16), 'username': 'adammbq', 'company': 'google', 'note': 'search_engine'},
{'time': datetime(2020, 8, 24, 21, 50, 8), 'username': 'adammbq', 'company': 'google', 'note': 'advertisement'},
{'time': datetime(2020, 8, 24, 22, 38, 41), 'username': 'adammbq', 'company': 'tiktok', 'note': 'security'},
{'time': datetime(2020, 8, 25, 3, 2, 21), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'},
{'time': datetime(2020, 8, 25, 3, 31, 10), 'username': 'adammbq', 'company': 'tiktok', 'note': 'advertisement'},
{'time': datetime(2020, 8, 25, 3, 44, 31), 'username': 'adammbq', 'company': 'google', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 25, 3, 57, 48), 'username': 'adammbq', 'company': 'google', 'note': 'advertisement'},
{'time': datetime(2020, 8, 25, 6, 33, 38), 'username': 'adammbq', 'company': 'tiktok', 'note': 'maps'},
{'time': datetime(2020, 8, 25, 11, 14, 40), 'username': 'adammbq', 'company': 'linkedin', 'note': 'advertisement'},
{'time': datetime(2020, 8, 25, 13, 15, 6), 'username': 'adammbq', 'company': 'facebook', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 25, 17, 9, 11), 'username': 'adammbq', 'company': 'facebook', 'note': 'maps'},
{'time': datetime(2020, 8, 25, 17, 14, 21), 'username': 'adammbq', 'company': 'google', 'note': 'advertisement'},
{'time': datetime(2020, 8, 25, 17, 43, 44), 'username': 'adammbq', 'company': 'google', 'note': 'search_engine'},
{'time': datetime(2020, 8, 25, 22, 50, 11), 'username': 'adammbq', 'company': 'google', 'note': 'security'},
{'time': datetime(2020, 8, 25, 23, 7, 2), 'username': 'adammbq', 'company': 'facebook', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 25, 23, 54, 11), 'username': 'adammbq', 'company': 'linkedin', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 26, 1, 14, 28), 'username': 'adammbq', 'company': 'google', 'note': 'advertisement'},
{'time': datetime(2020, 8, 26, 2, 38, 57), 'username': 'adammbq', 'company': 'google', 'note': 'security'},
{'time': datetime(2020, 8, 26, 5, 36, 11), 'username': 'adammbq', 'company': 'linkedin', 'note': 'maps'},
{'time': datetime(2020, 8, 26, 9, 28, 53), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'},
{'time': datetime(2020, 8, 26, 10, 49, 4), 'username': 'adammbq', 'company': 'facebook', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 26, 10, 58, 8), 'username': 'adammbq', 'company': 'linkedin', 'note': 'maps'},
{'time': datetime(2020, 8, 26, 14, 14, 1), 'username': 'adammbq', 'company': 'linkedin', 'note': 'search_engine'},
{'time': datetime(2020, 8, 26, 16, 1, 59), 'username': 'adammbq', 'company': 'linkedin', 'note': 'search_engine'},
{'time': datetime(2020, 8, 26, 19, 43, 24), 'username': 'adammbq', 'company': 'facebook', 'note': 'maps'},
{'time': datetime(2020, 8, 26, 22, 40), 'username': 'adammbq', 'company': 'tiktok', 'note': 'maps'},
{'time': datetime(2020, 8, 27, 0, 56, 38), 'username': 'adammbq', 'company': 'tiktok', 'note': 'maps'},
{'time': datetime(2020, 8, 27, 1, 51, 14), 'username': 'adammbq', 'company': 'google', 'note': 'search_engine'},
{'time': datetime(2020, 8, 27, 2, 33, 43), 'username': 'adammbq', 'company': 'tiktok', 'note': 'security'},
{'time': datetime(2020, 8, 27, 9, 1, 45), 'username': 'adammbq', 'company': 'tiktok', 'note': 'advertisement'},
{'time': datetime(2020, 8, 27, 12, 43, 41), 'username': 'adammbq', 'company': 'tiktok', 'note': 'security'},
{'time': datetime(2020, 8, 27, 15, 22, 55), 'username': 'adammbq', 'company': 'google', 'note': 'search_engine'},
{'time': datetime(2020, 8, 27, 16, 13, 16), 'username': 'adammbq', 'company': 'linkedin', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 27, 21, 45, 15), 'username': 'adammbq', 'company': 'tiktok', 'note': 'search_engine'},
{'time': datetime(2020, 8, 28, 1, 33, 12), 'username': 'adammbq', 'company': 'linkedin', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 28, 4, 53, 33), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'},
{'time': datetime(2020, 8, 28, 6, 15, 37), 'username': 'adammbq', 'company': 'linkedin', 'note': 'maps'},
{'time': datetime(2020, 8, 28, 10, 48, 53), 'username': 'adammbq', 'company': 'google', 'note': 'advertisement'},
{'time': datetime(2020, 8, 28, 13, 16, 34), 'username': 'adammbq', 'company': 'tiktok', 'note': 'search_engine'},
{'time': datetime(2020, 8, 28, 16, 14, 17), 'username': 'adammbq', 'company': 'tiktok', 'note': 'search_engine'},
{'time': datetime(2020, 8, 28, 16, 31, 6), 'username': 'adammbq', 'company': 'facebook', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 28, 17, 55, 20), 'username': 'adammbq', 'company': 'facebook', 'note': 'security'},
{'time': datetime(2020, 8, 28, 20, 23, 21), 'username': 'adammbq', 'company': 'facebook', 'note': 'security'},
{'time': datetime(2020, 8, 28, 20, 46, 44), 'username': 'adammbq', 'company': 'tiktok', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 28, 20, 46, 58), 'username': 'adammbq', 'company': 'google', 'note': 'advertisement'},
{'time': datetime(2020, 8, 29, 0, 8, 16), 'username': 'adammbq', 'company': 'facebook', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 29, 0, 24, 7), 'username': 'adammbq', 'company': 'tiktok', 'note': 'security'},
{'time': datetime(2020, 8, 29, 2, 37, 13), 'username': 'adammbq', 'company': 'facebook', 'note': 'search_engine'},
{'time': datetime(2020, 8, 29, 3, 41), 'username': 'adammbq', 'company': 'facebook', 'note': 'advertisement'},
{'time': datetime(2020, 8, 29, 4, 11, 40), 'username': 'adammbq', 'company': 'facebook', 'note': 'maps'},
{'time': datetime(2020, 8, 29, 5, 25, 58), 'username': 'adammbq', 'company': 'facebook', 'note': 'maps'},
{'time': datetime(2020, 8, 29, 6, 4, 5), 'username': 'adammbq', 'company': 'google', 'note': 'advertisement'},
{'time': datetime(2020, 8, 29, 6, 34, 48), 'username': 'adammbq', 'company': 'google', 'note': 'maps'},
{'time': datetime(2020, 8, 29, 8, 14, 58), 'username': 'adammbq', 'company': 'linkedin', 'note': 'maps'},
{'time': datetime(2020, 8, 29, 9, 7, 28), 'username': 'adammbq', 'company': 'tiktok', 'note': 'advertisement'},
{'time': datetime(2020, 8, 29, 9, 40, 48), 'username': 'adammbq', 'company': 'google', 'note': 'search_engine'},
{'time': datetime(2020, 8, 29, 10, 18, 36), 'username': 'adammbq', 'company': 'linkedin', 'note': 'security'},
{'time': datetime(2020, 8, 29, 12, 56, 17), 'username': 'adammbq', 'company': 'facebook', 'note': 'search_engine'},
{'time': datetime(2020, 8, 29, 13, 27, 19), 'username': 'adammbq', 'company': 'linkedin', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 29, 19, 23, 46), 'username': 'adammbq', 'company': 'facebook', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 29, 19, 38, 47), 'username': 'adammbq', 'company': 'google', 'note': 'maps'},
{'time': datetime(2020, 8, 29, 19, 45, 41), 'username': 'adammbq', 'company': 'google', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 29, 20, 22, 7), 'username': 'adammbq', 'company': 'linkedin', 'note': 'machine_learning'},
{'time': datetime(2020, 8, 29, 20, 52, 32), 'username': 'adammbq', 'company': 'tiktok', 'note': 'search_engine'},
{'time': datetime(2020, 8, 29, 22, 7, 59), 'username': 'adammbq', 'company': 'linkedin', 'note': 'security'},
{'time': datetime(2020, 8, 29, 23, 12, 8), 'username': 'adammbq', 'company': 'tiktok', 'note': 'maps'},
{'time': datetime(2020, 8, 29, 23, 59, 22), 'username': 'adammbq', 'company': 'google', 'note': 'security'}]
    
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
    now = datetime.now()
    last_week = now - timedelta(days=7)
    for data in DATA['data']:
        if last_week <= data['time'] <= now:
            if data['company'] not in freq:
                freq[data['company']] = 1
            else:
                freq[data['company']] += 1
    return freq

def get_frequency_7day(username, company):
    '''
    return an list of integers of the number of data access in the past 7 days
    '''
    freq = [0] * 7
    now = datetime.now()
    last_week = now - timedelta(days=7)
    filtered_list = filter(lambda x: last_week <= x['time'] <= now, DATA['data'])
    #filtered_list_sorted = sorted(filtered_list, key=lambda x: x['time'])

    for i in range(7, 0, -1):
        date_lo, date_hi = now - timedelta(days=i), now - timedelta(days=i-1)
        for data in DATA['data']:
            if date_lo <= data['time'] <= date_hi and data['company'] == company:
                freq[i-1] += 1
    return list(reversed(freq))
