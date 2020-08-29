from data import *
from main import *
def test_adduser():
    print(new_user('lyric', '123456', 'lyric@gmail.com'))

def test_addcompany():
    print(new_account('adamma', 'tiktok'))

def test_main():
    home()

def test_accounts():
    accounts()

def test_scompany(company):
    scompany(company)

if __name__ == "__main__":
    #test_adduser()
    #test_addcompany()
    #test_accounts()
    test_scompany("facebook")