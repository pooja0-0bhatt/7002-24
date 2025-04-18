
const oops = {
  1: {
    title: "1. Write a C++ program to create a class called ''Person'' with a name and age attribute. Create two instances of the ''Person'' class, set their attributes using the constructor, and print their name and age.",
      code: `#include <iostream>
using namespace std;

class Person {
private:
    string name;
    int age;

public:
    Person(string personName, int personAge) {
        name = personName;
        age = personAge;
    }

    void displayInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

int main() {
    Person person1("Raghav", 20);
    Person person2("Shayam", 25);

    cout << "Person 1 details:" << endl;
    person1.displayInfo();

    cout << "\nPerson 2 details:" << endl;
    person2.displayInfo();

    return 0;
}
`,
      output: `Person 1 details:
Name: Raghav
Age: 20

Person 2 details:
Name: Shayam
Age: 25`
  },

  2: {
    title: "2. Write a C++ program to create a class called ''Dog'' with a name and breed attribute. Create two instances of the ''Dog'' class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.",
    code: `#include <iostream>
using namespace std;

class Dog {
private:
    string name;
    string breed;

public:
    Dog(string dogName, string dogBreed) {
        name = dogName;
        breed = dogBreed;
    }

    void setName(string newName) {
        name = newName;
    }

    void setBreed(string newBreed) {
        breed = newBreed;
    }

    void displayInfo() {
        cout << "Dog's Name: " << name << endl;
        cout << "Dog's Breed: " << breed << endl;
    }
};

int main() {
    Dog dog1("Tommy", "Bulldog");
    Dog dog2("Lucy", "Beagle");

    cout << "Original Info:\n";
    dog1.displayInfo();
    dog2.displayInfo();

    dog1.setName("Max");
    dog1.setBreed("Labrador");

    dog2.setName("Bella");
    dog2.setBreed("Poodle");

    cout << "\nUpdated Info:\n";
    dog1.displayInfo();
    dog2.displayInfo();

    return 0;
}
`,
    output: `Original Info:
Dog's Name: Tommy
Dog's Breed: Bulldog
Dog's Name: Lucy
Dog's Breed: Beagle

Updated Info:
Dog's Name: Max
Dog's Breed: Labrador
Dog's Name: Bella
Dog's Breed: Poodle`
  },

  3: {
    title: "3. Write a C++ program to create a class called ''Rectangle'' with width and height attributes. Calculate the area and perimeter of the rectangle. ",
    code: `#include <iostream>
using namespace std;

class Rectangle {
private:
    float width;
    float height;

public:
    Rectangle(float w, float h) {
        width = w;
        height = h;
    }

    float getArea() {
        return width * height;
    }

    float getPerimeter() {
        return 2 * (width + height);
    }

    void display() {
        cout << "Width: " << width << endl;
        cout << "Height: " << height << endl;
        cout << "Area: " << getArea() << endl;
        cout << "Perimeter: " << getPerimeter() << endl;
    }
};

int main() {
    float w, h;

    cout << "Enter width of the rectangle: ";
    cin >> w;
    cout << "Enter height of the rectangle: ";
    cin >> h;

    Rectangle rect(w, h);

    cout << "\nRectangle Details:\n";
    rect.display();

    return 0;
}
`,
    output: `Enter width of the rectangle: 6
Enter height of the rectangle: 9

Rectangle Details:
Width: 6
Height: 9
Area: 54
Perimeter: 30`
    },
    4: {
      title: "4. Write a C++ program to create a class called ''Circle'' with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle. ",
      code: `#include <iostream>
#define PI 3.14159

using namespace std;

class Circle {
private:
    float radius;

public:
    Circle() {
        radius = 0;
    }

    void setRadius(float r) {
        if (r >= 0) {
            radius = r;
        } else {
            cout << "Radius cannot be negative." << endl;
        }
    }

    float getRadius() {
        return radius;
    }

    float calculateArea() {
        return PI * radius * radius;
    }

    float calculateCircumference() {
        return 2 * PI * radius;
    }
};

int main() {
    Circle c;
    float r;

    cout << "Enter radius of the circle: ";
    cin >> r;

    c.setRadius(r);

    cout << "Radius: " << c.getRadius() << endl;
    cout << "Area: " << c.calculateArea() << endl;
    cout << "Circumference: " << c.calculateCircumference() << endl;

    return 0;
}
`,
      output: `Enter radius of the circle: 3
Radius: 3
Area: 28.2743
Circumference: 18.8495`
    },
    5: {
      title: "5. Write a C++ program to create a class called ''Book'' with attributes for title, author, and ISBN, and methods to add and remove books from a collection.",
      code: `#include <iostream>
using namespace std;

const int MAX_BOOKS = 100; 

class Book {
private:
    string title;
    string author;
    string isbn;

public:
    Book() {
        title = "";
        author = "";
        isbn = "";
    }

    Book(string t, string a, string i) {
        title = t;
        author = a;
        isbn = i;
    }

    void setDetails(string t, string a, string i) {
        title = t;
        author = a;
        isbn = i;
    }

    string getISBN() {
        return isbn;
    }

    void display() {
        cout << "Title: " << title << endl;
        cout << "Author: " << author << endl;
        cout << "ISBN: " << isbn << endl;
    }
};

void addBook(Book collection[], int &count) {
    if (count >= MAX_BOOKS) {
        cout << "Library is full. Cannot add more books." << endl;
        return;
    }

    string t, a, i;
    cout << "Enter book title: ";
    cin.ignore(); 
    getline(cin, t);
    cout << "Enter author name: ";
    getline(cin, a);
    cout << "Enter ISBN: ";
    getline(cin, i);

    collection[count].setDetails(t, a, i);
    count++;
    cout << "Book added successfully!\n";
}

void removeBook(Book collection[], int &count) {
    string targetISBN;
    cout << "Enter ISBN of the book to remove: ";
    cin >> targetISBN;

    int found = -1;

    for (int i = 0; i < count; i++) {
        if (collection[i].getISBN() == targetISBN) {
            found = i;
            break;
        }
    }

    if (found == -1) {
        cout << "Book with ISBN " << targetISBN << " not found.\n";
        return;
    }

    for (int i = found; i < count - 1; i++) {
        collection[i] = collection[i + 1];
    }

    count--;
    cout << "Book removed successfully!\n";
}

void displayAllBooks(Book collection[], int count) {
    if (count == 0) {
        cout << "No books in the collection.\n";
        return;
    }

    for (int i = 0; i < count; i++) {
        cout << "\nBook " << (i + 1) << ":\n";
        collection[i].display();
    }
}

int main() {
    Book collection[MAX_BOOKS];
    int bookCount = 0;
    int choice;

    do {
        cout << "\n--- Book Library Menu ---\n";
        cout << "1. Add Book\n";
        cout << "2. Remove Book\n";
        cout << "3. View All Books\n";
        cout << "4. Exit\n";
        cout << "Enter your choice (1-4): ";
        cin >> choice;

        switch(choice) {
            case 1:
                addBook(collection, bookCount);
                break;
            case 2:
                removeBook(collection, bookCount);
                break;
            case 3:
                displayAllBooks(collection, bookCount);
                break;
            case 4:
                cout << "Exiting program.\n";
                break;
            default:
                cout << "Invalid choice. Please enter between 1 and 4.\n";
        }

    } while (choice != 4);

    return 0;
}`,
      output: `--- Book Library Menu ---
1. Add Book
2. Remove Book
3. View All Books
4. Exit
Enter your choice (1-4): 1
Enter book title: Never split the difference
Enter author name: Chris voss
Enter ISBN: 987-34-01
Book added successfully!
`
    },
    6: {
      title: "6. Write a C++ program to create a class called ''Employee'' with a name, job title, and salary attributes, and methods to calculate and update salary.",
      code: `#include <iostream>
using namespace std;

class Employee {
private:
    string name;
    string jobTitle;
    float salary;

public:
    Employee(string n, string title, float s) {
        name = n;
        jobTitle = title;
        salary = s;
    }

    void displayDetails() {
        cout << "Name: " << name << endl;
        cout << "Job Title: " << jobTitle << endl;
        cout << "Salary: Rs. " << salary << endl;
    }

    void updateSalary(float newSalary) {
        if (newSalary > 0) {
            salary = newSalary;
            cout << "Salary updated successfully!" << endl;
        } else {
            cout << "Invalid salary amount." << endl;
        }
    }

    float getYearlySalary() {
        return salary * 12;
    }
};

int main() {
    Employee emp("John Doe", "Software Developer", 30000);

    cout << "--- Employee Details ---\n";
    emp.displayDetails();

    cout << "\nYearly Salary: Rs. " << emp.getYearlySalary() << endl;

    cout << "\nUpdating Salary...\n";
    emp.updateSalary(35000);

    cout << "\n--- Updated Employee Details ---\n";
    emp.displayDetails();
    cout << "Updated Yearly Salary: Rs. " << emp.getYearlySalary() << endl;

    return 0;
}
`,
      output: `--- Employee Details ---
Name: John Doe
Job Title: Software Developer
Salary: Rs. 30000

Yearly Salary: Rs. 360000

Updating Salary...
Salary updated successfully!

--- Updated Employee Details ---
Name: John Doe
Job Title: Software Developer
Salary: Rs. 35000
Updated Yearly Salary: Rs. 420000`
    },
    7: {
      title: "7. Write a C++ program to create a class called ''Bank'' with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called ''Account'' to maintain account details of a particular customer. ",
      code: `code here`,
      output: `output`
    },
    8: {
      title: "8. Write a C++ program to create a class called ''TrafficLight'' with attributes for color and duration, and methods to change the color and check for red or green",
      code: `#include <iostream>
using namespace std;

class TrafficLight {
private:
    string color;
    int duration;

public:
    TrafficLight(string c, int d) {
        color = c;
        duration = d;
    }

    void changeColor(string newColor, int newDuration) {
        color = newColor;
        duration = newDuration;
        cout << "Traffic light changed to " << color << " for " << duration << " seconds." << endl;
    }

    bool isRed() {
        return color == "Red" || color == "red";
    }

    bool isGreen() {
        return color == "Green" || color == "green";
    }

    void showStatus() {
        cout << "Current Light: " << color << " | Duration: " << duration << " seconds." << endl;
    }
};

int main() {
    TrafficLight light("Red", 30);

    light.showStatus();

    light.changeColor("Green", 25);
    cout << "Is the light green? " << (light.isGreen() ? "Yes" : "No") << endl;

    light.changeColor("Yellow", 5);
    cout << "Is the light red? " << (light.isRed() ? "Yes" : "No") << endl;

    return 0;
}
`,
      output: `Current Light: Red | Duration: 30 seconds.
Traffic light changed to Green for 25 seconds.
Is the light green? Yes
Traffic light changed to Yellow for 5 seconds.
Is the light red? No`
    },
    9: {
      title: "9. Write a C++ program to create a class called ''Employee'' with a name, salary, and hire date attributes, and a method to calculate years of service. ",
      code: `#include <iostream>
using namespace std;

class Employee {
private:
    string name;
    float salary;
    int hireYear;

public:
    Employee(string empName, float empSalary, int empHireYear) {
        name = empName;
        salary = empSalary;
        hireYear = empHireYear;
    }

    void displayInfo() {
        cout << "Employee Name: " << name << endl;
        cout << "Salary: Rs. " << salary << endl;
        cout << "Hire Year: " << hireYear << endl;
    }

    int calculateYearsOfService(int currentYear) {
        return currentYear - hireYear;
    }
};

int main() {
    string name;
    float salary;
    int hireYear, currentYear;

    cout << "Enter employee name: ";
    getline(cin, name);

    cout << "Enter salary: ";
    cin >> salary;

    cout << "Enter hire year: ";
    cin >> hireYear;

    cout << "Enter current year: ";
    cin >> currentYear;

    Employee emp(name, salary, hireYear);

    cout << "\n--- Employee Details ---" << endl;
    emp.displayInfo();
    int service = emp.calculateYearsOfService(currentYear);
    cout << "Years of Service: " << service << " year(s)" << endl;

    return 0;
}
`,
      output: `Enter employee name: Shayam
Enter salary: 30000
Enter hire year: 2023
Enter current year: 2025

--- Employee Details ---
Employee Name: Shayam
Salary: Rs. 30000
Hire Year: 2023
Years of Service: 2 year(s)`
    },
    10: {
      title: "10. Write a C++ program to create a class called ''Student'' with a name, grade, and courses attributes, and methods to add and remove courses.",
      code: `#include <iostream>
using namespace std;

class Student {
private:
    string name;
    int grade;
    string courses[10]; 
    int courseCount;

public:
    Student(string studentName, int studentGrade) {
        name = studentName;
        grade = studentGrade;
        courseCount = 0;
    }

    void addCourse(string courseName) {
        if (courseCount < 10) {
            courses[courseCount] = courseName;
            courseCount++;
            cout << "Course added: " << courseName << endl;
        } else {
            cout << "Cannot add more courses. Limit reached." << endl;
        }
    }

    void removeCourse(string courseName) {
        int index = -1;
        for (int i = 0; i < courseCount; i++) {
            if (courses[i] == courseName) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            for (int i = index; i < courseCount - 1; i++) {
                courses[i] = courses[i + 1];
            }
            courseCount--;
            cout << "Course removed: " << courseName << endl;
        } else {
            cout << "Course not found!" << endl;
        }
    }

    void displayCourses() {
        cout << "\nStudent Name: " << name << endl;
        cout << "Grade: " << grade << endl;
        cout << "Courses Enrolled: ";
        if (courseCount == 0) {
            cout << "None" << endl;
        } else {
            for (int i = 0; i < courseCount; i++) {
                cout << courses[i];
                if (i < courseCount - 1) cout << ", ";
            }
            cout << endl;
        }
    }
};

int main() {
    Student student("Aarav", 10);

    student.addCourse("Math");
    student.addCourse("Science");
    student.addCourse("History");

    student.displayCourses();

    student.removeCourse("Science");
    student.displayCourses();

    return 0;
}
`,
      output: `Course added: Math
Course added: Science
Course added: History

Student Name: Aarav
Grade: 10
Courses Enrolled: Math, Science, History
Course removed: Science

Student Name: Aarav
Grade: 10
Courses Enrolled: Math, History`
    },
    11: {
      title: "11. Write a C++ program to create a class called ''Library'' with a collection of books and methods to add and remove books. ",
      code: `#include <iostream>
#include <string>
using namespace std;

class Library {
private:
    string books[10]; 
    int bookCount;

public:
    Library() {
        bookCount = 0;
    }

    void addBook(string bookName) {
        if (bookCount < 10) {
            books[bookCount] = bookName;
            bookCount++;
            cout << "Book added: " << bookName << endl;
        } else {
            cout << "Library is full! Cannot add more books." << endl;
        }
    }

    void removeBook(string bookName) {
        int index = -1;
        for (int i = 0; i < bookCount; i++) {
            if (books[i] == bookName) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            for (int i = index; i < bookCount - 1; i++) {
                books[i] = books[i + 1];
            }
            bookCount--;
            cout << "Book removed: " << bookName << endl;
        } else {
            cout << "Book not found!" << endl;
        }
    }

    void displayBooks() {
        cout << "\nBooks in Library: " << endl;
        if (bookCount == 0) {
            cout << "No books in the library." << endl;
        } else {
            for (int i = 0; i < bookCount; i++) {
                cout << books[i] << endl;
            }
        }
    }
};

int main() {
    Library library;

    library.addBook("C++ Programming");
    library.addBook("Data Structures");
    library.addBook("Algorithms");

    library.displayBooks();

    library.removeBook("Data Structures");
    library.displayBooks();

    library.removeBook("Python Programming");

    return 0;
}
`,
      output: `Book added: C++ Programming
Book added: Data Structures
Book added: Algorithms

Books in Library:
C++ Programming
Data Structures
Algorithms
Book removed: Data Structures

Books in Library:
C++ Programming
Algorithms
Book not found!`
    },
    12: {
      title: "12. Write a C++ program to create a class called ''Airplane'' with a flight number, destination, and departure time attributes, and methods to check flight status and delay. ",
      code: `#include <iostream>
#include <string>
using namespace std;

class Airplane {
private:
    string flightNumber;
    string destination;
    string departureTime;

public:
    Airplane(string fNumber, string dest, string depTime) {
        flightNumber = fNumber;
        destination = dest;
        departureTime = depTime;
    }

    void checkFlightStatus() {
        cout << "Flight Number: " << flightNumber << endl;
        cout << "Destination: " << destination << endl;
        cout << "Scheduled Departure Time: " << departureTime << endl;
    }

    void checkDelay(string currentTime) {
        if (currentTime > departureTime) {
            cout << "Flight " << flightNumber << " is delayed!" << endl;
        } else {
            cout << "Flight " << flightNumber << " is on time." << endl;
        }
    }
};

int main() {
    string flightNum, destination, depTime, currentTime;

    cout << "Enter flight number: ";
    getline(cin, flightNum);

    cout << "Enter destination: ";
    getline(cin, destination);

    cout << "Enter departure time (HH:MM): ";
    getline(cin, depTime);

    Airplane airplane(flightNum, destination, depTime);

    airplane.checkFlightStatus();

    cout << "\nEnter current time (HH:MM): ";
    getline(cin, currentTime);

    airplane.checkDelay(currentTime);

    return 0;
}
`,
      output: `Enter flight number: 1234
Enter destination: Delhi
Enter departure time (HH:MM): 12:15 
Flight Number: 1234
Destination: Delhi
Scheduled Departure Time: 12:15

Enter current time (HH:MM): 10:00
Flight 1234 is on time.`
    },
    13: {
      title: "13. Write a C++ program to create a class called ''Inventory'' with a collection of products and methods to add and remove products, and to check for low inventory",
      code: `#include <iostream>
#include <string>
using namespace std;

class Inventory {
private:
    string productNames[10]; 
    int productQuantities[10]; 
    int productCount; 

public:
   
    Inventory() {
        productCount = 0; 
    }

    void addProduct(string productName, int quantity) {
        if (productCount < 10) {
            productNames[productCount] = productName;
            productQuantities[productCount] = quantity;
            productCount++;
            cout << "Product added: " << productName << " with quantity " << quantity << endl;
        } else {
            cout << "Inventory full! Cannot add more products." << endl;
        }
    }

    void removeProduct(string productName) {
        int index = -1;
        for (int i = 0; i < productCount; i++) {
            if (productNames[i] == productName) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            for (int i = index; i < productCount - 1; i++) {
                productNames[i] = productNames[i + 1];
                productQuantities[i] = productQuantities[i + 1];
            }
            productCount--;
            cout << "Product removed: " << productName << endl;
        } else {
            cout << "Product not found!" << endl;
        }
    }

    void checkLowInventory() {
        cout << "\nLow Inventory Products:" << endl;
        bool foundLowInventory = false;

        for (int i = 0; i < productCount; i++) {
            if (productQuantities[i] < 5) {
                cout << "Product: " << productNames[i] << ", Quantity: " << productQuantities[i] << endl;
                foundLowInventory = true;
            }
        }

        if (!foundLowInventory) {
            cout << "No products with low inventory." << endl;
        }
    }

    void displayProducts() {
        cout << "\nProducts in Inventory:" << endl;
        if (productCount == 0) {
            cout << "No products in the inventory." << endl;
        } else {
            for (int i = 0; i < productCount; i++) {
                cout << "Product: " << productNames[i] << ", Quantity: " << productQuantities[i] << endl;
            }
        }
    }
};

int main() {
    Inventory inv;

    inv.addProduct("Laptop", 10);
    inv.addProduct("Phone", 3);
    inv.addProduct("Headphones", 7);

    inv.displayProducts();

    inv.checkLowInventory();

    inv.removeProduct("Phone");
    inv.displayProducts();

    inv.checkLowInventory();

    return 0;
}
`,
      output: `Product added: Laptop with quantity 10
Product added: Phone with quantity 3
Product added: Headphones with quantity 7

Products in Inventory:
Product: Laptop, Quantity: 10
Product: Phone, Quantity: 3
Product: Headphones, Quantity: 7

Low Inventory Products:
Product: Phone, Quantity: 3
Product removed: Phone

Products in Inventory:
Product: Laptop, Quantity: 10
Product: Headphones, Quantity: 7

Low Inventory Products:
No products with low inventory.`
    },
    14:{
      title: "14. Write a C++ program to create a class called ''School'' with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.",
      code: `#include <iostream>
#include <string>
using namespace std;

class School {
private:
    string students[10];   
    string teachers[10];  
    string classes[10];   
    int studentCount;     
    int teacherCount;     
    int classCount;       
    
public:
    School() {
        studentCount = 0;
        teacherCount = 0;
        classCount = 0;
    }

    void addStudent(string studentName) {
        if (studentCount < 10) {
            students[studentCount] = studentName;
            studentCount++;
            cout << "Student added: " << studentName << endl;
        } else {
            cout << "No space for more students!" << endl;
        }
    }

    void removeStudent(string studentName) {
        int index = -1;
        for (int i = 0; i < studentCount; i++) {
            if (students[i] == studentName) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            for (int i = index; i < studentCount - 1; i++) {
                students[i] = students[i + 1];
            }
            studentCount--;
            cout << "Student removed: " << studentName << endl;
        } else {
            cout << "Student not found!" << endl;
        }
    }

    void addTeacher(string teacherName) {
        if (teacherCount < 10) {
            teachers[teacherCount] = teacherName;
            teacherCount++;
            cout << "Teacher added: " << teacherName << endl;
        } else {
            cout << "No space for more teachers!" << endl;
        }
    }

    void removeTeacher(string teacherName) {
        int index = -1;
        for (int i = 0; i < teacherCount; i++) {
            if (teachers[i] == teacherName) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            for (int i = index; i < teacherCount - 1; i++) {
                teachers[i] = teachers[i + 1];
            }
            teacherCount--;
            cout << "Teacher removed: " << teacherName << endl;
        } else {
            cout << "Teacher not found!" << endl;
        }
    }

    void createClass(string className) {
        if (classCount < 10) {
            classes[classCount] = className;
            classCount++;
            cout << "Class created: " << className << endl;
        } else {
            cout << "No space for more classes!" << endl;
        }
    }

    void displayStudents() {
        cout << "\nList of Students:" << endl;
        if (studentCount == 0) {
            cout << "No students in the school." << endl;
        } else {
            for (int i = 0; i < studentCount; i++) {
                cout << students[i] << endl;
            }
        }
    }

    void displayTeachers() {
        cout << "\nList of Teachers:" << endl;
        if (teacherCount == 0) {
            cout << "No teachers in the school." << endl;
        } else {
            for (int i = 0; i < teacherCount; i++) {
                cout << teachers[i] << endl;
            }
        }
    }

    void displayClasses() {
        cout << "\nList of Classes:" << endl;
        if (classCount == 0) {
            cout << "No classes in the school." << endl;
        } else {
            for (int i = 0; i < classCount; i++) {
                cout << classes[i] << endl;
            }
        }
    }
};

int main() {
    School school;

    school.addStudent("John Doe");
    school.addStudent("Jane Smith");

    school.addTeacher("Mr. Brown");
    school.addTeacher("Ms. Green");

    school.createClass("Mathematics");
    school.createClass("Science");

    school.displayStudents();
    school.displayTeachers();
    school.displayClasses();

    school.removeStudent("John Doe");
    school.removeTeacher("Ms. Green");

    school.displayStudents();
    school.displayTeachers();
    school.displayClasses();

    return 0;
}
`,
      output: `Student added: John Doe
Student added: Jane Smith
Teacher added: Mr. Brown
Teacher added: Ms. Green
Class created: Mathematics
Class created: Science

List of Students:
John Doe
Jane Smith

List of Teachers:
Mr. Brown
Ms. Green

List of Classes:
Mathematics
Science
Student removed: John Doe
Teacher removed: Ms. Green

List of Students:
Jane Smith

List of Teachers:
Mr. Brown

List of Classes:
Mathematics
Science`
    },
    15:{
      title: "15. Write a C++ program to create a class called ''MusicLibrary'' with a collection of songs and methods to add and remove songs, and to play a random song. ",
      code: `#include <iostream>
#include <string>
#include <cstdlib>  
#include <ctime>    
using namespace std;

class MusicLibrary {
private:
    string songs[10];   
    int songCount;       

public:
    MusicLibrary() {
        songCount = 0;
        srand(time(0)); 
    }

    void addSong(string songName) {
        if (songCount < 10) {
            songs[songCount] = songName;
            songCount++;
            cout << "Song added: " << songName << endl;
        } else {
            cout << "Music Library is full! Cannot add more songs." << endl;
        }
    }

    void removeSong(string songName) {
        int index = -1;
        for (int i = 0; i < songCount; i++) {
            if (songs[i] == songName) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            for (int i = index; i < songCount - 1; i++) {
                songs[i] = songs[i + 1];
            }
            songCount--;
            cout << "Song removed: " << songName << endl;
        } else {
            cout << "Song not found!" << endl;
        }
    }

    void playRandomSong() {
        if (songCount > 0) {
            int randomIndex = rand() % songCount;  
            cout << "Playing: " << songs[randomIndex] << endl;
        } else {
            cout << "No songs in the library to play!" << endl;
        }
    }

    void displaySongs() {
        cout << "\nSongs in Music Library:" << endl;
        if (songCount == 0) {
            cout << "No songs in the library." << endl;
        } else {
            for (int i = 0; i < songCount; i++) {
                cout << songs[i] << endl;
            }
        }
    }
};

int main() {
    MusicLibrary library;

    library.addSong("Song 1 - Imagine");
    library.addSong("Song 2 - Let It Be");
    library.addSong("Song 3 - Hey Jude");
    library.addSong("Song 4 - Bohemian Rhapsody");

    library.displaySongs();

    library.playRandomSong();

    library.removeSong("Song 2 - Let It Be");

    library.displaySongs();

    library.playRandomSong();

    return 0;
}
`,
      output: `Song added: Song 1 - Imagine
Song added: Song 2 - Let It Be
Song added: Song 3 - Hey Jude
Song added: Song 4 - Bohemian Rhapsody

Songs in Music Library:
Song 1 - Imagine
Song 2 - Let It Be
Song 3 - Hey Jude
Song 4 - Bohemian Rhapsody
Playing: Song 1 - Imagine
Song removed: Song 2 - Let It Be

Songs in Music Library:
Song 1 - Imagine
Song 3 - Hey Jude
Song 4 - Bohemian Rhapsody
Playing: Song 4 - Bohemian Rhapsody`
    }, 
    16:{
      title: "16. Write a C++ program to create a class called ''Shape'' with abstract methods for calculating area and perimeter, and subclasses for ''Rectangle'', ''Circle'', and ''Triangle''.",
      code: `#include <iostream>
#include <cmath>  

using namespace std;

class Shape {
public:
    virtual double calculateArea() = 0;           
    virtual double calculatePerimeter() = 0;    
};

class Rectangle : public Shape {
private:
    double length, width;
    
public:
    Rectangle(double l, double w) : length(l), width(w) {}

    double calculateArea() override {
        return length * width;
    }

    double calculatePerimeter() override {
        return 2 * (length + width);
    }
};

class Circle : public Shape {
private:
    double radius;
    
public:
    Circle(double r) : radius(r) {}

    double calculateArea() override {
        return M_PI * radius * radius;   
    }

    double calculatePerimeter() override {
        return 2 * M_PI * radius;       
    }
};

class Triangle : public Shape {
private:
    double a, b, c;  
    
public:
    Triangle(double sideA, double sideB, double sideC) : a(sideA), b(sideB), c(sideC) {}

    double calculateArea() override {
        double s = (a + b + c) / 2;  
        return sqrt(s * (s - a) * (s - b) * (s - c));  
    }

    double calculatePerimeter() override {
        return a + b + c;  
    }
};

int main() {
    Rectangle rectangle(5.0, 3.0);
    Circle circle(7.0);
    Triangle triangle(3.0, 4.0, 5.0);

    cout << "Rectangle:" << endl;
    cout << "Area: " << rectangle.calculateArea() << endl;
    cout << "Perimeter: " << rectangle.calculatePerimeter() << endl;

    cout << "\nCircle:" << endl;
    cout << "Area: " << circle.calculateArea() << endl;
    cout << "Perimeter: " << circle.calculatePerimeter() << endl;

    cout << "\nTriangle:" << endl;
    cout << "Area: " << triangle.calculateArea() << endl;
    cout << "Perimeter: " << triangle.calculatePerimeter() << endl;

    return 0;
}
`,
      output: `Song added: Song 1 - Imagine
Song added: Song 2 - Let It Be
Song added: Song 3 - Hey Jude
Song added: Song 4 - Bohemian Rhapsody

Songs in Music Library:
Song 1 - Imagine
Song 2 - Let It Be
Song 3 - Hey Jude
Song 4 - Bohemian Rhapsody
Playing: Song 1 - Imagine
Song removed: Song 2 - Let It Be

Songs in Music Library:
Song 1 - Imagine
Song 3 - Hey Jude
Song 4 - Bohemian Rhapsody
Playing: Song 4 - Bohemian Rhapsody
PS C:\Users\Pooja\Desktop\c plus\cpp file\oops> cd "c:\Users\Pooja\Desktop\c plus\cpp file\oops\" ; if ($?) { g++ tempCodeRunnerFile.cpp -o tempCodeRunnerFile } ; if ($?) { .\tempCodeRunnerFile }
Rectangle:
Area: 15
Perimeter: 16

Circle:
Area: 153.938
Perimeter: 43.9823

Triangle:
Area: 6
Perimeter: 12`
    }, 
    17:{
      title: "17. Write a C++ program to create a class called ''Movie'' with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews. ",
      code: `#include <iostream>
#include <string>

using namespace std;

class Movie {
private:
    string title;
    string director;
    string actors[10];
    string reviews[10];
    int actorCount;
    int reviewCount;

public:
    Movie(string t, string d) {
        title = t;
        director = d;
        actorCount = 0;
        reviewCount = 0;
    }

    void addActor(string name) {
        if (actorCount < 10) {
            actors[actorCount] = name;
            actorCount++;
        }
    }

    void addReview(string review) {
        if (reviewCount < 10) {
            reviews[reviewCount] = review;
            reviewCount++;
        }
    }

    void displayMovie() {
        cout << "Title: " << title << endl;
        cout << "Director: " << director << endl;
        cout << "Actors: " << endl;
        for (int i = 0; i < actorCount; i++) {
            cout << actors[i] << endl;
        }
        cout << "Reviews: " << endl;
        for (int i = 0; i < reviewCount; i++) {
            cout << reviews[i] << endl;
        }
    }
};

int main() {
    Movie m("Inception", "Christopher Nolan");
    m.addActor("Leonardo DiCaprio");
    m.addActor("Joseph Gordon-Levitt");
    m.addReview("Amazing movie!");
    m.addReview("Mind-blowing!");
    m.displayMovie();

    return 0;
}
`,
      output: `Title: Inception
Director: Christopher Nolan
Actors: 
Leonardo DiCaprio
Joseph Gordon-Levitt
Reviews: 
Amazing movie!
Mind-blowing!`
    },
    18:{
      title: "18. Write a C++ program to create a class called ''Restaurant'' with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.",
      code: `#include <iostream>
#include <string>

using namespace std;

class Restaurant {
private:
    string items[10];
    float prices[10];
    int ratings[10];
    int count;

public:
    Restaurant() {
        count = 0;
    }

    void addItem(string item, float price, int rating) {
        if (count < 10) {
            items[count] = item;
            prices[count] = price;
            ratings[count] = rating;
            count++;
        }
    }

    void removeItem(string item) {
        for (int i = 0; i < count; i++) {
            if (items[i] == item) {
                for (int j = i; j < count - 1; j++) {
                    items[j] = items[j + 1];
                    prices[j] = prices[j + 1];
                    ratings[j] = ratings[j + 1];
                }
                count--;
                break;
            }
        }
    }

    float averageRating() {
        if (count == 0) return 0;
        int total = 0;
        for (int i = 0; i < count; i++) {
            total += ratings[i];
        }
        return (float)total / count;
    }

    void showMenu() {
        for (int i = 0; i < count; i++) {
            cout << items[i] << " - Rs." << prices[i] << " - Rating: " << ratings[i] << endl;
        }
    }
};

int main() {
    Restaurant r;
    r.addItem("Pizza", 250, 4);
    r.addItem("Burger", 150, 5);
    r.addItem("Pasta", 200, 3);
    r.removeItem("Burger");
    r.showMenu();
    cout << "Average Rating: " << r.averageRating() << endl;

    return 0;
}
`,
      output: `Pizza - Rs.250 - Rating: 4
Pasta - Rs.200 - Rating: 3
Average Rating: 3.5`
    },
    19:{
      title: "19. Write a C++ program to create a class with methods to search for flights and hotels, and to book and cancel reservations. ",
      code: `#include <iostream>
#include <string>

using namespace std;

class FlightHotelSystem {
private:
    string flights[5] = {"FlightA", "FlightB", "FlightC", "FlightD", "FlightE"};
    string hotels[5] = {"HotelX", "HotelY", "HotelZ", "HotelW", "HotelQ"};
    string bookedFlight;
    string bookedHotel;

public:
    void searchFlights() {
        cout << "Available Flights:" << endl;
        for (int i = 0; i < 5; i++) {
            cout << flights[i] << endl;
        }
    }

    void searchHotels() {
        cout << "Available Hotels:" << endl;
        for (int i = 0; i < 5; i++) {
            cout << hotels[i] << endl;
        }
    }

    void bookFlight(string name) {
        for (int i = 0; i < 5; i++) {
            if (flights[i] == name) {
                bookedFlight = name;
                cout << "Flight " << name << " booked." << endl;
                return;
            }
        }
        cout << "Flight not found." << endl;
    }

    void cancelFlight() {
        if (bookedFlight != "") {
            cout << "Cancelled Flight: " << bookedFlight << endl;
            bookedFlight = "";
        } else {
            cout << "No flight booking found." << endl;
        }
    }

    void bookHotel(string name) {
        for (int i = 0; i < 5; i++) {
            if (hotels[i] == name) {
                bookedHotel = name;
                cout << "Hotel " << name << " booked." << endl;
                return;
            }
        }
        cout << "Hotel not found." << endl;
    }

    void cancelHotel() {
        if (bookedHotel != "") {
            cout << "Cancelled Hotel: " << bookedHotel << endl;
            bookedHotel = "";
        } else {
            cout << "No hotel booking found." << endl;
        }
    }
};

int main() {
    FlightHotelSystem system;
    system.searchFlights();
    system.bookFlight("FlightB");
    system.cancelFlight();
    system.searchHotels();
    system.bookHotel("HotelY");
    system.cancelHotel();

    return 0;
}
`,
      output: `Available Flights:
FlightA
FlightB
FlightC
FlightD
FlightE
Flight FlightB booked.
Cancelled Flight: FlightB
Available Hotels:
HotelX
HotelY
HotelZ
HotelW
HotelQ
Hotel HotelY booked.
Cancelled Hotel: HotelY`
    },
    20:{
      title: "20. Create a class showing an example of default constructor. ",
      code: `#include <iostream>
#include <string>

using namespace std;

class Car {
private:
    string brand;
    int year;

public:
    Car() {
        brand = "Toyota";
        year = 2020;
    }

    void display() {
        cout << "Brand: " << brand << endl;
        cout << "Year: " << year << endl;
    }
};

int main() {
    Car c;
    c.display();

    return 0;
}
`,
      output: `Brand: Toyota
Year: 2020`
    },
    21:{
      title: "21. Create a class showing an example of parameterized constructor. ",
      code: `#include <iostream>
#include <string>

using namespace std;

class Student {
private:
    string name;
    int age;

public:
    Student(string n, int a) {
        name = n;
        age = a;
    }

    void display() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

int main() {
    Student s("Rahul", 20);
    s.display();

    return 0;
}
`,
      output: `Name: Rahul
Age: 20`
    },
    22:{
      title: "22. Create a class showing an example of copy constructor.",
      code: `#include <iostream>
#include <string>

using namespace std;

class Person {
private:
    string name;
    int age;

public:
    Person(string n, int a) {
        name = n;
        age = a;
    }

    Person(const Person &p) {
        name = p.name;
        age = p.age;
    }

    void display() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

int main() {
    Person p1("Amit", 25);
    Person p2 = p1;

    p1.display();
    p2.display();

    return 0;
}
`,
      output: `Name: Amit
Age: 25
Name: Amit
Age: 25`
    },
    23:{
      title: "23. Create a class entering the rollno, name and class of the student from user but rollno should be automatically generated as we enter the information of 10 students",
      code: `#include <iostream>
#include <string>

using namespace std;

class Student {
private:
    static int nextRoll;
    int rollno;
    string name;
    string studentClass;

public:
    Student() {
        rollno = nextRoll;
        nextRoll++;
    }

    void input() {
        cout << "Enter name: ";
        cin >> name;
        cout << "Enter class: ";
        cin >> studentClass;
    }

    void display() {
        cout << "Roll No: " << rollno << ", Name: " << name << ", Class: " << studentClass << endl;
    }
};

int Student::nextRoll = 1;

int main() {
    Student s[10];
    for (int i = 0; i < 10; i++) {
        cout << "Enter details for student " << (i + 1) << ":" << endl;
        s[i].input();
    }

    cout << "\nStudent Details:\n";
    for (int i = 0; i < 10; i++) {
        s[i].display();
    }

    return 0;
}
`,
      output: `Enter details for student 1:
Enter name: Madhav
Enter class: 3
Enter details for student 2:
Enter name: Saloni
Enter class: 3
Enter details for student 3:
Enter name: Shami
Enter class: 3
Enter details for student 4:
Enter name: Yuv
Enter class: 3
Enter details for student 5:
Enter name: Lavyansh
Enter class: 3
Enter details for student 6:
Enter name: Ansh
Enter class: 3
Enter details for student 7:
Enter name: Pushkar
Enter class: 3
Enter details for student 8:
Enter name: Himang
Enter class: 3
Enter details for student 9:
Enter name: Simran
Enter class: 3
Enter details for student 10:
Enter name: Kushal
Enter class: 3

Student Details:
Roll No: 1, Name: Madhav, Class: 3
Roll No: 2, Name: Saloni, Class: 3
Roll No: 3, Name: Shami, Class: 3
Roll No: 4, Name: Yuv, Class: 3
Roll No: 5, Name: Lavyansh, Class: 3
Roll No: 6, Name: Ansh, Class: 3
Roll No: 7, Name: Pushkar, Class: 3
Roll No: 8, Name: Himang, Class: 3
Roll No: 9, Name: Simran, Class: 3
Roll No: 10, Name: Kushal, Class: 3`
    },
    24:{
      title: "24. Create a class showing the area of circle and rectangle by method overloading. ",
      code: `#include <iostream>

using namespace std;

class Area {
public:
    void findArea(float radius) {
        float area = 3.14 * radius * radius;
        cout << "Area of Circle: " << area << endl;
    }

    void findArea(float length, float breadth) {
        float area = length * breadth;
        cout << "Area of Rectangle: " << area << endl;
    }
};

int main() {
    Area obj;

    obj.findArea(5.0f);            // Circle
    obj.findArea(4.0f, 6.0f);      // Rectangle

    return 0;
}
`,
      output: `Area of Circle: 78.5
Area of Rectangle: 24`
    },
    25:{
      title: "25. Write a C++ program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables. ",
      code: `#include <iostream>
#include <string>

using namespace std;

class Person {
private:
    string name;
    int age;
    string country;

public:
    void setName(string n) {
        name = n;
    }

    void setAge(int a) {
        age = a;
    }

    void setCountry(string c) {
        country = c;
    }

    string getName() {
        return name;
    }

    int getAge() {
        return age;
    }

    string getCountry() {
        return country;
    }
};

int main() {
    Person p;

    p.setName("Ravi");
    p.setAge(30);
    p.setCountry("India");

    cout << "Name: " << p.getName() << endl;
    cout << "Age: " << p.getAge() << endl;
    cout << "Country: " << p.getCountry() << endl;

    return 0;
}
`,
      output: `Name: Ravi
Age: 30
Country: India`
    },
    26:{
      title: "26. Write a C++ program to create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables. ",
      code: `#include <iostream>

using namespace std;

class BankAccount {
private:
    int accountNumber;
    double balance;

public:
    void setAccountNumber(int num) {
        accountNumber = num;
    }

    void setBalance(double b) {
        balance = b;
    }

    int getAccountNumber() {
        return accountNumber;
    }

    double getBalance() {
        return balance;
    }
};

int main() {
    BankAccount account;

    account.setAccountNumber(123456);
    account.setBalance(1000.50);

    cout << "Account Number: " << account.getAccountNumber() << endl;
    cout << "Balance: $" << account.getBalance() << endl;

    return 0;
}
`,
      output: `Account Number: 123456
Balance: $1000.5`
    },
    27:{
      title: "27. Write a C++ program to create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables",
      code: `#include <iostream>

using namespace std;

class Rectangle {
private:
    double length;
    double width;

public:
    void setLength(double l) {
        length = l;
    }

    void setWidth(double w) {
        width = w;
    }

    double getLength() {
        return length;
    }

    double getWidth() {
        return width;
    }

    double calculateArea() {
        return length * width;
    }

    double calculatePerimeter() {
        return 2 * (length + width);
    }
};

int main() {
    Rectangle r;

    r.setLength(5.0);
    r.setWidth(3.0);

    cout << "Length: " << r.getLength() << endl;
    cout << "Width: " << r.getWidth() << endl;
    cout << "Area: " << r.calculateArea() << endl;
    cout << "Perimeter: " << r.calculatePerimeter() << endl;

    return 0;
}
`,
      output: `Length: 5
Width: 3
Area: 15
Perimeter: 16`
    },
    28:{
      title: "28. Write a C++ program to create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.",
      code: `#include <iostream>
#include <iomanip>  

using namespace std;

class Employee {
private:
    int employee_id;
    string employee_name;
    double employee_salary;

public:
    
    void setEmployeeId(int id) {
        employee_id = id;
    }

    void setEmployeeName(string name) {
        employee_name = name;
    }

    int getEmployeeId() {
        return employee_id;
    }

    string getEmployeeName() {
        return employee_name;
    }

    void setEmployeeSalary(double salary) {
        employee_salary = salary;
    }

    string getFormattedSalary() {
        stringstream ss;
        ss << fixed << setprecision(2) << employee_salary;
        return "$" + ss.str();
    }
};

int main() {
    Employee e;

    e.setEmployeeId(101);
    e.setEmployeeName("John Doe");
    e.setEmployeeSalary(50000.75);

    cout << "Employee ID: " << e.getEmployeeId() << endl;
    cout << "Employee Name: " << e.getEmployeeName() << endl;
    cout << "Employee Salary: " << e.getFormattedSalary() << endl;

    return 0;
}
`,
      output: `Employee ID: 101
Employee Name: John Doe
Employee Salary: $50000.75`
    },
    29:{
      title: "29. Write a C++ program to create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value. ",
      code: `#include <iostream>
#include <cmath>  

using namespace std;

class Circle {
private:
    double radius;

public:
    void setRadius(double r) {
        radius = r;
    }

    double getRadius() {
        return radius;
    }

    double calculateArea() {
        return M_PI * radius * radius;  
    }

    double calculatePerimeter() {
        return 2 * M_PI * radius; 
    }
};

int main() {
    Circle c;

    c.setRadius(5.0);

    cout << "Radius of Circle: " << c.getRadius() << endl;
    cout << "Area of Circle: " << c.calculateArea() << endl;
    cout << "Perimeter of Circle: " << c.calculatePerimeter() << endl;

    return 0;
}
`,
      output: `Radius of Circle: 5
Area of Circle: 78.5398
Perimeter of Circle: 31.4159`
    },
    30:{
      title: "30. Write a C++ program to create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.",
      code: `#include <iostream>
#include <string>

using namespace std;

class Car {
private:
    string company_name;
    string model_name;
    int year;
    double mileage;

public:
    void setCompanyName(string company) {
        company_name = company;
    }

    void setModelName(string model) {
        model_name = model;
    }

    void setYear(int y) {
        year = y;
    }

    string getCompanyName() {
        return company_name;
    }

    string getModelName() {
        return model_name;
    }

    int getYear() {
        return year;
    }

    double getMileage() {
        return mileage;
    }

    void setMileage(double m) {
        mileage = m;
    }
};

int main() {
    Car myCar;

    myCar.setCompanyName("Toyota");
    myCar.setModelName("Camry");
    myCar.setYear(2020);
    myCar.setMileage(25000.5);

    cout << "Company: " << myCar.getCompanyName() << endl;
    cout << "Model: " << myCar.getModelName() << endl;
    cout << "Year: " << myCar.getYear() << endl;
    cout << "Mileage: " << myCar.getMileage() << " miles" << endl;

    return 0;
}
`,
      output: `Company: Toyota
Model: Camry
Year: 2020
Mileage: 25000.5 miles`
    },
    31:{
      title: "31. Write a C++ program to create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.",
      code: `#include <iostream>
#include <string>

using namespace std;

class Student {
private:
    int student_id;
    string student_name;
    int grades[10];  
    int grade_count;

public:
    Student() {
        grade_count = 0;
    }

    void setStudentId(int id) {
        student_id = id;
    }

    int getStudentId() {
        return student_id;
    }

    void setStudentName(string name) {
        student_name = name;
    }

    string getStudentName() {
        return student_name;
    }

    void addGrade(int grade) {
        if (grade >= 0 && grade <= 100 && grade_count < 10) {
            grades[grade_count] = grade;
            grade_count++;
            cout << "Grade added successfully!" << endl;
        } else if (grade < 0 || grade > 100) {
            cout << "Invalid grade! Please enter a grade between 0 and 100." << endl;
        } else {
            cout << "Grade limit reached (maximum 10 grades)." << endl;
        }
    }

    void displayGrades() {
        cout << "Grades for " << student_name << ": ";
        for (int i = 0; i < grade_count; i++) {
            cout << grades[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    Student student1;

    student1.setStudentId(1);
    student1.setStudentName("Shila");

    student1.addGrade(85);
    student1.addGrade(90);
    student1.addGrade(105); 
    student1.addGrade(78);

    cout << "Student ID: " << student1.getStudentId() << endl;
    cout << "Student Name: " << student1.getStudentName() << endl;
    student1.displayGrades();

    return 0;
}
`,
      output: `Grade added successfully!
Grade added successfully!
Invalid grade! Please enter a grade between 0 and 100.
Grade added successfully!
Student ID: 1
Student Name: Shila
Grades for Shila: 85 90 78 `
    }
  
  };
  
  function loadQuestion(num) {
    const question = oops[num];
    if (!question) return;
  
    document.querySelector('.default').style.display = 'none';
    const container = document.getElementById('question-container');
    container.style.display = 'block';
  
    document.getElementById('question-title').textContent = question.title;
    document.getElementById('code-block').textContent = question.code;
    document.getElementById('output-block').textContent = question.output;
  }
  