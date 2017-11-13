export default function typeWrite(userTasks, clk) {
    let task = null;
    let tasks = [];
    let msg = "";
    let callback = null;
    let repeat = [];
    let point = 0;
    let clock;

    tasks = tasks.concat(userTasks)

    callback = clk; //默认回调
    let defaultCalbback = function (msg) {
        console.log(msg)
    }
    function haveTask() {
        if (task) {
            return true;
        }
        return false;
    }
    let resolveCore = {
        addIndex: 0,
        addCount: 0,
        removeCount: 0,
        addResolve() {
            if (this.addIndex < this.addCount) { //假如未全部加入，则执行加入操作
                msg = msg.concat(task.msg[this.addIndex]);
                this.addIndex++;
                (callback || defaultCalbback)(msg)
            } else {
                task = null;
            }
            clock=setTimeout(function () {
                taskResolve();
            }, task
                ? (task.time || 500)
                : 500)
        },
        deleteResolve() {
            if (this.removeCount > 0) {
                msg = msg.substr(0, msg.length - 1);
                this.removeCount--;
                (callback || defaultCalbback)(msg)
            } else {
                task = null;
            }
            clock=setTimeout(function () {
                taskResolve();
            }, task
                ? (task.time || 500)
                : 500)
        }
    }
    function initCore() {
        //循环标志
        if (task.repeat) {
            if (repeat.length < 2) {
                repeat.push(point - 1);
            }
        }
        if (task.type == "add") {
            resolveCore.addCount = task.msg.length;
            resolveCore.addIndex = 0;
        } else if (task.type == "remove") {
            resolveCore.removeCount = task.count;
        }
    }
    function taskResolve() {
        if (haveTask()) { //存在正在执行的task，则执行
            if (task.type == "add") {
                //addTask
                resolveCore.addResolve()
                return;
            }
            if (task.type == "remove") { //removeTask
                resolveCore.deleteResolve()
            }
        } else { //载入task
            //假如进入循环尾，则重置游标
            if (repeat.length > 1 && (point - 1) == repeat[1]) {
                point = repeat[0];
            }

            task = tasks[point];//载入任务
            point++;

            if (task) { //初始化任务处理器
                initCore();
                //载入成功,执行
                clock=setTimeout(function () {
                    taskResolve();
                }, 0);
            } // 载入失败,退出
            return;
        }
    }
    this.run = function () {
        taskResolve();
    }
    this.stop=function(){
        clearTimeout(clock);
    }
}
