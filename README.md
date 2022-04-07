# PixlJS V1
Online Pixel Editor, Powered with Plain JS and Bootstrap 5
# How to Modify?
Clone my project using git
```bash
git clone https://github.com/CorneliusC7/PixlJS.git
cd PixlJS
```
You can modify the script freely for non-commercial use.
# Can i change to electron now?
No, for now it's not compatible to electron, because of prompt(); electron didn't support it.
# How do i make a electron version of this?
Get the project using git
```bash
git clone https://github.com/CorneliusC7/PixlJS.git
cd PixlJS
```
check if you have node.js
```bash
node -v
```
initialize node.js for the project
```bash
npm init
```
after using npm init always press enter until you done.
install electron for your project.
```bash
npm install electron --save-dev
```
set the start command.
- linux
```bash
nano package.json
```
- windows
```bash
notepad package.json
```
change the test to start
```bash
"test: "......"
```
to
```bash
"start": "electron ."
```
Done!
