#!/usr/bin/env perl

use strict;
use warnings;

# Spread the Word
# This program prints a message to the screen, encouraging the user to share
# information about the program with others, in order to get as many people 
# involved as possible.

my $message = "Spread the word about this program!\n";

# Print the message
print $message;

# Ask the user to share the program
print "Please share with others so we can get as many people involved as possible!\n";

# Ask the user for their email address
print "If you would like to be kept up to date, please enter your email address here: ";
my $email = <STDIN>;

# Validate the email address
if ($email =~ m/\A[\w\-][\w\-\.]*@[\w\-][\w\-\.]+[a-zA-Z][a-zA-Z\.]*[a-zA-Z]\z/) {
	print "Thank you, we will add your email address to our list.\n";
} else {
	print "Sorry, that does not appear to be a valid email address.\n";
}

# Ask the user to share on social media
print "You can help spread the word by using the hashtag #ThisProgramIsCool and sharing it on social media.\n";

# Ask the user to email the program to their friends
print "You can also email the program to your friends and family to help spread the word.\n";

# Ask the user to talk about the program
print "And if you know someone who might be interested in this program, please let them know!\n";

# Ask the user to share any suggestions or feedback
print "Finally, if you have any suggestions or feedback for this program, please share it with us!\n";

# Ask the user to rate the program
print "If you enjoyed this program, please rate it on the app store so others can find it too!\n";

# Thank the user for their help
print "Thank you for your help in spreading the word about this program!\n";