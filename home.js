/// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Set up tree counter horizontal scrolling
    setupTreeCounter();
    
    // Set up scroll triggers for sections
    setupScrollTriggers();
    
    // Set up charity carousel
    setupCharityCarousel();
    
    // Update active navigation link
    updateActiveNavLink();
    
    // Add click event for Donate Now button
    document.querySelector('.donate-now-button')?.addEventListener('click', function() {
        window.location.href = 'donate.html';
    });
    
    // Add click event for Plant Tree button
    document.querySelector('.plant-tree-button')?.addEventListener('click', function() {
        window.location.href = 'donate.html';
    });
});

/**
 * Sets up the auto-scrolling tree counter section
 */
function setupTreeCounter() {
    const treeCounterSection = document.querySelector('.tree-counter');
    if (!treeCounterSection) return;
    
    // Clear existing content
    treeCounterSection.innerHTML = '';
    
    // Create container for scrolling content
    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'scroll-container';
    
    // Define statistics to display
    const stats = [
        '60,532 Trees Planted Through Community Donation',
        '170,234 Items Donated',
        'Php 1.2M Total Monetary Donations',
        '12,543 Families Supported',
        '432,137 Individuals Helped'
    ];
    
    // Create scrolling content
    const scrollContent = document.createElement('div');
    scrollContent.className = 'scroll-content';
    
    // Add stats twice for seamless looping
    [...stats, ...stats].forEach(stat => {
        const statSpan = document.createElement('span');
        statSpan.textContent = stat;
        statSpan.style.cssText = `
            margin-right: 195px;
            font-size: 24px;
            flex-shrink: 0;
        `;
        scrollContent.appendChild(statSpan);
    });
    
    // Calculate animation parameters
    const statWidth = 400;
    const totalWidth = stats.length * statWidth;
    
    // Add CSS animation
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes scrollText {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${totalWidth}px); }
        }
        .scroll-container {
            white-space: nowrap;
            overflow: hidden;
            position: relative;
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
        }
        .scroll-content {
            display: inline-flex;
            animation: scrollText 15s linear infinite;
            position: relative;
            left: calc(50% - 200px);
        }
    `;
    document.head.appendChild(styleSheet);
    
    // Build DOM structure
    scrollContainer.appendChild(scrollContent);
    treeCounterSection.appendChild(scrollContainer);
}

/**
 * Sets up scroll triggers for sections
 */
function setupScrollTriggers() {
    const sections = document.querySelectorAll('.section-reveal');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight * 0.9 &&
            rect.bottom >= 0
        );
    }
    
    function handleScroll() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 300);
    window.addEventListener('load', handleScroll);
}

/**
 * Sets up charity carousel functionality
 */
function setupCharityCarousel() {
    const carousel = document.querySelector('.charity-carousel');
    if (!carousel) return;
    
    const prevButton = document.querySelector('.pagination-button.prev');
    const nextButton = document.querySelector('.pagination-button.next');
    const grids = document.querySelectorAll('.charity-grid');
    
    let currentIndex = 0;
    const totalGrids = grids.length;
    
    function showGrid(index) {
        grids.forEach((grid, i) => {
            grid.style.display = i === index ? 'flex' : 'none';
        });
        
        // Update button states
        prevButton.disabled = index === 0;
        nextButton.disabled = index === totalGrids - 1;
    }
    
    // Initialize
    showGrid(currentIndex);
    
    // Event listeners for pagination buttons
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showGrid(currentIndex);
        }
    });
    
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalGrids - 1) {
            currentIndex++;
            showGrid(currentIndex);
        }
    });
}

/**
 * Updates active navigation link
 */
function updateActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'home.html';
    const navLinks = document.querySelectorAll('.sidebar-navigation a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath === linkPath) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });
}
/**
 * Sets up the auto-scrolling tree counter section
 */
function setupTreeCounter() {
    const treeCounterSection = document.querySelector('.tree-counter');
    if (!treeCounterSection) return;
    
    // Clear existing content
    treeCounterSection.innerHTML = '';
    
    // Create container for scrolling content
    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'scroll-container';
    
    // Define statistics to display
    const stats = [
        '60,532 Trees Planted Through Community Donation',
        '170,234 Items Donated',
        'Php 1.2M Total Monetary Donations',
        '12,543 Families Supported',
        '432,137 Individuals Helped'
    ];
    
    // Create scrolling content
    const scrollContent = document.createElement('div');
    scrollContent.className = 'scroll-content';
    
    // Add stats twice for seamless looping
    [...stats, ...stats].forEach(stat => {
        const statSpan = document.createElement('span');
        statSpan.textContent = stat;
        statSpan.style.cssText = `
            margin-right: 195px;
            font-size: 24px;
            flex-shrink: 0;
        `;
        scrollContent.appendChild(statSpan);
    });
    
    // Calculate animation parameters
    const statWidth = 400;
    const totalWidth = stats.length * statWidth;
    
    // Add CSS animation
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes scrollText {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${totalWidth}px); }
        }
        .scroll-container {
            white-space: nowrap;
            overflow: hidden;
            position: relative;
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
        }
        .scroll-content {
            display: inline-flex;
            animation: scrollText 15s linear infinite;
            position: relative;
            left: calc(50% - 200px);
        }
    `;
    document.head.appendChild(styleSheet);
    
    // Build DOM structure
    scrollContainer.appendChild(scrollContent);
    treeCounterSection.appendChild(scrollContainer);
}

