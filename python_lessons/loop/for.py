# Python For Loops 
# A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string). 
# This is less like the for keyword in other programming languages, and works more like an iterator method as found in 
# other object-orientated programming languages.
# With the for loop we can execute a set of statements, once for each item in a list, tuple, set etc 

Names = ["Javed","Junaid","Zahid","Ahmed"]
for x in Names:
    print(x)

print()

#Even strings are iterable objects, they contain a sequence of characters:

for x in "Junaid":
    print(x)

#With the break statement we can stop the loop before it has looped through all the items:
print("*"*30) #its just a empty line

Names = ["Javed","Junaid","Zahid","Ahmed"]
for x in Names:
    print(x)
    if x == "Junaid":
     break

#Exit the loop when x is "Junaid", but this time the break comes before the print:

print("-"*30)

Names = ["Javed","Junaid","Zahid","Ahmed"]
for x in Names:
    if x == "Junaid":
     break
    print(x)

#With the continue statement we can stop the current iteration of the loop, 
# and continue with the next:

print("/"*30)

Names = ["Javed","Junaid","Zahid","Ahmed"]
for x in Names:
    if x == "Junaid":
     continue
    print(x)

print(",."*30)
#-----------------The range() Function--------------------
# To loop through a set of code a specified number of times, 
# we can use the range() function,
# The range() function returns a sequence of numbers,starting from 0 by default, 
# and increments by 1 (by default), and ends at a specified number.

for x in range(6):
  print(x)

# Note that range(6) is not the values of 0 to 6, but the values 0 to 5.

# The range() function defaults to 0 as a starting value, 
# however it is possible to specify the starting value by adding a parameter: range(2, 6), 
# which means values from 2 to 6 (but not including 6):

for x in range(2, 6):
  print(x)

print()

# The range() function defaults to increment the sequence by 1, 
# however it is possible to specify the increment value by adding a third parameter: 
# range(2, 30, 3):

#Increment the sequence with 3 (default is 1):

for x in range(2, 30, 3):
  print(x)

#*********************Else in For Loop*****************
# The else keyword in a for loop specifies a block of 
# code to be executed when the loop is finished:
print()
# Print all numbers from 0 to 5, and print a message when the loop has ended:
for x in range(6):
  print(x)
else:
  print("Finally finished!")

# Note: The else block will NOT be executed if the loop is stopped by a break statement.
print()
# Break the loop when x is 3, and see what happens with the else block:
for x in range(6):
  if x == 3: break
  print(x)
else:
  print("Finally finished!")

print()
#--------------The pass Statement------------
# for loops cannot be empty, but if you for some reason have a for loop with no content, 
# put in the pass statement to avoid getting an error.
for x in [0, 1, 2]:
  pass


print("@"*60)

for x in range(1,11):
  if x % 2 == 0:
   print(f"{x} is even number.")
  else:
   print(f"{x} is odd number")


# "abc" find count of vowels in a string 

def count_vowels(str):
  vowels = ["a","e","i","o","u"]
  my_word = list(str.lower())
  count = 0
  for x in my_word:
    for y in vowels:
      if x == y:
        count += 1
  print(count)
            
count_vowels("ABCD")

def remove_vowels(str):
  vowels = ["a","e","i","o","u","A","E","I","O","U"]
  my_word = list(str)
  for x in my_word:
    for y in vowels:
      if x == y:
        str.remove(x)
  print(str)

remove_vowels("Azher")      
  


