#include<iostream>
#include<cstdio>
#include<math.h>

using namespace std;

double f(double x)
{
  return sin(x) - x*x;
}

int main()
{
  double a, b, c, eps;
  cout << "Podaj a: "; cin >> a;
  cout << "Podaj b: "; cin >> b;
  if (f(a)*f(b) >= 0)
  {
    cout << "Niew³aœciwe dane wejsciowe!\n";
    cin.ignore();
    getchar();
    return 0;
  }
  cout << "\nPodaj eps: "; cin >> eps;
  cout.precision(15);
  cout<<endl;
  while (b-a > eps)
  {
    c = (a+b)/2;
    if (f(a)*f(c)<0)
      // pierwiastek jest w podprzedziale (a;c)
      b = c;
    else
      // pierwiastek jest w podprzedziale (c;b)
      a = c;
    cout << "x = " << c << " +/- " << (b-a)/2 << endl;
  }
  cin.ignore();
  getchar();
  return 0;
}
