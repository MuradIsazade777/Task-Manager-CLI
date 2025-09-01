"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const taskManager_1 = require("./taskManager");
const taskManager = new taskManager_1.TaskManager();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("📝 Welcome to Task Manager CLI!");
console.log("Commands: add, list, complete, delete, exit");
const prompt = () => {
    rl.question("> ", (input) => {
        const [command, ...args] = input.split(" ");
        switch (command) {
            case "add":
                const title = args.join(" ");
                if (title)
                    taskManager.addTask(title);
                else
                    console.log("❌ Please provide a task title.");
                break;
            case "list":
                taskManager.listTasks();
                break;
            case "complete":
                const completeId = Number(args[0]);
                if (!isNaN(completeId))
                    taskManager.completeTask(completeId);
                else
                    console.log("❌ Please provide a valid task id.");
                break;
            case "delete":
                const deleteId = Number(args[0]);
                if (!isNaN(deleteId))
                    taskManager.deleteTask(deleteId);
                else
                    console.log("❌ Please provide a valid task id.");
                break;
            case "exit":
                rl.close();
                return;
            default:
                console.log("❌ Unknown command.");
        }
        prompt();
    });
};
prompt();
