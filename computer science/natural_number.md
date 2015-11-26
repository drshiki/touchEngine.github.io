
##use a continuous natural numbers' sum to represent number N

we assume the first number is a1, the amount of number is n,we get that 

N = na1 + n(n-1)/2

N = (2na1 + n(n-1))/2

N = (n(2a1 + n - 1))/2

(n(2a1 + n - 1)) is even number

we  can get that:

n and 2a1+n-1 both are odd;

n and 2a1+n-1 both are even;

n is even, 2a1+n-1 is odd;

n is odd, 2a1+n-1 is even;

obvousy, it is that 1st is unfit,

because that

odd * odd get the odd

prove, we set num1 and num2 both odd

x = 2n + 1

y = 2m + 1

x*y = (2n+1)(2m+1) = 4mn + 2n + 2m +1 = 2(2mn+n+m)+1 must a odd, and we could get that 2nd and 3rd the 4th can get even

x = 2n,y = 2m + 1,xy = 2n(2m+1) = 2(2mn+n)

x = 2n,y = 2m,2n*2m=4mn=2(2mn)

if the n is odd then the 2a1 + n - 1 must even

if n is even and the 2a1 + n - 1 must odd

we can concluse that n can be represent a continuou numbers' sum if and only if it have a odd divisor. for only 2^n have noe odd divisor, because 2^n = 2^(n-1)*2 (recurse),

if(N == 2^n) then return

else 	



 

 
