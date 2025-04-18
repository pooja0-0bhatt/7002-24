
const inheritance = {
  1: {
    title: "1. Write a C++ program to create a class called Animal with a method called makeSound(). Create a derived class called Cat that overrides the makeSound() method to bark. ",
      code: `#include<iostream>
using namespace std;

class Animal{
    public:
    virtual void makeSound()=0;

};

class Cat:Animal{
    public:
    void makeSound(){
        cout<<"Bark";
    } 
    Cat(){
        makeSound();
    }
};


int main(){
    Cat cat1;
    return 0;
}`,
      output: `Bark`
  },

  2: {
    title: "2. Write a C++ program to create a class called Vehicle with a method called drive(). Create a derived class called Car that overrides the drive() method to print ''Repairing a car''.",
    code: `#include<iostream>
using namespace std;

class Vehicle{
    public:
    virtual void drive()=0;

};

class Car:Vehicle{
    public:
    void drive(){
        cout<<"Repairing a car";
    } 
};


int main(){
    Car Car1;
    Car1.drive();
    return 0;
}`,
    output: `Repairing a car`
  },

  3: {
    title: "3. Write a C++ program to create a class called Shape with a method called getArea(). Create a derived class called Rectangle that overrides the getArea() method to calculate the area of a rectangle",
    code: `#include<iostream>
using namespace std;

class Shape{
    public:
    virtual int getArea()=0;

};

class Rectangle:Shape{
    int length,width,area;
    public:
    int getArea(){
        cout<<"Enter the length of the rectangle : ";
        cin>>length;
        cout<<"Enter the width of the rectangle : ";
        cin>>width;
        return length*width;
    } 
    Rectangle(){
        area=getArea();
        cout<<"\nArea of the rectangle is : "<<area;
    }
};


int main(){
    Rectangle Rectangle1;
    return 0;
}`,
    output: `Enter the length of the rectangle : 8
Enter the width of the rectangle : 5

Area of the rectangle is : 40`
    },
    4: {
      title: "4. Write a C++ program to create a class called Employee with methods called work() and getSalary(). Create a derived class called HRManager that overrides the work() method and adds a new method called addEmployee(). ",
      code: `#include <iostream>
using namespace std;

class Employee
{
    private:
        int salary;
        char name[10];
    public:
        void work()
        {
            cout << "Enter name of employee : ";
            cin >> name;
        }
    
        void getSalary()
        {
            cout << "Enter your salary : ";
            cin >> salary;
            cout << "your salary is : " << salary << endl;
        }
};

class HRManager :public Employee  
{
    private :
       char title[10];
    public :
        void work()
        {
            cout << " Enter your job title : " << endl;
            cin >> title;   
        }
        void addEmployee()
        {
            cout << "Employee numbers is 1200. ";
        }
};

int main()
{
    HRManager obj;
    obj.getSalary();
    obj.work();
    obj.addEmployee();    
}
`,
      output: `Enter your salary : 20000
your salary is : 20000
 Enter your job title :
Programmer
Employee numbers is 1200.`
    },
    5: {
      title: "5. Write a C++ program to create a class known as ''BankAccount'' with methods called deposit() and withdraw(). Create a derived class called",
      code: `#include <iostream>
using namespace std;

class BankAccount
{   protected:
    float accBalance;

public:
    void deposit(float depositAmount)
    {
        accBalance += depositAmount;
    }
    virtual void withdraw(float withdrawAmount)
    {
        accBalance -= withdrawAmount;
    }
};

class SavingAccount:BankAccount{
    public:
    void withdraw(float withdrawAmount){
        if ((accBalance-withdrawAmount)<100){
            cout<<"Withdrawal denied! Balance cannot fall below Rs. 100.";
            exit(0);
        }
        else{
            accBalance-=withdrawAmount;
        }
    }
    SavingAccount(float accBalance){
        this->accBalance=accBalance;
    }
    void performTask(int purpose,float amount){
        if(purpose==1){
            deposit(amount);
            cout<<"Your balance after depositing money : "<<accBalance;
        }
        else{
            withdraw(amount);
            cout<<"Your balance after withdrawing money : "<<accBalance;
        }
    }

};

int main(){
    int purpose;
    float amount;
    SavingAccount obj(1000);
    cout<<"Enter the purpose of transaction(1 for deposit,2 for withdraw): ";
    cin>>purpose;

    if(purpose==1 || purpose==2){
        switch (purpose)
        {
        case 1:
         cout<<"Enter the amount to deposit : ";
         cin>>amount;
            obj.performTask(purpose,amount);
            break;
        case 2:
        cout<<"Enter the amount to withdraw : ";
        cin>>amount;
        obj.performTask(purpose,amount);
        break;
        default:
            break;
        }
    }
    else{
        cout<<"Invalid choice";
    }
    return 0;
}`,
      output: `Enter the purpose of transaction(1 for deposit,2 for withdraw): 2
Enter the amount to withdraw : 950
Withdrawal denied! Balance cannot fall below Rs. 100.`
    },
    6: {
      title: "6. Write a C++ program to create a class called Animal with a method named move(). Create a derived class called Cheetah that overrides the move() method to run. ",
      code: `#include <iostream>
using namespace std;

class Animal
{
public:
    virtual void move()
    {
        cout << "The animal is moving." << endl;
    }
};

class Cheetah : public Animal
{
public:
    void move()
    {
        cout << "The cheetah is running." << endl;
    }
};

int main()
{
    Animal animal;
    animal.move();

    cout <<endl;

    Cheetah cheetah;
    cheetah.move();

    return 0;
}
`,
      output: `The animal is moving.

The cheetah is running.`
    },
    7: {
      title: "7. Write a C++ program to create a class known as Person with methods called getFirstName() and getLastName(). Create a derived class called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title ",
      code: `#include<iostream>
#include<cstring>
using namespace std;

class Person{
    protected:
    char first_name[10];
    char last_name[10];

    public:
    
    Person(){
        strcpy(first_name,"");
        strcpy(last_name,"");
    }
    Person(const char* first_name,const char* last_name){
        strcpy(this->first_name,first_name);
        strcpy(this->last_name,last_name);
    }


    virtual void get_first_name(){
        cout<<"The first name of the person is : "<<first_name<<endl;
    }

    virtual void get_last_name(){
        cout<<"The last name of the person is : "<<last_name<<endl;
    }
};

class Employee:public Person{
    int id;
    char job_title[15];
    public:
    Employee(int id, const char* first_name,char const *last_name){
        this->id=id;
        strcpy(this->first_name,first_name);
        strcpy(this->last_name,last_name);
    }
    Employee(){
        cout<<"PLease enter the employee id : ";
        cin>>id;
        cout<<"PLease enter the employee's first name : ";
        cin>>first_name;
        cout<<"PLease enter the employee's last name : ";
        cin>>last_name;
    }
    int get_EmployeeId(){
        cout<<"The id of the employee is : "<<id<<endl;
        return id;
    }
    void get_first_name(){
        cout<<"The first name of the employee is : "<<first_name<<endl;
    }
    void get_last_name(){
        cout<<"The last name of the person is : "<<last_name<<endl;
        cout<<"Enter the job title of the employee : ";
        cin>>job_title;
    }
};


int main(){
    Person p1("Karishma","Upadhyay");
    p1.get_first_name();
    p1.get_last_name();

    Employee emp1(1,"Aryan","Pathak");
    emp1.get_EmployeeId();
    emp1.get_first_name();
    emp1.get_last_name();
    return 0;
}`,
      output: `The first name of the person is : Karishma
The last name of the person is : Upadhyay
The id of the employee is : 1
The first name of the employee is : Aryan
The last name of the person is : Pathak
Enter the job title of the employee : Manager`
    },
    8: {
      title: "8. Write a C++ program to create a class called Shape with methods called getPerimeter() and getArea(). Create a derived class called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.",
      code: `#include<iostream>
using namespace std;

class Shape{
    public:
    virtual void getPerimeter()=0;
    virtual void getArea()=0;

};

class Circle:public Shape{
    int radius;
    public:
    Circle(int radius){
        this->radius=radius;
    }
    void getPerimeter(){
        cout<<"Perimeter of Circle is "<<2*3.14*radius<<endl;
    }
    void getArea(){
        cout<<"Area of Circle is "<<3.14*radius*radius<<endl;
    }
};

int main(){
    Circle c(5);
    c.getPerimeter();
    c.getArea();
}`,
      output: `Perimeter of Circle is 31.4
Area of Circle is 78.5`
    },
    9: {
      title: "9. Write a C++ program to create a vehicle class hierarchy. The base class should be Vehicle, with derived classes Truck, Car and Motorcycle. Each derived class should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed",
      code: ` #include<iostream>
        using namespace std;
        
        class Vehicle
        {
            public:
        
                char make[20];
                char model[20];
                int year;
                char fuelType[20];  
                void fuelEfficiency()
                {
                    float litre,kilometrs,fuelEfficiency;
                    cout<<"Enter the fuel consumed by your vhicle in liter: ";
                    cin>>litre;
                    cout<<"Enter the distance you covers in the fuel consumed in km : ";
                    cin>>kilometrs;
                    fuelEfficiency = kilometrs/litre;
                    cout<<"The fuelEfficiency of your vhicle is : "<<fuelEfficiency<<"km/lit"<<endl;
                }
                void distanceTraveled()
                {
                    float speed,time,distance;;   
                    cout<<"Enter the speed of your vhicle in miles/h : ";
                    cin>>speed;
                    cout<<"Enter the time you reach at your destination in hour or minutes : ";
                    cin>>time;
                    distance = speed*time;
                    cout<<"The distance you traveles is : "<<distance<<"km";
                }
        };
        
        class Truck :public Vehicle
        {
            private:
                char make[20];
                char model[20];
                int year;
                char fuelType[20]; 
        };
        
        int main()
        {
            Truck a;
            a.fuelEfficiency();
            a.distanceTraveled();   
        }`,
      output: ` Enter the fuel consumed by your vehicle in liters: 20
            Enter the distance you covered with the fuel consumed in kilometers: 200
            The fuel efficiency of your vehicle is: 10 km/l
            
            Enter the speed of your vehicle in kilometers/hour: 60
            Enter the time you reach at your destination in hours: 3
            The distance you traveled is: 180 kilometers
            `
    },
    10: {
      title: "10. Write a C++ program that creates a class hierarchy for employees of a company. The base class should be Employee, with derived classes Manager, Developer, and Programmer. Each derived class should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.",
      code: `
        #include<iostream>
        #include<cstring>
        
        using namespace std;
        
        class Employee
        {
        
        private:
        
        public:
        
            void calculatingBonus(){
                int hour ,salary,bonus,extra;
                cout<<"Enter your salary : ";
                cin>>salary;
                cout<<"Enter no. of your extra working hours in last month : ";
                cin>>hour;
        
                if (hour>210)
                {
                    extra = 10*salary/100;
                    bonus = salary+extra;
                   cout<<"you got 10% bonus of your salary for the extra work, the bonus you got is : "<<bonus<<endl;
                   
                }
                else {
                    cout<<"you hven't work that much so no extra bonus " <<endl;
                }
        
                
            }
            void performanceReports(){
        
                int pj;
                cout<<"Enter no. of projects you submit : ";
                cin>>pj;
                if (pj>100)
                {
                    cout<<"You got A perfomance level "<<endl;
                }
                else if (pj>50)
                {
                    cout<<"You got B perfomance level "<<endl;
                }
                else  
                {
                    cout<<"You got C perfomance level "<<endl;
                }
                
        
            }
            void managingProjects(){
                char Jobtit[20];
        
            cout << "Enter your Job title (choose from the below options): " << endl;
            cout << "1. CEO 2. HR 3. Employee: ";
            cin >> Jobtit;
        
            if (strcmp(Jobtit, "CEO") == 0) {
                cout << "You have to attend meetings." << endl;
            } else if (strcmp(Jobtit, "HR") == 0) {
                cout << "You have to manage 12 projects." << endl;
            } else if (strcmp(Jobtit, "Employee") == 0) {
                cout << "You have to manage 70 projects." << endl;
            } else {
                cout << "Invalid job title." << endl;
            }
            }
        
        };
        
        class Manager:public Employee
        {
                private:
        
                char name[20];
                char address[30];
                int salary;
                char jobTitle[20];
        
                public :
                void info (){
                    cout<<"Enter your name : "<<endl;
                    cin>>name;
                    cout<<"Enter your address : "<<endl;
                    cin>>address;
                    cout<<"Enter your salary : "<<endl;
                    cin>>salary;
                    cout<<"Enter your jobTitle : "<<endl;
                    cin>>jobTitle;
                } 
        
                void display(){
                    cout<<" The name of the employee is "<<name<<endl;
                    cout<<" The address of the employee is "<<address<<endl;
                    cout<<" The salary of the employee is "<<salary<<endl;
                    cout<<" The jobTitle of the employee is "<<name<<endl;
                }
        
        
        };
        
        class Devloper:public Employee
        {
        
                private:
        
                char name[20];
                char address[30];
                int salary;
                char jobTitle[20];
        
                public :
                void info (){
                    cout<<"Enter your name : "<<endl;
                    cin>>name;
                    cout<<"Enter your address : "<<endl;
                    cin>>address;
                    cout<<"Enter your salary : "<<endl;
                    cin>>salary;
                    cout<<"Enter your jobTitle : "<<endl;
                    cin>>jobTitle;
                } 
        
                void display(){
                    cout<<" The name of the employee is "<<name<<endl;
                    cout<<" The address of the employee is "<<address<<endl;
                    cout<<" The salary of the employee is "<<salary<<endl;
                    cout<<" The jobTitle of the employee is "<<name<<endl;
                }
        
        
        };
        
        class Programmer:public Employee
        {
        
                private:
        
                char name[20];
                char address[30];
                int salary;
                char jobTitle[20];
        
                public :
                void info (){
                    cout<<"Enter your name : "<<endl;
                    cin>>name;
                    cout<<"Enter your address : "<<endl;
                    cin>>address;
                    cout<<"Enter your salary : "<<endl;
                    cin>>salary;
                    cout<<"Enter your jobTitle : "<<endl;
                    cin>>jobTitle;
                } 
        
                void display(){
                    cout<<" The name of the employee is "<<name<<endl;
                    cout<<" The address of the employee is "<<address<<endl;
                    cout<<" The salary of the employee is "<<salary<<endl;
                    cout<<" The jobTitle of the employee is "<<jobTitle<<endl;
                }
        
        
        };
        
        int main(){
            Programmer obj1;
            obj1.calculatingBonus();
            obj1.performanceReports();
            obj1.managingProjects();
            obj1.info();
            obj1.display();
        }`,
      output: ` Enter your salary : 5000
            Enter no. of your extra working hours in last month : 220
            you got 10% bonus of your salary for the extra work, the bonus you got is : 5500
            Enter no. of projects you submit : 80
            You got B perfomance level 
            Enter your Job title (choose from the below options): 
            1. CEO 2. HR 3. Employee: Developer
            Invalid job title.
            Enter your name : John
            Enter your address : New York
            Enter your salary : 6000
            Enter your jobTitle : Developer
             The name of the employee is John
             The address of the employee is New York
             The salary of the employee is 6000
             The jobTitle of the employee is Developer`
    },
  
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
  