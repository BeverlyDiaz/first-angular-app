
# Projet Angular – Formation

J’ai réalisé ce projet en suivant le cours "Angular - The Complete Guide" de Maximilian Schwarzmüller sur Udemy.

J’y ai mis en pratique ce que j’ai appris : création de composants, gestion des `@Input` et `@Output`, utilisation de `ng-content`, et d’autres fonctionnalités d’Angular. C’est avant tout un projet d’entraînement pour progresser et expérimenter avec le framework.

### Ce que j'ai mis en pratique

Ce projet a été l'occasion de mettre en œuvre plusieurs concepts clés d'Angular, en suivant les bonnes pratiques du framework :

*   **Architecture et Organisation :** J'ai structuré l'application en modules (`TasksModule`, `SharedModule`) pour bien séparer les fonctionnalités et rendre le code plus facile à maintenir.
*   **Composants et Communication :** J'ai créé une série de composants qui communiquent entre eux de manière propre, en utilisant `@Input` pour recevoir des données et `@Output` pour émettre des événements.
*   **Services et Injection de Dépendances :** La logique métier, comme la gestion des tâches, est centralisée dans un service. Cela permet de garder les composants légers et de réutiliser la logique facilement.
*   **Modélisation des Données :** Pour assurer la cohérence des données, j'ai utilisé des modèles TypeScript (`Task`, `User`).
*   **Interactivité :** J'ai utilisé le data binding d'Angular pour créer une interface utilisateur dynamique qui réagit instantanément aux actions de l'utilisateur.
*   **Gestion des Formulaires :** Le formulaire d'ajout de tâches est un exemple de ma pratique avec la gestion des formulaires dans Angular.

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
