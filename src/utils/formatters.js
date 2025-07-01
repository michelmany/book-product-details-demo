/**
 * Formats an array of contributors into a readable string
 * @param {Array} contributors - Array of contributor objects
 * @returns {string} Formatted string of contributor names
 */
export const formatContributors = (contributors) => {
    if (!contributors || contributors.length === 0) {
        return '';
    }

    // Map through contributors to get their names
    const names = contributors.map(contributor => {
        // Handle the nested structure in the JSON
        return contributor.contributor?.name || contributor.name || 'Unknown';
    });

    // Format based on number of contributors
    if (names.length === 1) {
        return names[0];
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]}`;
    } else {
        // For 3+ contributors: "A, B, and C"
        const lastContributor = names.pop();
        return `${names.join(', ')}, and ${lastContributor}`;
    }
};


/**
 * Formats a date string into a readable format (Month Day, Year)
 * @param {string} dateString - The date string to format
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

/**
 * Formats a price with the appropriate currency symbol
 * @param {number|string} amount - The price amount
 * @param {string} locale - Currency locale code (USD, AUD, GBP)
 * @returns {string} Formatted price with currency symbol
 */
export const formatPrice = (amount, locale = 'USD') => {
    if (!amount) return '';

    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

    switch (locale) {
        case 'USD':
            return `$${numericAmount.toFixed(2)}`;
        case 'AUD':
            return `A$${numericAmount.toFixed(2)}`;
        case 'GBP':
            return `£${numericAmount.toFixed(2)}`;
        default:
            return `${numericAmount.toFixed(2)} ${locale}`;
    }
};
