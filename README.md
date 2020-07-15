# Code Scanning JavaScript Demo

This repository demonstrates an instance of a XSS Vulnerability

1. Run through the setup flow in the security tab to enable code scanning. Commit directly to master.
2. Go to actions, and confirm that the analysis has run successfully.

3. Edit App.js and replace this code snippet:

```js
  let formText = "Predefined Text"
  ```

  with:

  ```js
let search = window.location.search;
  let params = new URLSearchParams(search);
  let formText = params.get('text');
```

4. Create a PR. Wait for validation.