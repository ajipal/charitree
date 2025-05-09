// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Set up tree counter horizontal scrolling
    setupTreeCounter();
    
    // Set up scroll triggers for sections
    setupScrollTriggers();
    
    // Set up charity carousel
    setupCharityCarousel();
});

/**
 * Sets up the auto-scrolling tree counter section
 */
function setupTreeCounter() {
    const treeCounterSection = document.querySelector('.tree-counter');
    
    // Clear existing content
    treeCounterSection.innerHTML = '';
    
    // Create a container for scrolling content
    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'scroll-container';
    scrollContainer.style.cssText = `
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
    `;
    
    // Define the statistics to display
    const stats = [
        '60,532 Trees Planted Through Community Donation',
        '170,234 Items Donated',
        'Php 1.2M Total Monetary Donations',
        '12,543 Families Supported',
        '432,137 Individuals Helped'
    ];
    
    // Create two identical content elements for seamless scrolling
    const scrollContent = document.createElement('div');
    scrollContent.className = 'scroll-content';
    
    // Calculate approximate width of a statistic to center the first item
    const viewportWidth = window.innerWidth;
    const centerOffset = (viewportWidth / 2 - 200) + 'px'; // Approximate center position
    
    scrollContent.style.cssText = `
        display: inline-flex;
        animation: scrollText 15s linear infinite;
        position: relative;
        left: calc(50% - 200px); /* Start with first item centered */
    `;
    
    // Add the stats twice (for continuous scrolling) with spacing between them
    [...stats, ...stats].forEach((stat, index) => {
        const statSpan = document.createElement('span');
        statSpan.textContent = stat;
        statSpan.style.cssText = `
            margin-right: 195px;
            font-size: 24px;
            flex-shrink: 0;
        `;
        scrollContent.appendChild(statSpan);
    });
    
    // Calculate total width for animation
    const statWidth = 400; // Approximate width of each stat + margin
    const totalWidth = stats.length * statWidth;
    
    // Add CSS animation
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes scrollText {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${totalWidth}px); }
        }
    `;
    document.head.appendChild(styleSheet);
    
    // Build the DOM structure
    scrollContainer.appendChild(scrollContent);
    treeCounterSection.appendChild(scrollContainer);
}

/**
 * Sets up the scroll triggers for each section
 */
function setupScrollTriggers() {
    // Get all sections that should be triggered by scroll
    const sections = document.querySelectorAll('.section-reveal');
    
    // Create a function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll events
    function handleScroll() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set up scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Trigger once on load to show visible sections
    setTimeout(handleScroll, 100); // Small delay to ensure proper calculation
    
    // Check again after images might have loaded
    window.addEventListener('load', handleScroll);
}

/**
 * Sets up the charity carousel functionality
 */
function setupCharityCarousel() {
    const carousel = document.querySelector('.charity-carousel');
    const slide = document.querySelector('.charity-slide');
    const prevButton = document.querySelector('.pagination-button.prev');
    const nextButton = document.querySelector('.pagination-button.next');
    const grids = document.querySelectorAll('.charity-grid');
    
    let currentIndex = 0;
    
    // Initially hide all grids except the first one
    grids.forEach((grid, index) => {
        if (index !== 0) {
            grid.style.display = 'none';
        }
    });
    
    // Function to show a specific grid
    function showGrid(index) {
        grids.forEach((grid, i) => {
            grid.style.display = i === index ? 'flex' : 'none';
        });
    }
    
    // Event listeners for pagination buttons
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + grids.length) % grids.length;
        showGrid(currentIndex);
    });
    
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % grids.length;
        showGrid(currentIndex);
    });
    
}