print('Welcome to the addition calculator!')
print('Here, you can add two different numbers. (Keep in mind that they can only be two numbers, and only addition occurs)')
print()
first_num = input('Enter your first number here: ')
second_num = input('Enter your second number here: ')
Checker = first_num + second_num
if Checker.isdigit():
    sum = int(first_num) + int(second_num)
    print(first_num, '+', second_num, '=', sum)
else:
    print('Please enter the numbers in digit form (1, 2, or 3), not in words (one, two, or three)')
