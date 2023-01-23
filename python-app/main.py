import calendar

print('Welcome to super calendar\n')

year = int(input('Enter year: '))
month = int(input('Enter month num: '))

print(calendar.month(year, month))
print('Goodbye')