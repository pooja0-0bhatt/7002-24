const Strings = {
    1: {
      title: "1. Program to Check Anagram  ",
      code: `#include<iostream>
using namespace std;
 
int main()
{
	int size,i,j,matched=0;
	cout<<"Enter the size of the string : "<<endl;
	cin>>size;
	
	char str[size+1];
	char str1[size+1];
	
	cout<<"Enter the first string : "<<endl;
	for(i=0;i<size;i++){
		cin>>str[i];
	}
	
	cout<<"Enter the second string : "<<endl;
	for(i=0;i<size;i++){
		cin>>str1[i];
	}
	
	for(i=0;i<size;i++){
		for(j=0;j<size;j++){
			if(str[i]==str1[j]){
				matched=1;
				break;
			}else{
				matched=0;
			}
		}
		if(matched==0){
			cout<<"Not an anagram."<<endl;
			break;
		}
	}
	
	if(matched){
		cout<<"The string is anagram.";
	}

}
`,
      output: `Enter the size of the string : 
3
Enter the first string : 
car
Enter the second string : 
arc
The string is anagram.`
    },
  
    2: {
      title: "2. Program to Swapping Pair of Characters. ",
      code: `#include<iostream>
using namespace std;

int main(){
	
	int size,i,j,index1=-1,index2=-1;
	char c,c1,swap;
	cout<<"Enter the size of the string : "<<endl;
	cin>>size;
	
	char str[size+1];
	
	cout<<"Enter the string : "<<endl;
	for(i=0;i<size;i++){
		cin>>str[i];
	}
	cout<<"Enter the first character : ";
	cin>>c;
	cout<<"Enter the second character : ";
	cin>>c1;
    
	for(i=0;i<size;i++){
		if(str[i]==c){
			index1=i;
		}else if(str[i]==c1){
			index2=i;
		}
	}
    if(index1==-1 || index2==-1){
        cout<<"Either of the character is not found in the string."<<endl;
        exit(0);
    }
	swap=str[index1];
	str[index1]=str[index2];
	str[index2]=swap;
	
	cout<<"The string after swapping : "<<endl;
	for(i=0;i<size;i++){
		cout<<str[i];
	}
	
}
`,
      output: `Enter the size of the string : 
5
Enter the string :
hello
Enter the first character : e
Enter the second character : o
The string after swapping :
holle`
    },

    3: {
        title: "3. Program to Check if a String contains only digits? ",
        code: `#include<iostream>
using namespace std;

int main()
{
	int size,i,j,result=0;
	char temp;
	cout<<"Enter the size of the string : "<<endl;
	cin>>size;
	
	char str[size+1];
	
	cout<<"Enter the string : "<<endl;
	for(i=0;i<size;i++){
		cin>>str[i];
	}
	for(i=0;i<size;i++){
		temp=str[i];
		if(temp>47 && temp<58){
			result=1;
		}else{
			break;
		}
	}
	
	if(result){
		cout<<"The string contains only digits .";
	}else{
		cout<<"The string not contains only digits .";
	}
}
`,
        output: `Enter the size of the string : 
5
Enter the string : 
12345
The string contains only digits .`
      },
      4: {
        title: "4. Program to perform Deep Copy for String? ",
        code: `#include <iostream>
#include <cstring>
using namespace std;

int main() {
    int size, i;
    cout << "Enter the size of the string : ";
    cin >> size;

    char *str = new char[size + 1];  
    char *str2 = new char[size + 1]; 

    cout << "Enter the string 1 : " << endl;
    for(i=0;i<size;i++){
        cin>>str[i];
    }
    str[size] = '\0'; 

    for (i = 0; i < size; i++) {
        str2[i] = str[i]; 
    }
    str2[size] = '\0'; 

    cout << "\nString 1 (Original): " << str << endl;
    cout << "String 2 (Deep Copy): " << str2 << endl;

    strcpy(str2, "hello");  

    cout << "\nString 2 after edit: " << str2 << endl;
    cout << "String 1 (Original) after edit: " << str << endl;

    delete[] str;
    delete[] str2;

    return 0;
}
`,
        output: `Enter the size of the string : 5
Enter the string 1 :
level

String 1 (Original): level
String 2 (Deep Copy): level

String 2 after edit: hello
String 1 (Original) after edit: level`
      },
      5: {
        title: "5. Program to remove all occurrences of a given character from input String? ",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    char charToRemove;

    cout << "Enter a string: ";
    getline(cin, str);
    cout << "Enter the character to remove: ";
    cin >> charToRemove;

    string result;
    for (int i = 0; i < str.length(); i++) {
        if (str[i] != charToRemove) {
            result += str[i]; 
        }
    }

    cout << "Modified string: " << result << endl;

    return 0;
}
`,
        output: `Enter a string: hello
Enter the character to remove: l
Modified string: heo`
      },
      6: {
        title: "6. Program to Add Characters to a String ",
        code: `#include <iostream>
using namespace std;

int main() {
    int initialSize, addSize;

    cout << "Enter the initial size of the character array: ";
    cin >> initialSize;

    char* original = new char[initialSize + 1]; 
    cout << "Enter the original string (max " << initialSize << " characters): ";
    cin.ignore();
    cin.getline(original, initialSize + 1);

    cout << "Enter the number of characters to add: ";
    cin >> addSize;

    char* extended = new char[initialSize + addSize + 1]; 

    for (int i = 0; i < initialSize; i++) {
        extended[i] = original[i];
    }

    cout << "Enter " << addSize << " additional characters (no spaces): ";
    for (int i = 0; i < addSize; i++) {
        cin >> extended[initialSize + i];
    }

    extended[initialSize + addSize] = '\0';

    cout << "Final string after adding characters: " << extended << endl;

    delete[] original;
    delete[] extended;

    return 0;
}
`,
        output: `Enter the initial size of the character array: 6
Enter the original string (max 6 characters): Hello!
Enter the number of characters to add: 6
Enter 6 additional characters (no spaces):  World!
Final string after adding characters: Hello!World!`
      },
      7: {
        title: "7. Program to check whether a string is a Palindrome ",
        code: `#include <iostream>
#include <cstring>
using namespace std;

int main() {
    int size, i,j,isPalindrome=0;
    cout << "Enter the size of the string : ";
    cin >> size;

    char *str = new char[size + 1];  
    char *str2 = new char[size + 1]; 

    cout << "Enter the string 1 : " << endl;
    for(i=0;i<size;i++){
        cin>>str[i];
    }
    str[size] = '\0'; 

    for (i = size-1,j=0; i >0,j<size; i--,j++) {
        str2[j] = str[i]; 
        
    }
    str2[size] = '\0'; 

    for(i=0;i<size;i++){
        if(str2[i]==str[i]){
            isPalindrome=1;
        }else{
            isPalindrome=0;
        }
    }

    if(isPalindrome){
        cout << "The string is a palindrome." << endl;
    }
    else{
        cout << "The string is not a palindrome." << endl;
        }


    return 0;
}
`,
        output: `Enter the size of the string : 5
Enter the string 1 :
madam
The string is a palindrome.`
      },
      8: {
        title: "8. Program to Convert Enum to String.",
        code: `#include <iostream>
using namespace std;

enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
};

