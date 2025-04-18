
const inheritance = {
  1: {
    title: "1. Program to copy all elements of one array into another array ",
    code: `#include<iostream>
using namespace std;


int main(){
    int size;
    cout<<"Enter the size of the array : ";
    cin>>size;
    int* arr1=new int[size];
    int* arr2=new int[size];

    cout<<"Enter the elemnets of the first array : ";
    for(int i=0;i<size;i++){
        cin>>*(arr1+i);
    }
    cout<<"The elements in the first array are : ";
    for(int i=0;i<size;i++){
        cout<<*(arr1+i)<<"  ";
    }

    for(int i=0;i<size;i++){
       *(arr2+i)=*(arr1+i);
    }

    cout<<"\nThe elements in the second array after copying : ";
    for(int i=0;i<size;i++){
        cout<<*(arr2+i)<<"  ";
    }

    delete[] arr1;
    delete[] arr2;
    return 0;
}`,
    output: `Enter length and breadth:
  Area of the rectangle is: 30`
  },

  2: {
    title: "2. Program to find the frequency of each element in the array ",
    code: `#include<iostream>
using namespace std;

int main() {
    int i,j,c=0;
    int size;
   

    cout<<"Enter the size of the array : ";
    cin>>size;

    int *arr=new int[size];

    cout<<"Enter "<< size<<" elements of array."<<endl;
    for(i=0;i<size;i++) {
        cout<<"Enter element "<<i+1<<" : ";
        cin>>arr[i];
    }
    cout<<endl<<"Frequency of numbers : ";
    for(i=0;i<size;i++) {
        j = 0;
        c = 0;
        while(j<size) {
            if(arr[i]==arr[j]) {
                c++;
            }
            j++;
        }
        cout<<endl<<"Frequency of "<<arr[i]<<" : "<<c;
    }
}
`,
    output: `Enter the size of the array : 5
Enter 5 elements of array.
Enter element 1 : 3 
Enter element 2 : 2
Enter element 3 : 3
Enter element 4 : 1
Enter element 5 : 5

Frequency of numbers :
Frequency of 3 : 2
Frequency of 2 : 1
Frequency of 3 : 2
Frequency of 1 : 1
Frequency of 5 : 1`
  },

  3: {
    title: "3. Program to left rotate the elements of an array ",
    code: `#include<iostream>
using namespace std;

int main(){
	int size,temp;
	cout<<"Enter the size of array : ";
	cin>>size;
	
	int *arr=new int[size];
	
	cout<<"\nEnter the elements of the array : ";
	for(int i=0;i<size;i++){
		cin>>arr[i];
	}
	
	cout<<"\nThe elements of the array : ";
	for(int i=0;i<size;i++){
		cout<<arr[i]<<"  ";
	}
	
	temp=arr[0];
	for(int i=0;i<size-1;i++){
		arr[i]=arr[i+1];
	}
	arr[size-1]=temp;
	
	cout<<"\nThe elements of the array after rotating left : ";
	for(int i=0;i<size;i++){
		cout<<arr[i]<<"  ";
	}
	
	return 0;
}`,
    output: `Enter the size of array : 6

Enter the elements of the array : 4 3 5 1 9 8

The elements of the array : 4  3  5  1  9  8  
The elements of the array after rotating left : 3  5  1  9  8  4  `
  },
  4: {
    title: "4. Program to print the duplicate elements of an array",
    code: `#include<iostream>
    using namespace std;
    
    int check(int a[], int num, int s) {
        for(int i = 0; i < s; i++) {
            if (a[i] == num) {
                return 0;
            }
        }
        return 1;
    }
    
    int main() {
        int ar[10], n, in = 0, da[10];
        cout << "Enter the no. of elements of array: ";
        cin >> n;
        cout << "Enter the elements of arrays : ";
        for(int i = 0; i < n; i++) {
            cin >> ar[i];
        }
        for(int i = 0; i < n; i++) {
            int c = 0;
            for(int j = 0; j < n; j++) {
                if (ar[i] == ar[j]) {
                    c++;
                }
            }
            if (c > 1) {
                if (check(da, ar[i], in)) {
                    da[in] = ar[i];
                    in++;
                }
            }
        }
        if (in == 0) {
            cout << "No duplicate elements found ";
        } else {
            cout << "Duplicate elements of array : " << endl;
            for(int i = 0; i < in; i++) {
                cout << da[i] << " ";
            }
        }
        return 0;
    }`,
    output: `Enter the no. of elements of array: 6
Enter the elements of arrays : 3 4 2 4 5 1
Duplicate elements of array : 
4 `
  },
  5: {
    title: "5. Program to print the elements of an array  ",
    code: `#include<iostream>
using namespace std;

int main(){
    int size,i;
   

    cout<<"Enter the size of the array : ";
    cin>>size;

    int *arr=new int[size];
   

    cout<<"Enter the elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cin>>arr[i];
    }

    cout<<"\nThe elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cout<<arr[i]<<"  ";
    }
}`,
    output: `Enter the size of the array : 4
Enter the elements of the array :
3 4 2 1

The elements of the array :
3  4  2  1`
  },
  6: {
    title: "6. Program to print the elements of an array in reverse order ",
    code: `#include<iostream>
using namespace std;

int main(){
    int size,i;
   

    cout<<"Enter the size of the array : ";
    cin>>size;

    int *arr=new int[size];
   

    cout<<"Enter the elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cin>>arr[i];
    }

    cout<<"\nThe elements of the array : "<<endl;
    for(i=size-1;i>=0;i--){
        cout<<arr[i]<<"  ";
    }
}`,
    output: `Enter the size of the array : 4
Enter the elements of the array :
6 5 7 9

The elements of the array :
9  7  5  6`
  },
  7: {
    title: "7. Program to print the elements of an array present on even position ",
    code: `#include<iostream>
using namespace std;

int main(){
    int size,i;
   

    cout<<"Enter the size of the array : ";
    cin>>size;

    int *arr=new int[size];
   

    cout<<"Enter the elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cin>>arr[i];
    }

    cout<<"\nThe elements of the array in even position : "<<endl;
    for(i=0;i<size;i++){
        if(i%2==0)
        cout<<arr[i]<<"  ";
    }
}`,
    output: `Enter the size of the array : 5
Enter the elements of the array :
1 2 3 4 5

The elements of the array in even position :
1  3  5`
  },
  8: {
    title: "8. Program to print the elements of an array present on odd position ",
    code: `#include<iostream>
using namespace std;

int main(){ 
    int size,i;
   

    cout<<"Enter the size of the array : ";
    cin>>size;

    int *arr=new int[size];
   

    cout<<"Enter the elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cin>>arr[i];
    }

    cout<<"\nThe elements of the array : "<<endl;
    for(i=0;i<size;i++){
        if(!(i%2==0))
        cout<<arr[i]<<"  ";
    }
}`,
    output: `Enter the size of the array : 5
Enter the elements of the array :
1 2 3 4 5

The elements of the array :
2  4`
  },
  9: {
    title: "9. Program to print the largest element in an array ",
    code: `#include<iostream> 
using namespace std;

int main(){
    int size,i,largest;
   

    cout<<"Enter the size of the array : ";
    cin>>size;

    int *arr=new int[size];
   

    cout<<"Enter the elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cin>>arr[i];
    }

    cout<<"\nThe elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cout<<arr[i]<<"  ";
    }

    largest=arr[0];

    for(i=0;i<size;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }

    cout<<"\nThe largest element is : "<<largest<<endl;

}`,
    output: `Enter the size of the array : 6
Enter the elements of the array :
12  34  54  12  45  78

The elements of the array :
12  34  54  12  45  78
The largest element is : 78`
  },
  10: {
    title: "10. Program to print the smallest element in an array ",
    code: `#include<iostream>
using namespace std;

int main(){
    int size,i,smallest;
    

    cout<<"Enter the size of the array : ";
    cin>>size;

    int *arr=new int[size];
   

    cout<<"Enter the elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cin>>arr[i];
    }

    cout<<"\nThe elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cout<<arr[i]<<"  ";
    }

    smallest=arr[0];

    for(i=0;i<size;i++){
        if(arr[i]<smallest){
            smallest=arr[i];
        }
    }

    cout<<"\nThe smallest number is : "<<smallest<<endl;

}`,
    output: `Enter the size of the array : 5
Enter the elements of the array :
34 5 23 12 98

The elements of the array :
34  5  23  12  98
The smallest number is : 5`
  },
  11: {
    title: "11. Program to print the number of elements present in an array ",
    code: `#include<iostream>
using namespace std;

int main(){
    int size, i;

    cout << "Enter the size of the array : ";
    cin >> size;

    int *arr = new int[size];

    cout << "Enter the elements of the array : " << endl;
    for(i = 0; i < size; i++){
        cin >> arr[i];
    }

    cout << "\nThe elements of the array : " << endl;
    for(i = 0; i < size; i++){
        cout << arr[i] << "  ";
    }

    cout << "\n\nThe number of elements in the array is : " << size << endl;

    delete[] arr;

    return 0;
}
`,
    output: `Enter the size of the array : 6
Enter the elements of the array :
54 34 23 12 8 4

The elements of the array :
54  34  23  12  8  4

The number of elements in the array is : 6`
  },
  12: {
    title: "12. Program to print the sum of all the items of the array ",
    code: `#include<iostream>
using namespace std;

int main(){
    int size,i; 
    long int sum=0;
   

    cout<<"Enter the size of the array : ";
    cin>>size;

    int *arr=new int[size];
   

    cout<<"Enter the elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cin>>arr[i];
    }

    cout<<"\nThe elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cout<<arr[i]<<"  ";
    }

    for(i=0;i<size;i++){
        sum+=arr[i];
    }

    cout<<"\nThe sum of the elements of the array is : "<<sum<<endl;

}`,
    output: `Enter the size of the array : 4
Enter the elements of the array :
1 2 3 4

The elements of the array :
1  2  3  4  
The sum of the elements of the array is : 10`
  },
  13: {
    title: "13. Program to right rotate the elements of an array",
    code: `#include<iostream>
using namespace std;

int main(){
	int size,temp;
	cout<<"Enter the size of array : ";
	cin>>size;
	 
	int *arr=new int[size];
	
	cout<<"\nEnter the elements of the array : ";
	for(int i=0;i<size;i++){
		cin>>arr[i];
	}
	
	cout<<"\nThe elements of the array : ";
	for(int i=0;i<size;i++){
		cout<<arr[i]<<"  ";
	}
	
	temp=arr[size-1];
	for(int i=size-1;i>0;i--){
		arr[i]=arr[i-1];
	}
	arr[0]=temp;
	
	cout<<"\nThe elements of the array : ";
	for(int i=0;i<size;i++){
		cout<<arr[i]<<"  ";
	}
	
	return 0;
}`,
    output: `Enter the size of array : 5

Enter the elements of the array : 4 3 2 5 6

The elements of the array : 4  3  2  5  6
The elements of the array : 6  4  3  2  5 `
  },
  14: {
    title: "14. Program to sort the elements of an array in ascending order",
    code: `#include <iostream>
using namespace std;
void sortArr(int *ptr, int size);

int main()
{ 
    int size, i;
    cout << "Enter the size of the array : ";
    cin >> size;

    int *ptr = new int[size];

    cout << "Enter the elements of the array : ";
    for (i = 0; i < size; i++)
    {
        cin >> ptr[i];
    }



    cout << "\nThe elements of the array are : ";
    for (i = 0; i < size; i++)
    {
        cout << *(ptr + i) << "  ";
    }

    sortArr(ptr, size);
    cout << "\nThe elements of array after sorting : ";
    for (i = 0; i < size; i++)
    {
        cout << *(ptr + i) << "  ";
    }

    delete ptr;
    return 0;
}

void sortArr(int *ptr, int size)
{

    int swap = 0;
    for (int i = 0; i < size - 1; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (*(ptr + i) > *(ptr + j))
            {
                swap = *(ptr + i);
                *(ptr + i) = *(ptr + j);
                *(ptr + j) = swap;
            }
        }
    }
}
`,
    output: `Enter the size of the array : 5
Enter the elements of the array : 3 2 4 5 1

The elements of the array are : 3  2  4  5  1
The elements of array after sorting : 1  2  3  4  5`
  },
  15: {
    title: "15. Program to sort the elements of an array in descending order",
    code: `#include <iostream>
using namespace std;
void sortArr(int *ptr, int size);

int main()
{ 
    int size, i;
    cout << "Enter the size of the array : ";
    cin >> size;

    int *ptr = new int[size];

    cout << "Enter the elements of the array : ";
    for (i = 0; i < size; i++)
    {
        cin >> ptr[i];
    }



    cout << "\nThe elements of the array are : ";
    for (i = 0; i < size; i++)
    {
        cout << *(ptr + i) << "  ";
    }

    sortArr(ptr, size);
    cout << "\nThe elements of array after sorting in descending order : ";
    for (i = 0; i < size; i++)
    {
        cout << *(ptr + i) << "  ";
    }

    delete ptr;
    return 0;
}

void sortArr(int *ptr, int size)
{

    int swap = 0;
    for (int i = 0; i < size - 1; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (*(ptr + i) < *(ptr + j))
            {
                swap = *(ptr + i);
                *(ptr + i) = *(ptr + j);
                *(ptr + j) = swap;
            }
        }
    }
}
`,
    output: `Enter the size of the array : 5
Enter the elements of the array : 3 2 5 4 1  

The elements of the array are : 3  2  5  4  1
The elements of array after sorting in descending order : 5  4  3  2  1`
  },
  16: {
    title: "16. Program to Find 3rd Largest Number in an array ",
    code: `#include <iostream>
using namespace std;
void sortArr(int *ptr, int size);
 
int main()
{ 
    int size, i;
    cout << "Enter the size of the array : ";
    cin >> size;

    int *ptr = new int[size];

    cout << "Enter the elements of the array : ";
    for (i = 0; i < size; i++)
    {
        cin >> ptr[i];
    }



    cout << "\nThe elements of the array are : ";
    for (i = 0; i < size; i++)
    {
        cout << *(ptr + i) << "  ";
    }

    sortArr(ptr, size);
    cout << "\nThe 3rd largest number is : "<< ptr[size-3];
   

    delete ptr;
    return 0;
}

void sortArr(int *ptr, int size)
{

    int swap = 0;
    for (int i = 0; i < size - 1; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (*(ptr + i) > *(ptr + j))
            {
                swap = *(ptr + i);
                *(ptr + i) = *(ptr + j);
                *(ptr + j) = swap;
            }
        }
    }
}
`,
    output: `Enter the size of the array : 6
Enter the elements of the array : 45 34 23 87 56 28 

The elements of the array are : 45  34  23  87  56  28
The 3rd largest number is : 45`
  },
  17: {
    title: "17. Program to Find 2nd Largest Number in an array ",
    code: `#include <iostream>
using namespace std;
void sortArr(int *ptr, int size);

int main()
{ 
    int size, i;
    cout << "Enter the size of the array : ";
    cin >> size;

    int *ptr = new int[size];

    cout << "Enter the elements of the array : ";
    for (i = 0; i < size; i++)
    {
        cin >> ptr[i];
    }



    cout << "\nThe elements of the array are : ";
    for (i = 0; i < size; i++)
    {
        cout << *(ptr + i) << "  ";
    }

    sortArr(ptr, size);
    cout << "\nThe 2nd largest number is : "<< ptr[size-2];
   

    delete ptr;
    return 0;
}

void sortArr(int *ptr, int size)
{

    int swap = 0;
    for (int i = 0; i < size - 1; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (*(ptr + i) > *(ptr + j))
            {
                swap = *(ptr + i);
                *(ptr + i) = *(ptr + j);
                *(ptr + j) = swap;
            }
        }
    }
}
`,
    output: `Enter the size of the array : 6
Enter the elements of the array : 45 34 23 87 56 28

The elements of the array are : 45  34  23  87  56  28
The 2nd largest number is : 56`
  },
  18: {
    title: "18. Program to Find Largest Number in an array",
    code: `#include<iostream>
using namespace std;

int main(){
    int size,i,largest;
   
 
    cout<<"Enter the size of the array : ";
    cin>>size;

    int *arr=new int[size];
   

    cout<<"Enter the elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cin>>arr[i];
    }

    cout<<"\nThe elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cout<<arr[i]<<"  ";
    }

    largest=arr[0];

    for(i=0;i<size;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }

    cout<<"\nThe largest number is : "<<largest<<endl;

}`,
    output: `Enter the size of the array : 5
Enter the elements of the array :
3 4 7 6 4

The elements of the array :
3  4  7  6  4
The largest number is : 7`
  },
  19: {
    title: "19. C++ Program Find 2nd Smallest Number in an array ",
    code: `#include <iostream>
using namespace std;
void sortArrDesc(int *ptr, int size);

int main()
{ 
    int size, i;
    cout << "Enter the size of the array : ";
    cin >> size;

    int *ptr = new int[size];

    cout << "Enter the elements of the array : ";
    for (i = 0; i < size; i++)
    {
        cin >> ptr[i];
    }



    cout << "\nThe elements of the array are : ";
    for (i = 0; i < size; i++)
    {
        cout << *(ptr + i) << "  ";
    }

    sortArrDesc(ptr, size);
    cout << "\nThe 2nd smallest number is : "<< ptr[size-2];
   

    delete ptr;
    return 0;
}

void sortArrDesc(int *ptr, int size)
{

    int swap = 0;
    for (int i = 0; i < size - 1; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (*(ptr + i) <*(ptr + j))
            {
                swap = *(ptr + i);
                *(ptr + i) = *(ptr + j);
                *(ptr + j) = swap;
            }
        }
    }
}
`,
    output: `Enter the size of the array : 6
Enter the elements of the array : 34 54 23 76 87 12 

The elements of the array are : 34  54  23  76  87  12
The 2nd smallest number is : 23`
  },
  20: {
    title: "20. Program to Find Smallest Number in an array",
    code: `#include <iostream>
using namespace std;
void sortArrDesc(int *ptr, int size);

int main()
{ 
    int size, i;
    cout << "Enter the size of the array : ";
    cin >> size;

    int *ptr = new int[size];

    cout << "Enter the elements of the array : ";
    for (i = 0; i < size; i++)
    {
        cin >> ptr[i];
    }



    cout << "\nThe elements of the array are : ";
    for (i = 0; i < size; i++)
    {
        cout << *(ptr + i) << "  ";
    }

    sortArrDesc(ptr, size);
    cout << "\nThe smallest number is : "<< ptr[size-1];
   

    delete ptr;
    return 0;
}

void sortArrDesc(int *ptr, int size)
{

    int swap = 0;
    for (int i = 0; i < size - 1; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (*(ptr + i) <*(ptr + j))
            {
                swap = *(ptr + i);
                *(ptr + i) = *(ptr + j);
                *(ptr + j) = swap;
            }
        }
    }
}
`,
    output: `Enter the size of the array : 6
Enter the elements of the array : 34 54 23 76 87 12

The elements of the array are : 34  54  23  76  87  12
The smallest number is : 12`
  },
  21: {
    title: "21. Program to Remove Duplicate Element in an array",
    code: `code here`,
    output: `output`
  },
  22: {
    title: "22. Program to Print Odd and Even Numbers from an array ",
    code: `#include<iostream>
using namespace std;

int main(){
    int size,i;
   

    cout<<"Enter the size of the array : ";
    cin>>size;

    int *arr=new int[size];
   

    cout<<"Enter the elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cin>>arr[i];
    }

    cout<<"\nThe elements of the array : "<<endl;
    cout<<"Even : ";
    for(i=0;i<size;i++){
        if(arr[i]%2==0){
            cout<<arr[i]<<"  ";
        }
    }
    cout<<"\nOdd : ";
    for(i=0;i<size;i++){
        if(!(arr[i]%2==0)){
            cout<<arr[i]<<"  ";
        }
    }
}`,
    output: `Enter the size of the array : 6
Enter the elements of the array :
4 5 3 2 7 6

The elements of the array :
Even : 4  2  6
Odd : 5  3  7`
  },
  23: {
    title: "23. Write a C++ program to swap the first and last elements of an array and create a new array ",
    code: `#include <iostream>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    int newArr[size];
    
    newArr[0] = arr[size - 1];
    newArr[size - 1] = arr[0];
    
    for (int i = 1; i < size - 1; i++) {
        newArr[i] = arr[i];
    }

    for (int i = 0; i < size; i++) {
        std::cout << newArr[i] << " ";
    }

    return 0;
}
`,
    output: `5 2 3 4 1 `
  },
  24: {
    title: "24. Write a C++ program to count the number of even and odd elements in a given array ",
    code: `#include <iostream>
using namespace std;

int main()
{
    int size, i;

    cout << "Enter the size of the array : ";
    cin >> size;

    int *arr = new int[size];

    cout << "Enter the elements of the array : " << endl;
    for (i = 0; i < size; i++)
    {
        cin >> arr[i];
    }
    int evenCount = 0;
    int oddCount = 0;

    for (int i = 0; i < size; i++)
    {
        if (arr[i] % 2 == 0)
        {
            evenCount++;
        }
        else
        {
            oddCount++;
        }
    }

    cout << "Even count: " << evenCount << endl;
    cout << "Odd count: " << oddCount << endl;

    return 0;
}
`,
    output: `Enter the size of the array : 6
Enter the elements of the array : 
4 3 5 8 7 6
Even count: 3
Odd count: 3`
  },
  25: {
    title: "25. Write a C++ program to sum values of an array ",
    code: `#include<iostream>
using namespace std;

int main(){
    int size,i;
    long int sum=0;
   

    cout<<"Enter the size of the array : ";
    cin>>size;

    int *arr=new int[size];
   

    cout<<"Enter the elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cin>>arr[i];
    }

    cout<<"\nThe elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cout<<arr[i]<<"  ";
    }

    for(i=0;i<size;i++){
        sum+=arr[i];
    }

    cout<<"\nThe sum of the elements of the array is : "<<sum<<endl;

}`,
    output: `Enter the size of the array : 4
Enter the elements of the array : 
1 2 3 4

The elements of the array : 
1  2  3  4  
The sum of the elements of the array is : 10`
  },
  26: {
    title: "26. Write a C++ program to find the index of an array element",
    code: `#include<iostream>
using namespace std;

int main(){
    int size,i,value=0,index=-1;
   

    cout<<"Enter the size of the array : ";
    cin>>size;

    int *arr=new int[size];
   

    cout<<"\nEnter the elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cin>>arr[i];
    }

    cout<<"\nThe elements of the array : "<<endl;
    for(i=0;i<size;i++){
        cout<<arr[i]<<"  ";
    }

    cout<<"\nEnter the value to get it's index : ";
    cin>>value;

    for(i=0;i<size;i++){
        if(arr[i]==value){
            index=i;
            break;
        }
    }
    if(index>0){
        cout<<"\nThe index of the number is  : "<<index;
    }else{
        cout<<"\nInvalid value!";
    }
   

}`,
    output: `Enter the size of the array : 5

Enter the elements of the array :
7 6 5 8 9

The elements of the array :
7  6  5  8  9
Enter the value to get it's index : 8

The index of the number is  : 3`
  },
  27: {
    title: "27. Write a C++ program to calculate the average value of array elements ",
    code: `#include <iostream>
using namespace std;
int main() {
    int size;
    cout << "Enter the size of the array: ";
    cin >> size;

    int *arr=new int[size];
    int sum = 0;

    cout << "Enter " << size << " elements of the array:" << endl;
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
        sum += arr[i];
    }

    double average = (double)(sum) / size;
    cout << "The average value of the array elements is: " << average << endl;

    return 0;
}
`,
    output: `Enter the size of the array: 6
Enter 6 elements of the array:
34 56 32 19 76 73
The average value of the array elements is: 48.3333`
  },
  28: {
    title: "28. Write a C++ program to test if an array contains a specific value ",
    code: `#include <iostream>
using namespace std;

int main() {
    int size;
    cout << "Enter the size of the array: ";
    cin >> size;

    int *arr = new int[size];
    int found = 0;
    int value;

    cout << "Enter " << size << " elements of the array:" << endl;
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    cout << "Enter the value to search for: ";
    cin >> value;

    for (int i = 0; i < size; i++) {
        if (arr[i] == value) {
            found = 1;
            break;
        }
    }

    if (found) {
        cout << "The value " << value << " is present in the array." << endl;
    } else {
        cout << "The value " << value << " is not present in the array." << endl;
    }

    delete[] arr;
    return 0;
}
`,
    output: `Enter the size of the array: 4
Enter 4 elements of the array:
5 7 8 9
Enter the value to search for: 8
The value 8 is present in the array.`
  },
  29: {
    title: "29. Write a C++ program to find the maximum and minimum value of an array ",
    code: `#include <iostream>
using namespace std;

int main() {
    int size;
    cout << "Enter the size of the array: ";
    cin >> size;

    int *arr = new int[size];

    cout << "Enter " << size << " elements of the array:" << endl;
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    int max = arr[0];
    int min = arr[0];

    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    cout << "The maximum value in the array is: " << max << endl;
    cout << "The minimum value in the array is: " << min << endl;

    delete[] arr;
    return 0;
}
`,
    output: `Enter the size of the array: 5
Enter 5 elements of the array:
45 76 81 22 97
The maximum value in the array is: 97
The minimum value in the array is: 22`
  },
  30: {
    title: "30. Write a C++ program to insert an element (specific position) into an array ",
    code: `#include <iostream>
using namespace std;

int main() {
    int size,temp,position=-1,key;
    cout << "Enter the size of the array: ";
    cin >> size;

    int *arr = new int[size+1];

    cout << "Enter " << size << " elements of the array:" << endl;
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    cout << "Enter the key to insert for: ";
    cin >> key;

    cout << "Enter the position to insert the key: ";
    cin >> position;

   if(position>0 && position<size){
    for (int i = size; i >position-1; i--) {
        arr[i ] = arr[i-1];
   }
   arr[position-1]=key;

   cout << "Elements of the array:" << endl;
   for (int i = 0; i <= size; i++) {
        cout<< arr[i]<<"  ";
   }
    delete[] arr;
    return 0;
}else{
    cout << "Invalid position";
}
}`,
    output: `Enter the size of the array: 6
Enter 6 elements of the array:
45 87 23 45 65 90
Enter the key to insert for: 54
Enter the position to insert the key: 3
Elements of the array:
45  87  54  23  45  65  90`
  },
  31: {
    title: "31. Write a C++ program to reverse an array of integer values ",
    code: `#include<iostream>
using namespace std;

int main(){
    int size,i,j,iteration,swap;
    cout<<"Enter the size of the array: ";
    cin>>size;

    int *arr=new int[size];
    cout<<"Enter the elements of the array: ";
    for(i=0;i<size;i++)
    {
        cin>>arr[i];
        }
    
        if((size-1)%2==0){
            iteration = (size-1)/2;
        }else{
            iteration=(size-2)/2;
        }

        for(i=0,j=size-1;i<iteration,j>iteration;i++,j--){
            swap=arr[i];
            arr[i]=arr[j];
            arr[j]=swap;
        }
        cout<<"The array after reversing is: ";
        for(i=0;i<size;i++)
        {
            cout<<arr[i]<<" ";
            }

    return 0;
}`,
    output: `Enter the size of the array: 6
Enter the elements of the array: 5 4 3 6 7 8
The array after reversing is: 8 7 6 3 4 5`
  },
  32: {
    title: "32. Write a C++ program to find the common elements between two arrays",
    code: `#include<iostream>
using namespace std;

int main() {
    int size1, size2, i, j;

    cout << "Enter the size of the first array: ";
    cin >> size1;

    int arr1[size1];
    cout << "Enter elements of first array:" << endl;
    for(i = 0; i < size1; i++) {
        cin >> arr1[i];
    }

    cout << "Enter the size of the second array: ";
    cin >> size2;

    int arr2[size2];
    cout << "Enter elements of second array:" << endl;
    for(i = 0; i < size2; i++) {
        cin >> arr2[i];
    }

    cout << "Common elements are: ";

    for(i = 0; i < size1; i++) {
        for(j = 0; j < size2; j++) {
            if(arr1[i] == arr2[j]) {
                bool alreadyPrinted = false;
                for(int k = 0; k < i; k++) {
                    if(arr1[k] == arr1[i]) {
                        alreadyPrinted = true;
                        break;
                    }
                }
                if(!alreadyPrinted) {
                    cout << arr1[i] << " ";
                }
                break;
            }
        }
    }

    return 0;
}
`,
    output: `Enter the size of the first array: 6
Enter elements of first array:
4 3 2 5 6 1
Enter the size of the second array: 8
Enter elements of second array:
5 3 2 4 3 7 8 9
Common elements are: 4 3 2 5`
  },
  33: {
    title: "33. Write a C++ program to find the duplicate values of an array of integer values ",
    code: `#include<iostream>
using namespace std;

int main() {
    int size, i, j;

    cout << "Enter the size of the array: ";
    cin >> size;

    int arr[size];
    cout << "Enter the elements of the array:" << endl;
    for(i = 0; i < size; i++) {
        cin >> arr[i];
    }

    cout << "Duplicate elements are: ";

    for(i = 0; i < size; i++) {
        for(j = i + 1; j < size; j++) {
            if(arr[i] == arr[j]) {
                bool alreadyPrinted = false;
                for(int k = 0; k < i; k++) {
                    if(arr[k] == arr[i]) {
                        alreadyPrinted = true;
                        break;
                    }
                }
                if(!alreadyPrinted) {
                    cout << arr[i] << " ";
                }
                break;
            }
        }
    }

    return 0;
}
`,
    output: `Enter the size of the array: 6
Enter the elements of the array:
5 4 3 8 7 8
Duplicate elements are: 8`
  },
  34: {
    title: "34. Write a C++ program to find second largest number from the array ",
    code: `#include <iostream>
using namespace std;
void sortArr(int *ptr, int size);

int main()
{
    int size, i;
    cout << "Enter the size of the array : ";
    cin >> size;

    int *ptr = new int[size];

    cout << "Enter the elements of the array : ";
    for (i = 0; i < size; i++)
    {
        cin >> ptr[i];
    }



    cout << "\nThe elements of the array are : ";
    for (i = 0; i < size; i++)
    {
        cout << *(ptr + i) << "  ";
    }

    sortArr(ptr, size);
    cout << "\nThe 2nd largest number is : "<< ptr[size-2];
   

    delete ptr;
    return 0;
}

void sortArr(int *ptr, int size)
{

    int swap = 0;
    for (int i = 0; i < size - 1; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (*(ptr + i) > *(ptr + j))
            {
                swap = *(ptr + i);
                *(ptr + i) = *(ptr + j);
                *(ptr + j) = swap;
            }
        }
    }
}
`,
    output: `Enter the size of the array : 5
Enter the elements of the array : 23 4 12 87 54

The elements of the array are : 23  4  12  87  54
The 2nd largest number is : 54`
  },
  35: {
    title: "35. Write a C++ program to find second lowest number from the array ",
    code: `#include <iostream>
using namespace std;
void sortArrDesc(int *ptr, int size);

int main()
{
    int size, i;
    cout << "Enter the size of the array : ";
    cin >> size;

    int *ptr = new int[size];

    cout << "Enter the elements of the array : ";
    for (i = 0; i < size; i++)
    {
        cin >> ptr[i];
    }



    cout << "\nThe elements of the array are : ";
    for (i = 0; i < size; i++)
    {
        cout << *(ptr + i) << "  ";
    }

    sortArrDesc(ptr, size);
    cout << "\nThe 2nd smallest number is : "<< ptr[size-2];
   

    delete ptr;
    return 0;
}

void sortArrDesc(int *ptr, int size)
{

    int swap = 0;
    for (int i = 0; i < size - 1; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (*(ptr + i) <*(ptr + j))
            {
                swap = *(ptr + i);
                *(ptr + i) = *(ptr + j);
                *(ptr + j) = swap;
            }
        }
    }
}
`,
    output: `Enter the size of the array : 6
Enter the elements of the array : 23 43 56 12 54 89

The elements of the array are : 23  43  56  12  54  89
The 2nd smallest number is : 23`
  },
  36: {
    title: "36. Write a C++ program to find the number of even and odd integers in a given array of integers",
    code: `#include <iostream>
using namespace std;

int main() {
    int size;
    cout << "Enter the size of the array: ";
    cin >> size;

    int *arr = new int[size];
    int evenCount = 0, oddCount = 0;

    cout << "Enter " << size << " elements of the array:" << endl;
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    for (int i = 0; i < size; i++) {
        if (arr[i] % 2 == 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    cout << "The number of even integers in the array is: " << evenCount << endl;
    cout << "The number of odd integers in the array is: " << oddCount << endl;

    delete[] arr;
    return 0;
}
`,
    output: `Enter the size of the array: 5
Enter 5 elements of the array:
54 34 76 12 98 
The number of even integers in the array is: 5
The number of odd integers in the array is: 0`
  },
  37: {
    title: "37. Write a C++ program to get the difference between the largest and smallest values in an array of integers ",
    code: `#include <iostream>
using namespace std;

int main() {
    int size;
    cout << "Enter the size of the array: ";
    cin >> size;

    int *arr = new int[size];

    cout << "Enter " << size << " elements of the array:" << endl;
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    int max = arr[0];
    int min = arr[0];

    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    int difference = max - min;

    cout << "The difference between the largest and smallest values is: " << difference << endl;

    delete[] arr;
    return 0;
}
`,
    output: `Enter the size of the array: 4
Enter 4 elements of the array:
23 54 23 98
The difference between the largest and smallest values is: 75`
  },
  38: {
    title: "38. Write a C++ program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s ",
    code: `#include<iostream>
using namespace std;

int main() {
    int size, i, j, temp;
    cout << "Enter the size of the array: ";
    cin >> size;

    int arr[size];

    cout << "Enter the elements (only 0s and 1s):" << endl;
    for(i = 0; i < size; i++) {
        cin >> arr[i];
    }

    i = 0;
    j = size - 1;

    while(i < j) {
        if(arr[i] == 1 && arr[j] == 0) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        } else {
            if(arr[i] == 0) {
                i++;
            }
            if(arr[j] == 1) {
                j--;
            }
        }
    }

    cout << "Array after segregation: ";
    for(i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}
`,
    output: `Enter the size of the array: 6
Enter the elements (only 0s and 1s):
1 0 1 1 0 1
Array after segregation: 0 0 1 1 1 1 `
  },
  39: {
    title: "39. Write a C++ program to cyclically rotate a given array clockwise by one ",
    code: `#include<iostream>
using namespace std;

int main() {
    int size, i, last;

    cout << "Enter the size of the array: ";
    cin >> size;

    int arr[size];

    cout << "Enter the elements of the array: " << endl;
    for(i = 0; i < size; i++) {
        cin >> arr[i];
    }

    last = arr[size - 1];

    for(i = size - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

 
    arr[0] = last;

    cout << "Array after cyclic rotation: ";
    for(i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}
`,
    output: `Enter the size of the array: 5
Enter the elements of the array: 
4 3 5 6 7  
Array after cyclic rotation: 7 4 3 5 6 `
  },
  40: {
    title: "40. Write a C++ program to print all unique element in an array ",
    code: `#include <iostream>
using namespace std;

int main()
{
    int size, i, j, unique;

    cout << "Enter the size the array : ";
    cin >> size;

    int *arr = new int[size];

    cout << "Enter the elements of the array : " << endl;
    for (i = 0; i < size; i++)
    {
        cin >> arr[i];
    }

    cout << "\nThe elements of the array are : " << endl;
    for (i = 0; i < size; i++)
    {
        cout << arr[i] << "  ";
    }

    cout << "\nThe unique elements of the array: " << endl;
    for (i = 0; i < size; i++)
    {
        for (j = 0; j < size; j++)
        {
            if (i == j)
            {
                continue;
            }
            if (arr[i] != arr[j])
            {
                unique = arr[i];
            }
            else
            {
                unique = -1;
                break;
            }
        }
        if (unique != -1)
        {
            cout << arr[i] << "  ";
        }
    }

    return 0;
}
`,
    output: `Enter the size the array : 6
Enter the elements of the array : 
4 3 4 5 1 5

The elements of the array are :
4  3  4  5  1  5
The unique elements of the array:
3  1`
  },
  41: {
    title: "41. Write a C++ Program to Sort the Array in an Ascending Order ",
    code: `#include <iostream>
using namespace std;

int main() {
    int size;
    cout << "Enter the size of the array: ";
    cin >> size;

    int *arr = new int[size];

    cout << "Enter " << size << " elements of the array:" << endl;
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    cout << "Array sorted in ascending order: ";
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    delete[] arr;
    return 0;
}
`,
    output: `Enter the size of the array: 5
Enter 5 elements of the array:
3 4 5 2 1
Array sorted in ascending order: 1 2 3 4 5`
  },
  42: {
    title: "42. Write a C++ Program to Sort the Array in an Descending Order ",
    code: `#include <iostream>
using namespace std;

int main() {
    int size;
    cout << "Enter the size of the array: ";
    cin >> size;

    int *arr = new int[size];

    cout << "Enter " << size << " elements of the array:" << endl;
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    cout << "Array sorted in descending order: ";
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    delete[] arr;
    return 0;
}
`,
    output: `Enter the size of the array: 6
Enter 6 elements of the array:
4 3 5 6 7 1
Array sorted in descending order: 7 6 5 4 3 1`
  },
  43: {
    title: "43. Write a C++ Program to Search Key Elements in an Array ",
    code: `#include <iostream>
using namespace std;

int main() {
    int size,found=0,position=-1;
    cout << "Enter the size of the array: ";
    cin >> size;

    int *arr = new int[size];
    int key;

    cout << "Enter " << size << " elements of the array:" << endl;
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    cout << "Enter the key to search for: ";
    cin >> key;


    for (int i = 0; i < size; i++) {
        if (arr[i] == key) {
            found = 1;
            position = i;  
            break;
        }
    }

    if (found) {
        cout << "The key " << key << " is found at index " << position << "." << endl;
    } else {
        cout << "The key " << key << " is not found in the array." << endl;
    }

    delete[] arr;
    return 0;
}
`,
    output: `Enter the size of the array: 7
Enter 7 elements of the array:
3 2 4 5 6 7 1
Enter the key to search for: 7
The key 7 is found at index 5.`
  }
};

function loadQuestion(num) {
  const question = inheritance[num];
  if (!question) return;

  document.querySelector('.default').style.display = 'none';
  const container = document.getElementById('question-container');
  container.style.display = 'block';

  document.getElementById('question-title').textContent = question.title;
  document.getElementById('code-block').textContent = question.code;
  document.getElementById('output-block').textContent = question.output;
}
