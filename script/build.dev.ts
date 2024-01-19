(async () => {
    const build_tasks = ["npm run build:server", "npm run build:site"];
})();

export interface TaskEventLoopConfig {
    /**
     * @description 上限 同时运行的任务数量
     */
    upper?: number;

    /**
     * @description 忽略错误
     */
    ignoreError?: boolean;
}

export type TaskExecFun = () => PromiseLike<any>;
export interface TaskInstance {
    exec: TaskExecFun;

    status: "await" | "running" | "full" | "error";
}

export const format_array = function <T>(array: T | T[]): T[] {
    let _array = array;
    if (!Array.isArray(array)) {
        _array = [array];
    }
    return _array as T[];
};

export class TaskEventLoop {
    /**
     * @description 配置
     */
    private config: Required<TaskEventLoopConfig> = {
        upper: 6,
        ignoreError: false,
    };

    /**
     * @description 等待执行的任务
     */
    private await_task = new Set<TaskInstance>();

    /**
     * @description 正在运行的任务
     */
    private loop_task = new Set<TaskInstance>();

    /**
     * @description 状态
     */
    private _status: "running" | "stop" = "running";
    get status() {
        return this._status;
    }

    private _error: Error;
    get error() {
        return this._error;
    }

    constructor(config?: TaskEventLoopConfig) {
        this.set_config(config);
    }

    /**
     *
     * @description 设置 配置
     */
    public set_config(config?: TaskEventLoopConfig) {
        this.config = {
            ...this.config,
            ...config,
        };
        return this;
    }

    /**
     *
     * @description 添加 任务
     */
    public add(task: TaskExecFun[]): this;
    public add(task: TaskExecFun): this;
    public add(task: TaskExecFun | TaskExecFun[]): this {
        const _task = format_array(task);
        _task.forEach((v) => {
            this.await_task.add({
                exec: v,
                status: "await",
            });
        });
        return this;
    }

    /**
     * @description 执行任务
     */
    public exec(): this {
        this._status = "running";
        this.exec_task();
        return this;
    }

    /**
     * @description 运行任务 回调
     */
    private exec_task() {
        if (
            // 暂停运行
            this._status === "stop" ||
            // 正在运行的任务数量 大于等于限制
            this.loop_task.size >= this.config.upper
        )
            return this;

        if (
            // 等待队列 为空时
            !this.await_task.size ||
            // 有错误且开启结束运行
            (this._error && !this.config.ignoreError)
        ) {
            this._status = "stop";
            return this;
        }

        const [task] = this.await_task;
        this.await_task.delete(task);
        this.loop_task.add(task);
        task.status = "running";
        task.exec().then(
            (res) => {
                // 从 loop task删除
                this.loop_task.delete(task);
                task.status = "full";
                this.exec_task();
                return res;
            },
            (err) => {
                task.status = "error";
                this.exec_task();
                this._error = err;
                return err;
            }
        );
        this.exec_task();
    }

    public stop() {
        this._status = "stop";
    }
}

const task_instance = new TaskEventLoop({ upper: 2 });

const promise_task_list = Array(1000)
    .fill(0)
    .map((v, i) => {
        return () =>
            new Promise<void>((resolve) => {
                setTimeout(() => {
                    console.log(i);
                    resolve();
                }, 2000);
            });
    });
task_instance.add(promise_task_list).exec();
setTimeout(() => {
    console.log("stop");
    task_instance.stop();
    task_instance.set_config({ upper: 5 });
}, 1000);

setTimeout(() => {
    console.log("exec");
    task_instance.set_config({ upper: 3 });
    task_instance.exec();
}, 5000);
