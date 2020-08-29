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
    'data': [ 
        {'time': datetime(2020, 1, 1, 12, 14, 34), 'username': 'adammbq', 'company': 'facebook', 'note': "advertisement"},
        {'time': datetime(2020, 1, 1, 12, 14, 34), 'username': 'adammbq', 'company': 'facebook', 'note': "advertisement"},
        {'time': datetime(2020, 1, 1, 12, 14, 34), 'username': 'adammbq', 'company': 'facebook', 'note': "advertisement"}
    ]
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
