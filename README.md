Webpack 101 Talk
================

This code was used to demonstrate refactoring a simple app to use Webpack.
Each commit is a separate step, but currently lacks explanation in the messages.

The app starts out as:
- A single `index.html` file with everything
- Uses `<script>` tags to retrieve libraries at runtime

Then after refactoring:
- The app is broken up into separate files
- Each file has `require` statements for its dependencies
- Uses npm modules and compiles a ES5 compatible bundle at build time
