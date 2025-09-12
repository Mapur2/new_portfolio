// Modern Loading Animation (only if loading screen exists)
const main = document.querySelector("main");
const load = document.getElementById("load");

if (load) {
    load.style.display = "flex";
    load.classList.add("loader-text");

var i = 0;
var txt = '<RUPAM/>';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
            const loaderText = load.querySelector('.loader-text');
            if (loaderText) {
                loaderText.innerText += txt.charAt(i);
            }
    i++;
    setTimeout(typeWriter, speed);
  }
}

    typeWriter();

    setTimeout(() => {
        load.style.display = "none";
    }, 2000);
}

// Modern Navigation and Scroll Effects
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.about, .skills, .experience, .projects, .contact, .project-card, .timeline-item, .skill-category');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Modern Mobile Menu with smooth animations
var t = 1;
let menu = document.getElementById('menu');
let menu2 = document.getElementById("menu2");

if (menu && menu2) {
    menu.addEventListener("click", function() {
        console.log("click");
        if (t == 1) {
            menu.classList = "fa-solid fa-x fa-xl nav-toggle";
            t = 0;
            menu.style.transform = "rotate(180deg)";
            menu.style.transition = "transform 0.3s ease";
            menu2.style.display = "flex";
            menu2.style.animation = "slideInRight 0.3s ease forwards";
        } else {
            menu.classList = "fa-solid fa-bars fa-xl nav-toggle";
            t = 1;
            menu2.style.animation = "slideOutRight 0.3s ease forwards";
            setTimeout(() => {
                menu2.style.display = "none";
            }, 300);
            menu.style.transform = "rotate(0deg)";
            menu.style.transition = "transform 0.3s ease";
        }
    });
}

// Add CSS animations for mobile menu
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        background: rgba(102, 126, 234, 0.2);
        color: #667eea;
    }
