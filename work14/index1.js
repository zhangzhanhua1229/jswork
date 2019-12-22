//获取红、黄、绿灯以及倒计时的元素对象
var lamp = {
    red:{
        obj : document.getElementById('red'),
        timeout: 3,
        style: ['red', 'gray', 'gray'],
        next: 'green'
    },
    yellow: {
        obj: document.getElementById('yellow'),
        timeout: 2,
        style: ['gray', 'yellow', 'gray'],
        next: 'red'  
    },
    green: {
        obj: document.getElementById('green'),
        timeout: 4,
        style: ['gray', 'gray','green'],
        next: 'yellow'
    },
    changeStyle(style) {
        this.red.obj.className = style[0];
        this.yellow.obj.className = style[1];
        this.green.obj.className = style[2];
    }
};
var cout = {
    obj: document.getElementById('count'),
    change: function(num) {
        this.obj.innerHTML = (num < 10) ? ('0' +  num) :num;
    }
};
var now = lamp.green;
var timeout = now.timeout;
lamp.changeStyle(now.style);
cout.change(timeout);
setInterval(function() {
    if (--timeout <= 0 ) {
        now = lamp[now.next];
        timeout = now.timeout;
        lamp.changeStyle(now.style);
    }
    cout.change(timeout);
}, 1000);
