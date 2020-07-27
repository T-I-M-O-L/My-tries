list1 = document.getElementById('list_1').children;
list2 = document.getElementById('list_2').children;
item1 = list1[3];
item2 = list2[0];
list2.insertBefore(item1, list2[0]); //It's been underlining this line and telling me "list2.insertBefore is not a function".
