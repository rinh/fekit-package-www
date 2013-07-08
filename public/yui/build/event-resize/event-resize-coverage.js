/*
YUI 3.10.3 (build 2fb5187)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/event-resize/event-resize.js']) {
   __coverage__['build/event-resize/event-resize.js'] = {"path":"build/event-resize/event-resize.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":24},"end":{"line":1,"column":43}}},"2":{"name":"(anonymous_2)","line":22,"loc":{"start":{"line":22,"column":8},"end":{"line":22,"column":39}}},"3":{"name":"(anonymous_3)","line":23,"loc":{"start":{"line":23,"column":51},"end":{"line":23,"column":64}}},"4":{"name":"(anonymous_4)","line":27,"loc":{"start":{"line":27,"column":8},"end":{"line":27,"column":39}}},"5":{"name":"(anonymous_5)","line":31,"loc":{"start":{"line":31,"column":51},"end":{"line":31,"column":64}}},"6":{"name":"(anonymous_6)","line":36,"loc":{"start":{"line":36,"column":47},"end":{"line":36,"column":59}}},"7":{"name":"(anonymous_7)","line":42,"loc":{"start":{"line":42,"column":12},"end":{"line":42,"column":33}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":53,"column":61}},"2":{"start":{"line":19,"column":0},"end":{"line":50,"column":3}},"3":{"start":{"line":23,"column":12},"end":{"line":25,"column":15}},"4":{"start":{"line":24,"column":16},"end":{"line":24,"column":33}},"5":{"start":{"line":29,"column":12},"end":{"line":29,"column":58}},"6":{"start":{"line":31,"column":12},"end":{"line":39,"column":15}},"7":{"start":{"line":32,"column":16},"end":{"line":34,"column":17}},"8":{"start":{"line":33,"column":20},"end":{"line":33,"column":40}},"9":{"start":{"line":36,"column":16},"end":{"line":38,"column":19}},"10":{"start":{"line":37,"column":20},"end":{"line":37,"column":37}},"11":{"start":{"line":43,"column":8},"end":{"line":45,"column":9}},"12":{"start":{"line":44,"column":12},"end":{"line":44,"column":32}},"13":{"start":{"line":46,"column":8},"end":{"line":46,"column":29}}},"branchMap":{"1":{"line":21,"type":"cond-expr","locations":[{"start":{"line":22,"column":8},"end":{"line":26,"column":9}},{"start":{"line":27,"column":8},"end":{"line":40,"column":9}}]},"2":{"line":21,"type":"binary-expr","locations":[{"start":{"line":21,"column":9},"end":{"line":21,"column":19}},{"start":{"line":21,"column":23},"end":{"line":21,"column":40}}]},"3":{"line":29,"type":"binary-expr","locations":[{"start":{"line":29,"column":24},"end":{"line":29,"column":50}},{"start":{"line":29,"column":54},"end":{"line":29,"column":57}}]},"4":{"line":32,"type":"if","locations":[{"start":{"line":32,"column":16},"end":{"line":32,"column":16}},{"start":{"line":32,"column":16},"end":{"line":32,"column":16}}]},"5":{"line":43,"type":"if","locations":[{"start":{"line":43,"column":8},"end":{"line":43,"column":8}},{"start":{"line":43,"column":8},"end":{"line":43,"column":8}}]}},"code":["(function () { YUI.add('event-resize', function (Y, NAME) {","","/**"," * Adds a window resize event that has its behavior normalized to fire at the"," * end of the resize rather than constantly during the resize."," * @module event"," * @submodule event-resize"," */","","","/**"," * Old firefox fires the window resize event once when the resize action"," * finishes, other browsers fire the event periodically during the"," * resize.  This code uses timeout logic to simulate the Firefox"," * behavior in other browsers."," * @event windowresize"," * @for YUI"," */","Y.Event.define('windowresize', {","","    on: (Y.UA.gecko && Y.UA.gecko < 1.91) ?","        function (node, sub, notifier) {","            sub._handle = Y.Event.attach('resize', function (e) {","                notifier.fire(e);","            });","        } :","        function (node, sub, notifier) {","            // interval bumped from 40 to 100ms as of 3.4.1","            var delay = Y.config.windowResizeDelay || 100;","","            sub._handle = Y.Event.attach('resize', function (e) {","                if (sub._timer) {","                    sub._timer.cancel();","                }","","                sub._timer = Y.later(delay, Y, function () {","                    notifier.fire(e);","                });","            });","        },","","    detach: function (node, sub) {","        if (sub._timer) {","            sub._timer.cancel();","        }","        sub._handle.detach();","    }","    // delegate methods not defined because this only works for window","    // subscriptions, so...yeah.","});","","","}, '3.10.3', {\"requires\": [\"node-base\", \"event-synthetic\"]});","","}());"]};
}
var __cov_XmweTSFCzpuEdGxa5Jy5Hw = __coverage__['build/event-resize/event-resize.js'];
__cov_XmweTSFCzpuEdGxa5Jy5Hw.s['1']++;YUI.add('event-resize',function(Y,NAME){__cov_XmweTSFCzpuEdGxa5Jy5Hw.f['1']++;__cov_XmweTSFCzpuEdGxa5Jy5Hw.s['2']++;Y.Event.define('windowresize',{on:(__cov_XmweTSFCzpuEdGxa5Jy5Hw.b['2'][0]++,Y.UA.gecko)&&(__cov_XmweTSFCzpuEdGxa5Jy5Hw.b['2'][1]++,Y.UA.gecko<1.91)?(__cov_XmweTSFCzpuEdGxa5Jy5Hw.b['1'][0]++,function(node,sub,notifier){__cov_XmweTSFCzpuEdGxa5Jy5Hw.f['2']++;__cov_XmweTSFCzpuEdGxa5Jy5Hw.s['3']++;sub._handle=Y.Event.attach('resize',function(e){__cov_XmweTSFCzpuEdGxa5Jy5Hw.f['3']++;__cov_XmweTSFCzpuEdGxa5Jy5Hw.s['4']++;notifier.fire(e);});}):(__cov_XmweTSFCzpuEdGxa5Jy5Hw.b['1'][1]++,function(node,sub,notifier){__cov_XmweTSFCzpuEdGxa5Jy5Hw.f['4']++;__cov_XmweTSFCzpuEdGxa5Jy5Hw.s['5']++;var delay=(__cov_XmweTSFCzpuEdGxa5Jy5Hw.b['3'][0]++,Y.config.windowResizeDelay)||(__cov_XmweTSFCzpuEdGxa5Jy5Hw.b['3'][1]++,100);__cov_XmweTSFCzpuEdGxa5Jy5Hw.s['6']++;sub._handle=Y.Event.attach('resize',function(e){__cov_XmweTSFCzpuEdGxa5Jy5Hw.f['5']++;__cov_XmweTSFCzpuEdGxa5Jy5Hw.s['7']++;if(sub._timer){__cov_XmweTSFCzpuEdGxa5Jy5Hw.b['4'][0]++;__cov_XmweTSFCzpuEdGxa5Jy5Hw.s['8']++;sub._timer.cancel();}else{__cov_XmweTSFCzpuEdGxa5Jy5Hw.b['4'][1]++;}__cov_XmweTSFCzpuEdGxa5Jy5Hw.s['9']++;sub._timer=Y.later(delay,Y,function(){__cov_XmweTSFCzpuEdGxa5Jy5Hw.f['6']++;__cov_XmweTSFCzpuEdGxa5Jy5Hw.s['10']++;notifier.fire(e);});});}),detach:function(node,sub){__cov_XmweTSFCzpuEdGxa5Jy5Hw.f['7']++;__cov_XmweTSFCzpuEdGxa5Jy5Hw.s['11']++;if(sub._timer){__cov_XmweTSFCzpuEdGxa5Jy5Hw.b['5'][0]++;__cov_XmweTSFCzpuEdGxa5Jy5Hw.s['12']++;sub._timer.cancel();}else{__cov_XmweTSFCzpuEdGxa5Jy5Hw.b['5'][1]++;}__cov_XmweTSFCzpuEdGxa5Jy5Hw.s['13']++;sub._handle.detach();}});},'3.10.3',{'requires':['node-base','event-synthetic']});
