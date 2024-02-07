board = [[0 for j in range(7)] for i in range(9)]
s_dict = {
    "r": 25,
    "g":5,
    "p":10,
    "b":0
}
r = 25
g = 5
p = 10
b = 0
start = tuple([4,3])
f = open("board.txt", "r")
for i in range(9):
    row = f.readline()[0:7]
    for j in range(7):
        board[i][j] = row[j]
def dfs(left, path, score):
    cur = path[len(path)-1]
    if cur[0] < 0 or cur[0] >= 9 or cur[1] < 0 or cur[1] >= 7:
        return None
    if left == 0:
        return [score, path]
    score += s_dict[board[cur[0]][cur[1]]]
    next = [tuple([cur[0]+1, cur[1]]),tuple([cur[0]-1, cur[1]]),tuple([cur[0], cur[1]+1]),tuple([cur[0], cur[1]-1])]
    results = []
    for coord in next:
        if coord not in path:
            eval = dfs(left-1, path + [coord], score)
            if eval != None:
                results.append(eval)
    if len(results) == 0:
        return None
    return max(results, key=lambda x: x[0])

opt_path = dfs(15, [start], 0)
simplified = []
print(opt_path)
for step in range(1, len(opt_path[1])):
    if opt_path[1][step][0] > opt_path[1][step-1][0]:
        simplified.append("down")
    elif opt_path[1][step][0] < opt_path[1][step-1][0]:
        simplified.append("up")
    elif opt_path[1][step][1] < opt_path[1][step-1][1]:
        simplified.append("left")
    else:
        simplified.append("right")
print(simplified)