const char* dayToString(Day d) {
    const char* days[] = {
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    };

    if ((int)d >= 0 && (int)d < 7) {
        return days[(int)d]; 
    } else {
        return "Invalid Day";
    }
}

int main() {
    int dayIndex;
    cout << "Enter a number (0 for Monday to 6 for Sunday): ";
    cin >> dayIndex;

    Day today = (Day)dayIndex; 
    cout << "The day is: " << dayToString(today) << endl;

    return 0;
}
`,
        output: `Enter a number (0 for Monday to 6 for Sunday): 3
The day is: Thursday`
      },
      9: {
        title: "9. Program to count number of words in a String? ",
        code: `#include<iostream>
#include<cstring>
using namespace std;

int main(){
    int size,wordCount=0 ;
    cout << "Enter the size of the string : ";
    cin >> size ;
    cin.ignore();
    char *str=new char[size+1];
    cout << "Enter the string : "<<endl;
    cin.getline(str,size);
    cout << "The string is : " << str <<endl;

    for(int i=0;i<size;i++){
        if(str[i]==' '){
            wordCount++ ;
        }
    }
    cout << "The number of words in the string is : "<<wordCount+1<<endl;
    return 0;
}`,
        output: `Enter the size of the string : 40
Enter the string :
you get what you work for.
The string is : you get what you work for.
The number of words in the string is : 6`
      },
      10: {
        title: "10. Program to count the total number of characters in a string ",
        code: `#include <iostream>
using namespace std;

int main() {

    string str;
    cout << "Enter the string: ";
    cin.ignore(); 
    getline(cin,str); 

    int count = 0;
    while (str[count] != '\0') {
        count++;
    }

    cout << "Total number of characters: " << count+1 << endl;


    return 0;
}
`,
        output: `Enter the string: hello everyone
Total number of characters: 14`
      },
      11: {
        title: "11. Program to count the total number of punctuation characters exists in a String",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string text;
    
    cout << "Enter a string: ";
    getline(cin, text); 

    int punctuationCount = 0;

    for (int i = 0; i < text.length(); i++) {
        char ch = text[i];

       
        if ((ch >= 33 && ch <= 47) ||
            (ch >= 58 && ch <= 64) ||
            (ch >= 91 && ch <= 96) ||
            (ch >= 123 && ch <= 126)) {
            punctuationCount++;
        }
    }

    cout << "Total number of punctuation characters: " << punctuationCount << endl;

    return 0;
}
`,
        output: `Enter a string: hello! everyone.
Total number of punctuation characters: 2`
      },
      12: {
        title: "12. Program to count the total number of vowels and consonants in a string ",
        code: `#include <iostream>
#include <string>
using namespace std;

bool isVowel(char ch) {
    if(ch>=65 && ch<=90) {
    ch -=32; 
    }
    return (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u');
}

int main() {
    string text;
    cout << "Enter a string: ";
    getline(cin, text); 

    int vowels = 0, consonants = 0;

    for (int i = 0; i < text.length(); i++) {
        char ch = text[i];

        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) { 
            if (isVowel(ch))
                vowels++;
            else
                consonants++;
        }
    }

    cout << "Total number of vowels: " << vowels << endl;
    cout << "Total number of consonants: " << consonants << endl;

    return 0;
}
`,
        output: `Enter a string: never giveup
Total number of vowels: 5
Total number of consonants: 6`
      },
      13: {
        title: "13. Program to determine whether a given string is palindrome ",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string original, reversed = "";

    cout << "Enter a string: ";
    getline(cin, original);

    for (int i = original.length() - 1; i >= 0; i--) {
        reversed += original[i];
    }

    bool isPalindrome = true;
    for (int i = 0; i < original.length(); i++) {
        char a = original[i];
        char b = reversed[i];

        if (a >= 'A' && a <= 'Z') a = a + 32;
        if (b >= 'A' && b <= 'Z') b = b + 32;

        if (a != b) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        cout << "The string is a palindrome." << endl;
    } else {
        cout << "The string is not a palindrome." << endl;
    }

    return 0;
}
`,
        output: `Enter a string: level