/**
 * Sets up scroll triggers for sections
 */
function setupScrollTriggers() {
    const sections = document.querySelectorAll('.section-reveal');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight * 0.9 &&
            rect.bottom >= 0
        );
    }
    
    function handleScroll() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 300);
    window.addEventListener('load', handleScroll);
}

/**
 * Sets up charity carousel functionality
 */
function setupCharityCarousel() {
    const carousel = document.querySelector('.charity-carousel');
    if (!carousel) return;
    
    const prevButton = document.querySelector('.pagination-button.prev');
    const nextButton = document.querySelector('.pagination-button.next');
    const grids = document.querySelectorAll('.charity-grid');
    
    let currentIndex = 0;
    const totalGrids = grids.length;
    
    function showGrid(index) {
        grids.forEach((grid, i) => {
            grid.style.display = i === index ? 'flex' : 'none';
        });
        prevButton.disabled = index === 0;
        nextButton.disabled = index === totalGrids - 1;
    }
    
    showGrid(currentIndex);
    
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showGrid(currentIndex);
        }
    });
    
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalGrids - 1) {
            currentIndex++;
            showGrid(currentIndex);
        }
    });
}

/**
 * Updates active navigation link
 */
function updateActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'home.html';
    const navLinks = document.querySelectorAll('.sidebar-navigation a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath === linkPath) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });
}
    // Set up charity carousel
function setupCharityCarousel() {
    const carousel = document.querySelector('.charity-carousel');
    const prevButton = document.querySelector('.pagination-button.prev');
    const nextButton = document.querySelector('.pagination-button.next');
    const grids = document.querySelectorAll('.charity-grid');
    
    let currentIndex = 0;
    const totalGrids = grids.length;
    
    // Function to show a specific grid
    function showGrid(index) {
        grids.forEach((grid, i) => {
            grid.style.display = i === index ? 'flex' : 'none';
        });
        
        // Update button states
        prevButton.disabled = index === 0;
        nextButton.disabled = index === totalGrids - 1;
    }
    
    // Initialize
    showGrid(currentIndex);
    
    // Event listeners for pagination buttons
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showGrid(currentIndex);
        }
    });
    
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalGrids - 1) {
            currentIndex++;
            showGrid(currentIndex);
        }
    });
}
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
    
    // Initially set all sections to be invisible
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Create a function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
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
    
    // Trigger once on page load to show visible sections
    setTimeout(handleScroll, 300); // Increased delay to ensure proper calculation
    
    // Check again after all content has loaded
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

// common.js - Shared JavaScript across all pages

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Set up scroll triggers for sections
    setupScrollTriggers();
    
    // Update active navigation link based on current page
    updateActiveNavLink();
});

/**
 * Sets up the scroll triggers for each section
 */
function setupScrollTriggers() {
    // Get all sections that should be triggered by scroll
    const sections = document.querySelectorAll('.section');
    
    // Create a function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll events
    function handleScroll() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('active');
            }
        });
    }
    
    // Set up scroll event listener with throttling
    let isScrolling;
    window.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(handleScroll, 50);
    }, false);
    
    // Trigger once on page load to show visible sections
    setTimeout(handleScroll, 300);
    
    // Check again after all content has loaded
    window.addEventListener('load', handleScroll);
}

/**
 * Updates the active navigation link based on current page
 */
function updateActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.sidebar-navigation a');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath === linkPath) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });
}