# E-Commerce-Back-End
## Description

The goal of this assignment was to write the code to set up the models for a e-commerce websites back end as well as the routes to handle all the get, post, put and delete request for the database using sequilize.

## Installation

When the Github repo is first cloned open the integrated terminal in vscode at the folder location and type in 'npm install' to install all the dependencies. After which log into your my SQL by typing in 'mysql -u root -p' and input your password when promoted.
While logged into mysql type in 'source db/schemal.sql' to create the database and then type in 'exit' to log out of mysql.

Now type in 'npm run seed' to seed the database.

## Usage

After installation is complete, to start the server, type in 'npm start' in the intergrated terminal when it is opened from the root folder. The server is now listening.

From insomnia (or another tool like it), you can perform get, post, put and delete request to interact with the database.

A video walkthrough showing each type of request to each table in the database can be found here: https://drive.google.com/file/d/1upWQhUD8f51XNfRpR11u5wcbDrij_NXX/view

## Credits

Developper(s):
- Jordan Pletzer: https://github.com/pletzjd

Initial code provided by:
- University of Toronto School of Continuing Studies: https://bootcamp.learn.utoronto.ca/coding/curriculum/

## License

MIT License

Copyright (c) [2022] [Jordan Daniel Joseph Pletzer]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.