const operatorOverloading = {
    1: {
      title: "1. Define a class Complex to represent complex numbers. Overload the + operator to add two complex numbers. ",
      code: `#include <iostream>
using namespace std;

class Complex {
private:
    float real;
    float imag;

public:
    Complex() {
        real = 0;
        imag = 0;
    }

    Complex(float r, float i) {
        real = r;
        imag = i;
    }

    Complex operator + (Complex c) {
        Complex result;
        result.real = real + c.real;
        result.imag = imag + c.imag;
        return result;
    }

    void display() {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    float r1, i1, r2, i2;

    cout << "Enter real and imaginary part of first complex number: ";
    cin >> r1 >> i1;

    cout << "Enter real and imaginary part of second complex number: ";
    cin >> r2 >> i2;

    Complex c1(r1, i1);
    Complex c2(r2, i2);

    Complex sum = c1 + c2;

    cout << "Sum of complex numbers: ";
    sum.display();

    return 0;
}
`,
      output: `Enter real and imaginary part of first complex number: 2 3
Enter real and imaginary part of second complex number: 1 4
Sum of complex numbers: 3 + 7i

`
    },
    2: {
        title: "2. Create a class Fraction to represent fractions. Overload the + operator to add two fractions.",
        code: `#include <iostream>
using namespace std;

class Fraction {
private:
    int numerator;
    int denominator;

    int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    void simplify() {
        int common = gcd(numerator, denominator);
        numerator /= common;
        denominator /= common;
    }

public:
    Fraction() {
        numerator = 0;
        denominator = 1;
    }

    Fraction(int num, int den) {
        numerator = num;
        if (den == 0) {
            cout << "Denominator can't be zero. Setting to 1." << endl;
            denominator = 1;
        } else {
            denominator = den;
        }
        simplify();
    }

    Fraction operator+(Fraction f) {
        int num = numerator * f.denominator + f.numerator * denominator;
        int den = denominator * f.denominator;
        Fraction result(num, den);
        result.simplify();
        return result;
    }

    void display() {
        cout << numerator << "/" << denominator << endl;
    }
};

int main() {
    int num1, den1, num2, den2;

    cout << "Enter numerator and denominator of first fraction: ";
    cin >> num1 >> den1;

    cout << "Enter numerator and denominator of second fraction: ";
    cin >> num2 >> den2;

    Fraction f1(num1, den1);
    Fraction f2(num2, den2);

    Fraction sum = f1 + f2;

    cout << "Sum of fractions: ";
    sum.display();

    return 0;
}
`,
        output: `Enter numerator and denominator of first fraction: 3 2
Enter numerator and denominator of second fraction: 1 2
Sum of fractions: 2/1`
      },
      3: {
        title: "3. Define a class Matrix to represent matrices. Overload the * operator to multiply two matrices.  ",
        code: `#include <iostream>
using namespace std;

const int SIZE = 10;

class Matrix {
private:
    int mat[SIZE][SIZE];
    int row, col;

public:
    Matrix() {
        row = 0;
        col = 0;
    }

    Matrix(int r, int c) {
        row = r;
        col = c;
    }

    void input() {
        cout << "Enter elements of " << row << "x" << col << " matrix:\n";
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                cin >> mat[i][j];
            }
        }
    }

    Matrix operator*(Matrix m) {
        Matrix result(row, m.col);
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < m.col; j++) {
                result.mat[i][j] = 0;
                for (int k = 0; k < col; k++) {
                    result.mat[i][j] += mat[i][k] * m.mat[k][j];
                }
            }
        }
        return result;
    }

    void display() {
        cout << "Resultant matrix:\n";
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                cout << mat[i][j] << " ";
            }
            cout << endl;
        }
    }
};

int main() {
    int r1, c1, r2, c2;

    cout << "Enter rows and columns for first matrix: ";
    cin >> r1 >> c1;
    cout << "Enter rows and columns for second matrix: ";
    cin >> r2 >> c2;

    if (c1 != r2) {
        cout << "Matrix multiplication not possible. Columns of first must match rows of second." << endl;
        return 0;
    }

    Matrix m1(r1, c1);
    Matrix m2(r2, c2);

    m1.input();
    m2.input();

    Matrix result = m1 * m2;
    result.display();

    return 0;
}
`,
        output: `Enter rows and columns for first matrix: 3 3
Enter rows and columns for second matrix: 3 3
Enter elements of 3x3 matrix:
3 2 45 
6 7 23
21 9 4 
Enter elements of 3x3 matrix:
4 5 7
8 98 4
87 6 2
Resultant matrix:
3943 481 119
2081 854 116
504 1011 191`
      },
      4: {
        title: "4. Implement a class String to represent strings. Overload the + operator to concatenate two strings.",
        code: `#include <iostream>
#include <cstring>
using namespace std;

class String {
private:
    char str[100];

public:
    String() {
        str[0] = '\0';
    }

    String(const char* s) {
        strcpy(str, s);
    }

    void input() {
        cout << "Enter string: ";
        cin.getline(str, 100);
    }

    void display() {
        cout << str << endl;
    }

    String operator+(const String& s) {
        String result;
        strcpy(result.str, str);
        strcat(result.str, s.str);
        return result;
    }
};

int main() {
    String s1("Hello ");
    String s2("World!");
    String s3;

    s3 = s1 + s2;

    cout << "Concatenated String: ";
    s3.display();

    return 0;
}
`,
        output: `Concatenated String: Hello World!`
      },
      5: {
        title: "5. Define a class Date to represent dates. Overload the < operator to compare two dates.  ",
        code: `#include <iostream>
using namespace std;

class Date {
private:
    int day, month, year;

public:
    Date() {
        day = month = year = 0;
    }

    Date(int d, int m, int y) {
        day = d;
        month = m;
        year = y;
    }

    void input() {
        cout << "Enter day: ";
        cin >> day;
        cout << "Enter month: ";
        cin >> month;
        cout << "Enter year: ";
        cin >> year;
    }

    void display() {
        cout << day << "/" << month << "/" << year << endl;
    }

    bool operator<(const Date& d) {
        if (year < d.year) return true;
        if (year == d.year && month < d.month) return true;
        if (year == d.year && month == d.month && day < d.day) return true;
        return false;
    }
};

int main() {
    Date d1, d2;
    
    cout << "Enter first date:\n";
    d1.input();
    
    cout << "\nEnter second date:\n";
    d2.input();
    
    cout << "\nFirst Date: ";
    d1.display();
    cout << "Second Date: ";
    d2.display();

    if (d1 < d2) {
        cout << "First date is earlier than second date." << endl;
    } else {
        cout << "First date is not earlier than second date." << endl;
    }

    return 0;
}
`,
        output: `Enter first date:
Enter day: 8
Enter month: 1
Enter year: 2025

Enter second date:
Enter day: 7
Enter month: 8
Enter year: 2009

First Date: 8/1/2025
Second Date: 7/8/2009
First date is not earlier than second date.`
      },
      6: {
        title: "6. Implement a class Money to represent money. Overload the + operator to add two amounts of money.",
        code: `#include <iostream>
using namespace std;

class Money {
private:
    int rupees;
    int paise;

public:
    Money() {
        rupees = 0;
        paise = 0;
    }

    Money(int r, int p) {
        rupees = r;
        paise = p;
        normalize();
    }

    void input() {
        cout << "Enter rupees: ";
        cin >> rupees;
        cout << "Enter paise: ";
        cin >> paise;
        normalize();
    }

    void display() {
        cout << "Total Money = Rs. " << rupees << ".";
        if (paise < 10) {
            cout << "0";
        }
        cout << paise << endl;
    }

    void normalize() {
        if (paise >= 100) {
            rupees += paise / 100;
            paise = paise % 100;
        }
    }

    Money operator+(Money m) {
        Money temp;
        temp.rupees = rupees + m.rupees;
        temp.paise = paise + m.paise;
        temp.normalize();
        return temp;
    }
};

int main() {
    Money m1, m2, result;

    cout << "Enter first amount:\n";
    m1.input();

    cout << "\nEnter second amount:\n";
    m2.input();

    result = m1 + m2;

    cout << "\nAfter addition:\n";
    result.display();

    return 0;
}`,
        output: `Enter first amount:
Enter rupees: 200
Enter paise: 70

Enter second amount:
Enter rupees: 30
Enter paise: 5

After addition:
Total Money = Rs. 230.75`
      },
      7: {
        title: "7. Create a class Rectangle to represent rectangles. Overload the == operator to check if two rectangles are equal.",
        code: `#include <iostream>
using namespace std;

class Rectangle {
private:
    int length;
    int width;

public:
    Rectangle() {
        length = 0;
        width = 0;
    }

    Rectangle(int l, int w) {
        length = l;
        width = w;
    }

    bool operator==(Rectangle r) {
        return (length == r.length && width == r.width);
    }

    void display() {
        cout << "Length: " << length << ", Width: " << width << endl;
    }
};

int main() {
    Rectangle r1(10, 5);
    Rectangle r2(10, 5);
    Rectangle r3(8, 4);

    cout << "Rectangle 1: ";
    r1.display();

    cout << "Rectangle 2: ";
    r2.display();

    cout << "Rectangle 3: ";
    r3.display();

    if (r1 == r2) {
        cout << "Rectangle 1 and Rectangle 2 are equal." << endl;
    } else {
        cout << "Rectangle 1 and Rectangle 2 are not equal." << endl;
    }

    if (r1 == r3) {
        cout << "Rectangle 1 and Rectangle 3 are equal." << endl;
    } else {
        cout << "Rectangle 1 and Rectangle 3 are not equal." << endl;
    }

    return 0;
}

`,
        output: `Rectangle 1: Length: 10, Width: 5
Rectangle 2: Length: 10, Width: 5
Rectangle 3: Length: 8, Width: 4
Rectangle 1 and Rectangle 2 are equal.
Rectangle 1 and Rectangle 3 are not equal.`
      },
      8: {
        title: "8. Define a class Time to represent time. Overload the << operator to display the time in HH:MM format. ",
        code: `#include <iostream>
using namespace std;

class Time {
private:
    int hours;
    int minutes;

public:
    Time() {
        hours = 0;
        minutes = 0;
    }

    Time(int h, int m) {
        hours = h;
        minutes = m;
        normalize();
    }

    void normalize() {
        if (minutes >= 60) {
            hours += minutes / 60;
            minutes = minutes % 60;
        }
        if (hours >= 24) {
            hours = hours % 24;
        }
    }

    friend ostream& operator<<(ostream& out, const Time& t) {
        if (t.hours < 10)
            out << "0";
        out << t.hours << ":";

        if (t.minutes < 10)
            out << "0";
        out << t.minutes;

        return out;
    }
};

int main() {
    Time t1(9, 5);
    Time t2(15, 45);
    Time t3(23, 90); // to test normalization

    cout << "Time 1: " << t1 << endl;
    cout << "Time 2: " << t2 << endl;
    cout << "Time 3 (normalized): " << t3 << endl;

    return 0;
}
`,
        output: `Time 1: 09:05
Time 2: 15:45
Time 3 (normalized): 00:30`
      }
                              
};

    function loadQuestion(num) {
        const question = operatorOverloading[num];
        if (!question) return;
      
        document.querySelector('.default').style.display = 'none';
        const container = document.getElementById('question-container');
        container.style.display = 'block';
      
        document.getElementById('question-title').textContent = question.title;
        document.getElementById('code-block').textContent = question.code;
        document.getElementById('output-block').textContent = question.output;
      }