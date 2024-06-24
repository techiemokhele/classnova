export const generateSlug = (productName) => {
    return productName.toLowerCase().replace(/\s+/g, '-');
};

export const formatNumber = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K";
    } else {
        return num;
    }
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

export const formatDecimalNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
};