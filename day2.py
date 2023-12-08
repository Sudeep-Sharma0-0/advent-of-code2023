with open("day2.txt") as f:
    games = [line.strip() for line in f.readlines()]


possible_sum = 0
for game in games:
    game_name = game.split(":")[0]
    game = game.replace(f"{game_name}:", "").strip()

    sets = game.split(";")
    valid = True
    for set in sets:
        set = set.strip()
        colors = {name: int(count) for count, name in (
            color.strip().split() for color in set.split(","))}
        red, green, blue = colors.get('red', 0), colors.get(
            'green', 0), colors.get('blue', 0)

        if red > 12 or green > 13 or blue > 14:
            valid = False
            break

    if valid:
        possible_sum += int(game_name.split(" ")[1])

print(possible_sum)


power = 0
for game in games:
    game = game.strip()
    game_name = game.split(":")[0]
    game = game.replace(f"{game_name}:", "").strip()

    sets = game.split(";")
    valid = True
    red, green, blue = 0, 0, 0
    for set in sets:
        set = set.strip()
        colors = set.split(",")
        for color in colors:
            color = color.strip()
            count, name = color.split(" ")

            if name == "red":
                if int(count) > red:
                    red = int(count)
            elif name == "green":
                if int(count) > green:
                    green = int(count)
            elif name == "blue":
                if int(count) > blue:
                    blue = int(count)
    power += int(red) * int(green) * int(blue)

print(power)
