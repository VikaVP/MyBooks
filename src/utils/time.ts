const convertDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const today: Date  = new Date(date);

    return today.toLocaleDateString("en-US", options);
}

export { convertDate };