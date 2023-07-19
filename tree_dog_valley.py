#Spread the Word Program 

#import libraries
import random 
import string

#Define the alphabet 
alphabet = string.ascii_lowercase

#Create a list for spread the word 
spread_the_word_list =[] 

#create a function to create a random letter
def random_letter(): 
	return random.choice(alphabet)

#create a function to generate 5 random letter 
def generate_5_random_letters(): 
	random_letter_list = []
	for i in range(5): 
		random_letter_list.append(random_letter())
	return random_letter_list

#create a function to create words using 5 random letters 
def make_words(random_letter_list):
	for i in range(0,5): 
		word = ''.join(random_letter_list)
		spread_the_word_list.append(word)

#create a function to create 1000 words using 5 random letters 
def create_1000_words(): 
	for i in range(1000): 
		random_letter_list = generate_5_random_letters()
		make_words(random_letter_list)

#create a function to save the list in a file 
def save_list_in_file(): 
	file = open('spread_the_word.txt', 'w')
	for word in spread_the_word_list: 
		file.write(word + '\n')
	file.close()

#call the functions to start the program
create_1000_words()
save_list_in_file()