-- Spread The Word

-- 1
local message = "Spread the Word!"
print (message)

-- 2
local message2 = 'Spreading the Word!'
print (message2)

-- 3
local message3 = 'Share the Message!'
print (message3)

-- 4
local x = 0
while x <= 10 do
	x = x + 1
	print (message)
end

-- 5
for i=1,10 do
	print (message2)
end

-- 6
function spreadMessage(message)
	for i = 1,10 do
	print (message)
	end
end

spreadMessage(message3)

-- 7
function repeatMessage(message, num)
	for i=1,num do
		print (message)
	end
end

repeatMessage(message3, 20)

-- 8
if message3 == 'Share the Message!' then
	print (message3)
end

-- 9
local message4 = "More people to reach!"
print (message4)

-- 10
local messages = {message, message2, message3, message4}

for i = 1,#messages do
	print(messages[i])
end

-- 11
local messageArray = {"Speak it!", "Tell them!", "Share the message!"}
local messagesLength = #messageArray

for i=1,messagesLength do
	print (messageArray[i])
end

-- 12
for i=1,#messages do
	if messages[i] == 'Spread the Word!' then
		print (messages[i])
	end
end

-- 13
function printMessage(msg)
	local messageString = ''
	for i = 1,#messages do
		messageString = messageString .. messages[i] .. ' '
	end
	messageString = messageString .. msg
	print (messageString)
end

printMessage(message4)

-- 14
local message5 = "Let's keep the knowledge going!"

repeatMessage(message5, 5)

-- 15
local message6 = "Teach a friend!"

spreadMessage(message6)

-- 16
local message7 = "Encourage learning!"

repeatMessage(message7, 10)

-- 17
local message8 = "Share the wisdom!"

for i=1,#messages do
	if messages[i] == message2 then
		messageArray[#messageArray+1] = message8
		break
	end
end

printMessage(message8)

-- 18
local message9 = "Don't forget to spread the word!"

repeatMessage(message9, 7)

-- 19
function spreadTheWord(message)
	print (message)
	local length = #messageArray
	if length > 0 then
		for i = 1,#messageArray do
			print (messageArray[i])
		end
	end
end

spreadTheWord(message)

-- 20
local message10 = "Create positive change and knowledge!"

messageArray[#messageArray+1] = message10

printMessage(message10)