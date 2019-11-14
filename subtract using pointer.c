#include<stdio.h>
void main()
{
int num1,num2,subract,*p,*q;
printf("Enter the First number");
scanf("%d",&num1);
print("Enter the Second number");
scanf("%d",&num2);
p=&num1;
q=&num2;
subract=*p - *q;
print("Subract of Two numbers = %subract\n",subract);
}
