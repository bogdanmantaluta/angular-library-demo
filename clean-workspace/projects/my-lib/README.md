# MyLib
The library was not published, and it has a static npm link with the demo angular project.
In order to make changes visible to the outside apps, use npm build followed by npm link my-lib to create a link if no other exists. (npm ls --link to check)

## Code scaffolding

Run `ng generate component component-name --project my-lib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project my-lib`.
> Note: Don't forget to add `--project my-lib` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build my-lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build my-lib`, go to the dist folder `cd dist/my-lib` and run `npm publish`.
