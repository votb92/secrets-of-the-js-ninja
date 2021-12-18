export function timeTest(func){
    console.time("funtion performance");
    func();
    console.timeEnd("funtion performance");
}