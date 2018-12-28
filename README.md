# ...-web-testing
For frontend automation testing
README

Required software/drivers/lib:
-Node js - https://nodejs.org/en/
-JAVA (Java SE Dev Kit 8 or newer)
-TextEditor (eg. Notepad++) / IDE (eg. VS Code) 

Download selenium driver based on system software MAC/WIN
-Selenium Standalone Server https://www.seleniumhq.org/download/ 
-Google Chrome Driver https://www.seleniumhq.org/download/
 
Instruction:
- install JAVA
- install Node js
- install TextEditor/IDE


Structure of the project:
...
	--bin
	--lib
		--drivers
	--node_modules
	--page
	--reports
	--tests 
	nightwatch.js
	package.json 

	details*
...
	--bin
	--lib
		--drivers	
			here you will find selenium drivers for different browsers, 
		    selenium server standalone - check do you have the same version of file like it's set in nightwatch.js config file, if not update in project 
	--node_modules
	--page - page elements and methods for distinct module on page 
	--reports
	--tests - all tests written based on page elements
	nightwatch.js - information where the nightwatch it is installed.
	package.json - you can configure here the project globally 

Open the project from repository:

Open IDE program.
1. First thing that you have to do is install the node module 
In terminal type:
npm install --nightwatch --save 
	*it will install nightwatch directly in our project
	(Make sure that the new node will be added to your project.
	Check do you have the correct path in nightwatch.js 
	>>require('./node_modules/nightwatch/bin/runner.js');
2. Copy selenium driver and selenium server standalone to the lib/drivers folder
3. Check the version of standalone in nightwatch.js


Running tests. http://nightwatchjs.org/guide#running-tests
To run test you have to be in root folder

run test using tag
node nightwatch -e browser -a tag
eg. node nightwatch -e chrome - Login

run current test
eg. D:\...> node nightwatch.js --test tests\organization\TC_23_Create_New_Organization.js  -e chrome