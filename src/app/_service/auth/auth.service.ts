import { Injectable } from '@angular/core';
// import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth,
    // private db: AngularFireDatabase,
    private router: Router,
    private user: UserService
  ) {

    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
      if (!this.authenticated) {
        // router.navigate(['empresa/home']);
        router.navigate(['']);
      } else {
        this.user.getEmpresa(this.currentUserId);
        console.log(router.url);
        if (router.url === '/login') {
          router.navigate(['empresa/home']);
        }
      }
    });
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false;
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) {
      return 'Guest';
    } else if (this.currentUserAnonymous) {
      return 'Anonymous';
    } else {
      return this.authState['displayName'] || 'User without a Name';
    }
  }

  //// Social Auth ////
  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.socialSignIn(provider);
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.socialSignIn(provider);
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.authState = credential.user;
        this.updateUserData();
      })
      .catch(error => console.log(error));
  }


  //// Anonymous Auth ////
  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then((user) => {
        this.authState = user;
        this.updateUserData();
      })
      .catch(error => console.log(error));
  }

  //// Email/Password Auth ////
  emailSignUp(email: string, password: string) {
    // return new Promise((resolve, reject) => {
    //   // assuming some third-party API, that is *not* a Promise Object
    //   // but fires a callback once finished
    //     this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    //     .then( (res) => {
    //       resolve(res);
    //     })


    //   (someArgument, response => {
    //     // we can resolve it with the response
    //     resolve(response);
    //   }, reason => {
    //     // we can reject it with the reason
    //     reject(reason);
    //   });
    // });
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
          this.authState = user;
          this.updateUserData();
          resolve();
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }

  emailLogin(email: string, password: string) {
    // return new Promise((resolve, reject) => {
    //   this.afAuth.auth.signInWithEmailAndPassword(email, password)
    //     .then((user) => {
    //       console.log(user);
    //       this.authState = user;
    //       this.updateUserData();
    //       resolve();
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       reject(error);
    //     });
    // });
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.authState = res.user;
        console.log(this.authState);
        console.log(this.currentUserId);
        this.updateUserData();
      })
      .catch(error => console.log(error));
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const auth = firebase.auth();

    return auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }


  //// Sign Out ////
  signOut() {
    return this.afAuth.auth.signOut();
  }


  //// Helpers ////
  private updateUserData(): void {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features
    const path = `users/${this.currentUserId}`; // Endpoint on firebase
    const data = {
      email: this.authState.email,
      name: this.authState.displayName
    };

    // this.db.object(path).update(data)
      // .catch(error => console.log(error));

  }




}
