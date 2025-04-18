
const Basic = {
  1: {
    title: "1. Write a C++ method to find the smallest number among three numbers.",
      code: `#include <iostream>
using namespace std;

int findSmallest(int a, int b, int c) {
    if (a <= b && a <= c) {
        return a;
    } else if (b <= a && b <= c) {
        return b;
    } else {
        return c;
    }
}

int main() {
    int num1, num2, num3;

    cout << "Enter three numbers: ";
    cin >> num1 >> num2 >> num3;

    int smallest = findSmallest(num1, num2, num3);

    cout << "The smallest number is: " << smallest << endl;

    return 0;
}
`,
      output: `Enter three numbers:  34 54 67
The smallest number is: 34`
  },

  2: {
    title: "2. Write a C++ method to compute the average of three numbers. ",
    code: `#include <iostream>
using namespace std;

double computeAverage(double a, double b, double c) {
    return (a + b + c) / 3.0;
}

int main() {
    double num1, num2, num3;

    cout << "Enter three numbers: ";
    cin >> num1 >> num2 >> num3;

    double average = computeAverage(num1, num2, num3);

    cout << "The average of the three numbers is: " << average << endl;

    return 0;
}
`,
    output: `Enter three numbers: 56 87 12
The average of the three numbers is: 51.6667`
  },

  3: {
    title: "3. Write a C++ method to display the middle character of a string."<br>"Explanation -Note: a) If the length of the string is odd there will be two middle characters. b) If the length of the string is even there will be one middle character. ",
    code: `#include<iostream>
using namespace std;

void midChar(const char *arr,int size);

int main(){
    int size;
    cout << "Enter the size of the array: ";
    cin >> size;
    char *arr=new char[size+1];
    cout << "Enter the elements of the array: ";
    for(int i=0;i<size;i++){
        cin >> arr[i];
    }
    midChar(arr,size);

}

void midChar(const char *arr,int size){

    if((size-2)%2==0){
      cout<<"Here is the middle characters : "<<arr[(size-2)/2]<<arr[((size-2)/2)+1];
      
    }
    else{
        cout<<"Here is the middle character : "<<arr[(size-1)/2];
    }
}`,
    output: `Enter the size of the array: 5
Enter the elements of the array: 4 3 5 2 1
Here is the middle character : 5`
    },
    4: {
      title: "4. Write a C++ method to find all twin prime numbers less than 100. ",
      code: `#include<iostream>
using namespace std;
int prime(int num){
    if(num <= 1) return 0;
    for(int i = 2; i <num; i++)
    {
        if(num % i == 0) return 0;
    }
    return 1;
}
int main(){
    int twin1,twin2;

    for(int i=3;i<100-1;i++){
        twin1=prime(i);
        twin2=prime(i+2);

        if(twin1==1 && twin2==1){
            cout<<i<<" "<<i+2<<endl;
        }
    }

    return 0;
}`,
      output: `3 5
5 7
11 13
17 19
29 31
41 43
59 61
71 73`
    },
    5: {
      title: "5. Write a C++ method to count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative. ",
      code: `#include <iostream>
using namespace std;

int countDigits(int num) {
    int count = 0;
    
    if (num == 0) {
        return 1;
    }

    while (num > 0) {
        num /= 10;
        count++;
    }
    
    return count;
}

int main() {
    int number = 2;
    cout << "The number of digits in " << number << " is: " << countDigits(number) << endl;
    return 0;
}
`,
      output: `The number of digits in 2 is: 1`
    },
    6: {
      title: "6. Write a C++ method that accepts three integers and checks whether they are consecutive or not. Returns true or false.",
      code: `#include <iostream>
using namespace std;

int check(int a,int b,int c) {
    if((a==b+1 && b==c+1) || (a==b-1 && b==c-1)) {
        return 1;
        }
     return 0;
}

int main() {
   int a,b,c,result;
   cout<<"Enter the three numbers : ";
   cin>>a>>b>>c;
    result=check(a,b,c);
    if(result){
        cout<<"The numbers are consecutive."<<endl;
    }
    else{
        cout<<"The numbers are not consecutive."<<endl;
    }
    return 0;
}
`,
      output: `Enter the three numbers : 75 76 77
The numbers are consecutive.`
    },
    7: {
      title: "7. Write a C++ method that checks whether all the characters in a given string are vowels (a,e,i,o,u) or not. Return true if each character in the string is a vowel, otherwise return false. ",
      code: `#include<iostream>
using namespace std;

// Function to check if all characters are vowels
bool allVowels(char str[], int size) {
    for(int i = 0; i < size; i++) {
        char ch = str[i];

        // convert to lowercase manually if needed
        if(ch >= 'A' && ch <= 'Z') {
            ch = ch + 32;
        }

        if(ch != 'a' && ch != 'e' && ch != 'i' && ch != 'o' && ch != 'u') {
            return false;
        }
    }
    return true;
}

int main() {
    int size;
    cout << "Enter the size of the string: ";
    cin >> size;

    char str[size];
    cout << "Enter the string (characters without space): ";
    for(int i = 0; i < size; i++) {
        cin >> str[i];
    }

    bool result = allVowels(str, size);

    if(result) {
        cout << "All characters are vowels." << endl;
    } else {
        cout << "Not all characters are vowels." << endl;
    }

    return 0;
}
`,
      output: `Enter the size of the string: 5
Enter the string (characters without space): hello
Not all characters are vowels.`
    },
  
  };
  
  function loadQuestion(num) {
    const question = Basic[num];
    if (!question) return;
  
    document.querySelector('.default').style.display = 'none';
    const container = document.getElementById('question-container');
    container.style.display = 'block';
  
    document.getElementById('question-title').textContent = question.title;
    document.getElementById('code-block').textContent = question.code;
    document.getElementById('output-block').textContent = question.output;
  }
  