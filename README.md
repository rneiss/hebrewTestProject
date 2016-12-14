# hebrewTestProject
Current versions of React Native (at least 0.39.2 and below) don't appear to properly display Hebrew Unicode Characters on iOS when cantilation markers (u0591-u05AF) are included under certain conditions.

This is a demo to display that bug.

This appears when using fonts that properly display these characters (Taamey Frank, Ezra SIL, SBL Hebrew, Shofar, Keter YG, etc)

It does not appear to occur with fonts that incorrectly place these characters.

To install:

```
git clone https://github.com/rneiss/hebrewTestProject/
cd hebrewTestProject                            
npm install
```
