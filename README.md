# VS-Code bug demo

## How to demo
1. Download the project
2. Run npm install 
3. Set a breakpoint on line 15 in number.util.spec.js
4. In the VS-Code debugger, click the play button, making sure "Demo VS-Code Bug" is selected
5. Observe the breakpoint jump to line 16
6. Set a breakpoint on line 5,
7. Run Demo VS-Code sourceMaps false 
8. click to step into the function, observe that it goes into an empty space
9. Set a breakpoint on line 22,
7. Run Demo VS-Code sourceMaps false 
8. click to step into the function, observe that it goes into other files and will never reach the function you tried to step into.