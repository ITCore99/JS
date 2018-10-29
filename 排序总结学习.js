/**冒泡排序：每一次只能将一个一个元素放到合适的位置*/
let arr=[1,4,8,9,8,2,4,7,9,5,3,8,0,5,3,6];
for(let i=0;i<arr.length;i++)
{
    for(let j=1;j<arr.length;j++)
    {
        if(arr[j]<arr[j-1])
        {
            let temp=arr[j];
            arr[j]=arr[j-1];
            arr[j-1]=temp;
        }
    }
}
console.log(arr);
/***冒泡算法的优化鸡尾酒排序定向冒泡排序 与普通的冒泡排序的区别是普通的冒泡排序是单向的而鸡尾酒排序是双向的 由于是双向的所以排序次数是之前的1/2同时我们还可以加上表示当没进行数据更换时表示已经是有序的那将其提前的退出排序*/
function cockSort(array,size)
{
    let flag=false;
    let left=0;
    let right=size;
    while (left<right)
    {
        for(let i=0;i<right;i++) /**前半程将最大的元素放到后面*/
        {
            if(array[i]>array[i+1])
            {
                let temp=array[i];
                array[i]=array[i+1];
                array[i+1]=temp;
                flag=true;
            }
        }
        right--;
        for(let j=right;j>left;j--)/**后半程将最小的元素放到前面*/
        {
            if(array[j]>array[j+1])
            {
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                flag=true;
            }
        }
        left++;
        if(!flag)
        {
            return array;
            break;
        }
    }
    return array;
}
console.log(cockSort(arr,arr.length));
/**选择排序  的原理是初始化时找到最小或最大的元素放到初始位置然后再从剩余的元素中找到最小或最大的元素放到已经排好序的元素之后一次类推知道所有的元素到排序完毕**/
function selectionSort(arry)
{
    for(let i=0;i<arry.length;i++)
    {
        let min=i; /**假设是当前元素最小元素的位置*/
        for(let j=min+1;j<arry.length;j++) /**每一次for循环找到当前元素最小的元素位置*/
        {
            if(arry[j]<arry[min])
            {
               min=j; /**更新最小元素的位置*/

            }
        }
        if(min!=i)
        {
             let temp=arry[min];
             arry[min]=arry[j];
             arry[j]=temp;
        }
    }
    return arry;
}
console.log(selectionSort(arr));
/**注意选择排序与冒泡排序的区别:冒泡排序是通过相邻两个顺序不合法的元素进行交换位置来实现排序的，而选择排序是每一次排序记住当前元素的(最小的)位置只需要一次交换的就可以实现排序*/

/**插入排序以从小到大排序为例 原理是：将从待排序的元素中选择出一个元素插入到已经排好序的元素中的合适位置,假设第一元素是已排序的元素*/
function Insertion(arr)
{
    for(let i=1;i<arr.length;i++)/**这是取出一个元素*/
    {
        for(let j=0;j<i;j++)/**这是已排好序的元素*/
        {
            if(arr[j]>arr[i]) /**如果找到一个比待插入的元素大*/
            {
                 let temp=arr[j];
                 arr[j]=arr[i];
                 arr[i]=temp;

            }
        }
    }
    return arr;
}
console.log(Insertion(arr));
