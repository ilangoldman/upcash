// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBVnK5FdPu0rM7J9tYqRS4Fw1xF-ZDazkM',
    authDomain: 'upcash-md.firebaseapp.com',
    databaseURL: 'https://upcash-md.firebaseio.com',
    projectId: 'upcash-md',
    storageBucket: 'upcash-md.appspot.com',
    messagingSenderId: '742140721316'
  }
};
