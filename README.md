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