`;
document.head.appendChild(style);

// Date functionality
const date = document.getElementById("date");
function getDate() {
    const yr = new Date().getFullYear();
    if (date) {
        date.innerText = yr;
    }
}
getDate();

// Modern Modal with smooth animations
function openModal() {
    const modal = document.getElementById("resumeModal");
    if (modal) {
        modal.style.display = "flex";
        modal.style.opacity = "0";
        modal.style.transform = "scale(0.8)";
        
        // Animate modal in
        setTimeout(() => {
            modal.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            modal.style.opacity = "1";
            modal.style.transform = "scale(1)";
        }, 10);
    }
}

function closeModal() {
    const modal = document.getElementById("resumeModal");
    if (modal) {
        modal.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        modal.style.opacity = "0";
        modal.style.transform = "scale(0.8)";
        
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById("resumeModal");
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Typing animation for hero subtitle
function initTypingAnimation() {
    const typingTexts = document.querySelectorAll('.typing-text');
    let currentIndex = 0;
    
    function typeText() {
        const currentText = typingTexts[currentIndex];
        const text = currentText.textContent;
        currentText.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                currentText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    eraseText();
                }, 2000);
            }
        }, 100);
    }
    
    function eraseText() {
        const currentText = typingTexts[currentIndex];
        const text = currentText.textContent;
        
        let i = text.length;
        const eraseInterval = setInterval(() => {
            if (i > 0) {
                currentText.textContent = text.substring(0, i - 1);
                i--;
            } else {
                clearInterval(eraseInterval);
                currentIndex = (currentIndex + 1) % typingTexts.length;
                setTimeout(() => {
                    typeText();
                }, 500);
            }
        }, 50);
    }
    
    if (typingTexts.length > 0) {
        typeText();
    }
}

// Initialize typing animation when DOM is loaded
document.addEventListener('DOMContentLoaded', initTypingAnimation);

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effects to project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Smooth reveal animation for stats
function animateStats() {
    const stats = document.querySelectorAll('.stat h4');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                let currentValue = 0;
                const increment = finalValue / 50;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        target.textContent = finalValue + '+';
                        clearInterval(counter);
                    } else {
                        target.textContent = Math.floor(currentValue) + '+';
                    }
                }, 30);
                
                observer.unobserve(target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

document.addEventListener('DOMContentLoaded', animateStats);

// Live Updates from GitHub and LeetCode
class LiveStats {
    constructor() {
        this.githubUsername = 'Mapur2'; // Replace with your GitHub username
        this.leetcodeUsername = 'rupam_modak'; // Replace with your LeetCode username
        this.init();
    }

    async init() {
        try {
            await Promise.all([
                this.fetchGitHubStats(),
                this.fetchLeetCodeStats(),
                this.loadGitHubCalendar(),
                this.loadLeetCodeCalendar()
            ]);
        } catch (error) {
            console.error('Error loading live stats:', error);
            this.showErrorState();
        }
    }

    async fetchGitHubStats() {
        try {
            // Fetch user data
            const userResponse = await fetch(`https://api.github.com/users/${this.githubUsername}`);
            
            if (!userResponse.ok) {
                throw new Error(`GitHub API error: ${userResponse.status}`);
            }
            
            const userData = await userResponse.json();

            // Fetch repositories
            const reposResponse = await fetch(`https://api.github.com/users/${this.githubUsername}/repos?per_page=100`);
            
            if (!reposResponse.ok) {
                throw new Error(`GitHub Repos API error: ${reposResponse.status}`);
            }
            
            const reposData = await reposResponse.json();

            // Calculate total stars
            const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);

            // Update DOM
            document.getElementById('github-repos').textContent = userData.public_repos || reposData.length;
            document.getElementById('github-stars').textContent = `${totalStars} stars`;

            // Fetch contribution data (this is a simplified version)
            this.fetchGitHubContributions();

        } catch (error) {
            console.error('Error fetching GitHub stats:', error);
            
            // Set fallback values
            this.setErrorValue('github-repos', 'N/A');
            this.setErrorValue('github-stars', 'N/A');
            
            // Try to fetch contributions anyway
            this.fetchGitHubContributions();
        }
    }

    async fetchGitHubContributions() {
        try {
            // Using a more reliable GitHub contributions API
            const response = await fetch(`https://github-contributions-api.vercel.app/${this.githubUsername}`);
            const data = await response.json();
            
            if (data && data.contributions) {
                // Calculate total contributions for current year
                const currentYear = new Date().getFullYear();
                let totalContributions = 0;
                let currentStreak = 0;
                
                // Find current year data
                const yearData = data.contributions.find(year => year.year === currentYear);
                
                if (yearData) {
                    // Calculate total contributions for current year
                    totalContributions = yearData.contributionDays.reduce((sum, day) => sum + day.contributionCount, 0);
                    
                    // Calculate current streak (consecutive days with contributions)
                    const today = new Date();
                    const todayIndex = yearData.contributionDays.findIndex(day => {
                        const dayDate = new Date(day.date);
                        return dayDate.toDateString() === today.toDateString();
                    });
                    
                    if (todayIndex !== -1) {
                        // Count backwards from today
                        for (let i = todayIndex; i >= 0; i--) {
                            if (yearData.contributionDays[i].contributionCount > 0) {
                                currentStreak++;
                            } else {
                                break;
                            }
                        }
                    }
                }

                document.getElementById('github-contributions').textContent = totalContributions;
                document.getElementById('github-streak').textContent = `${currentStreak} day streak`;
                
            } else {
                throw new Error('Invalid data structure received');
            }
        } catch (error) {
            console.error('Error fetching GitHub contributions:', error);
            
            // Fallback: Use a simpler approach with GitHub's public events
            try {
                const eventsResponse = await fetch(`https://api.github.com/users/${this.githubUsername}/events/public?per_page=100`);
                const eventsData = await eventsResponse.json();
                
                // Count contributions from events (simplified)
                const currentYear = new Date().getFullYear();
                const yearContributions = eventsData.filter(event => {
                    const eventDate = new Date(event.created_at);
                    return eventDate.getFullYear() === currentYear;
                }).length;
                
                document.getElementById('github-contributions').textContent = yearContributions;
                document.getElementById('github-streak').textContent = 'Active contributor';
                
            } catch (fallbackError) {
                console.error('Fallback also failed:', fallbackError);
                this.setErrorValue('github-contributions', 'N/A');
                this.setErrorValue('github-streak', 'N/A');
            }
        }
    }

    async fetchLeetCodeStats() {
        try {
            // Using the LeetCode API from faisalshohag
            const response = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${this.leetcodeUsername}`);
            const data = await response.json();

            if (data && data.totalSolved !== undefined) {
                // Calculate acceptance rate
                const totalSubmissions = data.matchedUserStats?.acSubmissionNum?.[0]?.submissions || 0;
                const totalAttempts = data.matchedUserStats?.totalSubmissionNum?.[0]?.submissions || 0;
                const acceptanceRate = totalAttempts > 0 ? ((totalSubmissions / totalAttempts) * 100).toFixed(1) : 0;

                // Update DOM with real LeetCode data
                document.getElementById('leetcode-solved').textContent = data.totalSolved;
                document.getElementById('leetcode-rank').textContent = `#${data.ranking.toLocaleString()}`;
                document.getElementById('leetcode-contest').textContent = data.contributionPoint || 'N/A';
                document.getElementById('leetcode-acceptance').textContent = `${acceptanceRate}%`;

                // Update pie chart data
                document.getElementById('easy-count').textContent = data.easySolved;
                document.getElementById('medium-count').textContent = data.mediumSolved;
                document.getElementById('hard-count').textContent = data.hardSolved;

                // Update achievement badges
                document.getElementById('problems-achievement').textContent = `${data.totalSolved} solved`;
                document.getElementById('rating-achievement').textContent = `${data.contributionPoint || 0} points`;

                // Update skills progress bars
                this.updateSkillsProgress(data);

                // Log the data for debugging
                console.log('LeetCode Stats Loaded:', {
                    totalSolved: data.totalSolved,
                    ranking: data.ranking,
                    contributionPoint: data.contributionPoint,
                    acceptanceRate: acceptanceRate,
                    easySolved: data.easySolved,
                    mediumSolved: data.mediumSolved,
                    hardSolved: data.hardSolved
                });

            } else {
                throw new Error('Invalid data received from LeetCode API');
            }

        } catch (error) {
            console.error('Error fetching LeetCode stats:', error);
            
            // Fallback to mock data if API fails
            const fallbackData = {
                solved: 389,
                rank: 255650,
                contestRating: 2623,
                acceptanceRate: 36.4 // Calculated from the API data
            };

            document.getElementById('leetcode-solved').textContent = fallbackData.solved;
            document.getElementById('leetcode-rank').textContent = `#${fallbackData.rank.toLocaleString()} rank`;
            document.getElementById('leetcode-contest').textContent = fallbackData.contestRating;
            document.getElementById('leetcode-acceptance').textContent = `${fallbackData.acceptanceRate}% acceptance`;
            
            // Show error indicator
            console.warn('Using fallback LeetCode data due to API error');
        }
    }

    async loadGitHubCalendar() {
        try {
            const calendarContainer = document.getElementById('github-calendar');
            
            // Create GitHub calendar using multiple reliable sources
            const calendarHTML = `
                <div class="calendar-wrapper">
                    <img src="https://ghchart.rshah.org/${this.githubUsername}" 
                         alt="GitHub Contributions Chart" 
                         style="max-width: 100%; height: auto; border-radius: 10px;"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <div style="display: none; color: rgba(255,255,255,0.7);">
                        <i class="fab fa-github" style="font-size: 3rem; margin-bottom: 20px;"></i>
                        <p>GitHub activity chart unavailable</p>
                        <p>Visit <a href="https://github.com/${this.githubUsername}" target="_blank" style="color: #667eea;">my GitHub profile</a></p>
                    </div>
                </div>
            `;
            
            calendarContainer.innerHTML = calendarHTML;
            
        } catch (error) {
            console.error('Error loading GitHub calendar:', error);
            document.getElementById('github-calendar').innerHTML = `
                <div style="color: rgba(255,255,255,0.7); text-align: center;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 15px;"></i>
                    <p>Unable to load GitHub activity</p>
                    <p>Visit <a href="https://github.com/${this.githubUsername}" target="_blank" style="color: #667eea;">my GitHub profile</a> to see activity</p>
                </div>
            `;
        }
    }

    async loadLeetCodeCalendar() {
        try {
            const response = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${this.leetcodeUsername}`);
            const data = await response.json();
            
            if (data && data.submissionCalendar) {
                // Create a simple visualization of LeetCode activity
                const calendarData = data.submissionCalendar;
                const currentYear = new Date().getFullYear();
                const startOfYear = new Date(currentYear, 0, 1).getTime() / 1000;
                
                // Count submissions for current year
                let yearSubmissions = 0;
                Object.keys(calendarData).forEach(timestamp => {
                    if (parseInt(timestamp) >= startOfYear) {
                        yearSubmissions += calendarData[timestamp];
                    }
                });
                
                // Create a simple activity indicator
                const activityHTML = `
                    <div class="leetcode-activity">
                        <div class="activity-stats">
                            <div class="activity-item">
                                <h4>${yearSubmissions}</h4>
                                <p>Submissions This Year</p>
                            </div>
                            <div class="activity-item">
                                <h4>${data.easySolved + data.mediumSolved + data.hardSolved}</h4>
                                <p>Problems Solved</p>
                            </div>
                        </div>
                        <div class="activity-breakdown">
                            <div class="difficulty-stat">
                                <span class="difficulty easy">Easy: ${data.easySolved}</span>
                                <span class="difficulty medium">Medium: ${data.mediumSolved}</span>
                                <span class="difficulty hard">Hard: ${data.hardSolved}</span>
                            </div>
                        </div>
                    </div>
                `;
                
                // Add LeetCode calendar to the page
                const leetcodeCalendarContainer = document.createElement('div');
                leetcodeCalendarContainer.className = 'leetcode-calendar-container';
                leetcodeCalendarContainer.innerHTML = `
                    <h3>LeetCode Activity</h3>
                    <div class="leetcode-calendar">
                        ${activityHTML}
                    </div>
                `;
                
                // Insert after GitHub calendar
                const githubContainer = document.querySelector('.github-calendar-container');
                if (githubContainer) {
                    githubContainer.parentNode.insertBefore(leetcodeCalendarContainer, githubContainer.nextSibling);
                }
            }
        } catch (error) {
            console.error('Error loading LeetCode calendar:', error);
        }
    }

    setErrorValue(elementId, value) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = value;
            element.style.color = 'rgba(255, 255, 255, 0.5)';
        }
    }

    showErrorState() {
        const errorMessage = `
            <div style="color: rgba(255,255,255,0.7); text-align: center; padding: 40px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 20px; color: #ff6b6b;"></i>
                <h3>Unable to load live stats</h3>
                <p>Please check your internet connection and try refreshing the page.</p>
            </div>
        `;
        
        document.querySelector('.stats-grid').innerHTML = errorMessage;
    }

    // Method to refresh stats manually
    async refreshStats() {
        const refreshButton = document.createElement('button');
        refreshButton.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh Stats';
        refreshButton.className = 'btn btn-secondary';
        refreshButton.style.marginTop = '20px';
        refreshButton.onclick = () => {
            refreshButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
            refreshButton.disabled = true;
            this.init().then(() => {
                refreshButton.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh Stats';
                refreshButton.disabled = false;
            });
        };
        
        document.querySelector('.live-stats .container').appendChild(refreshButton);
    }

    updateSkillsProgress(data) {
        // Calculate skill percentages based on LeetCode data
        const totalProblems = data.totalSolved;
        const easyProblems = data.easySolved;
        const mediumProblems = data.mediumSolved;
        const hardProblems = data.hardSolved;

        // Problem Solving: Based on total problems solved
        const problemSolvingPct = Math.min(85, (totalProblems / 200) * 100);
        
        // Algorithm Design: Based on medium + hard problems
        const algorithmPct = Math.min(75, ((mediumProblems + hardProblems) / 100) * 100);
        
        // Code Quality: Based on acceptance rate
        const totalSubmissions = data.matchedUserStats?.acSubmissionNum?.[0]?.submissions || 0;
        const totalAttempts = data.matchedUserStats?.totalSubmissionNum?.[0]?.submissions || 0;
        const acceptanceRate = totalAttempts > 0 ? (totalSubmissions / totalAttempts) * 100 : 0;
        const qualityPct = Math.min(90, acceptanceRate);
        
        // Consistency: Based on streak and regular activity
        const consistencyPct = Math.min(80, (totalProblems / 150) * 100);

        // Update progress bars
        const problemSolvingBar = document.getElementById('problem-solving-bar');
        const algorithmBar = document.getElementById('algorithm-bar');
        const qualityBar = document.getElementById('quality-bar');
        const consistencyBar = document.getElementById('consistency-bar');

        if (problemSolvingBar) problemSolvingBar.style.width = `${problemSolvingPct}%`;
        if (algorithmBar) algorithmBar.style.width = `${algorithmPct}%`;
        if (qualityBar) qualityBar.style.width = `${qualityPct}%`;
        if (consistencyBar) consistencyBar.style.width = `${consistencyPct}%`;

        // Update percentages
        const problemSolvingPctEl = document.getElementById('problem-solving-pct');
        const algorithmPctEl = document.getElementById('algorithm-pct');
        const qualityPctEl = document.getElementById('quality-pct');
        const consistencyPctEl = document.getElementById('consistency-pct');

        if (problemSolvingPctEl) problemSolvingPctEl.textContent = `${Math.round(problemSolvingPct)}%`;
        if (algorithmPctEl) algorithmPctEl.textContent = `${Math.round(algorithmPct)}%`;
        if (qualityPctEl) qualityPctEl.textContent = `${Math.round(qualityPct)}%`;
        if (consistencyPctEl) consistencyPctEl.textContent = `${Math.round(consistencyPct)}%`;
    }

    updatePieChart(data) {
        const total = data.totalSolved;
        const easyPercent = (data.easySolved / total) * 100;
        const mediumPercent = (data.mediumSolved / total) * 100;
        const hardPercent = (data.hardSolved / total) * 100;

        // Update pie chart background
        const pieChart = document.querySelector('.pie-chart');
        if (pieChart) {
            pieChart.style.background = `conic-gradient(
                #4caf50 0deg ${easyPercent * 3.6}deg,
                #ffc107 ${easyPercent * 3.6}deg ${(easyPercent + mediumPercent) * 3.6}deg,
                #f44336 ${(easyPercent + mediumPercent) * 3.6}deg 360deg
            )`;

            // Center total
            const pieTotal = document.getElementById('pie-total');
            if (pieTotal) pieTotal.textContent = total;

            // Move counts to legend
            const easyEl = document.getElementById('easy-count');
            const medEl = document.getElementById('medium-count');
            const hardEl = document.getElementById('hard-count');
            if (easyEl) easyEl.textContent = data.easySolved;
            if (medEl) medEl.textContent = data.mediumSolved;
            if (hardEl) hardEl.textContent = data.hardSolved;
        }
    }

    updateTimelineChart(data) {
        const timelinePoints = document.getElementById('timeline-points');
        if (!timelinePoints) return;

        // Generate timeline points based on submission calendar
        const submissionData = data.submissionCalendar;
        
        timelinePoints.innerHTML = '';
        
        // Create 6 timeline points representing different months
        for (let i = 0; i < 6; i++) {
            const point = document.createElement('div');
            point.className = 'timeline-point';
            
            // Calculate submissions for this month (mock data for demonstration)
            const submissions = Math.floor(Math.random() * 50) + 10;
            point.setAttribute('data-value', `${submissions} submissions`);
            
            timelinePoints.appendChild(point);
        }

        // Update timeline stats
        const totalSubmissions = Object.values(submissionData).reduce((sum, count) => sum + count, 0);
        const timelineLeetcode = document.getElementById('timeline-leetcode');
        const timelineGithub = document.getElementById('timeline-github');
        
        if (timelineLeetcode) timelineLeetcode.textContent = totalSubmissions;
        if (timelineGithub) timelineGithub.textContent = Math.floor(totalSubmissions * 0.8); // Mock GitHub data
    }
}

// Initialize live stats when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add a small delay to ensure all elements are rendered
    setTimeout(() => {
        new LiveStats();
    }, 1000);
});

// Chatbot functionality
class Chatbot {
    constructor() {
        this.apiEndpoint = 'https://new-portfolio-72m9.onrender.com';
        this.isOpen = false;
        this.isLoading = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.hideDemoQuestions();
    }

    setupEventListeners() {
        // Enter key support for input
        const input = document.getElementById('chatbotInput');
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }
    }

    toggle() {
        const container = document.getElementById('chatbotContainer');
        const toggle = document.getElementById('chatbotToggle');
        
        if (!container || !toggle) return;

        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            container.classList.add('active');
            toggle.classList.add('hidden');
            // Focus on input when opened
            setTimeout(() => {
                const input = document.getElementById('chatbotInput');
                if (input) input.focus();
            }, 300);
        } else {
            container.classList.remove('active');
            toggle.classList.remove('hidden');
        }
    }

    hideDemoQuestions() {
        const demoQuestions = document.querySelector('.demo-questions');
        if (demoQuestions) {
            demoQuestions.style.display = 'none';
        }
    }

    showDemoQuestions() {
        const demoQuestions = document.querySelector('.demo-questions');
        if (demoQuestions) {
            demoQuestions.style.display = 'block';
        }
    }

    addMessage(content, isUser = false) {
        const messagesContainer = document.getElementById('chatbotMessages');
        if (!messagesContainer) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = isUser ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = `<p>${content}</p>`;

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);

        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbotMessages');
        if (!messagesContainer) return;

        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-message';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="typing-indicator">
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;

        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    hideTypingIndicator() {
        const typingMessage = document.querySelector('.typing-message');
        if (typingMessage) {
            typingMessage.remove();
        }
    }

    async sendMessage(message = null) {
        if (this.isLoading) return;

        const input = document.getElementById('chatbotInput');
        const sendButton = document.querySelector('.chatbot-send');
        
        if (!input && !message) return;

        const messageText = message || input.value.trim();
        if (!messageText) return;

        // Clear input if not a demo question
        if (!message && input) {
            input.value = '';
        }

        // Disable input and send button
        this.isLoading = true;
        if (input) input.disabled = true;
        if (sendButton) sendButton.disabled = true;

        // Add user message
        this.addMessage(messageText, true);

        // Hide demo questions after first interaction
        this.hideDemoQuestions();

        // Show typing indicator
        this.showTypingIndicator();

        try {
            const response = await fetch(this.apiEndpoint+"/api/chat", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: messageText
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            // Hide typing indicator
            this.hideTypingIndicator();

            // Add bot response
            if (data.response) {
                this.addMessage(data.response);
            } else {
                this.addMessage('Sorry, I couldn\'t process your request. Please try again.');
            }

        } catch (error) {
            console.error('Chatbot API Error:', error);
            
            // Hide typing indicator
            this.hideTypingIndicator();

            // Show error message
            this.addMessage('Sorry, I\'m having trouble connecting right now. Please try again later.');
        } finally {
            // Re-enable input and send button
            this.isLoading = false;
            if (input) input.disabled = false;
            if (sendButton) sendButton.disabled = false;
            
            // Focus back on input
            if (input) input.focus();
        }
    }

    sendDemoQuestion(question) {
        this.sendMessage(question);
    }
}

// Initialize chatbot
let chatbot;

document.addEventListener('DOMContentLoaded', () => {
    chatbot = new Chatbot();
});

// Global functions for HTML onclick events
function toggleChatbot() {
    if (chatbot) {
        chatbot.toggle();
    }
}

function sendMessage() {
    if (chatbot) {
        chatbot.sendMessage();
    }
}

function sendDemoQuestion(question) {
    if (chatbot) {
        chatbot.sendDemoQuestion(question);
    }
}

// Alternative LeetCode API implementation using web scraping
class LeetCodeAPI {
    constructor(username) {
        this.username = username;
    }

    async getStats() {
        try {
            // This would require a backend service to scrape LeetCode
            // since LeetCode doesn't provide a public API
            const response = await fetch(`/api/leetcode/${this.username}`);
            return await response.json();
        } catch (error) {
            console.error('LeetCode API error:', error);
            return null;
        }
    }
}

// GitHub API helper functions
class GitHubAPI {
    constructor(username) {
        this.username = username;
        this.baseURL = 'https://api.github.com';
    }

    async getUserStats() {
        try {
            const [user, repos, events] = await Promise.all([
                fetch(`${this.baseURL}/users/${this.username}`).then(r => r.json()),
                fetch(`${this.baseURL}/users/${this.username}/repos?per_page=100`).then(r => r.json()),
                fetch(`${this.baseURL}/users/${this.username}/events/public?per_page=100`).then(r => r.json())
            ]);

            return {
                publicRepos: user.public_repos,
                followers: user.followers,
                following: user.following,
                totalStars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
                totalForks: repos.reduce((sum, repo) => sum + repo.forks_count, 0),
                recentActivity: events.slice(0, 10)
            };
        } catch (error) {
            console.error('GitHub API error:', error);
            return null;
        }
    }
}