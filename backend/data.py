from datetime import datetime

# datetime(year, month, day, hour, minute, second, microsecond)

companies = {}

DATA = {
    'users': [
        {   'username': 'adamma', #primary key
            'password': '123456', 
            'email': "adammbq@gmail.com",
            'accounts': [
                {'facebook': True}, 
                {'google': True},
                {'twitter': True},
                {'snapchat': True},
                {'linkedin': True},
                {'tiktok': True},
                {'telegram': True}
            ]
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
    if username in DATA['users']['username']:
        pass
    return 

def new_data_request():
    '''
    create new data request
    '''

    pass

def get_frequency():
    pass


