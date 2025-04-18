
const Basic = {
  1: {
    title: "1. Write a C++ program to print ‘Hello World!’ on screen ",
      code: `#include <iostream> 
using namespace std;

int main() {
    cout << "Hello World!"; 
    return 0; 
}
`,
      output: `Hello World!`
  },

  2: {
    title: "2. Write a C++ program to print the sum of two numbers",
    code: `#include <iostream> 
using namespace std;

int main() {
    int num1, num2, sum;

    cout << "Enter the first number: ";
    cin >> num1;  

    cout << "Enter the second number: ";
    cin >> num2; 
    sum = num1 + num2;

    cout << "The sum of " << num1 << " and " << num2 << " is " << sum << endl;

    return 0;  
}
`,
    output: `Enter the first number: 34
Enter the second number: 54
The sum of 34 and 54 is 88`
  },

  3: {
    title: "3. Write a C++ program that takes two numbers and display the product of two numbers ",
    code: `#include <iostream>
using namespace std;

int main() {
    
    int num1, num2, product;

    
    cout << "Enter the first number: ";
    cin >> num1;  

    cout << "Enter the second number: ";
    cin >> num2;  

    
    product = num1 * num2;

   
    cout << "The product of " << num1 << " and " << num2 << " is " << product << endl;

    return 0;  
}
`,
    output: `Enter the first number: 12
Enter the second number: 18 
The product of 12 and 18 is 216`
    },
    4: {
      title: "4. Write a C++ program to print the sum, multiply, subtract, divide and remainder of two numbers ",
      code: `#include <iostream> 
using namespace std; 
int main() {
   
    int num1, num2;
    
    
    cout << "Enter the first number: ";
    cin >> num1;  
    cout << "Enter the second number: ";
    cin >> num2; 

    
    int sum = num1 + num2;
    int product = num1 * num2;
    int difference = num1 - num2;
    int quotient = num1 / num2;
    int remainder = num1 % num2;

    
    cout << "Sum: " << sum << endl;
    cout << "Product: " << product << endl;
    cout << "Difference: " << difference << endl;
    cout << "Quotient: " << quotient << endl;
    cout << "Remainder: " << remainder << endl;

    return 0; 
}
`,
      output: `Enter the first number: 72
Enter the second number: 87
Sum: 159
Product: 6264
Difference: -15
Quotient: 0
Remainder: 72`
    },
    5: {
      title: "5. Write a C++ program that takes five numbers as input to calculate and print the average of the numbers ",
      code: `#include <iostream>  
using namespace std;
int main() {
    double num1, num2, num3, num4, num5, sum, average;

   cout << "Enter the first number: ";
   cin >> num1;

   cout << "Enter the second number: ";
   cin >> num2;

   cout << "Enter the third number: ";
   cin >> num3;

   cout << "Enter the fourth number: ";
   cin >> num4;

   cout << "Enter the fifth number: ";
   cin >> num5;

    sum = num1 + num2 + num3 + num4 + num5;

    average = sum / 5;

   cout << "The average of the numbers is: " << average <<endl;

    return 0; 
}
`,
      output: `Enter the first number: 74
Enter the second number: 785
Enter the third number: 874
Enter the fourth number: 38
Enter the fifth number: 98 
The average of the numbers is: 373.8`
    },
    6: {
      title: "6. Write a C++ program to swap two variables",
      code: `#include <iostream>
using namespace std;  
int main() {
    int num1, num2;

    cout << "Enter the first number: ";
    cin >> num1;
    
    cout << "Enter the second number: ";
    cin >> num2;

    cout << "Before swapping: \n";
    cout << "num1 = " << num1 << "\n";
    cout << "num2 = " << num2 << "\n";

    int temp = num1;
    num1 = num2;
    num2 = temp;

    cout << "After swapping: \n";
    cout << "num1 = " << num1 << "\n";
    cout << "num2 = " << num2 << "\n";

    return 0; 
}
`,
      output: `Enter the first number: 25
Enter the second number: 68
Before swapping:
num1 = 25
num2 = 68
After swapping:
num1 = 68
num2 = 25`
    },
    7: {
      title: "7. Write a C++ program to convert a decimal number to binary numbers ",
      code: `#include<iostream>
          using namespace std;
          int main(){
              int a;
              long b=0,p=1;
              cout<<"Enter the Number : ";
              cin>>a;
              while(a>0){
                  b=b+(a%2)*p;
                  a=a/2;
                  p=p*10;
              }
              cout<<"Binary value : "<<b;
              return 0;
          }`,
      output: `Enter the number : 12
              Binary value : 1100`
    },
    8: {
      title: "8. Write a C++ program to convert a binary number to decimal number ",
      code: `   #include<iostream>
          using namespace std;
          int main(){
              int a=0;
              long b,p=1;
              cout<<"Enter the Number in binary: ";
              cin>>b;
              while(b>0){
                  int r;
                  r=b%10;
                  a=a+(r*p);
                  b=b/10;
                  p=p*2;
              }
              cout<<"Decimal value : "<<a;
              return 0;
          }`,
      output: `Enter the number in binary: 1010
              Decimal value: 10`
    },
    9: {
      title: "9. Write a C++ program to check whether C++ is installed on your computer or not ",
      code: `  /* To check this you have to execute this program in your computer's command prompt
             (1) Change directory to where this file is located using cd
             (2) Type g++ file_name.cpp -o exe_filename
             (3) Type exe_filename.exe
             If the output displays on the screen it means the C++ is installed in your computer */
      
          #include<iostream>
          using namespace std;
          int main(){
              cout<<"Hello World";
              return 0;
          }
        
      `,
      output: `  Hello World`
    },
    10: {
      title: "10. Write a C++ program and compute the sum of the digits of an integer",
      code: `  #include<iostream>
          using namespace std;
          int main(){
              int a,s=0;
              cout<<"Enter the number : ";
              cin>>a;
              int r;
              while(a!=0){
                  r=a%10;
                  s+=r;
                  a/=10;
              }
              cout<<"Sum of digits of an integer : "<<s;
              return 0;
          }`,
      output: ` Enter the number : 12345
              Sum of digits of an integer : 15`
    },
    11: {
      title: "11. Write a C++ program to compare two numbers",
      code: `#include <iostream>  
using namespace std;

int main() {
    int num1, num2;

    cout << "Enter the first number: ";
    cin >> num1;

    cout << "Enter the second number: ";
    cin >> num2;

    if (num1 > num2) {
        cout << "The first number (" << num1 << ") is greater than the second number (" << num2 << ")." << endl;
    } 
    else if (num1 < num2) {
        cout << "The first number (" << num1 << ") is less than the second number (" << num2 << ")." << endl;
    } 
    else {
        cout << "Both numbers are equal." << endl;
    }

    return 0; 
}
`,
      output: `Enter the first number: 28
Enter the second number: 92
The first number (28) is less than the second number (92).`
    },
    12: {
      title: "12. Write a C++ program to count the letters, spaces, numbers and other characters of an input string",
      code: `  #include<iostream>
          #include<cctype>
          #include<string>
          using namespace std;
          int main(){
              string st;
              int i,n=0,l=0,s=0,o=0;
              cout<<"Enter the string : ";
              getline(cin,st);
              for(i=0;i<st.length();i++){
                  if(isalpha(st[i])){
                      l++;
                  }
                  else if(isdigit(st[i])){
                      n++;
                  }
                  else if(st[i]==' '){
                      s++;
                  }
                  else{
                      o++;
                  }
              }
              cout<<"Number of Letters : "<<l<<endl;
              cout<<"Number of Digit characters : "<<n<<endl;
              cout<<"Number of Spaces : "<<s<<endl;
              cout<<"Number of other characters : "<<o<<endl;
              return 0;
          }
        `,
      output: `  Enter the string : Hello World 123 !
          Number of Letters : 10
          Number of Digit characters : 3
          Number of Spaces : 2
          Number of other characters : 1`
    },
    13: {
      title: "13. Write a C++ program to print the ascii value of a given character",
      code: `#include <iostream>  
using namespace std;
int main() {
    
    char ch;

    cout << "Enter a character: ";
    cin >> ch;

    cout << "The ASCII value of '" << ch << "' is " << int(ch) << endl;

    return 0; 
}`,
      output: `Enter a character:m
The ASCII value of 'm' is 109`
    },
    14:{
      title: "14. Write a C++ program that accepts an integer (n) and computes the value of n+nn+nnn ",
      code: `#include <iostream> 
using namespace std;
int main() {
    int n;

    cout << "Enter an integer: ";
    cin >> n;

    int nn = n * 10 + n;      
    int nnn = nn * 10 + n;    

    int result = n + nn + nnn; 

    cout << "The result of n + nn + nnn is: " << result << endl;

    return 0; 
}
`,
      output: `Enter an integer: 7
The result of n + nn + nnn is: 861`
    },
    15:{
      title: "15. Write a C++ program to display the system time",
      code: `  #include<iostream>
          using namespace std;
          int main(){
              cout<<"Current Time :"<<__TIME__;
              return 0;
          }
        `,
      output: `  Current Time : 10:30:45`
    }, 
    16:{
      title: "16. Write a C++ program to print the odd numbers from 1 to 20",
      code: ` #include<iostream>
          #include<cctype>
          using namespace std;
          int main(){
              cout<<"Odd Numbers between 1 to 20 : "<<endl;
              for(int i=1;i<21;i++){
                  if (i&1==1){
                      cout<<i<<endl;
                  }
              }
              return 0;
          }`,
      output: `  Odd Numbers between 1 to 20 :
              1
              3
              5
              7
              9
              11
              13
              15
              17
              19`
    }, 
    17:{
      title: "17. Write a C++ program to print the even numbers from 1 to 20 ",
      code: `#include <iostream>  
using namespace std;

int main() {
    cout << "Even numbers from 1 to 20: ";

    for (int i = 1; i <= 20; i++) {
        if (i % 2 == 0) { 
            cout << i << " ";
        }
    }

    cout << endl; 
    return 0; 
}
`,
      output: `Even numbers from 1 to 20: 2 4 6 8 10 12 14 16 18 20 `
    },
    18:{
      title: "18. Write a C++ program to convert a string to an integer ",
      code: ` #include<iostream>
          #include<string>
          using namespace std;
          int main(){
              string st;
              int n=0,p=10;
              cout<<"Enter the integers for string : ";
              cin>>st;
              for(int i=0;i<st.length();i++){
                  n=p*n+(st[i]-'0');
                  cout<<p<<endl;
              }
              cout<<n;
              return 0;
          }`,
      output: ` Enter the integers for string : 12345
          12345`
    },
    19:{
      title: "19. Write a C++ program to convert seconds to hour, minute and seconds ",
      code: ` #include<iostream>
          #include<iomanip>
          using namespace std;
          int main(){
             int s,h=0,m=0;
             cout<<"Enter the seconds : ";
             cin>>s;
             m=s/60;
             s=s%60;
             h=m/60;
             m=m%60;
             cout<<setw(3)<<"H"<<setw(3)<<"M"<<setw(3)<<"S"<<endl;
             cout<<setw(3)<<h<<setw(3)<<m<<setw(3)<<s;
             return 0;
          }`,
      output: ` Enter the seconds : 3665
              H    M    S
              1    1    5`
    },
    20:{
      title: "20. Write a C++ program to compute the sum of the first 100 prime numbers ",
      code: `   #include<iostream>
          using namespace std;
          int main(){
             int s=0,c=0;
             for(int i=2;i<101;i++){
              c=0;
              for(int j=2;j<i;j++){
                 if(i%j==0){
                    c=1;        
                 }
              }
              if(c==0){
                  s=s+i;
              }
             }
             cout<<"Sum Of First 100 Prime No. : "<<s;
             return 0;
          }`,
      output: ` Sum Of First 100 Prime No. : 24133`
    },
    21:{
      title: "21. Write a C++ program to compute the square root of an given integer",
      code: ` #include<iostream>
          #include<math.h>
          using namespace std;
          int main(){
             int n;
             cout<<"Enter the number : ";
             cin>>n;
             cout<<"Square root of "<<n<<" : "<<sqrt(n);
             return 0;
          }`,
      output: `Enter the number : 25
              Square root of 25 : 5`
    },
    22:{
      title: "22. Write a C++ program to check if a positive number is a palindrome or not ",
      code: ` #include<iostream>
        using namespace std;
        int main() {
           int n;
           cout << "Enter the number : ";
           cin >> n;
           int temp = n, p = 0;
           while (n > 0) {
              p = p * 10 + (n % 10);
              n = n / 10;
           }
           if (temp == p) {
              cout << "Palindrome";
           } else {
              cout << "Not a Palindrome";
           }
           return 0;
        }`,
      output: `  Enter the number : 121
        Palindrome`
    },
    23:{
      title: "23. Write a C++ program to add two numbers without using any arithmetic operators",
      code: ` #include<iostream>
          #include<math.h>
          using namespace std;
          int main(){
             int a,b;
             cout<<"Enter the number A and B : ";
             cin>>a>>b;
             for(int i=0;i<b;i++,a++);
             cout<<"Sum of A and B without arthmetic operators : "<<a;
             return 0;
          }`,
      output: `  Enter the number A and B : 5 3
              Sum of A and B without arithmetic operators : 8`
    },
    24:{
      title: "24. Write a C++ program to add all the digits of a given positive integer",
      code: ` #include<iostream>
          using namespace std;
          int main(){
          int a,s=0;
          cout<<"Enter the number : ";
          cin>>a;
          int r;
          while(a!=0){
          r=a%10;
          s+=r;
          a/=10;}
          cout<<"Sum of digits of an integer : "<<s;
          return 0;}`,
      output: `Enter the number : 1234
              Sum of digits of an integer : 10`
    },
    25:{
      title: "25. C++ program to find area of circle",
      code: `#include <iostream>
#include <cmath>

using namespace std;

int main() {
    double radius, area;
    cout << "Enter the radius of the circle: ";
    cin >> radius;
    area = M_PI * radius * radius;
    cout << "The area of the circle with radius " << radius << " is: " << area << endl;
    return 0;
}
`,
      output: `Enter the radius of the circle: 22
The area of the circle with radius 22 is: 1520.53`
    },
    26:{
      title: "26. C++ Program to find area of rectangle",
      code: `#include <iostream>

using namespace std;

int main() {
    double length, width, area;
    cout << "Enter the length of the rectangle: ";
    cin >> length;
    cout << "Enter the width of the rectangle: ";
    cin >> width;
    area = length * width;
    cout << "The area of the rectangle is: " << area << endl;
    return 0;
}
`,
      output: `Enter the length of the rectangle: 17
Enter the width of the rectangle: 12
The area of the rectangle is: 204`
    },
    27:{
      title: "27. C++ Program to find area of triangle ",
      code: `#include <iostream>

using namespace std;

int main() {
    double base, height, area;
    cout << "Enter the base of the triangle: ";
    cin >> base;
    cout << "Enter the height of the triangle: ";
    cin >> height;
    area = 0.5 * base * height;
    cout << "The area of the triangle is: " << area << endl;
    return 0;
}
`,
      output: `Enter the base of the triangle: 5
Enter the height of the triangle: 7
The area of the triangle is: 17.5`
    },
    28:{
      title: "28. C++ Program to find area of equilateral triangle",
      code: `#include <iostream>
#include <cmath>

using namespace std;

int main() {
    double side, area;
    cout << "Enter the side length of the equilateral triangle: ";
    cin >> side;
    area = (sqrt(3) / 4) * side * side;
    cout << "The area of the equilateral triangle is: " << area << endl;
    return 0;
}
`,
      output: `Enter the side length of the equilateral triangle: 4
The area of the equilateral triangle is: 6.9282`
    },
    29:{
      title: "29. C++ Program to find area of rhombus ",
      code: `#include <iostream>

using namespace std;

int main() {
    double diagonal1, diagonal2, area;
    cout << "Enter the length of the first diagonal: ";
    cin >> diagonal1;
    cout << "Enter the length of the second diagonal: ";
    cin >> diagonal2;
    area = 0.5 * diagonal1 * diagonal2;
    cout << "The area of the rhombus is: " << area << endl;
    return 0;
}
`,
      output: `Enter the length of the first diagonal: 14
Enter the length of the second diagonal: 16
The area of the rhombus is: 112`
    },
    30:{
      title: "30. C++ Program to find area of parallelogram",
      code: `#include <iostream>

using namespace std;

int main() {
    double base, height, area;
    cout << "Enter the base of the parallelogram: ";
    cin >> base;
    cout << "Enter the height of the parallelogram: ";
    cin >> height;
    area = base * height;
    cout << "The area of the parallelogram is: " << area << endl;
    return 0;
}
`,
      output: `Enter the base of the parallelogram: 14
Enter the height of the parallelogram: 20
The area of the parallelogram is: 280`
    },
    31:{
      title: "31. C++ Program to find area of Prism",
      code: `  #include<iostream>
        using namespace std;
        
        int main() {
            int b,p,h;
            cout<<"Enter Base of Prism : "<<endl;
            cin>>b;
            cout<<"Enter Perpendicular of Prism : "<<endl;
            cin>>p;
            cout<<"Enter Height of Prism : "<<endl;
            cin>>h;
            float area=(2*b)+(p*h);
            cout<<endl<<"Total Surface Area of Prism : "<<area<<" square units";
        }
        `,
      output: ` Enter Base of Prism : 
        4
        Enter Perpendicular of Prism : 
        6
        Enter Height of Prism : 
        8
        Total Surface Area of Prism : 88 square units`
    },
    32:{
      title: "32. C++ Program to find volume of sphere ",
      code: `#include<iostream>
        using namespace std;
        
        int main() {
            int r;
            cout<<"Enter Radius of Sphere : "<<endl;
            cin>>r;
            float area=(4/3)*3.14*r*r*r;
            cout<<endl<<"Volume of Sphere : "<<area<<" cubic units";
        }`,
      output: ` Enter Radius of Sphere : 
        5
        Volume of Sphere : 0 cubic units`
    },
    33:{
      title: "33. C++ Program to find volume of cylinder ",
      code: ` #include<iostream>
        using namespace std;
        
        int main() {
            int r,h;
            cout<<"Enter Radius of Cylinder : "<<endl;
            cin>>r;
            cout<<"Enter Height of Cylinder : "<<endl;
            cin>>h;
            float area=3.14*r*r*h;
            cout<<"Volume of Cylinder : "<<area<<" cubic units";
        }`,
      output: ` Enter Radius of Cylinder : 
        4
        Enter Height of Cylinder : 
        5
        Volume of Cylinder : 251.2 cubic units`
    },
    34:{
      title: "34. C++ Program to find volume of cuboid ",
      code: ` #include<iostream>
        using namespace std;
        
        int main() {
            int l,b,h;
            cout<<"Enter Length of Cuboid : "<<endl;
            cin>>l;
            cout<<"Enter Width of Cuboid : "<<endl;
            cin>>b;
            cout<<"Enter Height of Coboid : "<<endl;
            cin>>h;
            int volume=l*b*h;
            cout<<endl<<"Volume of Cuboid : "<<volume<<" cubic units";
        }`,
      output: `  Enter Length of Cuboid : 
        6
        Enter Width of Cuboid : 
        5
        Enter Height of Coboid : 
        4
        Volume of Cuboid : 120 cubic units`
    },
    35:{
      title: "35. C++ Program to find volume of cone",
      code: `#include<iostream>
        using namespace std;
        
        int main() {
            int h,r;
            cout<<"Enter Height of Cone : "<<endl;
            cin>>h;
            cout<<"Enter Radius of Cone : "<<endl;
            cin>>r;
            float volume=(h*3.14*r*r)/3;
            cout<<endl<<"Volume of Cone : "<<volume<<" cubic units";
        }`,
      output: `  Enter Height of Cone : 
        5
        Enter Radius of Cone : 
        3
        Volume of Cone : 47.1 cubic units`
    },
    36:{
      title: "36. C++ program to find surface area of cuboid",
      code: `code here`,
      output: `output`
    },
    37:{
      title: "37. C++ program to find surface area of cylinder ",
      code: ` #include<iostream>
        using namespace std;
        
        int main() {
            int l,w,h;
            cout<<"Enter Length of Cuboid : "<<endl;
            cin>>l;
            cout<<"Enter Width of Cuboid : "<<endl;
            cin>>w;
            cout<<"Enter Height of Cuboid : "<<endl;
            cin>>h;
            int sa=2*((l*w)+(l*h)+(w*h));
            cout<<endl<<"Surface Area of Cuboid : "<<sa<<" square units";
        }e`,
      output: `  Enter Length of Cuboid : 
        5
        Enter Width of Cuboid : 
        4
        Enter Height of Cuboid : 
        3
        Surface Area of Cuboid : 94 square units`
    },
    38:{
      title: "38. C++ program to find surface area of cube",
      code: `#include<iostream>
        using namespace std;
        
        int main() {
            int a;
            cout<<"Enter Length of Cube : "<<endl;
            cin>>a;
            int sa=6*a*a;
            cout<<endl<<"Surface Area of Cube : "<<sa<<" square units";
        }`,
      output: `#include<iostream>
        using namespace std;
        
        int main() {
            int a;
            cout<<"Enter Length of Cube : "<<endl;
            cin>>a;
            int sa=6*a*a;
            cout<<endl<<"Surface Area of Cube : "<<sa<<" square units";
        }`
    },
    39:{
      title: "39. C++ program to calculate average marks",
      code: `
        #include<iostream>
        using namespace std;
        
        int main() {
            float marks[10],sum=0;
            int n,i;
            cout<<"Enter number of subjects : "<<endl;
            cin>>n;
            for(i=0;i<n;i++) {
                cout<<"Enter Marks of Subject "<<i+1<<" : "<<endl;
                cin>>marks[i];
                sum=sum+marks[i];
            }
            float avg=(sum/n);
            cout<<endl<<"Total Marks : "<<sum;
            cout<<endl<<"Average Marks : "<<avg;
        }`,
      output: `  Enter number of subjects : 
        5
        Enter Marks of Subject 1 : 
        80
        Enter Marks of Subject 2 : 
        85
        Enter Marks of Subject 3 : 
        90
        Enter Marks of Subject 4 : 
        75
        Enter Marks of Subject 5 : 
        88
        Total Marks : 418
        Average Marks : 83.6`
    },
    40:{
      title: "40. C++ program to check vowel or consonant ",
      code: `
        #include<iostream>
        using namespace std;
        
        int main() {
            char c;
            cout<<"Enter a character : "<<endl;
            cin>>c;
            switch(c) {
                case 'a':
                case 'A':
                case 'e':
                case 'E':
                case 'i':
                case 'I':
                case 'o':
                case 'O':
                case 'u':
                case 'U':
                    cout<<"Entered Character is a vowel";
                    break;
                default:
                    cout<<"Entered Character is a consonant";
            }
        }`,
      output: `Enter a character : 
        A
        Entered Character is a vowel`
    },
    41:{
      title: "41. C++ program to sum of N numbers ",
      code: `  #include<iostream>
        using namespace std;
        
        int main() {
            int n;
            cout<<"Enter any number : "<<endl;
            cin>>n;
            int sum=0;
            for(int i=0;i<=n;i++) {
                sum=sum+i;
            }
            cout<<endl<<"Sum of "<<n<<" natural numbers : "<<sum;
        }`,
      output: `
        Enter any number : 
        5
        Sum of 5 natural numbers : 15`
    },
    42:{
      title: "42. C++ program to find factorial of any number",
      code: ` #include<iostream>
        using namespace std;
        
        int main() {
            int n;
            cout<<"Enter Any number to find factorial : "<<endl;
            cin>>n;
            int fact=1;
            for(int i=1;i<=n;i++) {
                fact=fact*i;
            }
            cout<<endl<<"Factorial of "<<n<<" is : "<<fact;
        }`,
      output: ` Enter Any number to find factorial : 
        6
        Factorial of 6 is : 720`
    },
    43:{
      title: "43. C++ Program to calculate electricity bill ",
      code: ` #include<iostream>
        using namespace std;
        
        int main() {
            int p,uc,ou,nu,puc;
            float tax,bill;
            cout<<"Enter Old Unit : "<<endl;
            cin>>ou;
            cout<<"Enter New Unit : "<<endl;
            cin>>nu;
            cout<<"Enter Per Unit Charge : "<<endl;
            cin>>puc;
            uc=nu-ou;
            p=uc*puc;
            tax=(float)((p*12)/100);
            bill=p+tax;
            cout<<endl<<"Total Bill : "<<bill;
        }`,
      output: `Enter Old Unit : 
        200
        Enter New Unit : 
        250
        Enter Per Unit Charge : 
        8
        Total Bill : 216`
    },
    44:{
      title: "44. C++ Program To Calculate CGPA Percentage ",
      code: `code here`,
      output: `
        `
    },
    45:{
      title: "45. C++ Program to calculate compound interest",
      code: `code here`,
      output: `output`
    },
    46:{
      title: "46. C++ Program To Calculate Batting Average ",
      code: `code here`,
      output: `output`
    },
    47:{
      title: "47. C++ Program to Calculate Commission Percentage ",
      code: `code here`,
      output: `output`
    },
    48:{
      title: "48. C++ Program To Find Distance Between Two Points ",
      code: `#include <iostream>
#include <cmath>

using namespace std;

int main() {
    double x1, y1, x2, y2, distance;
    cout << "Enter the coordinates of the first point (x1 y1): ";
    cin >> x1 >> y1;
    cout << "Enter the coordinates of the second point (x2 y2): ";
    cin >> x2 >> y2;
    distance = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
    cout << "The distance between the two points is: " << distance << endl;
    return 0;
}
`,
      output: `Enter the coordinates of the first point (x1 y1): 5 7
Enter the coordinates of the second point (x2 y2): 15 5
The distance between the two points is: 10.198`
    },
    49:{
      title: "49. C++ Program To Calculate Power Of Number ",
      code: `#include<iostream>
using namespace std;
double pow(double base,int exponent){
    double val=1;
    for (int i = 0; i < exponent; i++)
    {
        val*=base;
    }
    return val;
}

int main(){
    double base, result;
    int  exponent;
    cout << "Enter the base: ";
    cin >> base;
    cout << "Enter the exponent: ";
    cin >> exponent;
    result = pow(base, exponent);
    cout << "The result of " << base << " raised to the power " << exponent << " is: " << result << endl;
    return 0;
}`,
      output: `Enter the base: 12
Enter the exponent: 18
The result of 12 raised to the power 18 is: 2.66233e+019`
    },
    50:{
      title: "50. Write a C++ program to take three numbers from the user and print the greatest number",
      code: `#include <iostream>

using namespace std;

int main() {
    double num1, num2, num3;
    cout << "Enter three numbers: ";
    cin >> num1 >> num2 >> num3;
    
    if (num1 >= num2 && num1 >= num3) {
        cout << "The greatest number is: " << num1 << endl;
    } else if (num2 >= num1 && num2 >= num3) {
        cout << "The greatest number is: " << num2 << endl;
    } else {
        cout << "The greatest number is: " << num3 << endl;
    }
    
    return 0;
}
`,
      output: `Enter three numbers: 5 4 8
The greatest number is: 8`
    },
    51:{
      title: "51. Write a C++ program to find the number of days in a month ",
      code: `code here`,
      output: `output`
    },
    52:{
      title: "52. Write a C++ program to test a number is positive or negative ",
      code: `#include <iostream>
using namespace std;

int main() {
    float number;

    cout << "Enter a number: ";
    cin >> number;

    if (number > 0) {
        cout << "The number " << number << " is positive." << endl;
    }
    else if (number < 0) {
        cout << "The number " << number << " is negative." << endl;
    }
    else {
        cout << "The number is zero." << endl;
    }

    return 0;
}
`,
      output: `Enter a number: 9
The number 9 is positive.`
    },
    53:{
      title: "53. Write a C++ Program to accept number of week’s day (1-7) and print name of the day ",
      code: `#include <iostream>
using namespace std;

int main() {
    int day;

    cout << "Enter a number (1 to 7): ";
    cin >> day;

    switch(day) {
        case 1:
            cout << "Monday" << endl;
            break;
        case 2:
            cout << "Tuesday" << endl;
            break;
        case 3:
            cout << "Wednesday" << endl;
            break;
        case 4:
            cout << "Thursday" << endl;
            break;
        case 5:
            cout << "Friday" << endl;
            break;
        case 6:
            cout << "Saturday" << endl;
            break;
        case 7:
            cout << "Sunday" << endl;
            break;
        default:
            cout << "Invalid input! Please enter a number between 1 and 7." << endl;
    }

    return 0;
}
`,
      output: `Enter a number (1 to 7): 4
Thursday`
    },
    54:{
      title: "54. Write a C++ program that takes a year from user and print whether that year is a leap year or not ",
      code: `#include <iostream>
using namespace std;

int main() {
    int year;

    cout << "Enter a year: ";
    cin >> year;

    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        cout << year << " is a leap year." << endl;
    } else {
        cout << year << " is not a leap year." << endl;
    }

    return 0;
}
`,
      output: `Enter a year: 2024
2024 is a leap year.`
    },
    55:{
      title: "55. Write a C++ program to input 5 numbers from keyboard and find their sum and average ",
      code: `#include <iostream>
using namespace std;

int main() {
    float num1, num2, num3, num4, num5, sum, average;

    cout << "Enter 5 numbers: ";
    cin >> num1 >> num2 >> num3 >> num4 >> num5;

    sum = num1 + num2 + num3 + num4 + num5;
    average = sum / 5;

    cout << "Sum: " << sum << endl;
    cout << "Average: " << average << endl;

    return 0;
}
`,
      output: `Enter 5 numbers: 12 23 74 35 64
Sum: 208
Average: 41.6`
    },
    56:{
      title: "56. Write a program in C++ to display the first 5 natural numbers ",
      code: `#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;

    return 0;
}
`,
      output: `1 2 3 4 5 `
    },
    57:{
      title: "57. Write a C++ program to check vowel or consonant ",
      code: `#include <iostream>
using namespace std;

int main() {
    char ch;

    cout << "Enter a character: ";
    cin >> ch;

    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
        if (ch == 'a' || ch == 'A' || ch == 'e' || ch == 'E' || ch == 'i' || ch == 'I' || ch == 'o' || ch == 'O' || ch == 'u' || ch == 'U') {
            cout << ch << " is a vowel." << endl;
        } else {
            cout << ch << " is a consonant." << endl;
        }
    } else {
        cout << "Invalid input! Please enter an alphabet." << endl;
    }

    return 0;
}
`,
      output: `Enter a character: m
m is a consonant.`
    },
    58:{
      title: "58. Write a C++ program to display the cube of the number upto given an integer",
      code: `#include <iostream>
using namespace std;

int main() {
    int n;

    cout << "Enter an integer: ";
    cin >> n;

    for (int i = 1; i <= n; i++) {
        cout << "Cube of " << i << " is " << i * i * i << endl;
    }

    return 0;
}
`,
      output: `Enter an integer: 7
Cube of 1 is 1
Cube of 2 is 8
Cube of 3 is 27
Cube of 4 is 64
Cube of 5 is 125
Cube of 6 is 216
Cube of 7 is 343`
    },
    59:{
      title: "59. Write a C++ program to display the n terms of odd natural number and their sum ",
      code: `#include <iostream>
using namespace std;

int main() {
    int n, sum = 0,oddNumber=0;

    cout << "Enter the value of n: ";
    cin >> n;

    cout << "First " << n << " odd natural numbers are: ";
    
    for (int i = 1; i <= n; i++) {
        if(!(i%2==0)){
            oddNumber=i;
        cout << oddNumber << " ";
        sum += oddNumber;
        }
    }

    cout << "\nSum of first " << n << " odd natural numbers is: " << sum << endl;

    return 0;
}
`,
      output: `Enter the value of n: 5
First 5 odd natural numbers are: 1 3 5
Sum of first 5 odd natural numbers is: 9`
    },
    60:{
      title: "60. Write a C++ program to display the multiplication table of a given integer ",
      code: `#include <iostream>
using namespace std;

int main() {
    int num;

    cout << "Enter an integer: ";
    cin >> num;

    cout << "Multiplication table of " << num << " is:" << endl;

    for (int i = 1; i <= 10; i++) {
        cout << num << " x " << i << " = " << num * i << endl;
    }

    return 0;
}
`,
      output: `Enter an integer: 4
Multiplication table of 4 is:
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
4 x 10 = 40`
    },
    61:{
      title: "61. Write a C++ program that reads an integer and check whether it is negative, zero, or positive ",
      code: `#include <iostream>
using namespace std;

int main() {
    int num;

    cout << "Enter an integer: ";
    cin >> num;

    if (num > 0) {
        cout << "The number " << num << " is positive." << endl;
    } 
    else if (num < 0) {
        cout << "The number " << num << " is negative." << endl;
    } 
    else {
        cout << "The number is zero." << endl;
    }

    return 0;
}
`,
      output: `Enter an integer: 5
The number 5 is positive.`
    },
    62:{
      title: "62. Write a C++ program that reads an positive integer and count the number of digits ",
      code: `#include <iostream>
using namespace std;

int main() {
    int num, count = 0;

    cout << "Enter a positive integer: ";
    cin >> num;

    if (num <= 0) {
        cout << "Please enter a positive number." << endl;
        return 0;
    }

    while (num != 0) {
        num = num / 10;
        count++;
    }

    cout << "Number of digits: " << count << endl;

    return 0;
}
`,
      output: `Enter a positive integer: 12345
Number of digits: 5`
    },
    63:{
      title: "63. Write a C++ program that accepts three numbers and check All numbers are equal or not ",
      code: `#include <iostream>
using namespace std;

int main() {
    int num1, num2, num3;

    cout << "Enter three numbers: ";
    cin >> num1 >> num2 >> num3;

    if (num1 == num2 && num2 == num3) {
        cout << "All numbers are equal." << endl;
    } else {
        cout << "The numbers are not equal." << endl;
    }

    return 0;
}
`,
      output: `Enter three numbers: 1 5 9
The numbers are not equal.`
    },
    64:{
      title: "64. Write a C++ program that accepts three numbers from the user and check if numbers are in “increasing” or “decreasing” order.",
      code: `#include <iostream>
using namespace std;

int main() {
    int num1, num2, num3;

    cout << "Enter three numbers: ";
    cin >> num1 >> num2 >> num3;

    if (num1 < num2 && num2 < num3) {
        cout << "The numbers are in increasing order." << endl;
    }
    else if (num1 > num2 && num2 > num3) {
        cout << "The numbers are in decreasing order." << endl;
    }
    else {
        cout << "The numbers are neither in increasing nor decreasing order." << endl;
    }

    return 0;
}
`,
      output: `Enter three numbers: 5 8 3
The numbers are neither in increasing nor decreasing order.`
    },
    65:{
      title: "65. Write a C++ program that determines a student’s grade (81-100 : A, 61-80 : B, 41-60 : C, 0-40 : D) ",
      code: `#include <iostream>
using namespace std;

int main() {
    int score;

    cout << "Enter the student's score: ";
    cin >> score;

    if (score >= 81 && score <= 100) {
        cout << "Grade: A" << endl;
    }
    else if (score >= 61 && score <= 80) {
        cout << "Grade: B" << endl;
    }
    else if (score >= 41 && score <= 60) {
        cout << "Grade: C" << endl;
    }
    else if (score >= 0 && score <= 40) {
        cout << "Grade: D" << endl;
    }
    else {
        cout << "Invalid score entered!" << endl;
    }

    return 0;
}
`,
      output: `Enter the student's score: 86
Grade: A`
    },
    66:{
      title: "66. Write a C++ program to create a simple calculator (1. ADDITION, 2. SUBTRACTION, 3. MULTIPLICATION, 4. DIVISION, 5. EXPONENTIAL, 6. PERCENTAGE, 7. EXIT) ",
      code: `#include <iostream>
#include <cmath>
using namespace std;

int power(int base, int exponent) {
    int result = 1;

    if (exponent > 0) {
        for (int i = 1; i <= exponent; ++i) {
            result *= base;
        }
    } 
    else if (exponent == 0) {
        result = 1;
    } 
    else {
        cout << "Exponent must be non-negative for integer values." << endl;
        result = -1;
    }

    return result;
}

int main() {
    int choice;
    int num1, num2, result;  

    do {
        cout << "Enter the first number: ";
        cin >> num1;

        cout << "Enter the second number: ";
        cin >> num2;

        cout << "Simple Calculator Menu:" << endl;
        cout << "1. Addition" << endl;
        cout << "2. Subtraction" << endl;
        cout << "3. Multiplication" << endl;
        cout << "4. Division" << endl;
        cout << "5. Exponential" << endl;
        cout << "6. Percentage" << endl;
        cout << "7. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        if (choice == 7) {
            cout << "Program exited!" << endl;
            break; 
        }

        if (choice >= 1 && choice <= 6) {
            switch (choice) {
                case 1:
                    result = num1 + num2;
                    cout << "Result: " << result << endl;
                    break;
                case 2:
                    result = num1 - num2;
                    cout << "Result: " << result << endl;
                    break;
                case 3:
                    result = num1 * num2;
                    cout << "Result: " << result << endl;
                    break;
                case 4:
                    if (num2 != 0) {
                        result = num1 / num2;
                        cout << "Result: " << result << endl;
                    } else {
                        cout << "Error! Division by zero." << endl;
                    }
                    break;
                case 5:
                    result = power(num1, num2);
                    cout << "Result: " << result << endl;
                    break;
                case 6:
                    result = (num1 * num2) / 100;
                    cout << "Result: " << result << endl;
                    break;
                default:
                    cout << "Invalid choice." << endl;
                    break;
            }
        } else {
            cout << "Invalid choice, please try again!" << endl;
        }

    } while (choice != 7);

    return 0;
}
`,
      output: `Enter the second number: 78
Simple Calculator Menu:
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exponential
6. Percentage
7. Exit
Enter your choice: 5
Result: 1229027561`
    },
    67:{
      title: "67. Write a C++ program to concatenate two string",
      code: `
        #include<iostream>
        using namespace std;
        
        int main()
        {
            char str1[20], str2[10];
            cout << "Enter first string : ";
            cin >> str1;
            cout << "Enter second string : ";
            cin >> str2;
            int i = 0;
            cout << endl << "Concatenate of 2 strings : " << endl;
            while (str1[i] != '\0')
            {
                cout << str1[i];
                i++;
            }
            i = 0;
            while (str2[i] != '\0')
            {
                cout << str2[i];
                i++;
            }
        }`,
      output: `Enter first string : Hello
        Enter second string : World
        
        Concatenation of two strings : 
        HelloWorld`
    },
    68:{
      title: "68. Write a C++ program to convert all characters in a string to lowercase ",
      code: `#include<iostream>
        #include<string.h>
        using namespace std;
        
        int main()
        {
            char str[20];
            cout << "Enter a String : ";
            cin >> str;
            strlwr(str);
            cout << endl << "String in lowercase : " << str;
        }`,
      output: `
        Enter a String : Hello
        
        String in lowercase : hello`
    },
    69:{
      title: "69. Write a C++ program to convert all characters in a string to uppercase",
      code: `#include<iostream>
        #include<string.h>
        using namespace std;
        
        int main()
        {
            char str[20];
            cout << "Enter a String : ";
            cin >> str;
            strupr(str);
            cout << endl << "String in uppercase : " << str;
        }`,
      output: `  Enter a String : hello
        
        String in uppercase : HELLO`
    },
    70:{
      title: "70. Write a C++ program to trim a string (remove whitespaces) ",
      code: ` #include<iostream>
        #include<string>
        using namespace std;
        
        int main() {
            string st1 = "Hiii  hlo    hii hlo";
            cout << "String before trim : " << st1 << endl;
            int len = st1.length();
            for (int i = 0; i < len; i++) {
                if (st1[i] == ' ') {
                    for (int j = i; j < len; j++) {
                        st1[j] = st1[j + 1];
                    }
                }
                if (st1[i] == ' ') {
                    i--;
                }
            }
            cout << "String after trim : " << st1;
            return 0;
        }`,
      output: `        String before trim : Hiii  hlo    hii hlo
        String after trim : Hiiihlohiihlo`
    },
    71:{
      title: "71. Write a C++ program to get a substring of a given string between two specified positions",
      code: `#include<iostream>
        #include<string>
        using namespace std;
        
        int main() {
            string st, subst = "";
            int strt, end;
            cout << "Enter the string  : ";
            cin >> st;
            cout << "Enter the starting and ending position for substring : ";
            cin >> strt >> end;
            
            if (strt >= 0 && end <= st.length()) {
                for (int i = strt - 1; i < end; i++) {
                    subst += st[i];
                }
                cout << "Substring : " << subst;
            } else {
                cout << "Invalid Range ";
            }
            return 0;
        }`,
      output: `  Enter the string: HelloWorld
        Enter the starting and ending position for substring: 3 7
        Substring: lloWo`
    },
    72:{
      title: "72. Write a C++ program to replace all the ‘d’ characters with ‘f’ characters ",
      code: ` #include<iostream>
        #include<string.h>
        using namespace std;
        
        int main() {
            char str[20];
            cout << "Enter a string : ";
            cin >> str;
            int i = 0;
            while (str[i] != '\0') {
                if (str[i] == 'd' || str[i] == 'D') {
                    str[i] = 'f';
                }
                i++;
            }
            cout << endl << "String after altering : " << str;
        }`,
      output: `    Enter a string : Dodge
        String after altering : fodge`
    },
    73:{
      title: "73. Write a C++ program to get the length of a given string ",
      code: `
        #include<iostream>
        using namespace std;
        
        int main() {
            char str[20];
            cout << "Enter a String : ";
            cin >> str;
            int c = 0, i = 0;
            while (str[i] != '\0') {
                c++;
                i++;
            }
            cout << endl << "Length of Entered String : " << c;
        }`,
      output: `        Enter a String : Hello
        Length of Entered String : 5`
    },
    74:{
      title: "74. Write a C++ program to print current date and time in the specified format ",
      code: ` #include<iostream>
        #include<string.h>
        using namespace std;
        
        int main() {
            char str[20];
            int x, i = 0;
            cout << "Enter a string : ";
            cin >> str;
            int l = strlen(str);
            cout << "Enter index to find character : ";
            cin >> x;
            int f = x - 1;
            if (x < l) {
                while (str[i] != '\0') {
                    if (i == f) {
                        cout << endl << "Character at index " << x << " : " << str[i];
                        break;
                    }
                    i++;
                }
            } else {
                cout << endl << "Invalid Index";
            }
        }`,
      output: ` Enter a string : Hello
        Enter index to find character : 3
        Character at index 3 : l`
    },
    75:{
      title: "75. Write a C++ program to get the character at the given index within the String ",
      code: ` #include<iostream>
        #include<string.h>
        using namespace std;
        
        int main() {
            char str[20];
            int x, i = 0;
            cout << "Enter a string : ";
            cin >> str;
            int l = strlen(str);
            cout << "Enter index to find character : ";
            cin >> x;
            int f = x - 1;
            if (x < l) {
                while (str[i] != '\0') {
                    if (i == f) {
                        cout << endl << "Character at index " << x << " : " << str[i];
                        break;
                    }
                    i++;
                }
            } else {
                cout << endl << "Invalid Index";
            }
        }`,
      output: `
        Enter a string : Hello
        Enter index to find character : 3
        Character at index 3 : l`
    },
    76:{
      title: "76. Write a C++ program to remove a particular character from a string ",
      code: ` #include<iostream>
        #include<string.h>
        using namespace std;
        
        int main() {
            char str[20], ch;
            int l, i = 0;
            cout << "Enter a string : ";
            cin >> str;
            cout << "Enter a character to find in string : ";
            cin >> ch;
            l = strlen(str);
            cout << endl << "String after removing character " << ch << " : ";
            for (i = 0; i < l; i++) {
                if (str[i] == ch) {
                    continue;
                } else {
                    cout << str[i];
                }
            }
        }`,
      output: `output`
    },
    77:{
      title: "77. Write a C++ program to reverse a String ",
      code: `code here`,
      output: `
        Enter a string : Hello
        Enter a character to find in string : l
        String after removing character l : Heo`
    },
    78:{
      title: "78. Write a C++ program to remove html tags from a string ",
      code: `#include<iostream>
        #include<string>
        using namespace std;
        
        int main() {
            string st = "hii hello hii \nThis that there\nthan their that";
            cout << "String : " << endl << st;
            int c = 0;
            for (int i = 0; i < st.length(); i++) { 
                if (st[i] == '\n') {
                    c++;
                }
            }
            cout << endl << "Total number of lines : " << c + 1;
            return 0;
        }`,
      output: ` String :
        hii hello hii
        This that there
        than their that`
    },
    79:{
      title: "79. Write a C++ program to count total number of lines from a string",
      code: `  #include<iostream>
        #include<string>
        using namespace std;
        
        int main() {
            string st = "hii hello hii \nThis that there\nthan their that";
            cout << "String : " << endl << st;
            int c = 0;
            for (int i = 0; i < st.length(); i++) { 
                if (st[i] == '\n') {
                    c++;
                }
            }
            cout << endl << "Total number of lines : " << c + 1;
            return 0;
        }`,
      output: `   String :
        hii hello hii
        This that there
        than their that`
    },
    80:{
      title: "80. Write a C++ Program to Accept the Marks of a Student and find Total Marks and Percentage ",
      code: ` #include<iostream>
        using namespace std;
        
        int main()
        {
            int marks[10], n, sum = 0;
            cout << "Enter number of subjects (1-10) : ";
            cin >> n;
            for (int i = 0; i < n; i++)
            {
                cout << "Enter marks of subject " << i + 1 << " : ";
                cin >> marks[i];
                sum = sum + marks[i];
            }
            float avg = (float)sum / n;
            cout << endl << "Total Marks Obtained : " << sum;
            cout << endl << "Average : " << avg;
        }`,
      output: `        Enter number of subjects (1-10) : 5
        Enter marks of subject 1 : 85
        Enter marks of subject 2 : 90
        Enter marks of subject 3 : 78
        Enter marks of subject 4 : 92
        Enter marks of subject 5 : 88
        
        Total Marks Obtained : 433
        Average : 86.6`
    },
    81:{
      title: "81. Write a C++ program to print numbers from 1 to 10 using loop",
      code: ` #include<iostream>
        using namespace std;
        
        int main()
        {
            int i;
            cout << "Number between 1-10 : ";
            for (i = 1; i <= 10; i++)
            {
                cout << endl << i;
            }
        }`,
      output: `Number between 1-10 :
            1
            2
            3
            4
            5
            6
            7
            8
            9
            10`
    },
    82:{
      title: "82. Write a C++ program to calculate the sum of first 10 natural number using loop ",
      code: `#include<iostream>
        using namespace std;
        
        int main()
        {
            int i, sum = 0;
            for (i = 1; i <= 10; i++)
            {
                sum = sum + i;
            }
            cout << "Sum of natural numbers 1-10 : " << sum;
        }`,
      output: `  Sum of natural numbers from 1 to 10: 55
            `
    },
    83:{
      title: "83. Write a C++ program to print multiplication table of given number",
      code: `
        #include<iostream>
        using namespace std;
        
        int main()
        {
            int n;
            cout << "Enter any number : ";
            cin >> n;
            cout << endl << "Multiplication table of " << n << " : ";
            for (int i = 1; i <= 10; i++)
            {
                cout << endl << n << " X " << i << " = " << (n * i);
            }
        }`,
      output: ` Enter any number: 7
            
            Multiplication table of 7 :
            7 X 1 = 7
            7 X 2 = 14
            7 X 3 = 21
            7 X 4 = 28
            7 X 5 = 35
            7 X 6 = 42
            7 X 7 = 49
            7 X 8 = 56
            7 X 9 = 63
            7 X 10 = 70`
    },
    84:{
      title: "84. Write a C++ program to find the factorial value of any number entered through the keyboard ",
      code: ` #include<iostream>
        using namespace std;
        
        int main()
        {
            int n, fact = 1;
            cout << "Enter any number to find Factorial : ";
            cin >> n;
            for (int i = 1; i <= n; i++)
            {
                fact = fact * i;
            }
            cout << endl << "Factorial of " << n << " is : " << fact;
        }`,
      output: `Enter any number to find Factorial: 5
            
            Factorial of 5 is: 120`
    },
    85:{
      title: "85. Write a C++ program that prompts the user to input an integer and then outputs the number with the digits reversed order",
      code: ` #include<iostream>
        using namespace std;
        
        int main()
        {
            int n, rem, rev = 0;
            cout << "Enter any integer : ";
            cin >> n;
            int m = n;
            while (m != 0)
            {
                rem = m % 10;
                rev = rev * 10 + rem;
                m = m / 10;
            }
            cout << endl << "Number with reverse digits : " << rev;
        }`,
      output: `  Enter any integer: 12345
            
            Number with reverse digits: 54321`
    },
    86:{
      title: "86. Write a C++ program that reads a set of integers, and then prints the sum of the even and odd integers using loop ",
      code: `#include<iostream>
        using namespace std;
        
        int main()
        {
            int n[20], sumo = 0, sume = 0;
            int i, x;
            cout << "Enter number of integers (1-20) : ";
            cin >> x;
            for (i = 0; i < x; i++)
            {
                cout << "Enter number " << i + 1 << " : ";
                cin >> n[i];
            }
            for (i = 0; i < x; i++)
            {
                if (n[i] % 2 == 0)
                {
                    sume = sume + n[i];
                }
                else
                {
                    sumo = sumo + n[i];
                }
            }
            cout << endl << "Sum of all Even numbers : " << sume;
            cout << endl << "Sum of all Odd numbers : " << sumo;
        }`,
      output: `Enter number of integers (1-20) : 4
            Enter number 1 : 3
            Enter number 2 : 5
            Enter number 3 : 6
            Enter number 4 : 8
            
            Sum of all Even numbers : 14
            Sum of all Odd numbers : 8`
    },
    87:{
      title: "87. Write a C++ program to check whether the number is a prime number or not",
      code: ` #include<iostream>
        using namespace std;
        
        int main()
        {
            int n, c = 0;
            cout << "Enter any number : ";
            cin >> n;
            for (int i = 2; i <= (n / 2); i++)
            {
                if (n % i == 0)
                {
                    c++;
                    break;
                }
            }
            if (c == 0)
            {
                cout << endl << n << " is a prime number";
            }
            else
            {
                cout << endl << n << " is not a prime number";
            }
        }`,
      output: ` Enter any number: 20
            20 is not a prime number`
    },
    88:{
      title: "88. Write a C++ program to calculate HCF of Two given numbers using loop",
      code: `#include<iostream>
        using namespace std;
        
        int main()
        {
            int x, y, i, c = 0;
            cout << "Enter first number : ";
            cin >> x;
            cout << "Enter second number : ";
            cin >> y;
            if (x < y)
            {
                for (i = 2; i <= x; i++)
                {
                    if (x % i == 0 && y % i == 0)
                    {
                        cout << "HCF of " << x << " and " << y << " : " << i;
                        c++;
                        break;
                    }
                }
            }
            else if (x > y)
            {
                for (i = 2; i <= y; i++)
                {
                    if (x % i == 0 && y % i == 0)
                    {
                        cout << "HCF of " << x << " and " << y << " : " << i;
                        c++;
                        break;
                    }
                }
            }
            if (c == 0)
            {
                cout << endl << "HCF of " << x << " and " << y << " : 1";
            }
        }`,
      output: `Enter first number: 13
            Enter second number: 17
            HCF of 13 and 17 : 1`
    },
    89:{
      title: "89. Write a C++ program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros ",
      code: `
        #include<iostream>
        using namespace std;
        
        int main()
        {
            int n[20], x;
            int cp = 0, cn = 0, cz = 0, i;
            cout << "Enter total numbers of integers : ";
            cin >> x;
            for (i = 0; i < x; i++)
            {
                cout << "Enter number " << i + 1 << " : ";
                cin >> n[i];
        
                if (n[i] > 0)
                {
                    cp++;
                }
                else if (n[i] < 0)
                {
                    cn++;
                }
                else
                {
                    cz++;
                }
            }
            cout << endl << "Count of positive numbers : " << cp;
            cout << endl << "Count of negative numbers : " << cn;
            cout << endl << "Count of zeros : " << cz;
        }`,
      output: `Enter total numbers of integers: 6
            Enter number 1: 5
            Enter number 2: -3
            Enter number 3: 8
            Enter number 4: -2
            Enter number 5: 0
            Enter number 6: 7
            
            Count of positive numbers: 4
            Count of negative numbers: 2
            Count of zeros: 1`
    },
    90:{
      title: "90. Write a C++ program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered",
      code: ` #include<iostream>
        using namespace std;
        
        int main()
        {
            int n[20], x;
            int i, sml, grt;
            cout << "Enter total numbers of integers : ";
            cin >> x;
            for (i = 0; i < x; i++)
            {
                cout << "Enter number " << i + 1 << " : ";
                cin >> n[i];
            }
            sml = grt = n[0];
            for (i = 0; i < x; i++)
            {
                if (n[i] > grt)
                {
                    grt = n[i];
                }
                else if (n[i] < sml)
                {
                    sml = n[i];
                }
            }
            cout << endl << "Largest number entered : " << grt;
            cout << endl << "Smallest number entered : " << sml;
        }`,
      output: `Enter total numbers of integers: 5
            Enter number 1 : 5
            Enter number 2 : 10
            Enter number 3 : -3
            Enter number 4 : 8
            Enter number 5 : -6
            
            Largest number entered: 10
            Smallest number entered: -6`
    }, 
    91:{
      title: "91. Write a C++ program to print out all Armstrong numbers between 1 to 600 using loop ",
      code: `#include<iostream>
        using namespace std;
        
        int main()
        {
            int i, j, sum, rem;
            cout << "Armstrong Number between 1-600 : ";
            for (i = 1; i <= 600; i++)
            {
                if (i < 10)
                {
                    cout << endl << i;
                }
                else
                {
                    j = i;
                    sum = 0;
                    while (j != 0)
                    {
                        rem = j % 10;
                        sum = sum + (rem * rem * rem);
                        j = j / 10;
                    }
                    if (sum == i)
                    {
                        cout << endl << i;
                    }
                }
            }
        }`,
      output: `Armstrong Number between 1-600 :
            1
            153
            370
            371
            407`
    }, 
    92:{
      title: "92. Write a C++ program to count total number of notes in entered amount using loop",
      code: `#include<iostream>
        #include<string.h>
        using namespace std;
        
        int main()
        {
            char num[20];
            int c = 0;
            cout << "Enter amount : ";
            cin >> num;
            int l = strlen(num);
            for (int i = 0; i < l; i++)
            {
                if (num[i] == ',')
                {
                    c++;
                }
            }
            cout << endl << "Number of notes in entered amount " << num << " : " << c;
        }`,
      output: ` Enter amount: 1,000,000
            
            Number of notes in entered amount 1,000,000 : 2`
    }, 
    93:{
      title: "93. Write a C++ program to print Fibonacci series of n terms where n is input by user using loop",
      code: `#include<iostream>
        using namespace std;
        
        int main()
        {
            int n, t1 = 0, t2 = 1, nt;
            cout << "Enter number of terms in Fibonacci Series : ";
            cin >> n;
            cout << endl << "Fibonacci Series : " << endl;
            if (n == 0)
            {
                cout << "Zero terms printed";
            }
            else if (n == 1)
            {
                cout << "\t0";
            }
            else if (n == 2)
            {
                cout << "\t0\t1";
            }
            else
            {
                cout << "\t0\t1";
                int c = 3;
                while (c <= n)
                {
                    nt = t1 + t2;
                    t1 = t2;
                    t2 = nt;
                    cout << "\t" << nt;
                    c++;
                }
            }
        }`,
      output: `Enter number of terms in Fibonacci Series: 10
            
            Fibonacci Series:
                    0       1       1       2       3       5       8       13      21      34
            `
    }, 
    94:{
      title: "94. Write a C++ program to calculate the sum of following series where n is input by user ",
      code: `#include<iostream>
        using namespace std;
        int main(){
            float a, b, c;
            cout << "Enter three numbers : ";
            cin >> a >> b >> c;
            cout << "Average of three numbers : " << (a + b + c) / 3;
            return 0;
        }`,
      output: `Enter three numbers: 10 20 30
            Average of three numbers: 20`
    }, 
    95:{
      title: "95. Write a C++ method to compute the average of three numbers ",
      code: `#include<iostream>
        using namespace std;
        int main(){
            float a, b, c;
            cout << "Enter three numbers : ";
            cin >> a >> b >> c;
            cout << "Average of three numbers : " << (a + b + c) / 3;
            return 0;
        }`,
      output: `
            Enter three numbers: 10 20 30
            Average of three numbers: 20`
    }, 
    96:{
      title: "96. Write a C++ method to find the smallest number among three numbers",
      code: `
        #include<iostream>
        using namespace std;
        int main(){
            float a, b, c;
            cout << "Enter three numbers A, B, and C : ";
            cin >> a >> b >> c;
            if (a < b) {
                if (a < c) {
                    cout << "A is smallest";
                }
                else {
                    cout << "C is smallest";
                }
            }
            else if (c < b) {
                cout << "C is smallest ";
            }
            else if (b == a && b == c) {
                cout << "All three are equal ";
            }
            else {
                cout << "B is smallest";
            }
            return 0;
        }`,
      output: ` Enter three numbers A, B, and C: 5 3 7
            B is smallest`
    },
     97:{
      title: "97. Write a C++ method to check whether an year entered by the user is a leap year or not",
      code: `#include<iostream>
        using namespace std;
        int main(){
            int y;
            cout << "Enter the year : ";
            cin >> y;
            if (y % 4 == 0 && y % 100 != 0 || y % 400 == 0) {
                cout << "Leap year ";
            }
            else {
                cout << "Not a leap year ";
            }
            return 0;
        }`,
      output: `Enter the year: 2024
            Leap year`
    },
     98:{
      title: "98. Write a C++ program to accept a float value of number and return a rounded float value ",
      code: `#include<iostream>
        #include<cmath>
        using namespace std;
        int main(){
            float f;
            cout << "Enter the float value : ";
            cin >> f;
            cout << "Rounded float value : " << round(f);
            return 0;
        }`,
      output: `Enter the float value: 3.7
            Rounded float value: 4`
    },
     99:{
      title: "99. Write a C++ method to compute the sum of the digits in an integer ",
      code: `#include<iostream>
        using namespace std;
        int main(){
            int a, s = 0;
            cout << "Enter the number : ";
            cin >> a;
            int r;
            while (a != 0) {
                r = a % 10;
                s += r;
                a /= 10;
            }
            cout << "Sum of digits of an integer : " << s;
            return 0;
        }`,
      output: `Enter the number: 12345
            Sum of digits of an integer: 15`
    }, 
    100:{
      title: "100. Write a C++ method to calculate the area of a triangle ",
      code: `
        #include<iostream>
        using namespace std;
        int main(){
            float b,h;
            cout<<"Enter the Base and height of triangle : ";
            cin>>b>>h;
            cout<<"Area : "<<(b*h)/2.0;
            return 0;
        }`,
      output: ` Enter the Base and height of triangle: 5 8
            Area: 20`
    },
    101:{
      title: "101. Write a C++ method to find the area of a pentagon ",
      code: `
        #include<iostream>
        using namespace std;
        int main(){
            int a,s=0;
            cout<<"Enter the number : ";
            cin>>a;
            int r;
            while(a!=0){
                r=a%10;
                s+=r;
                a/=10;
            }
            cout<<"Sum of digits of an integer : "<<s;
            return 0;
        }`,
      output: ` Enter the number: 12345
        Sum of digits of an integer: 15`
    },
    102:{
      title: "102. Write a C++ method to find number is even number or not",
      code: `#include<iostream>
        using namespace std;
        int main(){
            int m;
            cout<<"Enter the number : ";
            cin>>m;
            if((m&1)==0){
                cout<<"Even number ";
            }
            else{
                cout<<"Not an even number";
            }
            return 0;
        }`,
      output: `Enter the number: 6
        Even number`
    },
    103:{
      title: "103. Write a C++ method to check numbers is palindrome number or not ",
      code: `#include<iostream>
          using namespace std;
          int main(){
             int n;
             cout<<"Enter the number : ";
             cin>>n;
                int temp=n,p=0;
                while(n>0){
                  p=p*10+(n%10);
                  n=n/10;
                }
                if (temp==p){
                  cout<<"Pallindrome";
                }
                else{
                  cout<<"Not a Pallindrome";
                }
             return 0;
          }`,
      output: `Enter the number: 12321
          Palindrome`
    },
    104:{
      title: "104. Write a C++ method to displays prime numbers between 1 to 20 ",
      code: ` #include<iostream>
          using namespace std;
          int main(){
             int c=0;
             cout<<"Prime numbers between 1 to 20 : "<<endl;
             for(int i=1;i<21;i++){
              c=0;
              for(int j=2;j<i;j++){
                 if(i%j==0){
                    c=1;        
                 }
              }
              if(c==0){
                  cout<<i<<endl;
              }
             }
             return 0;
          }`,
      output: `Prime numbers between 1 to 20:
              1
              2
              3
              5
              7
              11
              13
              17
              19`
    },
    105:{
      title: "105. Write a C++ method to find GCD and LCM of Two Numbers ",
      code: `#include<iostream>
          using namespace std;
          int main(){
            int a,b,r;
            cout<<"Enter the number A and B : ";
            cin>>a>>b;
            if(a>b){
                r=b;
            }
            else{
                r=a;
            }
            while(r>0){
                if(a%r==0 && b%r==0){
                    break;
                }
                r--;
            }
            cout<<"GCD of "<<a<<" and "<<b<<" : "<<r<<endl;
            cout<<"LCM of "<<a<<" and "<<b<<" : "<<(a*b)/r;
            return 0;
          }`,
      output: `GCD of 12 and 18 : 6
              LCM of 12 and 18 : 36`
    },
    106:{
      title: "106. Write a C++ method to find factorial using recursion ",
      code: `#include<iostream>
          using namespace std;
          int facrec(int n){
              if(n<=1){
                  return 1;
              }
              else{
                  return n*facrec(n-1);
              }
          }
          int main(){
              int num;
              cout<<"Enter the number for factorial : ";
              cin>>num;
              cout<<"Factorial using recursion : "<<facrec(num);
              return 0;
          }`,
      output: `Factorial using recursion: 120`
    },
    107:{
      title: "107. Write a C++ program to reverse an integer number ",
      code: `#include<iostream>
          using namespace std;
          int main(){
              int n,r=0,rem;
              cout<<"Enter the number : ";
              cin>>n;
              while(n!=0){
                  rem=n%10;
                  r=r*10+rem;
                  n/=10;
              }
              cout<<"Reverse of integer : "<<r;
              return 0;
          }`,
      output: `Enter the number: 12345
          Reverse of integer: 54321`
    },
    108:{
      title: "108. Write a C++ program to round a float number to specified decimals",
      code: `#include<iostream>
          #include<cmath>
          using namespace std;
          int main(){
              int n;
              float f,r;
              cout<<"Enter the float value : "; 
              cin>>f;
              cout<<"Enter the number of decimal to round up : ";
              cin>>n;
              r=round(f);
              int temp=f,len=0;
              while(temp!=0){
                  len++;
                  temp/=10;
              }
              r=(float)r/pow(10,len-n);
              cout<<"Rounded float value : "<<round(r);
              return 0;
          }`,
      output: ` Enter the float value: 3.14159
              Enter the number of decimal places to round up: 2
              Rounded float value: 3.14`
    },
    109:{
      title: "109. Write a C++ program to test if a double number is an integer ",
      code: `
          #include<iostream>
          using namespace std;
          int main(){
              int n;
              float f;
              cout<<"Enter the Double number : "; 
              cin>>f;
              n=f;
              if(n==f){
                  cout<<"Double number is an integer";
              }
              else{
                  cout<<"Double number is not an integer";
              }
              return 0;
          }`,
      output: `Enter the double number: 5.0
              Double number is an integer`
    },
    110:{
      title: "110. Write a C++ program to round up the result of integer division ",
      code: `
          #include<iostream>
          #include<cmath>
          using namespace std;
          int main(){
              int a,b;
              cout<<"Enter the number and A and B (B/A) : "; 
              cin>>a>>b;
              cout<<"Rounded result of integer division : "<<round((float)b/a); 
              return 0;
          }`,
      output: `
              Enter the numbers A and B (B/A): 5 13
              Rounded result of integer division: 3`
    },
    111:{
      title: "111. Write a C++ program to convert Roman number to an integer number",
      code: `#include<iostream>
          #include<string>
          using namespace std;
          int roman(char m){
              char rom[]="MDCLXVI";
              for(int i=0;i<7;i++){
                  if(m==rom[0]){
                      return 1000;
                  }
                  else if(m==rom[1]){
                      return 500;
                  }
                  else if(m==rom[2]){
                      return 100;
                  }
                  else if(m==rom[3]){
                      return 50;
                  }
                  else if(m==rom[4]){
                      return 10;
                  }
                  else if(m==rom[5]){
                      return 5;
                  }
                  else if(m==rom[6]){
                      return 1;
                  }
                  else{
                      return 0;
                  }
              }
          }
          int main(){
              string st;
              int n=0;
              cout<<"Enter the roman number in capital : ";
              cin>>st;
              for(int i=0;i<st.length();i++){
                  int temp=roman(st[i]);
                  if(temp<roman(st[i+1])){
                         n=n-temp;
                  }
                  else{
                      n=n+temp;
                  }
              }
              cout<<"Integer value of the roman number : "<<n;
              return 0;
          }`,
      output: ` Enter the Roman number in capital: MCMLXXVI
              Integer value of the Roman number: 1976`
    },
    112:{
      title: "112. Write a C++ program to convert a float value to absolute value ",
      code: `          #include<iostream>
          using namespace std;
          int main(){
              float f;
              cout<<"Enter the float value : ";
              cin>>f;
              if(f>=0){
                  cout<<"Absolute value : "<<f;
              }
              else{
                  cout<<"Absolute value : "<<-f;
              }
              return 0;
          }`,
      output: `Enter the float value: -3.14
          Absolute value: 3.14`
    },
    113:{
      title: "113. Create a class entering the command line arguments from the user and show all the arguments as output.",
      code: `#include<iostream>
          using namespace std;
      
          class A {
          public:
              void d(int argc, char* argv[]) {
                  cout << "Number of arguments: " << argc << endl;
                  cout << "Arguments:" << endl;
                  for (int i = 0; i < argc; ++i) {
                      cout << "Argument " << i << ": " << argv[i] << endl;
                  }
              }
          };
      
          int main(int argc, char* argv[]) {
              A a;
              a.d(argc, argv);
              return 0;
          }`,
      output: `Number of arguments: 1
              Arguments:
              Argument 0:`
    }

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
  