from datetime import datetime

# datetime(year, month, day, hour, minute, second, microsecond)

companies = ['facebook', 'google', 'linkedin', 'tiktok', 'twitter', 'telegram', 'davidjones']

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
        {'time': datetime(2020, 1, 1, 12, 14, 34), 'username': 'adammbq', 'company': 'facebook', 'note': "advertisement"},
        {'time': datetime(2020, 1, 1, 12, 14, 34), 'username': 'adammbq', 'company': 'facebook', 'note': "advertisement"},
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

    pass



def get_frequency_week(username, account):
    '''
    get_frequency returns the number of times the account is accessed in total
    can only call get_freq if user has this account else should be impossible
    '''
    # check is it exists
    freq = {'username': username, "account": account, 'count': 0}

    # check if user has account 
    for user in DATA['users']:
        if user['users'] == user:
            # there exist

    return freq


