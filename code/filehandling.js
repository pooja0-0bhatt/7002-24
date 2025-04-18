
const filehandling = {
    1: {
        title: "1. Write a C++ program to create a new text file and write some text into it. ",
        code: `#include<iostream>
#include<fstream>
using namespace std;

int main(){
	ofstream f;
	f.open("firstfile");
	f<<"Hello World!!!";
	cout<<"The data is written on the first file successfully\n";
	f.close();
	return 0;
}
`,
        output: `The data is written on the first file successfully`
    },

    2: {
        title: "2. Write a C++ program to open an existing text file and display its contents on the console.",
        code: `#include<iostream>
#include<fstream>
using namespace std;

int main(){
	ifstream f;
	char ch[80];
	f.open("m.txt");
	while(!f.eof()){
		cout<<(char)f.get();
	}
}
`,
        output: `hello pooja welcome back`
    },

    3: {
        title: "3. Write a C++ program to count the number of lines in a text file. ",
        code: `#include<iostream>
#include<fstream>
#include<string>
using namespace std;

int main(){
	ifstream f;
	string line;
	int count=0;
	char ch[80];
	f.open("m.txt");
	while(getline(f,line)){
			count++;
		}
	f.close();
	cout<<"The number of lines in paragraph is "<<count;
}
`,
        output: `The number of lines in paragraph is 1`
    },
    4: {
        title: "4. Write a C++ program to count the number of words in a text file. ",
        code: `#include<iostream>
#include<fstream>
#include<string>
using namespace std;

int main(){
	ifstream f;
	string line;
	int word_count=1;
	char ch[80];
	f.open("firstfile");
	int i=0;
	while(getline(f,line)){
			if(line[i] == ' '){
				word_count++;
			}
			i++;
		}
	f.close();
	cout<<"The number of words in paragraph is "<<word_count;
}
`,
        output: `The number of words in paragraph is 1`
    },
    5: {
        title: "5. Write a C++ program to copy the contents of one text file to another. ",
        code: `#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {
    string sourceFile, destFile;
    char ch;

    cout << "Enter source filename: ";
    cin >> sourceFile;
    cout << "Enter destination filename: ";
    cin >> destFile;

    ifstream inFile(sourceFile);
    if (!inFile) {
        cout << "Error opening source file!" << endl;
        return 1;
    }

    ofstream outFile(destFile);
    if (!outFile) {
        cout << "Error creating destination file!" << endl;
        inFile.close();
        return 1;
    }

    while (inFile.get(ch)) {
        outFile.put(ch);
    }

    inFile.close();
    outFile.close();

    cout << "File copied successfully!" << endl;

    return 0;
}`,
        output: `Enter source filename: hello.txt
Enter destination filename: m.txt
File copied successfully!`
    },
    6: {
        title: "6. Write a C++ program to find and replace a specific word in a text file. ",
        code: `#include <iostream>
#include <fstream>
#include <string>

using namespace std;

void findAndReplace(string& line, const string& oldWord, const string& newWord) {
    size_t pos = 0;
    while ((pos = line.find(oldWord, pos)) != string::npos) {
        line.replace(pos, oldWord.length(), newWord);
        pos += newWord.length();
    }
}

int main() {
    string filename, oldWord, newWord;
    string tempFile = "temp.txt";
    
    cout << "Enter filename: ";
    cin >> filename;
    cout << "Enter word to find: ";
    cin >> oldWord;
    cout << "Enter replacement word: ";
    cin >> newWord;

    ifstream inFile(filename);
    if (!inFile) {
        cout << "Error opening file!" << endl;
        return 1;
    }

    ofstream outFile(tempFile);
    if (!outFile) {
        cout << "Error creating temporary file!" << endl;
        inFile.close();
        return 1;
    }

    string line;
    bool found = false;
    while (getline(inFile, line)) {
        size_t originalLength = line.length();
        findAndReplace(line, oldWord, newWord);
        if (line.length() != originalLength) {
            found = true;
        }
        outFile << line << endl;
    }

    inFile.close();
    outFile.close();

    if (found) {
        remove(filename.c_str());
        rename(tempFile.c_str(), filename.c_str());
        cout << "Replacement complete. All occurrences of '" << oldWord 
             << "' were replaced with '" << newWord << "'." << endl;
    } else {
        remove(tempFile.c_str());
        cout << "Word '" << oldWord << "' not found in the file." << endl;
    }

    return 0;
}`,
        output: `Enter filename: hello.txt
Enter word to find: hello
Enter replacement word: bye
Replacement complete. All occurrences of 'hello' were replaced with 'bye'.`
    },
    7: {
        title: "7. Write a C++ program to append new data to an existing text file. ",
        code: `#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {
    string filename;
    string newData;

    cout << "Enter filename to append to: ";
    getline(cin, filename);

    ofstream outFile(filename, ios::app);

    if (!outFile) {
        cout << "Error opening file!" << endl;
        return 1;
    }

    cout << "Enter text to append (press Enter twice to finish):\n";
    
    while (true) {
        getline(cin, newData);
        if (newData.empty()) {
            break;
        }
        outFile << newData << endl;
    }

    outFile.close();

    cout << "Data appended successfully!" << endl;

    return 0;
}`,
        output: `Enter filename to append to: hello.txt
Enter text to append (press Enter twice to finish):
Be positive

Data appended successfully!`
    },
    8: {
        title: "8. Write a C++ program to sort the lines of a text file in alphabetical order. ",
        code: `#include <iostream>
#include <fstream>
#include <cstring>

using namespace std;

int main() {
    char lines[100][1000];
    char temp[1000];
    int count = 0;
    
    ifstream inFile("input.txt");
    if (!inFile) {
        cout << "Error opening input file!" << endl;
        return 1;
    }

    while (inFile.getline(lines[count], 1000)) {
        count++;
        if (count >= 100) break;
    }
    inFile.close();

    for (int i = 0; i < count - 1; i++) {
        for (int j = i + 1; j < count; j++) {
            if (strcmp(lines[i], lines[j]) > 0) {
                strcpy(temp, lines[i]);
                strcpy(lines[i], lines[j]);
                strcpy(lines[j], temp);
            }
        }
    }

    ofstream outFile("output.txt");
    if (!outFile) {
        cout << "Error creating output file!" << endl;
        return 1;
    }

    for (int i = 0; i < count; i++) {
        outFile << lines[i] << endl;
    }
    outFile.close();

    cout << "File lines sorted successfully!" << endl;
    return 0;
}
`,
        output: `File lines sorted successfully!`
    },
    9: {
        title: "9. Write a C++ program to merge multiple text files into a single file. ",
        code: `#include <iostream>
#include <fstream>

using namespace std;

int main() {
    char filename[50];
    char outputFile[] = "merged.txt";
    char ch;

    ofstream outFile(outputFile);
    if (!outFile) {
        cout << "Error creating output file!" << endl;
        return 1;
    }

    int numFiles;
    cout << "Enter number of files to merge: ";
    cin >> numFiles;

    for (int i = 0; i < numFiles; i++) {
        cout << "Enter filename " << i + 1 << ": ";
        cin >> filename;

        ifstream inFile(filename);
        if (!inFile) {
            cout << "Error opening " << filename << " - skipping" << endl;
            continue;
        }

        while (inFile.get(ch)) {
            outFile.put(ch);
        }

        inFile.close();
        outFile << endl << endl; 
    }

    outFile.close();
    cout << "Files merged successfully into " << outputFile << endl;

    return 0;
}`,
        output: `Enter number of files to merge: 2        
Enter filename 1: hello.txt
Enter filename 2: input.txt
Files merged successfully into merged.txt`
    },
    10: {
        title: "10. Write a C++ program to split a large text file into smaller files of equal size. ",
        code: `#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {
    string inputFile;
    int linesPerFile;
    int fileCounter = 1;
    string line;

    cout << "Enter input filename: ";
    cin >> inputFile;

    cout << "Enter number of lines per output file: ";
    cin >> linesPerFile;

    ifstream inFile(inputFile);
    if (!inFile) {
        cout << "Error opening input file!" << endl;
        return 1;
    }

    ofstream outFile;
    int currentLine = 0;

    while (getline(inFile, line)) {
        if (currentLine % linesPerFile == 0) {
            if (outFile.is_open()) {
                outFile.close();
            }
            string outName = "part_" + to_string(fileCounter) + ".txt";
            outFile.open(outName);
            fileCounter++;
        }
        
        outFile << line << endl;
        currentLine++;
    }

    if (outFile.is_open()) {
        outFile.close();
    }

    inFile.close();

    cout << "File split into " << fileCounter-1 << " parts successfully!" << endl;
    return 0;
}`,
        output: `Enter input filename: input.txt
Enter number of lines per output file: 1
File split into 2 parts successfully!`
    },
    11: {
        title: "11. Write a C++ program to search for a specific string in a text file and display its line number(s). ",
        code: `#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {
    string filename;
    string searchStr;
    string line;
    int lineNumber = 0;
    bool found = false;

    cout << "Enter file name: ";
    cin >> filename;

    cout << "Enter string to search: ";
    cin.ignore(); 
    getline(cin, searchStr);

    ifstream file(filename);
    if (!file) {
        cout << "Error opening file!" << endl;
        return 1;
    }

    cout << "Search results:" << endl;

    while (getline(file, line)) {
        lineNumber++;
        if (line.find(searchStr) != string::npos) {
            cout << "Found at line " << lineNumber << endl;
            found = true;
        }
    }

    if (!found) {
        cout << "String not found in file." << endl;
    }

    file.close();
    return 0;
}`,
        output: `Enter file name: input.txt
Enter string to search: Zebra
Search results:
Found at line 1`
    },
    12: {
        title: "12. Write a C++ program to encrypt the contents of a text file using a simple encryption algorithm. ",
        code: `#include <iostream>
#include <fstream>

using namespace std;

int main() {
    string inputFile, outputFile;
    char ch;

    cout << "Enter input filename: ";
    cin >> inputFile;
    cout << "Enter output filename: ";
    cin >> outputFile;

    ifstream inFile(inputFile);
    ofstream outFile(outputFile);

    if (!inFile) {
        cout << "Error opening input file!" << endl;
        return 1;
    }

    if (!outFile) {
        cout << "Error creating output file!" << endl;
        return 1;
    }

    while (inFile.get(ch)) {
        if (ch == '\n' || ch == ' ') {
            outFile.put(ch);  
        } else {
            outFile.put(ch + 1); 
        }
    }

    inFile.close();
    outFile.close();

    cout << "File encrypted successfully!" << endl;
    cout << "Encrypted content saved to " << outputFile << endl;

    return 0;
}`,
        output: `Enter input filename: input.txt
Enter output filename: hello.txt
File encrypted successfully!
Encrypted content saved to hello.txt`
    },
    13: {
        title: "13. Write a C++ program to decrypt the contents of a text file encrypted using the above algorithm. ",
        code: `#include <iostream>
#include <fstream>

using namespace std;

int main() {
    string inputFile, outputFile;
    char ch;

    cout << "Enter encrypted filename: ";
    cin >> inputFile;
    cout << "Enter output filename for decrypted text: ";
    cin >> outputFile;

    ifstream inFile(inputFile);
    ofstream outFile(outputFile);

    if (!inFile) {
        cout << "Error opening encrypted file!" << endl;
        return 1;
    }

    if (!outFile) {
        cout << "Error creating output file!" << endl;
        return 1;
    }

    while (inFile.get(ch)) {
        // Reverse the encryption: shift each character back by 1
        if (ch == '\n' || ch == ' ') {
            outFile.put(ch);  // Keep newlines and spaces unchanged
        } else {
            outFile.put(ch - 1);  // Shift character back by 1
        }
    }

    inFile.close();
    outFile.close();

    cout << "File decrypted successfully!" << endl;
    cout << "Decrypted content saved to " << outputFile << endl;

    return 0;
}`,
        output: `Enter encrypted filename: hello.txt
Enter output filename for decrypted text: bye.txt
File decrypted successfully!
Decrypted content saved to bye.txt`
    },
    14: {
        title: "14. Write a C++ program to read a CSV file and display its contents in tabular form. ",
        code: `#include <iostream>
#include <fstream>
#include <string>
#include <iomanip> // for setw()

using namespace std;

int main() {
    string filename;
    cout << "Enter CSV filename: ";
    cin >> filename;

    ifstream file(filename);
    if (!file.is_open()) {
        cout << "Error opening file!" << endl;
        return 1;
    }

    string line;
    int row = 0;
    const int columnWidth = 15; // Adjust as needed

    cout << "\nFile contents in tabular format:\n";
    cout << "----------------------------------------\n";

    while (getline(file, line)) {
        size_t start = 0;
        size_t end = line.find(',');
        int col = 0;

        while (end != string::npos) {
            string cell = line.substr(start, end - start);
            cout << left << setw(columnWidth) << cell << "|";
            start = end + 1;
            end = line.find(',', start);
            col++;
        }
        
        // Print last cell in the row
        string lastCell = line.substr(start);
        cout << left << setw(columnWidth) << lastCell;
        
        cout << endl;
        row++;
    }

    file.close();
    cout << "----------------------------------------\n";
    cout << "Total rows displayed: " << row << endl;

    return 0;
}`,
        output: `Enter CSV filename: data.csv

File contents in tabular format:
----------------------------------------
1              |Rahul          |12th           
2              |Kushal         |11th
3              |Ankit          |10th
----------------------------------------
Total rows displayed: 3`
    },
    15: {
        title: "15. Write a C++ program to calculate the average of numbers stored in a file. ",
        code: `#include <iostream>
#include <fstream>

using namespace std;

int main() {
    string filename;
    cout << "Enter filename containing numbers: ";
    cin >> filename;

    ifstream inputFile(filename);
    if (!inputFile.is_open()) {
        cout << "Error opening file!" << endl;
        return 1;
    }

    double number;
    double sum = 0;
    int count = 0;

    while (inputFile >> number) {
        sum += number;
        count++;
    }

    inputFile.close();

    if (count == 0) {
        cout << "No numbers found in the file." << endl;
    } else {
        double average = sum / count;
        cout << "Total numbers: " << count << endl;
        cout << "Sum: " << sum << endl;
        cout << "Average: " << average << endl;
    }

    return 0;
}`,
        output: `Enter filename containing numbers: num.txt
Total numbers: 5
Sum: 150
Average: 30`
    },
    16: {
        title: "16. Write a C++ program to store the information of 10 Students having rollno,name,marks,mobileno properties, get() and set() member functions as binary file with following options 1. Insert Record 2. Delete Record 3. Update Record (based on rollno) 4. Search Record (based on rollno) 5. Clone the file 6. Exit. ",
        code: `#include <iostream>
#include <fstream>
#include <cstring>
#include <cstdio> // for remove() and rename()

using namespace std;

class Student {
private:
    int rollno;
    char name[50];
    float marks;
    char mobileno[15];

public:
    void get() {
        cout << "Enter Roll No: ";
        cin >> rollno;
        cout << "Enter Name: ";
        cin.ignore();
        cin.getline(name, 50);
        cout << "Enter Marks: ";
        cin >> marks;
        cout << "Enter Mobile No: ";
        cin >> mobileno;
    }

    void set() {
        cout << "Roll No: " << rollno << endl;
        cout << "Name: " << name << endl;
        cout << "Marks: " << marks << endl;
        cout << "Mobile No: " << mobileno << endl;
    }

    int getRollNo() { return rollno; }
    void update() {
        cout << "Enter new Name: ";
        cin.ignore();
        cin.getline(name, 50);
        cout << "Enter new Marks: ";
        cin >> marks;
        cout << "Enter new Mobile No: ";
        cin >> mobileno;
    }
};

void insertRecord() {
    ofstream outFile("students.dat", ios::binary | ios::app);
    Student s;
    s.get();
    outFile.write(reinterpret_cast<char*>(&s), sizeof(s));
    outFile.close();
    cout << "Record inserted successfully!\n";
}

void displayAll() {
    ifstream inFile("students.dat", ios::binary);
    Student s;
    while (inFile.read(reinterpret_cast<char*>(&s), sizeof(s))) {
        s.set();
        cout << "-----------------\n";
    }
    inFile.close();
}

void deleteRecord(int roll) {
    ifstream inFile("students.dat", ios::binary);
    ofstream tempFile("temp.dat", ios::binary);
    Student s;
    bool found = false;

    while (inFile.read(reinterpret_cast<char*>(&s), sizeof(s))) {
        if (s.getRollNo() != roll) {
            tempFile.write(reinterpret_cast<char*>(&s), sizeof(s));
        } else {
            found = true;
        }
    }

    inFile.close();
    tempFile.close();

    remove("students.dat");
    rename("temp.dat", "students.dat");

    if (found) {
        cout << "Record deleted successfully!\n";
    } else {
        cout << "Record not found!\n";
    }
}

void updateRecord(int roll) {
    fstream file("students.dat", ios::binary | ios::in | ios::out);
    Student s;
    bool found = false;

    while (file.read(reinterpret_cast<char*>(&s), sizeof(s))) {
        if (s.getRollNo() == roll) {
            s.update();
            file.seekp(-static_cast<int>(sizeof(s)), ios::cur);
            file.write(reinterpret_cast<char*>(&s), sizeof(s));
            found = true;
            break;
        }
    }

    file.close();

    if (found) {
        cout << "Record updated successfully!\n";
    } else {
        cout << "Record not found!\n";
    }
}

void searchRecord(int roll) {
    ifstream inFile("students.dat", ios::binary);
    Student s;
    bool found = false;

    while (inFile.read(reinterpret_cast<char*>(&s), sizeof(s))) {
        if (s.getRollNo() == roll) {
            s.set();
            found = true;
            break;
        }
    }

    inFile.close();

    if (!found) {
        cout << "Record not found!\n";
    }
}

void cloneFile() {
    ifstream src("students.dat", ios::binary);
    ofstream dst("students_backup.dat", ios::binary);
    dst << src.rdbuf();
    src.close();
    dst.close();
    cout << "File cloned successfully as students_backup.dat!\n";
}

int main() {
    int choice, roll;

    while (true) {
        cout << "\nStudent Record Management System\n";
        cout << "1. Insert Record\n";
        cout << "2. Delete Record\n";
        cout << "3. Update Record\n";
        cout << "4. Search Record\n";
        cout << "5. Clone the file\n";
        cout << "6. Display All Records\n";
        cout << "7. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                insertRecord();
                break;
            case 2:
                cout << "Enter Roll No to delete: ";
                cin >> roll;
                deleteRecord(roll);
                break;
            case 3:
                cout << "Enter Roll No to update: ";
                cin >> roll;
                updateRecord(roll);
                break;
            case 4:
                cout << "Enter Roll No to search: ";
                cin >> roll;
                searchRecord(roll);
                break;
            case 5:
                cloneFile();
                break;
            case 6:
                displayAll();
                break;
            case 7:
                return 0;
            default:
                cout << "Invalid choice! Try again.\n";
        }
    }

    return 0;
}`,
        output: `Student Record Management System
1. Insert Record
2. Delete Record
3. Update Record
4. Search Record
5. Clone the file
6. Display All Records
7. Exit
Enter your choice: 1
Enter Roll No: 5
Enter Name: himanshi
Enter Marks: 45
Enter Mobile No: 6576374
Record inserted successfully!`
    }

};

function loadQuestion(num) {
    const question = filehandling[num];
    if (!question) return;

    document.querySelector('.default').style.display = 'none';
    const container = document.getElementById('question-container');
    container.style.display = 'block';

    document.getElementById('question-title').textContent = question.title;
    document.getElementById('code-block').textContent = question.code;
    document.getElementById('output-block').textContent = question.output;
}
