export function timeTest(func, ...args){
    console.log("Performance test for " + func.name);
    console.time("time");
    func(...args);
    console.timeEnd("time");
}