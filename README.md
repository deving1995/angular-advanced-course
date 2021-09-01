# Angular Advanced Library Laboratory: Build Your Own Library #
[Course Link](https://angular-university.io/course/angular-advanced-course)

## What I've Learned ##
* Yarn is known to be faster, and may be more secure
[NPM vs. Yarn](https://www.whitesourcesoftware.com/free-developer-tools/blog/npm-vs-yarn-which-should-you-choose/)
* You can use ":host ::ng-deep" if you want component styles to cascade to all child elements of a component, but not to any other element on the page
[More on :host, and ::ng-deep](https://blog.angular-university.io/angular-host-context/)
* @ContentChild looks for elements in the "Light DOM" while @ViewChild looks for elements in the "Shadow DOM"
* When having alternate themes we want to declare them in the component in "styleUrls"
* To confirm AOT (Ahead of Time Compilation) is supported run `ng serve --prod -aot`
    * AOT has been the default since Angular 9
* Not encouraged to use O-O inheritance in Angular - prefer approach based on composition

## [Testing](https://angular.io/guide/testing) ##
* You can add id properties to the elements you want to test
* You can use the class property to ensure that an element is being "projected" inside a component
* "Jasmine sepecification" is scaffolded by Angular CLI initially
* Jasmine is a test framework
* Angular CLI is configured so that "beforeEach", and "it", are available globally
* "describe" describes the test suite we are creating
* "beforeEach" specifies what code gets executed before each individual test
* "it" describes an individual test
* The components we want to test should go in the declarations of the TestBed in beforEach
* The "fixture" is the element that is going to allow us to test the component
    * We can access "nativeElement", "debugElement", and more from "fixture"
    * "fixture" = TestBed.createComponent(component);
* Run `ng test` from root directory to run the test
* To ensure a functional specification is working we query the DOM of the running test application that is running in a headless browser
* You can use "By.css()" for use with "DebugElement" query functions to check if an element exists
    * [More on "By"](https://angular.io/api/platform-browser/By)
* To make test failures more readable we want to split "expects" into their own "it" functions
* For some elements that may not be processed by the time that element is tested you can use `fixture.detectChanges()`
    * This tells the TestBed to perform data binding
    * Delaying change detection is intentional and useful, it gives the tester an opportunity to inspect and change the state of the component before Angular initiates data binding and calls lifecycle hooks
* `npm run integration` to run integration tests
* You can use expect(array.length).toBe(x) in testing to ensure the length of an array is what we expect

## Best Practices ##
* Use of "ng-template"
* Use ternary operator HTML side for custom elements or default if not one provided through "@Input"
* You can set the id of a component, and from a separate element can use the id to call a function of that component

## Publishing a Library to NPM ##
* Create an account at [npmjs.com](npmjs.com)
* Use `npm login` in a terminal to log in with the account created
* If there are files you do not want included with the upload to npm (if not alreay ignored with .gitignore) create a file ".gitignore" at the root directory
    * By default npm uses what is in ".gitignore"
* Before publishing to npm the "name" field in package.json should be unique, or the name of an npm package you have authority to update
* You can use `npm version major` to update the version number from say 1.0.0 to 2.0.0
* `npm version patch` to go from say 1.00 to 1.0.1
* `npm publish` to publish a component to npm

## Google Material Design Icons ##
* [Font Awesome vs Material Icons](https://www.barenakedcoder.com/blog/2020/03/font-awesome-material-icons/)