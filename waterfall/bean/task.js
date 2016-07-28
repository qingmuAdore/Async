function task(data, cb) {
    console.log('task ' + data + ' finished! ' + 'run next task');
    setTimeout(function () {
        cb(null, 'current task');
    }, 120);
}

function done() {
    console.log(arguments[0]);
    console.log(arguments[1]);
}

//task 执行
task.apply(null, [null].concat([done]));

/**
task null finished! run next task
null
current task
 */