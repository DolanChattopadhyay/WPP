function remove_character(str, char_pos) {
    let part1 = str.substring(0, char_pos);
    let part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
}

console.log(remove_character("Python", 0));
console.log(remove_character("Python", 3));
console.log(remove_character("Python", 5));
