def two_sum(nums, t):
    for i, x in enumerate(nums):
        for j, y in enumerate(nums):
            if i != j and x + y == t:
                return [i, j]

def two_sum(numbers, target):
  list_index=[]
  for x in range(len(numbers)):
    for y in range(len(numbers)):
      if x != y and numbers[x]+numbers[y]==target:
            list_index.extend([x,y])
  return list(dict.fromkeys(list_index))
