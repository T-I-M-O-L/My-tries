animal_count = 1
all_animals = 1994
while animal_count < 4:
    animal_name = input('Enter animal name here: ')
    if animal_name.lower() == 'exit':
        if all_animals == 1994:
            print('No animals entered')
            break
        else:
            print(all_animals)
            break
    else:
        if all_animals == 1994:
            all_animals = ""
        all_animals = all_animals + " " + animal_name
        animal_count += 1
# This program supposedly adds animal names together in a string with some extra functionality
