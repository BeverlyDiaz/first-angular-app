
# Angular Project – Training

I created this project while following the "Angular - The Complete Guide" course by Maximilian Schwarzmüller on Udemy.

This is primarily a training project to practice and experiment with the framework.

### What I Practiced

This project was an opportunity to implement several key Angular concepts, following the framework's best practices:

*   **Architecture and Organization:** I structured the application into modules (`TasksModule`, `SharedModule`) to properly separate features and make the code easier to maintain.
*   **Components and Communication:** I created a series of components that communicate cleanly with each other, using `@Input` to receive data and `@Output` to emit events.
*   **Services and Dependency Injection:** The business logic, such as task management, is centralized in a service. This keeps the components lightweight and allows for easy logic reuse.
*   **Data Modeling:** To ensure data consistency, I used TypeScript models (`Task`, `User`).
*   **Interactivity:** I used Angular's data binding to create a dynamic user interface that reacts instantly to user actions.
*   **Form Management:** The task creation form is an example of my practice with form handling in Angular.

# FirstAngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
