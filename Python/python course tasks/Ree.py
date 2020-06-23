# Create quiz_item() and 2 or more quiz questions that call quiz_item()
def quiz_item(question, solution):
    print(question)
    answer = input('Enter your answer here: ')
    if answer.lower() == solution.lower():
        print('Great job!')
    else:
        while True:
            print('Incorrect answer, try again')
            answer = input('Enter your answer here: ')
            if answer.lower() == solution.lower():
                print('Great job!')
                break

quiz_item('How to play smash?', 'Press A')
quiz_item('How to not play smash?', 'Not pressing A')
input('\n\n\n\n Press enter to exit...')
