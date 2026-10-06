numbers = [45, 12, 78, 34, 89, 23, 89, 56]
n = len(numbers)
for i in range(n):
    for j in range(0,n-i-1):
        if numbers[j] > numbers[j+1]:
            numbers[j], numbers[j+1] = numbers[j+1], numbers[j]
print("Second Largest Number : ",numbers[-3])