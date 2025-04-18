
const dataConversion = {
    1: {
        title: "1. C++ Program to convert String to int ",
        code: ` #include <iostream>\n#include <string>\n\nint main() {\n    char str[4] = \"1234\";\n    int num = stoi(str);  \n    cout << \"Integer value: \"<<num<<endl;\n    return 0;\n}`,
        output: `Integer value: 1234`
    },

    2: {
        title: "2. C++ Program to convert int to String",
        code: `#include <iostream>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    int num;\n    cout << \"Enter an integer: \";\n    cin >> num;\n\n    stringstream ss;\n    ss << num;\n    string str = ss.str();\n\n    cout << \"The integer as a string is: \" << str << endl;\n    return 0;\n}`,
        output: `Enter an integer: 42\nThe integer as a string is: 42`
    },

    3: {
        title: "3. C++ Program to convert String to long  ",
        code: ` #include <iostream>\nusing namespace std;\n\nlong stringToLong(string str) {\n    long result = 0;\n    int i = 0;\n    bool isNegative = false;\n\n    if (str.length() == 0) {\n        cout << \"Invalid input: empty string\" << endl;\n        return 0;\n    }\n\n    if (str[0] == '-') {\n        isNegative = true;\n        i = 1;\n    }\n\n    for (; i < str.length(); i++) {\n        char ch = str[i];\n\n        if (ch >= '0' && ch <= '9') {\n            int digit = ch - '0';\n            result = result * 10 + digit;\n        } else {\n            cout << \"Invalid character found: \" << ch << endl;\n            return 0;\n        }\n    }\n\n    if (isNegative)\n        result = -result;\n\n    return result;\n}\n\nint main() {\n    string input;\n    cout << \"Enter a number: \";\n    cin >> input;\n\n    long number = stringToLong(input);\n    cout << \"Converted long value: \" << number << endl;\n\n    return 0;\n}`,
        output: `Enter a number: -987654321\nConverted long value: -987654321`
    },
    4: {
        title: "4. C++ Program to convert long to String",
        code: `#include <iostream>\nusing namespace std;\n\nstring longToString(long num) {\n    \n    if (num == 0) {\n        return \"0\";\n    }\n\n    string result = \"\";\n    bool isNegative = false;\n\n    if (num < 0) {\n        isNegative = true;\n        num = -num;\n    }\n\n    while (num > 0) {\n        int digit = num % 10;\n        char ch = '0' + digit;\n        result = ch + result;\n        num = num / 10;\n    }\n\n    if (isNegative) {\n        result = '-' + result;\n    }\n\n    return result;\n}\n\nint main() {\n    long number;\n    cout << \"Enter a long number: \";\n    cin >> number;\n\n    string str = longToString(number);\n    cout << \"Converted string: \" << str << endl;\n\n    return 0;\n}`,
        output: `Enter a long number: -123456789\nConverted string: -123456789`
    },
    5: {
        title: "5. C++ Program to convert String to float ",
        code: `#include <iostream>\nusing namespace std;\n\nfloat stringToFloat(string str) {\n    float result = 0.0;\n    bool isNegative = false;\n    bool afterDecimal = false;\n    float decimalPlace = 0.1;\n    int i = 0;\n\n    if (str.length() == 0) {\n        cout << \"Invalid input: empty string\" << endl;\n        return 0;\n    }\n\n    if (str[0] == '-') {\n        isNegative = true;\n        i++;\n    } else if (str[0] == '+') {\n        i++;\n    }\n\n    for (; i < str.length(); i++) {\n        char ch = str[i];\n\n        if (ch == '.') {\n            if (afterDecimal) {\n                cout << \"Invalid input: multiple decimal points\" << endl;\n                return 0;\n            }\n            afterDecimal = true;\n        } \n        else if (ch >= '0' && ch <= '9') {\n            int digit = ch - '0';\n            if (!afterDecimal) {\n                result = result * 10 + digit;\n            } else {\n                result = result + digit * decimalPlace;\n                decimalPlace /= 10;\n            }\n        } \n        else {\n            cout << \"Invalid character found: \" << ch << endl;\n            return 0;\n        }\n    }\n\n    if (isNegative)\n        result = -result;\n\n    return result;\n}\n\nint main() {\n    string input;\n    cout << \"Enter a float number: \";\n    cin >> input;\n\n    float number = stringToFloat(input);\n    cout << \"Converted float value: \" << number << endl;\n\n    return 0;\n}`,
        output: `Enter a float number: 3.14159\nConverted float value: 3.14159`
    },
    6: {
        title: "6. C++ Program to convert float to String",
        code: `#include <iostream>\nusing namespace std;\n\nstring intToString(long num) {\n    if (num == 0) return \"0\";\n    string res = \"\";\n    while (num > 0) {\n        res = char('0' + (num % 10)) + res;\n        num /= 10;\n    }\n    return res;\n}\n\nstring floatToString(float num, int precision = 2) {\n    string result = \"\";\n    bool isNegative = false;\n\n    if (num < 0) {\n        isNegative = true;\n        num = -num;\n    }\n\n    long intPart = (long)num;\n    result += intToString(intPart);\n\n    result += \".\";\n\n    float fracPart = num - intPart;\n    for (int i = 0; i < precision; i++) {\n        fracPart *= 10;\n        int digit = (int)fracPart;\n        result += char('0' + digit);\n        fracPart -= digit;\n    }\n\n    if (isNegative)\n        result = \"-\" + result;\n\n    return result;\n}\n\nint main() {\n    float number;\n    cout << \"Enter a float number: \";\n    cin >> number;\n\n    string str = floatToString(number, 2);\n    cout << \"Converted string: \" << str << endl;\n\n    return 0;\n}`,
        output: `Enter a float number: -123.4567\nConverted string: -123.45`
    },
    7: {
        title: "7. C++ Program to convert String to double",
        code: `#include <iostream>\nusing namespace std;\n\ndouble stringToDouble(string str) {\n    double result = 0.0;\n    bool isNegative = false;\n    bool afterDecimal = false;\n    double decimalPlace = 0.1;\n    int i = 0;\n\n    if (str.empty()) {\n        cout << \"Invalid input: empty string\" << endl;\n        return 0;\n    }\n\n    if (str[0] == '-') {\n        isNegative = true;\n        i++;\n    } else if (str[0] == '+') {\n        i++;\n    }\n\n    for (; i < str.length(); i++) {\n        char ch = str[i];\n\n        if (ch == '.') {\n            if (afterDecimal) {\n                cout << \"Invalid input: multiple decimal points\" << endl;\n                return 0;\n            }\n            afterDecimal = true;\n        } else if (ch >= '0' && ch <= '9') {\n            int digit = ch - '0';\n            if (!afterDecimal) {\n                result = result * 10 + digit;\n            } else {\n                result += digit * decimalPlace;\n                decimalPlace /= 10;\n            }\n        } else {\n            cout << \"Invalid character found: \" << ch << endl;\n            return 0;\n        }\n    }\n\n    if (isNegative) {\n        result = -result;\n    }\n\n    return result;\n}\n\nint main() {\n    string input;\n    cout << \"Enter a number: \";\n    cin >> input;\n\n    double number = stringToDouble(input);\n    cout << \"Converted double value: \" << number << endl;\n\n    return 0;\n}`,
        output: `Enter a number: 987.654321\nConverted double value: 987.654321`
    },
    8: {
        title: "8. C++ Program to convert double to String ",
        code: `#include <iostream>

char* doubleToString(double number, int precision = 6) {
    static char result[100];
    int intPart = (int)number;  
    double fracPart = number - intPart; 

    char intStr[50];
    int i = 0;
    bool isNegative = false;

    if (number < 0) {
        isNegative = true;
        intPart = -intPart;
        fracPart = -fracPart;
    }

    if (intPart == 0) {
        intStr[i++] = '0';
    } else {
        while (intPart > 0) {
            int digit = intPart % 10;
            intStr[i++] = '0' + digit;
            intPart /= 10;
        }
    }

    if (isNegative) {
        intStr[i++] = '-';
    }

    intStr[i] = '\0';

    for (int j = 0; j < i / 2; ++j) {
        char temp = intStr[j];
        intStr[j] = intStr[i - j - 1];
        intStr[i - j - 1] = temp;
    }


    char fracStr[50];
    fracStr[0] = '.'; 
    for (int j = 1; j <= precision; ++j) {
        fracPart *= 10;
        int digit = (int)fracPart;
        fracStr[j] = '0' + digit;
        fracPart -= digit;
    }
    fracStr[precision + 1] = '\0';


    int k = 0;
    i = 0;
    while (intStr[i]) {
        result[k++] = intStr[i++];
    }

    i = 0;
    while (fracStr[i]) {
        result[k++] = fracStr[i++];
    }

    result[k] = '\0';
    return result;
}

int main() {
    double num = -123.456789;
    char* str = doubleToString(num, 4);  
    std::cout << "String representation: " << str << std::endl;
    return 0;
}
`,
        output: `String representation: -123.4567`
    },
    9: {
        title: "9. C++ Program to convert char to int",
        code: `#include <iostream>\nusing namespace std;\n\nint charToInt(char ch) {\n    if (ch >= '0' && ch <= '9') {\n        return ch - '0';\n    } else {\n        cout << \"Invalid input: not a digit character\" << endl;\n        return -1;\n    }\n}\n\nint main() {\n    char ch;\n    cout << \"Enter a single digit character (0-9): \";\n    cin >> ch;\n\n    int value = charToInt(ch);\n\n    if (value != -1) {\n        cout << \"Converted integer: \" << value << endl;\n    }\n\n    return 0;\n}`,
        output: `Enter a single digit character (0-9): 7\nConverted integer: 7`
    },
    10: {
        title: "10. C++ Program to convert int to char ",
        code: `#include <iostream>\nusing namespace std;\n\nchar intToChar(int num) {\n    if (num >= 0 && num <= 9) {\n        return '0' + num;\n    } else {\n        cout << \"Invalid input: not a single-digit number\" << endl;\n        return '\\0';\n    }\n}\n\nint main() {\n    int num;\n    cout << \"Enter a single digit integer (0-9): \";\n    cin >> num;\n\n    char ch = intToChar(num);\n\n    if (ch != '\\0') {\n        cout << \"Converted character: \" << ch << endl;\n    }\n\n    return 0;\n}`,
        output: `Enter a single digit integer (0-9): 5\nConverted character: 5`
    },
    11: {
        title: "11. C++ Program to convert Binary to Decimal ",
        code: `#include<iostream>
#include<math.h>
using namespace std;

void bin_to_dec(int bin){
	int count = 0,temp,dec=0;
	temp = bin;
	while(temp>0){
		if(temp%10 == 1 || temp%10 == 0){
			count++;
		}
		temp = temp/10;
	}
	int rem=0,i;
	for(i=0;i<count;i++){
		rem = bin%10;
		dec = dec + (rem * pow(2,i));
		bin = bin/10;
	}
	cout<<"The decimal equivalent of this binary:"<<dec<<endl;
}

int main(){int a;
	cout<<"\t\t\t*Program to convert Binary to decimal\n";
	cout<<"Enter the binary:";
	cin>>a;
	bin_to_dec(a);
	return 0;
}`,
        output: `Enter the binary:10101010
The decimal equivalent of this binary:170`
    },
    12: {
        title: "12. C++ Program to convert Decimal to Binary",
        code: `#include<iostream>
using namespace std;
int req_bits(int);
void dec_to_bin(int dec){
	int bit = req_bits(dec);
	int bin[bit];
	int i,rem;
	for(i=bit-1;i>=0;i--){
		rem = dec%2;
		dec = dec/2;
		bin[i] = rem;
	}
	for(i=0;i<bit;i++){
		cout<<bin[i];
	}
	}

int req_bits(int x){
	int i;
	if(x>=0 && x<16){
		i = 4;
	}
	else if(x>=16 && x<32){
		i = 5;
	}
	else if(x>=32 && x<64){
		i = 6;
	}
	else if(x>=64 && x<128){
		i = 7;
	}
	else if(x>=128 && x<256){
		i = 8;
	}
	else if(x>=256 && x<512){
		i = 9;
	}
	else if(x>=512 && x<1024){
		i = 10;
	}
	else if(x>=1024 && x<2048){
		i = 11;
	}
	else if(x>=2048 && x<4096){
		i=12;
	}
	
	else if(x>=4096 && x<8192){
		i=13;
	}
	
	else if(x>=8192 && x<16384){
		i=14;
	}
	
	else if(x>=16384 && x<32678){
		i=15;
	}
	
	return i;
}

int main(){int a,x=1;
	cout<<"\t\t\t**Program to convert decimal to binary\n";
	while (x){
	cout<<"Enter the decimal nummber between 0 to 32767:";
	cin>>a;
	dec_to_bin(a);
	cout<<"\n";
	cout<<"Do you want to continue? press 1 or 0 :";
	cin>>x;
	}
	cout<<"Good bye!!!!!!!!!!";
	return 0;
	
}`,
        output: `Enter the decimal nummber between 0 to 32767:345
101011001
Do you want to continue? press 1 or 0 :0
Good bye!!!!!!!!!!`
    },
    13: {
        title: "13. C++ Program to convert Hex to Decimal",
        code: `#include <iostream>
#include <cmath>
using namespace std;

int hexCharToInt(char ch) {
    if (ch >= '0' && ch <= '9') {
        return ch - '0';
    } else if (ch >= 'A' && ch <= 'F') {
        return ch - 'A' + 10;
    } else if (ch >= 'a' && ch <= 'f') {
        return ch - 'a' + 10;
    } else {
        cout << "Invalid hexadecimal character: " << ch << endl;
        return -1;
    }
}

int hexToDecimal(string hexStr) {
    int decimal = 0;
    int power = 0;

    // Traverse from right to left
    for (int i = hexStr.length() - 1; i >= 0; i--) {
        int digit = hexCharToInt(hexStr[i]);
        if (digit == -1) {
            return -1; // Invalid hex character
        }

        decimal += digit * pow(16, power);
        power++;
    }

    return decimal;
}

int main() {
    string hex;
    cout << "Enter a hexadecimal number: ";
    cin >> hex;

    int decimal = hexToDecimal(hex);

    if (decimal != -1) {
        cout << "Decimal equivalent: " << decimal << endl;
    }

    return 0;
}`,
        output: `Enter a hexadecimal number: 1af3
Decimal equivalent: 6899`
    },
    14: {
        title: "14. C++ Program to convert Decimal to Hex ",
        code: `#include <iostream>
using namespace std;

char intToHexChar(int num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else if (num >= 10 && num <= 15) {
        return 'A' + (num - 10);
    } else {
        return '?'; // Invalid (should not happen)
    }
}

string decimalToHex(int decimal) {
    if (decimal == 0) return "0";

    string hex = "";

    while (decimal > 0) {
        int remainder = decimal % 16;
        char hexChar = intToHexChar(remainder);
        hex = hexChar + hex; // prepend
        decimal /= 16;
    }

    return hex;
}

int main() {
    int number;
    cout << "Enter a decimal number: ";
    cin >> number;

    if (number < 0) {
        cout << "Only non-negative integers are supported in this version." << endl;
        return 1;
    }

    string hex = decimalToHex(number);
    cout << "Hexadecimal equivalent: " << hex << endl;

    return 0;
}`,
        output: `Enter a decimal number: 234
Hexadecimal equivalent: EA`
    },
    15: {
        title: "15. C++ Program to convert Octal to Decimal ",
        code: `#include<iostream>
#include<math.h>
using namespace std;

void oct_to_dec(int oct){
	int count = 0,x;
	x= oct;
	while(x>0){
	if(x%10==0 || x%10 == 1 || x%10 == 2 || x%10 == 3 || x%10 == 4 || x%10==5 || x%10 == 6 || x%10 == 7){
		x = x/10;
		count++;
	}
	else{
		cout<<"entered data is invalid\n";
		break;
	}
	}
	int i,rem , dec = 0;
	for(i=0;i<count;i++){
		rem = oct%10;
		dec = dec +(rem* pow(8,i));
		oct = oct/10;
	}
	cout<<"The decimal equivalent of octal number is "<<dec;
}

int main(){
	int x;
	cout<<"enter the octal number:";
	cin>>x;
	oct_to_dec(x);
	return 0;
}`,
        output: `enter the octal number:234
The decimal equivalent of octal number is 156`
    },
    16: {
        title: "16. C++ Program to convert Decimal to Octal ",
        code: `#include<iostream>
#include<math.h>
using namespace std;

void dec_to_oct(int dec){
	int x;
	x= dec;
	int count = 0;
	while(x>0){
	if(x%10==0 || x%10 == 1 || x%10 == 2 || x%10 == 3 || x%10 == 4 || x%10==5 || x%10 == 6 || x%10 == 7 || x%10 == 8 || x%10 == 9){
		x = x/10;
		count++;
	}
	else{
		cout<<"entered data is invalid\n";
		break;
	}
	}
	int i,rem ,j, arr[count];
	for(i=0;i<count;i++){
		rem = dec%8;
		arr[i] = rem;
		dec = dec/8;
	}
	cout<<"The octal equivalent of decimal number is ";
	for(j=count-1;j>=0;j--){
		cout<<arr[j];
	}
	
}

int main(){
	int x;
	cout<<"enter the decimal:";
	cin>>x;
	dec_to_oct(x);
	return 0;
}`,
        output: `enter the decimal:453
The octal equivalent of decimal number is 705`
    }

};

function loadQuestion(num) {
    const question = dataConversion[num];
    if (!question) return;

    document.querySelector('.default').style.display = 'none';
    const container = document.getElementById('question-container');
    container.style.display = 'block';

    document.getElementById('question-title').textContent = question.title;
    document.getElementById('code-block').textContent = question.code;
    document.getElementById('output-block').textContent = question.output;
}
