function createRating (value, ideal, range) {
    const difference = Math.abs(value - ideal);

    if (difference > range)
        return 0

    const ratioFromIdeal = difference / range;
    return (1 - ratioFromIdeal) * 10;
}

export default createRating;