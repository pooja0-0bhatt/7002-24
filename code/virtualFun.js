const virtualFun = {
    1: {
        title: "1. Write a C++ program to create an abstract class Animal with an abstract method called sound(). Create derived classes Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.",
        code: `#include <iostream>

using namespace std;

class Animal {
public:
    virtual void sound() = 0; 
};

class Lion : public Animal {
public:
    void sound() {
        cout << "Roar" << endl;
    }
};

class Tiger : public Animal {
public:
    void sound() {
        cout << "chuff" << endl;
    }
};

int main() {
    Lion lion;
    Tiger tiger;

    cout << "Lion sound: ";
    lion.sound();

    cout << "Tiger sound: ";
    tiger.sound();

    return 0;
}
`,
        output: `Lion sound: Roar
Tiger sound: chuff`
    },
    2: {
        title: "2. Write a C++ program to create an abstract class Animal with an abstract method called sound(). Create derived classes Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.",
        code: `#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() = 0;
};

class Lion : public Animal {
public:
    void sound() {
        cout << "Lion roars" << endl;
    }
};

class Tiger : public Animal {
public:
    void sound() {
        cout << "Tiger growls" << endl;
    }
};

int main() {
    Lion lion;
    Tiger tiger;

    cout << "The sound of Lion: ";
    lion.sound();

    cout << "The sound of Tiger: ";
    tiger.sound();

    return 0;
}`,
        output: `The sound of Lion: Lion roars
The sound of Tiger: Tiger growls`
    },
    3: {
        title: "3. Write a C++ program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create derived classes Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape. ",
        code: `#include <iostream>
using namespace std;

class Shape {

public:

virtual void calculateArea()  = 0;
virtual void calculatePerimeter()  = 0;

};


class Circle : public Shape {

public:

void calculateArea () {
        float r;
        cout<<"Calculate Area"  <<endl;
        cout<<"Enter  radius of the circle : " ;
        cin>>r;
        cout<<"area of cicle is : " <<r*r*3.14<<endl;

    };
    void calculatePerimeter () {
        cout<<"Calculate perimeter"<<endl;
        float r;
        cout<<"Enter  radius of the circle : " ;
        cin>>r;
        cout<<"Perimeter of cicle is : " <<2*r*3.14;
    }

};
class Triangle : public Shape {

public:

void calculateArea () override{
        float h,b;
        cout<<"\nCalculate Area"  <<endl;
        cout<<"Enter  base of the Triangle : " ;
        cin>>b;
        cout<<"Enter  height of the Triangle : " ;
        cin>>h;
        cout<<"area of Triangle is : " <<b*h*0.5<<endl;

    };
    void calculatePerimeter () override{
        cout<<"Calculate perimeter"<<endl;
        float a,b,c;
        cout<<"Enter  side 1 of the Triangle : " ;
        cin>>a;
        cout<<"Enter  side 2 of the Triangle : " ;
        cin>>b;
        cout<<"Enter  side 3 of the Triangle : " ;
        cin>>c;
        cout<<"Perimeter of Triangle is : " << a+b+c;
    }

};


int main() {


    Circle obj1;
    obj1.calculateArea();
    obj1.calculatePerimeter();

    Triangle obj;
    obj.calculateArea();
    obj.calculatePerimeter();

    return 0;
}`,
        output: `Calculate Area
Enter  radius of the circle : 12
area of cicle is : 452.16
Calculate perimeter
Enter  radius of the circle : 6
Perimeter of cicle is : 37.68
Calculate Area
Enter  base of the Triangle : 5
Enter  height of the Triangle : 2
area of Triangle is : 5
Calculate perimeter
Enter  side 1 of the Triangle : 5
Enter  side 2 of the Triangle : 6
Enter  side 3 of the Triangle : 4
Perimeter of Triangle is : 15`
    },
    4: {
        title: "4. Write a C++ program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create derived classes: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.",
        code: `#include <iostream>
using namespace std;

class BankAccount {
protected:
    float balance;
public:
    BankAccount() {
        balance = 0.0;
    }

    virtual void deposit(float amount) = 0;
    virtual void withdraw(float amount) = 0;
    
    float getBalance() {
        return balance;
    }

    virtual ~BankAccount() {}
};

class SavingsAccount : public BankAccount {
public:
    void deposit(float amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited in Savings Account: Rs. " << amount << endl;
        } else {
            cout << "Invalid deposit amount!" << endl;
        }
    }

    void withdraw(float amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrawn from Savings Account: Rs. " << amount << endl;
        } else {
            cout << "Invalid withdraw amount or insufficient funds!" << endl;
        }
    }
};

class CurrentAccount : public BankAccount {
public:
    void deposit(float amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited in Current Account: Rs. " << amount << endl;
        } else {
            cout << "Invalid deposit amount!" << endl;
        }
    }

    void withdraw(float amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrawn from Current Account: Rs. " << amount << endl;
        } else {
            cout << "Invalid withdraw amount or insufficient funds!" << endl;
        }
    }
};

int main() {
    SavingsAccount savings;
    savings.deposit(1000);
    savings.withdraw(500);
    cout << "Savings Account Balance: Rs. " << savings.getBalance() << endl;

    CurrentAccount current;
    current.deposit(2000);
    current.withdraw(1500);
    cout << "Current Account Balance: Rs. " << current.getBalance() << endl;

    cout << "\nAttempting to withdraw more than balance from Savings Account:\n";
    savings.withdraw(600);

    cout << "\nAttempting to withdraw from Current Account:\n";
    current.withdraw(600);

    return 0;
}`,
        output: `Deposited in Savings Account: Rs. 1000
Withdrawn from Savings Account: Rs. 500
Savings Account Balance: Rs. 500
Deposited in Current Account: Rs. 2000
Withdrawn from Current Account: Rs. 1500
Current Account Balance: Rs. 500

Attempting to withdraw more than balance from Savings Account:
Invalid withdraw amount or insufficient funds!

Attempting to withdraw from Current Account:
Invalid withdraw amount or insufficient funds!`
    },
    5: {
        title: "5. Write a C++ program to create an abstract class Animal with abstract methods eat() and sleep(). Create derived classes Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior. ",
        code: `#include<iostream>
using namespace std ;

class Animal {
    public :

    virtual void eat() = 0;
    virtual void sleep()  = 0;
    
};

class lion : public Animal {

    public :
        
            void eat()  {
                cout<<"Lion eat Deer" <<endl;
            }
            void sleep()  {
                cout<<"Lion sleep for 10 hour " <<endl;
            }
    };

class Tiger : public Animal {

    public :
        void eat()  {
            cout<<"Tiger eat goat" <<endl;
        }

        void sleep()  {
            cout<<"Tiger sleep for 8 hour " <<endl;
        }
    };

class Deer : public Animal {

    public :
        
            void eat()  {
                cout<<"Deer eat grass" <<endl;
            }
            void sleep()  {
                cout<<"Deer sleep for 6 hour " <<endl;
            }
    };

    int main(){

        lion obj;
        obj.eat();
        obj.sleep();

        Tiger obj1;
        obj1.eat();
        obj1.sleep();

        Deer obj2;
        obj2.eat();
        obj2.sleep();

        return 0;

    }`,
        output: `        Lion eat Deer
        Lion sleep for 10 hour 
        Tiger eat goat
        Tiger sleep for 8 hour 
        Deer eat grass
        Deer sleep for 6 hour `
    },
    6: {
        title: "6. Write a C++ program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create derived classes Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role. ",
        code: `#include <iostream>
#include <string>
using namespace std;

class Employee {
public:
    virtual void calculateSalary() = 0; 
    virtual void displayInfo() = 0;      
};

// Derived class Manager
class Manager : public Employee {
public:
    string name;
    float baseSalary;
    float bonus;

    void calculateSalary() override {
        float totalSalary = baseSalary + bonus;
        cout << "Manager's Total Salary: " << totalSalary << endl;
    }

    void displayInfo() override {
        cout << "Manager Name: " << name << endl;
        cout << "Base Salary: " << baseSalary << endl;
        cout << "Bonus: " << bonus << endl;
    }
};

class Programmer : public Employee {
public:
    string name;
    float baseSalary;
    int numberOfProjects;

    void calculateSalary(){
        float totalSalary = baseSalary + (numberOfProjects * 4500); 
        cout << "Programmer's Total Salary: " << totalSalary << endl;
    }

    void displayInfo() {
        cout << "Programmer Name: " << name << endl;
        cout << "Base Salary: " << baseSalary << endl;
        cout << "Number of Projects: " << numberOfProjects << endl;
    }
};

int main() {
    Manager manager;
    manager.name = "Alice";
    manager.baseSalary = 85000;
    manager.bonus = 3500;

    Programmer programmer;
    programmer.name = "Bob";
    programmer.baseSalary = 35000;
    programmer.numberOfProjects = 3;

    cout << "Manager Information:" << endl;
    manager.displayInfo();
    manager.calculateSalary();

    cout << endl;

    cout << "Programmer Information:" << endl;
    programmer.displayInfo();
    programmer.calculateSalary();

    return 0;
}`,
        output: `Manager Information:
Manager Name: Alice
Base Salary: 85000
Bonus: 3500
Manager's Total Salary: 88500

Programmer Information:
Programmer Name: Bob
Base Salary: 35000
Number of Projects: 3
Programmer's Total Salary: 48500`
    },
    7: {
        title: "7. Write a C++ program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create derived classes Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape  ",
        code: `#include <iostream>
 using namespace std;
 
 const float PI = 3.1416;
 
 class Shape3D {
 public:
     virtual float calculateVolume() = 0;
     virtual float calculateSurfaceArea() = 0;
     virtual ~Shape3D() {}
 };
 
 class Sphere : public Shape3D {
 private:
     float radius;
 
 public:
     Sphere(float r) {
         radius = r;
     }
 
     float calculateVolume() {
         return (4.0 / 3.0) * PI * radius * radius * radius;
     }
 
     float calculateSurfaceArea() {
         return 4 * PI * radius * radius;
     }
 };
 
 class Cube : public Shape3D {
 private:
     float side;
 
 public:
     Cube(float s) {
         side = s;
     }
 
     float calculateVolume() {
         return side * side * side;
     }
 
     float calculateSurfaceArea() {
         return 6 * side * side;
     }
 };
 
 int main() {
     float r, s;
 
     cout << "Enter radius of sphere: ";
     cin >> r;
     Sphere sphere(r);
     cout << "Sphere Volume: " << sphere.calculateVolume() << endl;
     cout << "Sphere Surface Area: " << sphere.calculateSurfaceArea() << endl;
 
     cout << "\nEnter side of cube: ";
     cin >> s;
     Cube cube(s);
     cout << "Cube Volume: " << cube.calculateVolume() << endl;
     cout << "Cube Surface Area: " << cube.calculateSurfaceArea() << endl;
 
     return 0;
 }
 `,
        output: `Enter radius of sphere: 5
Sphere Volume: 523.6
Sphere Surface Area: 314.16

Enter side of cube: 8
Cube Volume: 512
Cube Surface Area: 384`
    },
    8: {
        title: "8. Write a C++ program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create derived classes Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type ",
        code: `#include <iostream>
using namespace std;

class Vehicle 
{
	public:
	   virtual void startEngine() = 0;
	   virtual void stopEngine() = 0;
};

class Car : public Vehicle {
	public:
	   void startEngine() 
		{
	      cout << "Car engine started.\n";
	   }
	   void stopEngine() 
		{
	      cout << "Car engine stopped.\n";
	   }
};

class Motorcycle : public Vehicle {
	public:
	   void startEngine() 
		{
	      cout << "Motorcycle engine started.\n";
	   }
	   void stopEngine() 
		{
	      cout << "Motorcycle engine stopped.\n";
	   }
};

int main() {
	
   Car myCar;
   Motorcycle myMotorcycle;
   myCar.startEngine();
   myCar.stopEngine();
   myMotorcycle.startEngine();
   myMotorcycle.stopEngine();
}
`,
        output: `Car engine started.
Car engine stopped.
Motorcycle engine started.
Motorcycle engine stopped.`
    },
    9: {
        title: "9. Write a C++ program to create an abstract class Person with abstract methods eat() and exercise(). Create derived classes Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises. ",
        code: `#include <iostream>
using namespace std;

class Person
{
public:
	virtual void eat() = 0;
	virtual void exercise() = 0;
};

class Athlete : public Person
{
public:
	void eat()
	{
		cout << "An athlete eats a healthy food \n";
	}
	void exercise()
	{
		cout << "An athlete exercises regularly  \n";
	}
};

class LazyPerson : public Person
{
public:
	void eat()
	{
		cout << "A lazy person eat junk food. \n";
	}
	void exercise()
	{
		cout << "A lazy person didn't do exercises \n";
	}
};

int main()
{
	Athlete athlete;
	LazyPerson lazyPerson;
	cout << "Athlete's routine:\n";
	athlete.eat();
	athlete.exercise();
	cout << "\n";
	cout << "Lazy person's routine:\n";
	lazyPerson.eat();
	lazyPerson.exercise();
}
`,
        output: `Athlete's routine:
An athlete eats a healthy food
An athlete exercises regularly

Lazy person's routine:
A lazy person eat junk food.
A lazy person didn't do exercises`
    },
    10: {
        title: "10. Write a C++ program to create an abstract class Instrument with abstract methods play() and tune(). Create derived classes for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument. ",
        code: `#include <iostream>
using namespace std;

class Instrument {
public:
	virtual void play() = 0;
	virtual void tune() = 0;
};

class Glockenspiel : public Instrument {
public:
	void play()	{
		cout << "Playing Glockenspiel\n";
	}
	void tune()	{
		cout << "Tune of Glockenspiel\n";
	}
};

class Violin : public Instrument {
public:
	void play() {
		cout << "Playing Violin\n";
	}
	void tune()	{
		cout << "Tune of the Violin\n";
	}
};

int main() {
	Glockenspiel glock;
	Violin violin;
	glock.play();
	glock.tune();
	violin.play();
	violin.tune();
}`,
        output: `Playing Glockenspiel
Tune of Glockenspiel
Playing Violin
Tune of the Violin`
    },
    11: {
        title: "11. Write a C++ program to create an abstract class Shape2D with abstract methods draw() and resize(). Create derived classes Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.",
        code: `#include <iostream>
using namespace std;

class Shape2D {
public:
    virtual void draw() = 0;
    virtual void resize() = 0;
};

class Rectangle : public Shape2D {
public:
    void draw() {
        cout << "drawing RECTANGLE" << endl;
    }

    void resize() {
        cout << " changing size of  rectangle" << endl;
    }
};

class Circle : public Shape2D {
public:
    void draw() {
        cout << "drawing CIRCLE" << endl;
    }

    void resize() {
        cout << "changing size of  circle" << endl;
    }
};

int main() {
    
    Rectangle obj;
    Circle obj1;

    cout << "Rectangle operations:" << endl;
    obj.draw();
    obj.resize();

    cout << "\nCircle operations:" << endl;
    obj1.draw();
    obj1.resize();

    return 0;
}`,
        output: `Rectangle operations:
drawing RECTANGLE
 changing size of  rectangle

Circle operations:
drawing CIRCLE
changing size of  circle`
    },
    12: {
        title: "12. Write a C++ program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create derived classes Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape",
        code: `#include <iostream>
using namespace std;

class GeometricShape {
public:
    virtual void area() = 0;
    virtual void perimeter() = 0;
};

class Square : public GeometricShape {
private:
    int side;

public:
    void getSide(){
        cout << "Enter Side : ";
        cin >> side;
    }

    void area() {
        getSide();
        cout << "Area is : " << side * side << endl;
    }

    void perimeter() {
        getSide();
        cout << "Perimeter is : " << 4 * side << endl;
    }
};

class Triangle : public GeometricShape {
public:
    void area() {
        int b, h;
        cout << "Enter base : ";
        cin >> b;
        cout << "Enter height : ";
        cin >> h;
        cout << "Area is : " << (0.5) * b * h << endl;
    }

    void perimeter() {
        int a, b, c;
        cout << "Enter sides three sides of triangle : ";
        cin >> a >> b >> c;
        cout << "Perimeter is : " << a + b + c << endl;
    }
};

int main()
{
    Square square;
    Triangle triangle;

    cout << "Square:" << endl;
    square.area();
    square.perimeter();

    cout << "\nTriangle:" << endl;
    triangle.area();
    triangle.perimeter();

    return 0;
}
`,
        output: `Square:
Enter Side : 4
Area is : 16
Enter Side : 4
Perimeter is : 16

Triangle:
Enter base : 5
Enter height : 2
Area is : 5
Enter sides three sides of triangle : 3 4 6
Perimeter is : 13`
    },
    13: {
        title: "13. Write a C++ program to create an abstract class Bird with abstract methods fly() and makeSound(). Create derived classes Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound. ",
        code: `#include <iostream>
using namespace std;

class Bird {
public:
    virtual void makeSound() = 0;
    virtual void fly() = 0;
};

class Eagle : public Bird {
public:
    void makeSound() {
        cout << "Eagle fly high in the sky " << endl;
    }
    void fly() {
        cout << "Eagle braying" << endl;
    }
};

class Hawk : public Bird {
public:
    void makeSound() {
        cout << "Hawk fly on ground level" << endl;
    }
    void fly() override
    {
        cout << "hawk soar" << endl;
    }
};

int main() {

    Eagle obj;
    obj.fly();
    obj.makeSound();

    Hawk ob1;
    ob1.fly();
    ob1.makeSound();

    return 0;
}
`,
        output: `Eagle braying
Eagle fly high in the sky
hawk soar
Hawk fly on ground level`
    },

};

function loadQuestion(num) {
    const question = virtualFun[num];
    if (!question) return;

    document.querySelector('.default').style.display = 'none';
    const container = document.getElementById('question-container');
    container.style.display = 'block';

    document.getElementById('question-title').textContent = question.title;
    document.getElementById('code-block').textContent = question.code;
    document.getElementById('output-block').textContent = question.output;
}