The string is a palindrome.`
      },
      14:{
        title: "14. Program to determine whether one string is a rotation of another",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str1, str2;
    
    cout << "Enter the first string: ";
    getline(cin, str1);
    
    cout << "Enter the second string: ";
    getline(cin, str2);

    if (str1.length() != str2.length()) {
        cout << "Not a rotation (different lengths)." << endl;
        return 0;
    }

    string concatenated = str1 + str1;

    bool isRotation = false;

    for (int i = 0; i <= concatenated.length() - str2.length(); i++) {
        bool match = true;
        for (int j = 0; j < str2.length(); j++) {
            if (concatenated[i + j] != str2[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            isRotation = true;
            break;
        }
    }

    if (isRotation) {
        cout << "The second string is a rotation of the first." << endl;
    } else {
        cout << "The second string is NOT a rotation of the first." << endl;
    }

    return 0;
}
`,
        output: `Enter the first string: hello
Enter the second string: ohell
The second string is a rotation of the first.`
      },
      15:{
        title: "15. Program to divide a string in 'N' equal parts. ",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    int n;

    cout << "Enter the string: ";
    getline(cin, str);

    cout << "Enter number of parts (N): ";
    cin >> n;

    int len = str.length();

    if (len % n != 0) {
        cout << "The string cannot be divided into equal parts." << endl;
        return 0;
    }

    int partSize = len / n;

    cout << "Divided parts are:" << endl;
    for (int i = 0; i < len; i++) {
        cout << str[i];

        if ((i + 1) % partSize == 0) {
            cout << endl;
        }
    }

    return 0;
}
`,
        output: `Enter the string: hello world!
Enter number of parts (N): 2
Divided parts are:
hello
world!`
      }, 
      16:{
        title: "16. Program to find all subsets of a string ",
        code: `#include <iostream>
#include <string>
#include <math.h> 
using namespace std;

int main() {
    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    int len = str.length();
    int totalSubsets = pow(2, len); 

    cout << "All subsets of the string are:" << endl;
    for (int i = 0; i < totalSubsets; i++) {
        string subset = "";
        for (int j = 0; j < len; j++) {
            if ((i >> j) & 1) {
                subset += str[j];
            }
        }
        cout << subset << endl;
    }

    return 0;
}
`,
        output: `Enter a string: god
All subsets of the string are:

g
o
go
d
gd
od
god`
      }, 
      17:{
        title: "17. Program to find all the permutations of a string",
        code: `#include <iostream>
#include <string>
using namespace std;

void swap(char &a, char &b) {
    char temp = a;
    a = b;
    b = temp;
}

void permute(string &str, int left, int right) {
    if (left == right) {
        cout << str << endl;
    } else {
        for (int i = left; i <= right; i++) {
            swap(str[left], str[i]);            
            permute(str, left + 1, right);      
            swap(str[left], str[i]);           
        }
    }
}

int main() {
    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    cout << "All permutations of the string are:" << endl;
    permute(str, 0, str.length() - 1);

    return 0;
}
`,
        output: `Enter a string: god
All permutations of the string are:
god
gdo
ogd
odg
dog
dgo`
      },
      18:{
        title: "18. Program to find maximum and minimum occurring character in a string ",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    int freq[26] = {0}; 

    for (int i = 0; i < str.length(); i++) {
        char ch = str[i];

        if (ch >= 'A' && ch <= 'Z') {
            ch = ch + 32;
        }

        if (ch >= 'a' && ch <= 'z') {
            freq[ch - 'a']++;
        }
    }

    int maxFreq = 0, minFreq = 1000;
    char maxChar = ' ', minChar = ' ';

    for (int i = 0; i < 26; i++) {
        if (freq[i] > 0) {
            if (freq[i] > maxFreq) {
                maxFreq = freq[i];
                maxChar = i + 'a';
            }
            if (freq[i] < minFreq) {
                minFreq = freq[i];
                minChar = i + 'a';
            }
        }
    }

    cout << "Maximum occurring character: " << maxChar << " (" << maxFreq << " times)" << endl;
    cout << "Minimum occurring character: " << minChar << " (" << minFreq << " times)" << endl;

    return 0;
}
`,
        output: `Enter a string: hello
Maximum occurring character: l (2 times)
Minimum occurring character: e (1 times)`
      },
      19:{
        title: "19. Program to find Reverse of the string ",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str, reversed = "";

    cout << "Enter a string: ";
    getline(cin, str);

    for (int i = str.length() - 1; i >= 0; i--) {
        reversed += str[i];
    }

    cout << "Reversed string: " << reversed << endl;

    return 0;
}
`,
        output: `Enter a string: hello
