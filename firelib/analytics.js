/* 
===========================================================================
Analytics SDK
===========================================================================

Analytics reports help you understand clearly how your users behave, 
which enables you to make informed decisions regarding app marketing 
and performance optimizations.

https://firebase.google.com/docs/analytics/get-started
*/
import { getAnalytics, logEvent, setUserProperties } from 'firebase/analytics';

export class FirebaseAnalytics {
    constructor(app) {
        console.log('[+] getAnalytics');
        this.app = getAnalytics(app);
    }

    /* 
	===========================================================================
	Log events
	===========================================================================
	Events provide insight on what is happening in your app, such as user 
	actions, system events, or errors.
	https://firebase.google.com/docs/analytics/events
	*/
    user(userID) {
        console.log('[++] getAnalytics.logEvent()');
        setUserID(this.app, userID);
    }

    /* 
	===========================================================================
	Log events
	===========================================================================
	Events provide insight on what is happening in your app, such as user 
	actions, system events, or errors.
	https://firebase.google.com/docs/analytics/events
	*/
    event(event) {
        console.log('[++] getAnalytics.logEvent()');
        logEvent(this.app, event);
    }

    /* 
	===========================================================================
	Set user properties
	===========================================================================
	User properties are attributes you define to describe segments of your 
	user base, such as language preference or geographic location. These can 
	be used to define audiences for your app.
	https://firebase.google.com/docs/analytics/user-properties
	*/
    property(property) {
        console.log('[++] getAnalytics.setUserProperties()');
        setUserProperties(this.app, property);
    }
}
