const getHashTags = (s) => {
    let sArray = s.toLowerCase().split(" ");

    if (sArray.length <= 3) {
        sArray.forEach((element, index) => {
            sArray[index] = "#" + element;
        });
        return sArray;
    }

    let result = [];

    for (let i = 0; i < 3; i++) {
        let max = 0;
        let rmIndex;
        sArray.forEach((element, index) => {
            if (element.length > max) {
                max = element.length;
                rmIndex = index;
            }
        });
        result.push("#" + sArray[rmIndex]);
        sArray.splice(rmIndex, 1);
    }
    return result;
}

console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"));
console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"));
console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
console.log(getHashTags("Visualizing Science"));
