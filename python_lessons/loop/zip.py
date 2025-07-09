# Definition and Usage
# The zip() function returns a zip object, which is an iterator of tuples where the first item in each passed iterator is paired together, 
# and then the second item in each passed iterator are paired together etc.
# If the passed iterables have different lengths, the iterable with the least items decides the length of the new iterator.


a = ("Junaid", "khubaib", "Khadija")
b = ("khan", "Ahmed", "Khan")

x = zip(a, b) #if we print x directly it will give location of zip object like this <zip object at 0x14a911dc1680>

#use the tuple() function to display a readable version of the result:
print(tuple(x))
