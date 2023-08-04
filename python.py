def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

def main():
    try:
        num = int(input("Enter a Number: "))
        if num < 0:
            raise ValueError("Factorial is not defined for negative numbers.")
        result = factorial(num)
        print(f"The factorial of {num} is: {result}")
    except ValueError as e:
        print("Error:", e)

if __name__ == "__main__":
    main()