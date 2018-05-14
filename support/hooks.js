var config_file = '../../conf/browserstack.conf.js';
var config = require(config_file).config;

var username = config.user;
var accessKey = config.key;


var createBrowserStackSession = function(config, caps){
  return new webdriver.Builder().
    usingServer('http://'+config.server+'/wd/hub').
    withCapabilities(caps).
    build();
}

var myHooks = function () {
  var bs_local = null;

  this.Before(function (scenario, callback) {
    var world = this;
    var task_id = parseInt(0);
    var caps = config.capabilities[task_id];
    caps['browserstack.user'] = username;
    caps['browserstack.key'] = accessKey;

      world.driver = createBrowserStackSession(config, caps);
      callback();
    }
  });

  this.After(function(scenario, callback){
    this.driver.quit().then(function(){
      if(bs_local){
        bs_local.stop(callback);
      }
      else callback();
    });
  });
};

module.exports = myHooks;