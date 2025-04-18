
const twoDArray = {
  1: {
    title: "1. Enter the Matrix of rows and columns entered by the user and print in matrix format ",
    code: `#include<iostream>
using namespace std;

void data_fill(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<"enter the data:";
			cin>>*(ptr+i*cols+j);
		}
	}
}

void display(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<*(ptr+i*cols+j);
		}
		cout<<"\n";
	}
}


int main(){
	int row,cols;
	cout<<"Enter the number of rows in 2-d array:";
	cin>>row;
	cout<<"Enter the number of columns in 2-d array:";
	cin>>cols;
	int arr[row][cols];
	data_fill(&arr[0][0],row,cols);
	display(&arr[0][0],row,cols);
}`,
    output: `Enter the number of rows in 2-d array:3
Enter the number of columns in 2-d array:3
enter the data:1
enter the data:2
enter the data:3
enter the data:4
enter the data:5
enter the data:6
enter the data:
7
enter the data:8
enter the data:9
123
456
789`
  },

  2: {
    title: "2. Program to Add Two Matrices ",
    code: `#include<iostream>
using namespace std;

void data_fill(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<"enter the data:";
			cin>>*(ptr+i*cols+j);
		}
	}
}

void display(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<*(ptr+i*cols+j)<<"\t";
		}
		
		cout<<"\n";
	}
}

void adding_matrix(int *ptr1,int *ptr2,int row,int cols){
	int i,j;
	int arr[row][cols];
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			arr[i][j] = *(ptr1+i*cols+j) + *(ptr2+i*cols+j);
		}
	}
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<arr[i][j]<<"\t";
		}
		
		cout<<"\n";
	}
}


int main(){
	int row,cols;
	cout<<"Enter the number of rows in 2-d array:";
	cin>>row;
	cout<<"Enter the number of rows in 2-d array:";
	cin>>cols;
	int arr1[row][cols];
	cout<<"Data filling of array 1\n";
	data_fill(&arr1[0][0],row,cols);
	display(&arr1[0][0],row,cols);
	int arr2[row][cols];
	cout<<"Data filling of array 2\n";
	data_fill(&arr2[0][0],row,cols);
	display(&arr2[0][0],row,cols);
	cout<<"The addition of two given arrays\n";
	adding_matrix(&arr1[0][0],&arr2[0][0],row,cols);
	return 0;
}`,
    output: `Enter the number of rows in 2-d array:2
Enter the number of rows in 2-d array:2
Data filling of array 1
enter the data:2
enter the data:4
enter the data:6
enter the data:8
2       4
6       8
Data filling of array 2
enter the data:1
enter the data:3
enter the data:5
enter the data:7
1       3
5       7
The addition of two given arrays
3       7
11      15`
  },

  3: {
    title: "3. Program to Multiply Two Matrices ",
    code: `#include<iostream>
          #include<iomanip>
          using namespace std;
          int main(){
              int x,y,m,n,i,j;
              cout<<"Enter the rows and columns for A matrix : ";
              cin>>x>>y;
              cout<<"Enter the rows and columns for B matrix : ";
              cin>>m>>n;
              if(y==m){
                  cout<<"Enter element of A Matrix : "<<endl;
                  int mata[10][10];
                  for(i=0;i<x;i++){
                      for(j=0;j<y;j++){
                          cin>>mata[i][j];
                      }
                  }
                  cout<<"Enter element of B Matrix : "<<endl;
                  int matb[10][10];
                  for(i=0;i<m;i++){
                      for(j=0;j<n;j++){
                          cin>>matb[i][j];
                      }
                  }
                  int mul[10][10];
                  for(i=0;i<x;i++){
                      for(j=0;j<n;j++){
                          mul[i][j]=0;
                          for(int k=0;k<y;k++){
                              mul[i][j]=mul[i][j]+mata[i][k]*matb[k][j];
                          }
                      }
                  }
                  cout<<"A Matrix : ";
                  for(i=0;i<x;i++){
                      cout<<endl;
                      for(j=0;j<y;j++){
                          cout<<setw(5)<<mata[i][j];
                      }
                  }
                  cout<<endl;
                  cout<<"B Matrix : "<<endl;
                  for(i=0;i<m;i++){
                      for(j=0;j<n;j++){
                          cout<<setw(5)<<matb[i][j];
                      }
                      cout<<endl;
                  }
                  cout<<"A X B Matrix : "<<endl;
                  for(i=0;i<x;i++){
                      cout<<endl;
                      for(j=0;j<n;j++){
                          cout<<setw(5)<<mul[i][j];
                      }
                  }
              }
              else{
                  cout<<"Matrix Multiplication not applicable";
              }
              return 0;
          }`,
    output: `
              Enter the rows and columns for A matrix : 2 2
              Enter the rows and columns for B matrix : 2 2
              Enter element of A Matrix : 
              1 2
              3 4
              Enter element of B Matrix : 
              5 6
              7 8
              A Matrix : 
                  1    2
                  3    4
              B Matrix : 
                  5    6
                  7    8
              A X B Matrix : 
                 19   22
                 43   50`
  },
  4: {
    title: "4. Program to subtract the two matrices ",
    code: `#include<iostream>
using namespace std;

void data_fill(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<"enter the data:";
			cin>>*(ptr+i*cols+j);
		}
	}
}

void display(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<*(ptr+i*cols+j)<<"\t";
		}
		
		cout<<"\n";
	}
}

void subtract_matrix(int *ptr1,int *ptr2,int row,int cols){
	int i,j;
	int arr[row][cols];
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			arr[i][j] = *(ptr1+i*cols+j) - *(ptr2+i*cols+j);
		}
	}
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<arr[i][j]<<"\t";
		}
		
		cout<<"\n";
	}
}


int main(){
	int row,cols;
	cout<<"Enter the number of rows in 2-d array:";
	cin>>row;
	cout<<"Enter the number of rows in 2-d array:";
	cin>>cols;
	int arr1[row][cols];
	cout<<"Data filling of array 1\n";
	data_fill(&arr1[0][0],row,cols);
	display(&arr1[0][0],row,cols);
	int arr2[row][cols];
	cout<<"Data filling of array 2\n";
	data_fill(&arr2[0][0],row,cols);
	display(&arr2[0][0],row,cols);
	cout<<"The subtraction of two given arrays\n";
	subtract_matrix(&arr1[0][0],&arr2[0][0],row,cols);
	return 0;
}`,
    output: `Enter the number of rows in 2-d array:3
Enter the number of rows in 2-d array:3
Data filling of array 1
enter the data:1
enter the data:2
enter the data:3
enter the data:4
enter the data:5
enter the data:6
enter the data:7
enter the data:8
enter the data:9
1       2       3
4       5       6
7       8       9
Data filling of array 2
enter the data:9
enter the data:8
enter the data:7
enter the data:6
enter the data:5
enter the data:4
enter the data:3
enter the data:2
enter the data:1
9       8       7
6       5       4
3       2       1
The subtraction of two given arrays
-8      -6      -4
-2      0       2
4       6       8
`
  },
  5: {
    title: "5. Program to determine whether two matrices are equal ",
    code: `#include<iostream>
using namespace std;

void data_fill(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<"enter the data:";
			cin>>*(ptr+i*cols+j);
		}
	}
}

void display(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<*(ptr+i*cols+j)<<"\t";
		}
		
		cout<<"\n";
	}
}

int odd_even(int *ptr,int row,int cols){
	int i,j,even=0,odd=0;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			if(*(ptr+i*cols+j)%2 == 0){
			 	even++;
			}
			else{
				odd++;
			}
		}
	}
 cout<<"The even number in matrx :"<<even;
	cout<<"\nThe odd number in matrix :"<<odd;
}



int main(){
	int row,cols;
	cout<<"Enter the number of rows in 2-d array:";
	cin>>row;
	cout<<"Enter the number of columns in 2-d array:";
	cin>>cols;
	int arr1[row][cols];
	cout<<"Data filling of array \n";
	data_fill(&arr1[0][0],row,cols);
	display(&arr1[0][0],row,cols);
	odd_even(&arr1[0][0],row,cols);
	return 0;
}`,
    output: `Enter the number of rows in 2-d array:3
Enter the number of columns in 2-d array:3
Data filling of array
enter the data:1
enter the data:2
enter the data:5
enter the data:4
enter the data:9
enter the data:7
enter the data:8
enter the data:12
enter the data:35
1       2       5
4       9       7
8       12      35
The even number in matrx :4
The odd number in matrix :5`
  },
  6: {
    title: "6. Program to display the lower triangular matrix ",
    code: `#include<iostream>
using namespace std;

void data_fill(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			if(i>=j){
			cout<<"enter the data:["<<i<<"]"<<"["<<j<<"]";
			cin>>*(ptr+i*cols+j);
			}
			else{
				*(ptr+i*cols+j) = 0;
			}
			}
	}
}

void display(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<*(ptr+i*cols+j)<<"\t";
		}
		
		cout<<"\n";
	}
}

int main(){
	int row,cols;
	cout<<"Enter the number of rows in 2-d array:";
	cin>>row;
	cout<<"Enter the number of columns same as rows in 2-d array:";
	cin>>cols;
	if(row != cols){
		cout<<"rows are not equal to columns enter again\n";
		cout<<"Enter the number of rows in 2-d array:";
		cin>>row;
		cout<<"Enter the number of columns same as rows in 2-d array:";
		cin>>cols;
	}
	int arr1[row][cols];
	cout<<"The lower triangular matrix\n";
	data_fill(&arr1[0][0],row,cols);
	display(&arr1[0][0],row,cols);
	return 0;
}`,
    output: `Enter the number of rows in 2-d array:3
Enter the number of columns same as rows in 2-d array:3
The lower triangular matrix
enter the data:[0][0]4
enter the data:[1][0]2
enter the data:[1][1]8
enter the data:[2][0]13
enter the data:[2][1]2
enter the data:[2][2]9
4       0       0
2       8       0
13      2       9`
  },
  7: {
    title: "7. Program to display the upper triangular matrix ",
    code: `#include<iostream>
using namespace std;

void data_fill(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			if(i<=j){
			cout<<"enter the data:["<<i<<"]"<<"["<<j<<"]";
			cin>>*(ptr+i*cols+j);
			}
			else{
				*(ptr+i*cols+j) = 0;
			}
			}
	}
}

void display(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<*(ptr+i*cols+j)<<"\t";
		}
		
		cout<<"\n";
	}
}

int main(){
	int row,cols;
	cout<<"Enter the number of rows in 2-d array:";
	cin>>row;
	cout<<"Enter the number of columns same as rows in 2-d array:";
	cin>>cols;
	if(row != cols){
		cout<<"rows are not equal to columns enter again\n";
		cout<<"Enter the number of rows in 2-d array:";
		cin>>row;
		cout<<"Enter the number of columns same as rows in 2-d array:";
		cin>>cols;
	}
	int arr1[row][cols];
	cout<<"The upper triangular matrix\n";
	data_fill(&arr1[0][0],row,cols);
	display(&arr1[0][0],row,cols);
	return 0;
}`,
    output: `Enter the number of rows in 2-d array:3
Enter the number of columns same as rows in 2-d array:3
The upper triangular matrix
enter the data:[0][0]1
enter the data:[0][1]2
enter the data:[0][2]3
enter the data:[1][1]4
enter the data:[1][2]5
enter the data:[2][2]6
1       2       3
0       4       5
0       0       6`
  },
  8: {
    title: "8. Program to find the frequency of odd & even numbers in the given matrix ",
    code: `#include<iostream>
using namespace std;

void data_fill(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<"enter the data:";
			cin>>*(ptr+i*cols+j);
		}
	}
}

void display(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<*(ptr+i*cols+j)<<"\t";
		}
		
		cout<<"\n";
	}
}

int odd_even(int *ptr,int row,int cols){
	int i,j,even=0,odd=0;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			if(*(ptr+i*cols+j)%2 == 0){
			 	even++;
			}
			else{
				odd++;
			}
		}
	}
	cout<<"The even number in matrix :"<<even;
	cout<<"\tThe odd number in matrix :"<<odd;
}



int main(){
	int row,cols;
	cout<<"Enter the number of rows in 2-d array:";
	cin>>row;
	cout<<"Enter the number of columns in 2-d array:";
	cin>>cols;
	int arr1[row][cols];
	cout<<"Data filling of array \n";
	data_fill(&arr1[0][0],row,cols);
	display(&arr1[0][0],row,cols);
	odd_even(&arr1[0][0],row,cols);
	return 0;
}`,
    output: `Enter the number of rows in 2-d array:3
Enter the number of columns in 2-d array:3
Data filling of array
enter the data:1
enter the data:2
enter the data:2
enter the data:1
enter the data:3
enter the data:2
enter the data:3
enter the data:4
enter the data:4
1       2       2
1       3       2
3       4       4
The even number in matrix :5     The odd number in matrix :4`
  },
  9: {
    title: "9. Program to find the sum of each row and each column of a matrix ",
    code: `#include<iostream>
          using namespace std;
          int main(){
              int x, y, i, j;
              cout<<"Enter the rows and columns For Matrix: ";
              cin>>x>>y;
              int mata[10][10], r[10], c[10];
              cout<<"Enter the elements of matrix : "<<endl;
              for(i=0;i<x;i++){
                  for(j=0;j<y;j++){
                      cin>>mata[i][j];
                  }
              }
              for(i=0;i<x;i++){
                  r[i]=0;
                  for(j=0;j<y;j++){
                      r[i]=r[i]+mata[i][j];
                  }
              }
              for(i=0;i<y;i++){
                  c[i]=0;
                  for(j=0;j<x;j++){
                      c[i]=c[i]+mata[j][i];
                  }
              }
              for(i=0;i<x;i++){
                  cout<<"Sum Of Row "<<i+1<<": "<<r[i]<<endl;
              }
              for(i=0;i<y;i++){
                  cout<<"Sum Of Column "<<i+1<<": "<<c[i]<<endl;
              }
              return 0;
          }`,
    output: `Enter the rows and columns For Matrix: 2 2
              Enter the elements of matrix : 
              1 2
              3 4
              Sum Of Row 1: 3
              Sum Of Row 2: 7
              Sum Of Column 1: 4
              Sum Of Column 2: 6`
  },
  10: {
    title: "10. Program to determine whether a given matrix is an identity matrix ",
    code: `#include<iostream>
#include<math.h>
using namespace std;

void data_fill(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<"enter the data:["<<i<<"]"<<"["<<j<<"]";
			cin>>*(ptr+i*cols+j);
		}
	}
}

void display(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<*(ptr+i*cols+j)<<"\t";
		}
		
		cout<<"\n";
	}
}

int identity_matrix(int *ptr,int row,int cols){
	int i,j,zerocount=0,numcount=0;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			if(i==j){
				if(*(ptr+i*cols+j)==1){
					numcount++;
				}
			}
			else if(i != j){
				if(*(ptr+i*cols+j)==0){
					zerocount++;
				}
			}	
			}
		}
		if(sqrt(row*cols)==numcount && (row*cols)-numcount == zerocount){
			cout<<"The matrix is identity matrix";
		}
		else{
			cout<<"The matrix is not identity matrix";
			
		}
	}


int main(){
	int row,cols;
	cout<<"Enter the number of rows in 2-d array:";
	cin>>row;
	cout<<"Enter the number of columns same as rows in 2-d array:";
	cin>>cols;
	int arr1[row][cols];
	cout<<"Data filling of array \n";
	data_fill(&arr1[0][0],row,cols);
	display(&arr1[0][0],row,cols);
	cout<<"The determination of identity matrix\n";
	identity_matrix(&arr1[0][0],row,cols);
	return 0;
}`,
    output: `Enter the number of rows in 2-d array:3
Enter the number of columns same as rows in 2-d array:3
Data filling of array
enter the data:[0][0]1
enter the data:[0][1]0
enter the data:[0][2]0
enter the data:[1][0]0
enter the data:[1][1]1
enter the data:[1][2]0
enter the data:[2][0]0
enter the data:[2][1]0
enter the data:[2][2]1
1       0       0
0       1       0
0       0       1
The determination of identity matrix
The matrix is identity matrix`
  },
  11: {
    title: "11. Program to Transpose matrix ",
    code: `#include<iostream>
using namespace std;

void data_fill(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<"enter the data:";
			cin>>*(ptr+i*cols+j);
		}
	}
}

void display(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<*(ptr+i*cols+j)<<"\t";
		}
		
		cout<<"\n";
	}
}

int transpose(int *ptr,int row,int cols){
	int i,j,temp = 0;
	int trans[row][cols];
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			trans[i][j]=*(ptr+i*cols+j);
	}
}
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			if(i != j && i<j){
			 	temp  = trans[i][j];
			 	trans[i][j] = trans[j][i];
			 	trans[j][i] = temp;
			}
		}
	}
	
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<trans[i][j]<<"\t";
	}
	cout<<"\n";
}
}



int main(){
	int row,cols;
	cout<<"Enter the number of rows in 2-d array:";
	cin>>row;
	cout<<"Enter the number of columns in 2-d array:";
	cin>>cols;
	int arr1[row][cols];
	cout<<"Data filling of array \n";
	data_fill(&arr1[0][0],row,cols);
	display(&arr1[0][0],row,cols);
	cout<<"The transpose matrix\n";
	transpose(&arr1[0][0],row,cols);
	return 0;
}`,
    output: `Enter the number of rows in 2-d array:2
Enter the number of columns in 2-d array:3
Data filling of array
enter the data:1
enter the data:2
enter the data:3
enter the data:4
enter the data:5
enter the data:6
1       2       3
4       5       6
The transpose matrix
1       4       3
2       5       0`
  },
  12: {
    title: "12. Program to determine whether a given matrix is a sparse matrix  ",
    code: `#include<iostream>
using namespace std;

void data_fill(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<"enter the data:";
			cin>>*(ptr+i*cols+j);
		}
	}
}

void display(int *ptr,int row,int cols){
	int i,j;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			cout<<*(ptr+i*cols+j)<<"\t";
		}
		
		cout<<"\n";
	}
}

int sparse_matrix(int *ptr,int row,int cols){
	int i,j,zerocount=0,numcount=0;
	for(i=0;i<row;i++){
		for(j=0;j<cols;j++){
			if(*(ptr+i*cols+j)==0){
				zerocount++;
			}
			else{
				numcount++;
			}
		}
	}
	if(zerocount>numcount){
	
		cout<<"The matrix is sparse matrix\n";
	}
	else{
		cout<<"The matrix is not sparse matrix\n";
	}
	
}



int main(){
	int row,cols;
	cout<<"Enter the number of rows in 2-d array:";
	cin>>row;
	cout<<"Enter the number of columns in 2-d array:";
	cin>>cols;
	int arr1[row][cols];
	cout<<"Data filling of array \n";
	data_fill(&arr1[0][0],row,cols);
	display(&arr1[0][0],row,cols);
	cout<<"The determination of sparse matrix\n";
	sparse_matrix(&arr1[0][0],row,cols);
	return 0;
}`,
    output: `Enter the number of rows in 2-d array:3
Enter the number of columns in 2-d array:3
Data filling of array
enter the data:5
enter the data:0
enter the data:4
enter the data:0
enter the data:0
enter the data:0
enter the data:0
enter the data:9
enter the data:7
5       0       4
0       0       0
0       9       7
The determination of sparse matrix
The matrix is sparse matrix`
  }

};

function loadQuestion(num) {
  const question = twoDArray[num];
  if (!question) return;

  document.querySelector('.default').style.display = 'none';
  const container = document.getElementById('question-container');
  container.style.display = 'block';

  document.getElementById('question-title').textContent = question.title;
  document.getElementById('code-block').textContent = question.code;
  document.getElementById('output-block').textContent = question.output;
}
