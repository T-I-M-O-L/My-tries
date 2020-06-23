Say_hello = input('Say "Hello"? (Y or N): ')
if Say_hello.lower() == 'y':
    Full_hello = input('Full "Hello"? (Y or N): ')
    if Full_hello.lower() == 'y':
        print('Hello!')
    elif Full_hello.lower() == 'n':
        print('Hi!')
    else:
        print('invalid input')
elif Say_hello.lower() == 'n':
    print('"(Friendly nod)"')
else:
    print('invalid input')
