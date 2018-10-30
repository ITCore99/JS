let arr=[1,1,3,4,2,4,7];
//1.使用for+indexOf实现
function FIN(arr)
{
    let newArr=[];
    for(let i=0;i<arr.length;i++)
    {
        if(newArr.indexOf(arr[i])==-1)
        {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(FIN(arr));
//2.相邻元素去除法：对要去重的数组进行排序，相同的元素会相邻，再对排好序的数组进行遍历在新数组中放入不与前面重复的数组项,但是这样的话数组中的元素顺序会发生变化
function upon(arr)
{
    arr.sort();
    let newArr=[arr[0]];
    for(let i=0;i<arr.length;i++)
    {
        if(newArr[newArr.length-1]!=arr[i])
        {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// console.log(upon(arr));
//3.优化的遍历数组法：采用的是双重循环外面一层是从i到length 里面是从i+1到length
function unique(arr)
{
    let newArr=[];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]===arr[j])
            {
                ++i;
            }
        }
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(unique(arr));
//4、就是使用es6的新方法。