Reversed string: olleh`
      },
      20:{
        title: "20. Program to find the duplicate characters in a string ",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    int freq[26] = {0};  

    for (int i = 0; i < str.length(); i++) {
        char ch = str[i];

        if (ch >= 'A' && ch <= 'Z') {
            ch = ch + 32;
        }

        if (ch >= 'a' && ch <= 'z') {
            freq[ch - 'a']++;
        }
    }

    cout << "Duplicate characters are:" << endl;
    for (int i = 0; i < 26; i++) {
        if (freq[i] > 1) {
            cout << (char)(i + 'a') << " appears " << freq[i] << " times" << endl;
        }
    }

    return 0;
}
`,
        output: ` Cpp programming
Duplicate characters are:
g appears 2 times
m appears 2 times
p appears 3 times
r appears 2 times`
      },
      21:{
        title: "21. Program to find the duplicate words in a string ",
        code: `#include<iostream>
using namespace std;

int main() {
    int size1, size2, pos;

    cout << "Enter the size of the first string: ";
    cin >> size1;
    cin.ignore();

    char str1[size1];
    cout << "Enter the first string: ";
    cin.getline(str1, size1);

    cout << "Enter the size of the string to insert: ";
    cin >> size2;
    cin.ignore();

    char str2[size2];
    cout << "Enter the string to insert: ";
    cin.getline(str2, size2);

    cout << "Enter the position to insert the string (starting from 0): ";
    cin >> pos;

    // Get lengths
    int len1 = 0, len2 = 0;
    while(str1[len1] != '\0') len1++;
    while(str2[len2] != '\0') len2++;

    if(pos < 0 || pos > len1) {
        cout << "Invalid position!" << endl;
        return 1;
    }

    char result[200]; 
    int i = 0;

    for(i = 0; i < pos; i++) {
        result[i] = str1[i];
    }

    for(int j = 0; j < len2; j++) {
        result[i] = str2[j];
        i++;
    }
    for(int j = pos; j < len1; j++) {
        result[i] = str1[j];
        i++;
    }

    result[i] = '\0';

    cout << "Final string after insertion: " << result << endl;

    return 0;
}
`,
        output: `#include<iostream>
using namespace std;

int main() {
    int size1, size2, pos;

    cout << "Enter the size of the first string: ";
    cin >> size1;
    cin.ignore();

    char str1[size1];
    cout << "Enter the first string: ";
    cin.getline(str1, size1);

    cout << "Enter the size of the string to insert: ";
    cin >> size2;
    cin.ignore();

    char str2[size2];
    cout << "Enter the string to insert: ";
    cin.getline(str2, size2);

    cout << "Enter the position to insert the string (starting from 0): ";
    cin >> pos;

    // Get lengths
    int len1 = 0, len2 = 0;
    while(str1[len1] != '\0') len1++;
    while(str2[len2] != '\0') len2++;

    if(pos < 0 || pos > len1) {
        cout << "Invalid position!" << endl;
        return 1;
    }

    char result[200]; 
    int i = 0;

    for(i = 0; i < pos; i++) {
        result[i] = str1[i];
    }

    for(int j = 0; j < len2; j++) {
        result[i] = str2[j];
        i++;
    }
    for(int j = pos; j < len1; j++) {
        result[i] = str1[j];
        i++;
    }

    result[i] = '\0';

    cout << "Final string after insertion: " << result << endl;

    return 0;
}
`
      },
      22:{
        title: "22. Program to find the frequency of characters ",
        code: ` #include <iostream>
        using namespace std;
        
        int main()
        {
            string s;
            string cha;
            char ch;
            cout << "Enter the string : ";
            getline(cin, s);
            int count[100], c = 1, m = 0, flag = 1;
            for (int i = 0; i < s.length(); i++)
            {
                ch = s[i];
                for (int j = 0; j < cha.length(); j++)
                {
                    if (ch == cha[j])
                        flag = 0;
                }
                if (flag != 0)
                {
                    cha.append(1, s[i]);
                    for (int k = 0; k < s.length(); k++)
                    {
                        if (k != i)
                            if (ch == s[k])
                                c++;
                    }
                    count[m] = c;
                    c = 1;
                    m++;
                }
                flag = 1;
            }
            cout << "Frequency of characters: " << endl;
            for (int i = 0; i < cha.length(); i++)
            {
                cout << "character : " << cha[i] << " "
                     << " , with count : " << count[i] << endl;
            }
        }`,
        output: `            Enter the string : abracadabra
            Frequency of characters: 
            character : a  , with count : 5
            character : b  , with count : 2
            character : r  , with count : 2
            character : c  , with count : 1
            character : d  , with count : 1`
      },
      23:{
        title: "23. Program to find the largest and smallest word in a string ",
        code: ` #include <iostream>
        #include <string>
        
        using namespace std;
        
        int main() {
          string str;
          string largest, smallest;
          int currentWordLength = 0;
        
          cout << "Enter a string: ";
          getline(cin, str);
        
          for (char c : str) {
            if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')) {
              currentWordLength++;
            } else if (currentWordLength > 0) {
              if (currentWordLength > largest.length()) {
                largest = str.substr(str.rfind(c, currentWordLength - 1) + 1, currentWordLength);
              }
              if (smallest.empty() || currentWordLength < smallest.length()) {
                smallest = str.substr(str.rfind(c, currentWordLength - 1) + 1, currentWordLength);
              }
              currentWordLength = 0;
            }
          }
        
          if (currentWordLength > 0) {
            largest = str.substr(str.length() - currentWordLength);
            if (smallest.empty() || currentWordLength < smallest.length()) {
              smallest = str.substr(str.length() - currentWordLength);
            }
          } else if (smallest.empty()) {
            cout << "No words found in the string." << endl;
            return 0;
          }
        
          cout << "Largest word: " << largest << endl;
          cout << "Smallest word: " << smallest << endl;
        
          return 0;
        }`,
        output: ` Enter a string: The quick brown fox jumps over the lazy dog
            Largest word: jumps
            Smallest word: fox`
      },
      24:{
        title: "24. Program to find the longest repeating sequence in a string ",
        code: `   #include <iostream>
        #include <string>
        
        using namespace std;
        
        int main() {
            string str;
            cout << "Enter a string: ";
            cin >> str;
        
            int n = str.length();
            string longestRepeatedSeq;
            int maxLength = 0;
        
            for (int i = 0; i < n; i++) {
                for (int j = i + 1; j < n; j++) {
                    int len = 0;
                    while (j + len < n && str[i + len] == str[j + len]) {
                        len++;
                    }
        
                    if (len > maxLength) {
                        maxLength = len;
                        longestRepeatedSeq = str.substr(i, len);
                    }
                }
            }
        
            if (maxLength == 0) {
                cout << "No repeating sequence found." << endl;
            } else {
                cout << "Longest repeating sequence: " << longestRepeatedSeq << endl;
            }
        
            return 0;
        }`,
        output: ` Enter a string: abcdabca
            Longest repeating sequence: abca`
      },
      25:{
        title: "25. Program to find the most repeated word in a text file ",
        code: `
        #include <iostream>
        #include <string>
        
        using namespace std;
        
        int main() {
            string str;
            cout << "Enter a string: ";
            cin >> str;
        
            int n = str.length();
            string longestRepeatedSeq;
            int maxLength = 0;
        
            for (int i = 0; i < n; i++) {
                for (int j = i + 1; j < n; j++) {
                    int len = 0;
                    while (j + len < n && str[i + len] == str[j + len]) {
                        len++;
                    }
        
                    if (len > maxLength) {
                        maxLength = len;
                        longestRepeatedSeq = str.substr(i, len);
                    }
                }
            }
        
            if (maxLength == 0) {
                cout << "No repeating sequence found." << endl;
            } else {
                cout << "Longest repeating sequence: " << longestRepeatedSeq << endl;
            }
        
            return 0;
        }
        `,
        output: `    Enter a string: abcdabca
            Longest repeating sequence: abca`
      },
      26:{
        title: "26. Program to find the number of the words in the given text file ",
        code: `  #include <iostream>
        #include <string.h>
        using namespace std;
        
        int main()
        {
            string str;
            int words = 0;
            cout << "Enter the string : ";
            getline(cin, str);
            for (int i = 0; i < str.length(); i++)
            {
                for (int j = 0; str[i] != ' ' && str[i] != '\0'; i++, j++)
                    continue;
                if (str[i + 1] != ' ')
                    words++;
            }
            cout << "Number of words in string : " << words << endl;
            return 0;
        }`,
        output: `  Enter the string : The quick brown fox jumps over the lazy dog
            Number of words in string : 9`
      },
      27:{
        title: "27. Program to Get a Character From the Given String ",
        code: `  #include <iostream>
        #include <string>
        
        using namespace std;
        
        int main() {
          string str="This is the 27th program of strings";
          int index;
          cout<<"Enter the index of the character (0 to " << str.length() - 1 << "): ";
          cin>>index;
        
          if (index >= 0 && index < str.length()) {
            char character = str[index];
            cout << "Character at index " << index << ": " << character << endl;
          } else {
            cout<<"Invalid index. Please enter a value between 0 and "<<str.length() - 1 <<endl;
          }
          return 0;
        }`,
        output: ` Enter the index of the character (0 to 35): 12
            Character at index 12: 7`
      },
      28:{
        title: "28. Program to Insert a string into another string ",
        code: `#include<iostream>
using namespace std;

int main() {
    int size1, size2, pos;

    cout << "Enter the size of the first string: ";
    cin >> size1;
    cin.ignore();

    char str1[size1];
    cout << "Enter the first string: ";
    cin.getline(str1, size1);

    cout << "Enter the size of the string to insert: ";
    cin >> size2;
    cin.ignore();

    char str2[size2];
    cout << "Enter the string to insert: ";
    cin.getline(str2, size2);

    cout << "Enter the position to insert the string (starting from 0): ";
    cin >> pos;

    // Get lengths
    int len1 = 0, len2 = 0;
    while(str1[len1] != '\0') len1++;
    while(str2[len2] != '\0') len2++;

    if(pos < 0 || pos > len1) {
        cout << "Invalid position!" << endl;
        return 1;
    }

    char result[200]; 
    int i = 0;

    for(i = 0; i < pos; i++) {
        result[i] = str1[i];
    }

    for(int j = 0; j < len2; j++) {
        result[i] = str2[j];
        i++;
    }
    for(int j = pos; j < len1; j++) {
        result[i] = str1[j];
        i++;
    }

    result[i] = '\0';

    cout << "Final string after insertion: " << result << endl;

    return 0;
}
`,
        output: `output`
      },
      29:{
        title: "29. Program to Print a New Line in String (Each word in newline) ",
        code: `#include<iostream>
using namespace std;

int main() {
    int size;
    cout << "Enter the size of the string: ";
    cin >> size;
    cin.ignore();

    char str[size];
    cout << "Enter the string: ";
    cin.getline(str, size);

    cout << "\nWords in new lines:" << endl;

    int i = 0;
    while(str[i] != '\0') {
        if(str[i] == ' ') {
            cout << endl;
        } else {
            cout << str[i];
        }
        i++;
    }

    cout << endl;

    return 0;
}
`,
        output: `Enter the size of the string: 20        
Enter the string: cpp programming...

Words in new lines:
cpp
programming...`
      },
      30:{
        title: "30. Program to Print even length words ",
        code: `#include<iostream>
using namespace std;

int main() {
    int size;
    cout << "Enter the size of the string: ";
    cin >> size;
    cin.ignore(); 

    char str[size];
    cout << "Enter the string: ";
    cin.getline(str, size);

    char word[50];
    int i = 0, j = 0;

    cout << "\nEven length words are:" << endl;

    while(true) {
        if(str[i] != ' ' && str[i] != '\0') {
            word[j] = str[i];
            j++;
        } else {
            word[j] = '\0';

            int len = 0;
            while(word[len] != '\0') {
                len++;
            }

            if(len % 2 == 0 && len > 0) {
                cout << word << endl;
            }

            j = 0; 
        }

        if(str[i] == '\0') {
            break;
        }

        i++;
    }

    return 0;
}
`,
        output: `Enter the size of the string: 20
Enter the string: be positive always

Even length words are:
be
positive
always`
      },
      31:{
        title: "31. Program to print smallest and biggest possible palindrome word in a given string ",
        code: `  #include <iostream>
        #include <string>
        
        using namespace std;
        
        int main() {
          string str;
          cout << "Enter a string: ";
          getline(cin, str);
        
          int n = str.length();
          string smallest, biggest;
        
          // Iterate through all substrings
          for (int i = 0; i < n; ++i) {
            for (int j = i; j < n; ++j) {
              string current = str.substr(i, j - i + 1); // Extract substring
        
              // Check if palindrome (manually)
              int isPalindrome = 1;
              for (int k = 0; k < current.length() / 2; ++k) {
                if (tolower(current[k]) != tolower(current[current.length() - 1 - k])) {
                  isPalindrome = 0;
                  break;
                }
              }
        
              // Update smallest and biggest
              if (isPalindrome) {
                if (smallest.empty() || current.length() < smallest.length()) {
                  smallest = current;
                }
                if (biggest.empty() || current.length() > biggest.length()) {
                  biggest = current;
                }
              }
            }
          }
        
          if (smallest.empty() && biggest.empty()) {
            cout << "No palindromes found in the string." << endl;
          } else {
            cout << "Smallest palindrome: " << smallest << endl;
            cout << "Biggest palindrome: " << biggest << endl;
          }
          return 0;
        }`,
        output: `  Enter a string: racecar
            Smallest palindrome: racecar
            Biggest palindrome: racecar`
      },
      32:{
        title: "32. Program to remove all the white spaces from a string",
        code: `   #include <iostream>
        using namespace std;
        
        int main()
        {
            string str, s;
            cout << "Enter the string : ";
            getline(cin, str);
            for (int i = 0; i < str.length(); i++)
            {
                if (str[i] == ' ')
                    while (str[i + 1] == ' ')
                        i++;
                else
                    s.append(1, str[i]);
            }
            cout << "Resulting String : " << s << endl;
            return 0;
        }`,
        output: `   Enter the string :   Hello     World  
            Resulting String : HelloWorld`
      },
      33:{
        title: "33. Program to replace lower-case characters with upper-case and vice-versa ",
        code: ` #include <iostream>
        #include <ctype.h>
        
        using namespace std;
        
        int main() {
          char ch;
        
          cout<<"Enter a character: ";
          cin>>ch;
        
          if (isalpha(ch)) {
            if (islower(ch)) {
              ch = toupper(ch);
              cout<<"Converted character (uppercase): "<<ch<<endl;
            } else {
              ch = tolower(ch);
              cout<<"Converted character (lowercase): "<<ch<<endl;
            }
          } else {
            cout<<"Input is not an alphabet."<<endl;
          }
          return 0;
        }`,
        output: `
            Enter a character: a
            Converted character (uppercase): A`
      },
      34:{
        title: "34. Program to replace the spaces of a string with a specific character ",
        code: ` #include <iostream>
        using namespace std;
        
        int main()
        {
            char ch;
            string str;
            cout << "Enter the string : ";
            getline(cin, str);
            cout << "Enter the character: ";
            cin >> ch;
            for (int i = 0; i < str.length(); i++)
            {
                if (str[i] == ' ')
                    str[i] = ch;
            }
            cout << "Resulting String : " << str << endl;
            return 0;
        }`,
        output: `            Enter the string : Hello World
            Enter the character: *
            Resulting String : Hello*World`
      },
      35:{
        title: "35. Program to separate the Individual Characters from a String",
        code: `#include <iostream>
        #include <string>
        
        using namespace std;
        
        int main() {
            string str;
            cout<<"Enter string: ";
            cin>>str;
            
            cout<<"Individual characters in the string is: ";
            for (size_t i = 0; i < str.length(); ++i) {
                cout<<str[i]<<" ";
            }
            cout<<endl;
        
            return 0;
        }
        `,
        output: ` Enter string: Hello
            Individual characters in the string is: H e l l o `
      },
      36:{
        title: "36. Program to Splitting into a number of sub-strings ",
        code: `     #include <iostream>
        #include <cstring>
        
        using namespace std;
        
        int main() {
            const char* str = "This is the 36th program of strings";
            char delimiter = ' ';
            int start = 0;
        
            while (const char* p = strchr(str + start, delimiter)) {
                int sub_len = p - (str + start);
                char sub_str[sub_len + 1];
                strncpy(sub_str, str + start, sub_len);
                sub_str[sub_len] = '\0';
        
                cout<<sub_str<<endl;
        
                start = p - str + 1;
            }
        
            int sub_len = strlen(str + start);
            char sub_str[sub_len + 1];
            strncpy(sub_str, str + start, sub_len);
            sub_str[sub_len] = '\0';
        
            cout<<sub_str<<endl;
            return 0;
        }`,
        output: ` This
            is
            the
            36th
            program
            of
            strings`
      },
      37:{
        title: "37. Program to swap two string variables without using third or temp variable",
        code: `   #include <iostream>
        #include <cstring>
        
        using namespace std;
        
        int main() {
          char str1[] = "Hello";
          char str2[] = "World";
        
          cout << "Before swap: str1 = " << str1 << ", str2 = " << str2 << endl;
        
          // Swap lengths directly if possible (caution: potential truncation)
          if (strlen(str1) < strlen(str2)) {
            //swap(strlen(str1), strlen(str2));
          }
        
          // Loop through characters and swap using in-place assignment
          for (int i = 0; i < strlen(str1); i++) {
            char temp = str1[i];
            str1[i] = str2[i];
            str2[i] = temp;
          }
        
          cout << "After swap: str1 = " << str1 << ", str2 = " << str2 << endl;
        
          return 0;
        }`,
        output: `
            Before swap: str1 = Hello, str2 = World
            After swap: str1 = World, str2 = Hello`
      },
      38:{
        title: "38. Read two String user input and check if first contains second? ",
        code: `   #include <iostream>
        #include <string>
        
        using namespace std;
        
        bool containsSubstring(const string& str, const string& substr) {
            return str.find(substr) != string::npos;
        }
        
        int main() {
            string firstString, secondString;
        
            cout << "Enter the first string: ";
            getline(cin, firstString);
        
            cout << "Enter the second string: ";
            getline(cin, secondString);
        
            if (containsSubstring(firstString, secondString)) {
                cout << "The first string contains the second string." << endl;
            } else {
                cout << "The first string does not contain the second string." << endl;
            }
            return 0;
        }`,
        output: ` Enter the first string: This is a sample string.
            Enter the second string: sample
            The first string contains the second string.`
      },
      39:{
        title: "39. Reverse String Word by Word",
        code: `#include <iostream>
        #include <string>
        
        using namespace std;
        
        string reverseWords(const string& str);
        
        int main() {
          string str = "This is the 39th program of strings";
          string reversed_str = reverseWords(str);
          cout << "Original string: " << str << endl;
          cout << "Reversed string: " << reversed_str << endl;
          return 0;
        }
        
        string reverseWords(const string& str) {
          string reversed;
          string word;
        
          for (char c : str) {
            if (c == ' ') {
              if (!word.empty()) {
                reversed = word + " " + reversed;
                word.clear();
              }
            } else {
              word += c;
            }
          }
        
          if (!word.empty()) {
            reversed = word + " " + reversed;
          }
        
          if (reversed[0] == ' ') {
            reversed.erase(0, 1);
          }
        
          return reversed;
        }`,
        output: `  Original string: This is the 39th program of strings
            Reversed string: strings of program 39th the is This`
      },
      40:{
        title: "40. Write a program to check if two Strings are created with same characters? ",
        code: `code here`,
        output: `output`
      },
      41:{
        title: "41. Write a program to find out first non repeated character from input String?",
        code: `#include<iostream>
using namespace std;

char firstNonRepeated(char str[], int size) {
    int freq[256] = {0}; 

    for(int i = 0; i < size; i++) {
        char ch = str[i];
        freq[(int)ch]++;
    }

    for(int i = 0; i < size; i++) {
        if(freq[(int)str[i]] == 1) {
            return str[i];
        }
    }

    return '\0'; 
}

int main() {
    int size;
    cout << "Enter the size of the string: ";
    cin >> size;
    cin.ignore(); 

    char str[size];
    cout << "Enter the string: ";
    cin.getline(str, size);

    char result = firstNonRepeated(str, size);

    if(result != '\0') {
        cout << "First non-repeated character is: " << result << endl;
    } else {
        cout << "No non-repeated character found." << endl;
    }

    return 0;
}
`,
        output: `Enter the size of the string: 15
Enter the string: Hello everyone!             
First non-repeated character is: H`
      },
      42:{
        title: "42. Write a C++ method to count all words in a string",
        code: `#include<iostream>
using namespace std;

int countWords(char str[], int size) {
    int count = 0;
    bool inWord = false;

    for(int i = 0; i < size; i++) {
        if(str[i] != ' ' && inWord == false) {
            count++;
            inWord = true;
        } else if(str[i] == ' ') {
            inWord = false;
        }
    }

    return count;
}

int main() {
    int size;
    cout << "Enter the size of the string: ";
    cin >> size;
    cin.ignore(); 

    char str[size];
    cout << "Enter the string: ";
    cin.getline(str, size);

    int totalWords = countWords(str, size);

    cout << "Total number of words: " << totalWords << endl;

    return 0;
}
`,
        output: `Enter the size of the string: 10
Enter the string: Hello world.
Total number of words: 2`
      },
      43:{
        title: "43. Write a C++ method to count all vowels in a string ",
        code: `#include<iostream>
using namespace std;

int countVowels(char str[], int size) {
    int count = 0;

    for(int i = 0; i < size; i++) {
        char ch = str[i];

        if(ch >= 'A' && ch <= 'Z') {
            ch = ch + 32;
        }

        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            count++;
        }
    }

    return count;
}

int main() {
    int size;

    cout << "Enter the size of the string: ";
    cin >> size;
    cin.ignore(); 

    char str[size];
    cout << "Enter the string: ";
    cin.getline(str, size);

    int totalVowels = countVowels(str, size);

    cout << "Total number of vowels in the string: " << totalVowels << endl;

    return 0;
}
`,
        output: `Enter the size of the string: 30
Enter the string: This is a cpp program   
Total number of vowels in the string: 6`
      },
      44:{
        title: "44. Write a C++ Program to Sort Names in an Alphabetical Order",
        code: `#include<iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter the number of names: ";
    cin >> n;

    char names[n][50]; 

    cout << "Enter the names:" << endl;
    for(int i = 0; i < n; i++) {
        cin >> names[i];
    }

    for(int i = 0; i < n - 1; i++) {
        for(int j = i + 1; j < n; j++) {
            int k = 0;
            while(names[i][k] == names[j][k] && names[i][k] != '\0') {
                k++;
            }
            if(names[i][k] > names[j][k]) {
                char temp[50];
                int l = 0;
                while(names[i][l] != '\0') {
                    temp[l] = names[i][l];
                    l++;
                }
                temp[l] = '\0';

                l = 0;
                while(names[j][l] != '\0') {
                    names[i][l] = names[j][l];
                    l++;
                }
                names[i][l] = '\0';

                l = 0;
                while(temp[l] != '\0') {
                    names[j][l] = temp[l];
                    l++;
                }
                names[j][l] = '\0';
            }
        }
    }

    cout << "Names in alphabetical order:" << endl;
    for(int i = 0; i < n; i++) {
        cout << names[i] << endl;
    }

    return 0;
}
`,
        output: `Enter the number of names: 4
Enter the names:
Rahul
Shami
Amit
Asheema
Names in alphabetical order:
Amit
Asheema
Rahul
Shami`
      },
      45:{
        title: "45. Write a C++ method to count all the words in a string.",
        code: `#include<iostream>
using namespace std;

int countWords(char str[], int size) {
    int count = 0;
    bool inWord = false;

    for(int i = 0; i < size; i++) {
        if(str[i] != ' ' && inWord == false) {
            count++;
            inWord = true;
        } else if(str[i] == ' ') {
            inWord = false;
        }
    }

    return count;
}

int main() {
    int size;
    cout << "Enter the size of the string: ";
    cin >> size;
    cin.ignore(); 

    char str[size];
    cout << "Enter the string: ";
    cin.getline(str, size);

    int totalWords = countWords(str, size);

    cout << "Total number of words in the string: " << totalWords << endl;

    return 0;
}
`,
        output: `Enter the size of the string: 10
Enter the string: Hello Mike
Total number of words in the string: 2`
      },
      46:{
        title: "46. Write a C++ method to compute the future investment value at a given interest rate for a specified number of years.",
        code: `#include<iostream>
using namespace std;

double futureInvestment(double principal, double rate, int years) {
    double amount = principal;

    for(int i = 1; i <= years; i++) {
        amount = amount + (amount * rate / 100);
    }

    return amount;
}

int main() {
    double principal, rate;
    int years;

    cout << "Enter the investment amount: ";
    cin >> principal;

    cout << "Enter the annual interest rate (in %): ";
    cin >> rate;

    cout << "Enter the number of years: ";
    cin >> years;

    double futureValue = futureInvestment(principal, rate, years);

    cout << "Future investment value after " << years << " years: " << futureValue << endl;

    return 0;
}
`,
        output: `Enter the investment amount: 10000
Enter the annual interest rate (in %): 5
Enter the number of years: 3
Future investment value after 3 years: 11576.2`
      },
      47:{
        title: "47. Write a C++ method to print characters between two characters (i.e. A to P).",
        code: `#include<iostream>
using namespace std;

void printCharacters(char start, char end) {
    if(start > end) {
        char temp = start;
        start = end;
        end = temp;
    }

    cout << "Characters from " << start << " to " << end << " are: ";
    for(char ch = start; ch <= end; ch++) {
        cout << ch << " ";
    }
    cout << endl;
}

int main() {
    char ch1, ch2;

    cout << "Enter the first character: ";
    cin >> ch1;

    cout << "Enter the second character: ";
    cin >> ch2;

    printCharacters(ch1, ch2);

    return 0;
}
`,
        output: `Enter the first character: f
Enter the second character: s
Characters from f to s are: f g h i j k l m n o p q r s`
      },
      48:{
        title: "48. Write a C++ method to check whether a string is a valid password.",
        code: `#include <iostream>
#include <cstring>

using namespace std;

int main() {
  char password[100];
  int hasLower = 0, hasUpper = 0, hasDigit = 0, hasSpecial = 0;

  cout << "Enter password: ";
  cin >> password;

  int minLength = 8; 

  if (strlen(password) < minLength) {
    cout << "Password is too short." << endl;
    return 1;
  }

  for (int i = 0; password[i] != '\0'; i++) {
    if (password[i] >= 'a' && password[i] <= 'z') {
      hasLower = 1;
    } else if (password[i] >= 'A' && password[i] <= 'Z') {
      hasUpper = 1;
    } else if (password[i] >= '0' && password[i] <= '9') {
      hasDigit = 1;
    } else if (password[i] == '@' || password[i] == '#' || password[i] == '$' || password[i] == '%' || password[i] == '&') {
      hasSpecial = 1;
    }
  }

  if (!hasLower || !hasUpper || !hasDigit || !hasSpecial) {
    cout << "Password must contain lowercase, uppercase, digit and special character." << endl;
    return 1;
  }

  cout << "Password is valid." << endl;
  return 0;
}`,
        output: `Enter password: Root123@
Password is valid.`
      },
      49:{
        title: "49. Write a C++ method to display the current date and time.",
        code: `#include<iostream>
#include<ctime> 
using namespace std;

void showDateTime() {
    time_t now = time(0); 
    char* dt = ctime(&now); 

    cout << "Current date and time is: " << dt << endl;
}

int main() {
    showDateTime();
    return 0;
}
`,
        output: `Current date and time is: Fri Apr 04 00:41:36 2025`
      },
      50:{
        title: "50. Write a C++ method that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false",
        code: `#include<iostream>
using namespace std;

bool isMiddlePoint(int a, int b, int c) {
    if((a > b && a < c) || (a > c && a < b)) {
        return true;
    }
    else if((b > a && b < c) || (b > c && b < a)) {
        return true;
    }
    else if((c > a && c < b) || (c > b && c < a)) {
        return true;
    }
    else {
        return false;
    }
}

int main() {
    int x, y, z;

    cout << "Enter three integers: ";
    cin >> x >> y >> z;

    bool result = isMiddlePoint(x, y, z);

    if(result) {
        cout << "One of the numbers is the middle point between the other two." << endl;
    } else {
        cout << "No number is the middle point." << endl;
    }

    return 0;
}
`,
        output: `Enter three integers: 45 90 135
One of the numbers is the middle point between the other two.`
      }

  };
  
  function loadQuestion(num) {
    const question = Strings[num];
    if (!question) return;
  
    document.querySelector('.default').style.display = 'none';
    const container = document.getElementById('question-container');
    container.style.display = 'block';
  
    document.getElementById('question-title').textContent = question.title;
    document.getElementById('code-block').textContent = question.code;
    document.getElementById('output-block').textContent = question.output;
  }
  