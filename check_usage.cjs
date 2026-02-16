const fs = require('fs');

try {
    const content = fs.readFileSync('d:/NEW-WORLD-RUPEE/index.html', 'utf8');
    const lines = content.split('\n');

    const searchTerms = [
        'who-note',
        'trust-note',
        'toggleAccordion',
        '.learn-more',
        'learn-more-btn',
        'learn-more-dropdown'
    ];

    console.log("Checking usage in index.html...");

    const results = {};
    searchTerms.forEach(term => results[term] = 0);

    lines.forEach((line, index) => {
        searchTerms.forEach(term => {
            if (line.includes(term)) {
                console.log(`Found '${term}' at line ${index + 1}: ${line.trim().substring(0, 100)}...`);
                results[term]++;
            }
        });
    });

    console.log("\nSummary:");
    console.log(JSON.stringify(results, null, 2));

} catch (err) {
    console.error("Error:", err);
}
