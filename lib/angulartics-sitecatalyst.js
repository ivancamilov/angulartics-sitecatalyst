(function(window, angular, undefined) {'use strict';

/**
* @ngdoc overview
* @name angulartics.adobe.analytics
* Enables analytics support for Adobe Analytics (http://adobe.com/analytics)
*/
angular.module('angulartics.sitecatalyst', ['angulartics'])
.config(['$analyticsProvider', function ($analyticsProvider) {

  $analyticsProvider.settings.pageTracking.trackRelativePath = true;

  $analyticsProvider.registerPageTrack(function (path) {
    var name = path;
    
    if (window.s) s.t();
    else console.warn('s_code appears to be missing!');
  });

/**
* Track Event in Adobe Analytics
* @name eventTrack
*
* @param {string} action Required 'action' (string) associated with the event
*
*
*/
$analyticsProvider.registerEventTrack(function (action, properties) {
  if (window.s) {
    if(action) {
      if(action.toUpperCase() === "DOWNLOAD")
        s.tl(this,'d',action);
      else if(action.toUpperCase() === "EXIT")
        s.tl(this,'e',action);
      else {
        var message = action;
        if(properties) {
          message = properties.label;

          for(var key in properties) {
            if(key == 'event') {
              s['events'] = properties[key];
            }
            if(key != 'eventType') {
              s[key] = properties[key];
            }
          }
        }

        s.tl(true,'o',message);
      }
    }
  }
  else console.warn('s_code appears to be missing!');
});

}]);
})(window, window.angular)